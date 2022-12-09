import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/card";

function SearchScreen() {
  return (
    <View >
      <Text>tut budet filter</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <Card/>}
      />
    </View>
  );
}

export default SearchScreen;
