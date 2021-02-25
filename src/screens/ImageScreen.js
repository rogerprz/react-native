import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is the image screen</Text>
      <ImageDetail title="Forest" />
      <ImageDetail title="Mountain" />
      <ImageDetail title="Lake" />
      <ImageDetail title="Country" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
