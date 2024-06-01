import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Trendingmovies from "./Trendingmovies";
import Movielist from "./Movielist";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Loading from "./Loading";

export default function Home() {

  const navigation = useNavigation();

  const [trending, settrending] = useState([1, 2, 3]);

  const [upcoming, setupcoming] = useState([1, 2, 3]);

  const [toprating, settoprating] = useState([1, 2, 3]);

  const [loading, setloading] = useState(false);


  return (
    <View style={{ flex: 1, backgroundColor: "#1D1D1D" }}>
      <StatusBar style="light"></StatusBar>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <MaterialCommunityIcons name="movie-off" size={30} color="gray" />
        <Text style={{ color: "white", fontSize:20 , fontWeight:'700'  }}>
          M<Text style={{ color: "yellow" }}>ovies App</Text>
        </Text>
        <FontAwesome
          onPress={() => navigation.navigate("Search")}
          name="search"
          size={24}
          color="white"
        />
      </View>
      {loading == true ? (
        <Loading></Loading>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Trendingmovies state={trending}></Trendingmovies>

          <Movielist title="Upcoming" data={upcoming}></Movielist>

          <Movielist title="Top Rated" data={upcoming}></Movielist>
        </ScrollView>
      )}

      {/* first these code we write then according to our deman we made ternary constion and put this code there */}
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        //trending movies
        <Trendingmovies state={trending}></Trendingmovies>

        //upcoming movies row
        <Movielist title="Upcoming" data={upcoming}></Movielist>

        //Top Rated movies row
        <Movielist title="Top Rated" data={upcoming}></Movielist>
      </ScrollView> */}
    </View>
  );
}
