import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

var {width , height} = Dimensions.get('window')

export default function Movielist({ title, data }) {

    let moviename = 'Ant-man and the wasp: Quantumania'

    const navigation = useNavigation()

  return (
    <View>
      <View
        style={{
          marginHorizontal: 6,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "green", fontSize: 17, fontWeight: "bold" }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return(
            <TouchableWithoutFeedback key={index} onPress={()=>navigation.navigate('Movie' , item)}>
            <View>
                <Image source={require('../assets/images/moviePoster2.png')} style={{width:width*0.33 , height:height*0.30 , margin:7 , borderRadius:30}}></Image>
                <Text style={{color:'white'}}>{
                    moviename.length>14? moviename.slice(0,14)+'...' :moviename
                }</Text>
            </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  );
}
