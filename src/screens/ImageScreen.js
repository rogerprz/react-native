import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is the image screen</Text>
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
