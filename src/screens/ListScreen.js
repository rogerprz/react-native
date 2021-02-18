import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default class ListScreen extends Component {
  render() {
    const people = [
      { name: "Roger", age: "30" },
      { name: "Begona", age: "30" },
      { name: "April", age: "30" },
      { name: "Ethan", age: "30" },
      { name: "Sophie", age: "30" },
    ];

    const styles = StyleSheet.create({
      textStyle: {
        marginVertical: 20,
        fontSize: 40,
      },
    });

    return (
      <View>
        <FlatList
          keyExtractor={(people) => people.name}
          data={people}
          renderItem={({ item }) => {
            return (
              <Text style={styles.textStyle}>
                {item.name} Age:{item.age}
              </Text>
            );
          }}
        />
      </View>
    );
  }
}
