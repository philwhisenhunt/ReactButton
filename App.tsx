import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const PizzaTranslator = () => {
  const [text, setText] = useState("");
  return (
    <view style={{ padding: 20 }}>
      <TextInput
        style={{ height: 100 }}
        placeholder="Type here to translate"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && word + "-ify")
          .join(" ")}
      </Text>
    </view>
  );
};
export default PizzaTranslator;
