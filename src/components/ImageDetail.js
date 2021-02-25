import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Score: {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ImageDetail;
