import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Button} from "react-native";
import Card from "../components/card";
import {collection, getDocs, addDoc} from "firebase/firestore"
import { db } from "../db/config";
function SearchScreen() {
  const [flatData, setFlatData]=useState()
  const[count,setCount]=useState(0)
  const flatCollectionRef=collection(db,"flats");
  const requestCollectionRef=collection(db,"requests");
  const [loaded, setLoaded] = useState(false)
//   useEffect(()=>{
//     if (loaded) return ;
//     setData(getDocs(flatCollectionRef));
//     console.log(dataa.docs)
//     setLoaded(true)
// }, [loaded])
useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(flatCollectionRef);
    setFlatData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(flatData)
  };

  getUsers();
}, []);
  return (
    <View >
      <Text>tut budet filter</Text>
      <Button title="1" onPress={()=>{console.log(flatData)}}></Button>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <Card/>}
      />
    </View>
  );
}

export default SearchScreen;
