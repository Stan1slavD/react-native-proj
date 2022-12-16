import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import {collection, getDocs, addDoc} from "firebase/firestore"
import { db } from "../db/config";

function List() {
  const [data, setData]=useState()
  const[count,setCount]=useState(0)
  const flatCollectionRef=collection(db,"flats");
  const requestCollectionRef=collection(db,"requests");

    const styles=StyleSheet.create({
        text:{
            textAlign:'center'
        }
    })

    useEffect(()=>{
     
        setData(getDocs(flatCollectionRef));
        console.log(data)
     
      console.log(1)
    })

  return (
    <View>
      <View>
        <Text style={text}>tut budet filter</Text>
        <Button title="+" onPress={()=>{setCount(count++)}}></Button>
        <Text>{count}</Text>
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
