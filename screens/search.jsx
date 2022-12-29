import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  RefreshControl,
  TouchableOpacity,
  Modal,
  Pressable,
  Switch,
} from "react-native";
import Card from "../components/card";
import ReqCard from "./request"
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../db/config";
import { TextInput } from "react-native-gesture-handler";
function SearchScreen({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [flatData, setFlatData] = useState();
  const [reqData, setReqData] = useState();
  const [typeSwitchOn, setTypeSwitchOn] = useState(false);

  const flatCollectionRef = collection(db, "flats");
  const requestCollectionRef = collection(db, "requests");
  const [modalVisible, setModalVisible] = useState(false);

  //Фильтры для квартир
  const [areaSwitchOn, setrAreaSwitchOn] = useState(false);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);

  //Фильтры для заявок
  const [roomSwitchOn, setRoomSwitchOn] = useState(false);


  useEffect(() => {
    getFlats();
    getReqs();
  }, []);

  const onTypeSwitch = () => {
    setTypeSwitchOn(!typeSwitchOn);
    console.log(typeSwitchOn);
  };

  const onRoomSwitch = () => {
    setRoomSwitchOn(!roomSwitchOn);
    console.log(roomSwitchOn);
  };

  const onAreaSwitch = () => {
    setrAreaSwitchOn(!areaSwitchOn);
    console.log(areaSwitchOn);
  };

  const getFlats = async () => {
    const data = await getDocs(flatCollectionRef);
    setFlatData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getReqs = async () => {
    const data = await getDocs(requestCollectionRef);
    setReqData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getFilteredFlats = async () => {
    let data;
    console.log(areaSwitchOn, priceFrom, priceTo);
    if (areaSwitchOn && (Number(priceFrom) == 0) && (Number(priceTo) == 0)) {
      console.log(1);
      data = await getDocs(query(flatCollectionRef, orderBy("area")));
    } else if (areaSwitchOn && (Number(priceFrom) > 0) && (Number(priceTo) > 0)) {
      console.log(2);
      data = await getDocs(
        query(
          flatCollectionRef,
          where("price", "in", [priceFrom, priceTo],
          orderBy("area")
          )
        )
      );
    } else if (
      areaSwitchOn == false &&
      Number(priceFrom) > 0 &&
      Number(priceTo) > 0
    ) {
      console.log(3);
      data = await getDocs(
        query(flatCollectionRef, where("price", "in", [priceFrom, priceTo]))
      );
    } else {
      console.log(4);
      data = await getDocs(query(flatCollectionRef, orderBy("area")));
    }
    setFlatData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const styles = StyleSheet.create({
    modal: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
      height: "100%",
    },
    modalView: {
      height: 325,
      width: 300,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    tiStyle: {
      height: 40,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 30,
      padding: 10,
      marginEnd: 10,
      width: 100,
    },
    filterText: {
      width: 100,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 30,
      elevation: 3,
      backgroundColor: "black",
      marginTop: 15,
      width: 200,
    },
    buttonBack: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 30,
      backgroundColor: "white",
      borderWidth: 2,
      marginTop: 15,
      width: 200,
    },
    filterBtn:{
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 5,
      paddingHorizontal:5,
      borderRadius: 30,
      backgroundColor: "white",
      borderWidth: 2,
      width: 200,
    },
  });
  
  if(!typeSwitchOn){
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text>Фильтры поиска:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                height={60}
                style={{}}
                value={areaSwitchOn}
                onValueChange={onAreaSwitch}
                trackColor={{ true: "red", false: "grey" }}
                thumbColor={"black"}
              />
              <Text style={styles.filterText}>Сотрировать по району</Text>
            </View>
            <Text>Стоимость:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="От"
                onChangeText={(value) => setPriceFrom(value)}
                style={styles.tiStyle}
              ></TextInput>
              <TextInput placeholder="До" 
               onChangeText={(value) => setPriceTo(value)}
               style={styles.tiStyle}></TextInput>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                getFilteredFlats();
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{ color: "white" }}
                onPress={() => {
                  getFilteredFlats();
                }}
              >
                Применить
              </Text>
            </Pressable>
            <Pressable
              style={styles.buttonBack}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={styles.buttonBackText}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                Закрыть
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text>tut budet filter</Text>
      </Pressable>
      <Button
        title="1"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      ></Button> */}
       <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                height={60}
                style={{}}
                value={typeSwitchOn}
                onValueChange={onTypeSwitch}
                trackColor={{ true: "red", false: "grey" }}
                thumbColor={"black"}
              />
              <Text style={styles.filterText}>Квартиры</Text>
              <Pressable
          style={styles.filterBtn}
          onPress={()=>{setModalVisible()}}
        >
          <Text>Фильтры</Text>
        </Pressable>

            </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={getFlats}
          ></RefreshControl>
        }
        data={flatData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FullFlat", { data: item });
            }}
          >
            <Card data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )}
  else {return(
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text>Фильтры поиска:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                height={60}
                style={{}}
                value={roomSwitchOn}
                onValueChange={onRoomSwitch}
                trackColor={{ true: "red", false: "grey" }}
                thumbColor={"black"}
              />
              <Text style={styles.filterText}>Сотрировать по количеству комнат</Text>
            </View>
            {/* <Text>Стоимость:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="От"
                onChangeText={(value) => setPriceFrom(value)}
                style={styles.tiStyle}
              ></TextInput>
              <TextInput placeholder="До" 
               onChangeText={(value) => setPriceTo(value)}
               style={styles.tiStyle}></TextInput>
            </View> */}
            <Pressable
              style={styles.button}
              onPress={() => {
                getFilteredFlats();
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{ color: "white" }}
                onPress={() => {
                  getFilteredFlats();
                }}
              >
                Применить
              </Text>
            </Pressable>
            <Pressable
              style={styles.buttonBack}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={styles.buttonBackText}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                Закрыть
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text>tut budet filter</Text>
      </Pressable>
      <Button
        title="1"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      ></Button> */}
       <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Switch
                height={60}
                style={{}}
                value={typeSwitchOn}
                onValueChange={onTypeSwitch}
                trackColor={{ true: "red", false: "grey" }}
                thumbColor={"black"}
              />
              <Text style={styles.filterText}>Заявки</Text>
              <Pressable
          style={styles.filterBtn}
          onPress={()=>{setModalVisible()}}
        >
          <Text>Фильтры</Text>
        </Pressable>

            </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={getReqs}
          ></RefreshControl>
        }
        data={reqData}
        renderItem={({ item }) => (
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("FullFlat", { data: item });
            // }}
          >
            <ReqCard data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
        }
}

export default SearchScreen;
