import React from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Routes } from "../navigation/Routes";
import { UseCoinCap } from "../hooks/UseCoinCap";
//import { Routes } from "../navigation/Routes";

interface Items {
    id:string
    rank:string
    symbol:string
    name:string
    priceUsd:string
  }

  
const CardItem = (props: Items) => {

    
  
  
    const navigation = UseCoinCap()
  
    const handlePress=()=> (
      navigation.navigate(Routes.COINCAP_FEED_SCREEN)
    )
 
    return (
      <TouchableOpacity onPress={handlePress}>
      <Card style={styles.card}>

        <Card.Title titleStyle={styles.text} title={props.name} subtitleStyle={styles.text} subtitle={props.rank} />
        <Card.Content >
          <Paragraph style={styles.text}>{props.symbol}</Paragraph>
          <Paragraph style={styles.text}>{props.id}</Paragraph>
          <Title style={styles.text}>{props.priceUsd} $ </Title>
        </Card.Content>

      </Card>
      </TouchableOpacity>
    );
  };
  
  export default CardItem;

  
const styles = StyleSheet.create({
    card: {
      height: 200,
      margin: 20,
      backgroundColor:"black",
     
    },
    name: {
      fontWeight: "bold",
      color:"red",
      fontSize: 24,
    },
    buy: {
      fontSize: 18,
      fontWeight: "bold",
    },
    text:{
        color:"lightgrey",
    }
  });
  