import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Loading from "./Loading";
var { width, height } = Dimensions.get("window");

export default function Searchscreen() {
  let moviename = "Ant-man and the wasp: Quantumania";

  const navigation = useNavigation();

  const [result, setresult] = useState([1, 2, 3, 4]);

  const [loading, setloading] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "#1D1D1D", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 4,
          marginBottom: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            paddingBottom: 2,
            borderRadius: 23,
            borderColor: "gray",
            paddingLeft: 18,
            fontWeight: "200",
            flex: 1,
            color: "white",
            borderWidth: 1.3,
          }}
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
        ></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="circle-with-cross" size={35} color="white" />
        </TouchableOpacity>
      </View>

      {/* results from API */}
      {loading == true ? (
        <Loading></Loading>
      ) : result.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          style={{ marginVertical: 10 }}
        >
          <Text style={{ color: "white" }}>Result {result.length}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {result.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate("Movie", item)}
                >
                  <View>
                    <Image
                      source={require("../assets/images/moviePoster2.png")}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    ></Image>
                    <Text style={{ color: "white" }}>
                      {moviename.length > 14
                        ? moviename.slice(0, 22) + "..."
                        : moviename}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Image
            source={require("../assets/images/movieTime.png")}
            style={{ width: width * 0.75, height: height * 0.6 }}
          ></Image>
        </View>
      )}

      {/* 2nd these code we write then according to our deman we made ternary constion and put this code there */}
      {/* {result.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          style={{ marginVertical: 10 }}
        >
          <Text style={{ color: "white" }}>Result {result.length}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {result.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate("Movie", item)}
                >
                  <View>
                    <Image
                      source={require("../assets/images/moviePoster2.png")}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    ></Image>
                    <Text style={{ color: "white" }}>
                      {moviename.length > 14
                        ? moviename.slice(0, 22) + "..."
                        : moviename}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Image
            source={require("../assets/images/movieTime.png")}
            style={{ width: width * 0.75, height: height * 0.6 }}
          ></Image>
        </View>
      )} */}

      {/* first these code we write then according to our deman we made ternary constion and put this code there */}
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ marginVertical: 10 }}
      >
        <Text style={{ color: "white" }}>Result {result.length}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {result.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate("Movie", item)}
              >
                <View>
                  <Image
                    source={require("../assets/images/moviePoster2.png")}
                    style={{ width: width * 0.44, height: height * 0.3 }}
                  ></Image>
                  <Text style={{ color: "white" }}>
                    {moviename.length > 14
                      ? moviename.slice(0, 22) + "..."
                      : moviename}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
}
