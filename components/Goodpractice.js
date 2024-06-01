import { View, Text, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";

var { width, height } = Dimensions.get("window");

export default function Goodpractice() {

    const [color , setColor] = useState(false);
    const [secondcolor , setsecondcolor] = useState(false)

    const changecolor = () => {
        setColor(!color);
    }
    const secondchangecolor = () => {
        setsecondcolor(!secondcolor);
    }

  return (
    <View style={{marginTop:30}}>
      <Pressable onPress={() => changecolor()}
        style={{
          width: width * 0.5,
          backgroundColor: color ? "red" : "blue",
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <Text>Button 1</Text>
      </Pressable>
      <Pressable onPress={() => secondchangecolor()}
        style={{
          width: width * 0.5,
          backgroundColor: color ? "green" : "blue",
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <Text>Button 2</Text>
      </Pressable>
    </View>
  );
}
