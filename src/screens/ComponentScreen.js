import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Component test screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default ComponentScreen;
