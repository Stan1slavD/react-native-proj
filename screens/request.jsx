import React from "react";
import Span from "../components/text";
import Div from "../components/view";
import { Image, View } from "react-native";

function ReqCard(item) {
  console.log(item)
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg",
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />
      <View style={{ alignSelf: "flex-start" }}>
        <Span fs="20px">{item.data.rooms}</Span>
        <Span fs="10px">район {item.data.area} </Span>
        <Span fs="10px">д. {item.data.house}</Span>
        <Span fs="10px">Тип дома {item.data.houseType} </Span>
      </View>
    </View>
  );
}

export default ReqCard;
