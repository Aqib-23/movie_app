import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "./Cast";
import Movielist from "./Movielist";
import Loading from "./Loading";
var { width, height } = Dimensions.get("window");

export default function Moviescreen() {
  let moviename = "Ant-man and the wasp: Quantumania";

  const [toggleheart, settoggleheart] = useState(false);

  const navigation = useNavigation();

  const { params: item } = useRoute();

  const [cast, setcast] = useState([1, 2, 3, 4, 5]);

  const [loading, setloading] = useState(false);

  // const [similarmovies , setsimilarmovies] = useState([1,2,3,4,5])

  useEffect(() => {
    // call the movie details api
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 10,
        flex: 1,
        backgroundColor: "#1D1D1D",
      }}
    >
      {/* back button and movie poster */}
      <View>
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 20,
            paddingHorizontal: 8,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "yellow", borderRadius: 10 }}
          >
            <AntDesign
              onPress={() => navigation.goBack()}
              name="left"
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => settoggleheart(!toggleheart)}>
            <Entypo
              name="heart"
              size={30}
              color={toggleheart == true ? "yellow" : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {loading == true ? (
          <Loading></Loading>
        ) : (
          <View>
            <Image
              style={{ width: width, height: height * 0.55, borderRadius: 30 }}
              source={require("../assets/images/moviePoster2.png")}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23, 23, 23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: height * 0.3,
              }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        )}

        {/* first these code we write then according to our deman we made ternary constion and put this code there */}
        {/* <View>
          <Image
            style={{ width: width, height: height * 0.55, borderRadius: 30 }}
            source={require("../assets/images/moviePoster2.png")}
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: height * 0.3,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View> */}
      </View>

      {/* movie detail */}
      <View style={{ marginTop: -55 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 29,
          }}
        >
          {moviename}
        </Text>

        {/* status , release , runtime */}
        <Text style={{ color: "#585858", textAlign: "center", margin: 10 }}>
          Released - 2020 - 170 min
        </Text>

        {/* geners */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#696969" }}>Action.</Text>
          <Text style={{ color: "#696969" }}>Thrill.</Text>
          <Text style={{ color: "#696969" }}>Comedy</Text>
        </View>
        {/* description */}
        <Text style={{ color: "#696969", padding: 15 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </Text>
      </View>

      {/* cast */}
      <Cast navigation={navigation} cast={cast}></Cast>
    </ScrollView>
  );
}
