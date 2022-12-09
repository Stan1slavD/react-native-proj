import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Pressable,
} from "react-native";
import Span from "../components/text";
function AddScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
        <TextInput placeholder="Метраж" style={styles.tiStyle}></TextInput>
        <TextInput
          placeholder="Кол-во комнат"
          style={styles.tiStyle}
        ></TextInput>
        <TextInput placeholder="Район" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Улица" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Дом" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Этаж" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Вид дома" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Кол-во этажей" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Стоимость" style={styles.tiStyle}></TextInput>
        <Pressable style={styles.button} onPress={() => console.log(1)}>
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
          style={styles.tiStyle}
        ></TextInput>
        <TextInput placeholder="Район" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Дом" style={styles.tiStyle}></TextInput>
        <TextInput placeholder="Вид дома" style={styles.tiStyle}></TextInput>
        <Pressable style={styles.button} onPress={() => console.log(1)}>
          <Text style={styles.text}>Разместить заявку</Text>
        </Pressable>
      </View>
    );
  }
}

export default AddScreen;
// метраж, количество комнат, адрес
// (район, улицу, дом), этаж, вид дома (панельный, кирпичный) и количество
// этажей, стоимость
