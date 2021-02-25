import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>This is the home screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to components demo"
      />
      <TouchableOpacity onPress={() => console.log("Touchable Pressed")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
