import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the home screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
