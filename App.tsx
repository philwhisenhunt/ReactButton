import React from "react";
import { Text } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
};

const Cat = () => {
  return <Text>Hello, I am a {getFullName("Rum", "Tum", "Tugger")}!</Text>;
};
export default Cat;
