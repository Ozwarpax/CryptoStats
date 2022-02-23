
import { StyleSheet, View, Text } from "react-native";
import React from "react";

const ErrorBox = () => {
  return (
    <View style={styles.error}>
      <Text>Error page</Text>
    </View>
  );
};

export default ErrorBox;

const styles = StyleSheet.create({
  error: {
    backgroundColor: "red",
    flex: 1,
  },
});
