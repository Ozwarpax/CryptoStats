import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { UseCoinCap } from "../hooks/UseCoinCap";
import { Routes } from "../navigation/Routes";

const navigation = UseCoinCap()

const handleFeed =()=> {

  navigation.navigate(Routes.COINCAP_FEED_SCREEN)

};
export default function FirstPage() {
  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={handleFeed}>
    <View style={styles.haut} >

    </View>
    <Text style={styles.titreB}>CryptoStats</Text>
    <View style={styles.bas}>
      <View style={styles.bar1}>
        <View style={styles.bar2}></View> 
        <View style={styles.bar6}></View>
      
      </View>
       <View style={styles.bar3}></View>
      <View style={styles.bar4}></View>
      <View style={styles.bar5}></View>
      <Text style={styles.titreW}>CryptoStats</Text>
     </View>  
     </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1,
    },
  haut: {
    flex: 1,
    backgroundColor: "white",
  },
  bas: {
    width: 375,
    height: 100,
    flex: 1,
    backgroundColor: "black",
  },
  bar1: {
    width: 20,
    height: 50,
    backgroundColor: "white",
  },
  bar2: {
    margin: -60,
    marginLeft: 20,
    width: 20,
    height: 80,
    backgroundColor: "black",
  },
  bar3: {
    margin: -50,
    marginLeft: 40,
    width: 20,
    height: 80,
    backgroundColor: "white",
  },
  bar4: {
    margin: -30,
    width: 20,
    height: 50,
    marginLeft: 355,
    backgroundColor: "white",
  },
  bar5: {
    margin: -100,
    width: 20,
    height: 80,
    marginLeft: 335,
    backgroundColor: "black",
  },
  bar6: {
    margin: 40,
    width: 20,
    height: 80,
    marginLeft: 315,
    backgroundColor: "white",
  },
  titreB: {
    color: "black",
    fontSize: 45,
    paddingLeft: 70,
  },
  titreW: {
    color: "white",
    fontSize: 45,
    paddingLeft: 70,
    marginTop: 100,
    transform: [{ rotate: "360deg" }],
  },
});
