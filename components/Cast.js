import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Cast({ cast , navigation }) {
  let personname = "rock , booby and aj";
  let charactername = "Jhon wick";

  return (
    <View style={{ marginHorizontal: 8 }}>
      <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
        Top Cast
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={{ paddingHorizontal: 14 }}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>navigation.navigate('Person' , person)}>
              <View>
              <Image style={{height:55,width:65 , borderRadius:50}} source={require('../assets/images/castImage1.png')}></Image>
              </View>
                <Text style={{ color: "white", margin: 10 }}>
                  {charactername.length > 10
                    ? charactername.slice(0, 10) + "..."
                    : charactername}
                </Text>
                <Text style={{ color: "white" }}>
                  {personname.length > 10
                    ? personname.slice(0, 10) + "..."
                    : personname}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
