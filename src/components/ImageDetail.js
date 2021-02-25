import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ImageDetail;
