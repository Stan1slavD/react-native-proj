import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

function List() {

    const styles=StyleSheet.create({
        text:{
            textAlign:'center'
        }
    })
  return (
    <View>
      <View>
        <Text style={text}>tut budet filter</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => <Text>qq</Text>}
        />
      </View>
      <View>
        <Text>tut budet filter</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => <Text>qq</Text>}
        />
      </View>
    </View>
  );
}

export default List;
