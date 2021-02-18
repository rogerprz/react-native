import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Roger";

  return (
    <View>
      <Text style={styles.text}>Component test screen</Text>
      <Text style={{ fontSize: 45 }}>Getting started with React Native</Text>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        My name is {name}
      </Text>
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
