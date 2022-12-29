import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Switch,
    TextInput,
    Pressable,
    Image
  } from "react-native";
import Span from '../components/text';

function FullFlatScreen({route}) {
    
    const styles=StyleSheet.create({
        textContainer:{
            textAlign:'center',
            padding:10
        },
        text:{
            fontSize:18,
            color:'grey'
        },
        buttonText:{
            fontSize:18,
            color:'white'
        },
        buttonBackText:{
            fontSize:18,
            color:'black'
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
          },
          buttonBack: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 30,
            backgroundColor: "white",
            borderWidth:2,
            marginTop: 15,
          },
    })
    const {data}=route.params;
    console.log(data)
    return ( 
        <View style={styles.textContainer}>
            <Image
        source={{

uri:"https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"        }}
        style={{ width:'100%', height: 200, borderRadius:15, resizeMode: 'contain', }}
      />
            <Span fs="20px" color="black"><Text style={styles.text}>Метраж:</Text> {data.footage}</Span>
            <Span fs="20px" color="black"><Text style={styles.text}>Количество комнат:</Text> {data.rooms}</Span>
            <Span fs="20px" color="black"><Text style={styles.text}>Район:</Text> {data.area}</Span>
            <Span fs="20px"  color="black" ><Text style={styles.text}>Улица:</Text> {data.street}</Span>
            <Span fs="20px"  color="black"><Text style={styles.text}>Дом:</Text> {data.house}</Span>
            <Span fs="20px"  color="black"><Text style={styles.text}>Этаж:</Text> {data.floor}</Span>
            <Span fs="20px"  color="black"><Text style={styles.text}>Вид дома:</Text> {data.houseType}</Span>
            <Span fs="20px" color="black"><Text style={styles.text}>Количество этажей:</Text> {data.floorsNumber}</Span>
            <Span fs="20px"  color="black"><Text style={styles.text}>Стоимость:</Text> {data.price} млн руб</Span>
            {/* <Pressable
          style={styles.button}
          onPress={()=>{createFlat()}}
        >
          <Text style={styles.text}>Разместить квартиру</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={()=>{createFlat()}}
        >
          <Text style={styles.text}>Разместить квартиру</Text>
        </Pressable> */}
        <Pressable
          style={styles.button}
          onPress={()=>{}}
        >
          <Text style={styles.buttonText}>Разместить квартиру</Text>
        </Pressable>
        <Pressable
          style={styles.buttonBack}
          onPress={()=>{}}
        >
          <Text style={styles.buttonBackText}>Вернуться к поиску</Text>
        </Pressable>
        </View>
    );
}

export default FullFlatScreen;