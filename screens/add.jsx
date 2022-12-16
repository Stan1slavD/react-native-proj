import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Pressable,
} from "react-native";
import Span from "../components/text";

import {collection, getDocs, addDoc} from "firebase/firestore"
import { db } from "../db/config";
import { async } from "@firebase/util";



function AddScreen() {

  const flatCollectionRef=collection(db,"flats");
  const requestCollectionRef=collection(db,"requests");

  const create =async ()=>{
    await addDoc(userCollectionRef,{id:"12",name:"2122"})
  }

  const createFlat=async ()=>{
    await addDoc(flatCollectionRef,{footage,rooms,area,street,house,floor,houseType,floorsNumber,price})
  }

  const createRequest=async ()=>{
    await addDoc(requestCollectionRef,{rooms,area,house,houseType})
  }


  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [footage, setFootage] = useState();
  const [rooms, setRooms] = useState();
  const [area, setArea] = useState();
  const [street, setStreet] = useState();
  const [house, setHouse] = useState();
  const [floor, setFloor] = useState();
  const [houseType, setHouseType] = useState();
  const [floorsNumber, setFloorsNumber] = useState();
  const [price, setPrice] = useState();

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setFootage();
    setRooms();
    setArea();
    setStreet();
    setHouse();
    setHouseType();
    setFloor();
    setFloorsNumber();
    setPrice();
  };

  const styles = StyleSheet.create({
    tiStyle: {
      height: 40,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 30,
      padding: 10,
      marginEnd: 10,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 30,
      elevation: 3,
      backgroundColor: "black",
      marginTop: 30,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });
  if (isSwitchOn == false) {
    return (
      <View style={{ padding: 15 }}>
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
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            trackColor={{ true: "red", false: "grey" }}
            thumbColor={"black"}
          />
          <Span fs="20">Квартира</Span>
        </View>
        <TextInput
          placeholder="Метраж"
          onChangeText={(value) => setFootage(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Кол-во комнат"
          onChangeText={(value) => setRooms(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Район"
          onChangeText={(value) => setArea(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Улица"
          onChangeText={(value) => setStreet(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Дом"
          onChangeText={(value) => setHouse(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Этаж"
          onChangeText={(value) => setFloor(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Вид дома"
          onChangeText={(value) => setHouseType(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Кол-во этажей"
          onChangeText={(value) => setFloorsNumber(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Стоимость"
          onChangeText={(value) => setPrice(value)}
          style={styles.tiStyle}
        ></TextInput>
        <Pressable
          style={styles.button}
          onPress={()=>{createFlat()}}
        >
          <Text style={styles.text}>Разместить квартиру</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={{ padding: 15 }}>
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
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            trackColor={{ true: "red", false: "grey" }}
            thumbColor={"black"}
          />
          <Span fs="20">Заявка</Span>
        </View>

        <TextInput
          placeholder="Кол-во комнат"
          onChangeText={(value) => setRooms(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Район"
          onChangeText={(value) => setArea(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Дом"
          onChangeText={(value) => setHouse(value)}
          style={styles.tiStyle}
        ></TextInput>
        <TextInput
          placeholder="Вид дома"
          onChangeText={(value) => setHouseType(value)}
          style={styles.tiStyle}
        ></TextInput>
        <Pressable style={styles.button} onPress={() => createRequest()}>
          <Text style={styles.text}>Разместить заявку</Text>
        </Pressable>
      </View>
    );
  }
}

export default AddScreen;

