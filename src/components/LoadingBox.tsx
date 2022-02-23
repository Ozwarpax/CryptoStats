import React from "react";
import { Text, View, StyleSheet } from "react-native";

const LoadingBox = () => {
  return (
    <View style={styles.chargement}>
      <Text> Chargement screen</Text>
    </View>
  );
};

export default LoadingBox;

const styles = StyleSheet.create({
  chargement: {
    backgroundColor: "pink",
    flex: 1,
  },
});
