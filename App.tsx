import React from "react";
import { Text, View } from "react-native";

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am a {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Moolah" />
      <Cat name="Teeco" />
      <Cat name="Mufasa" />
    </View>
  );
};

export default Cafe;
