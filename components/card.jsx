import React from "react";
import Span from "./text";
import Div from "./view";
import { Image, View } from "react-native";

function Card() {
  return (
    <View style={{ display: "flex", flexDirection: "row", justifyContent:'space-between', padding:5}}>
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={{ width: 100, height: 100, borderRadius:15 }}
      />
      <View style={{alignSelf: 'flex-start'}}>
        <Span fs="20px">150 м^2</Span>
        <Span fs="10px">ул.Союзная </Span>
        <Span fs="10px">д.141</Span>
        <Span fs="10px">кв. 344</Span>
      </View>
      <View style={{alignSelf:'center'}}>
         <Span color="green" fs="20px">
            3.44 млн руб.
         </Span>
      </View>
    </View>
  );
}

export default Card;
// метраж, количество комнат, адрес
// (район, улицу, дом), этаж, вид дома (панельный, кирпичный) и количество
// этажей, стоимость