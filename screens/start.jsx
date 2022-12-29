import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

function Test({route}) {
    const {data}=route.params;
    return ( <Text>{data.rooms}</Text>);
}

export default Test;