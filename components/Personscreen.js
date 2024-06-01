import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");
import Movielist from "../components/Movielist";
import Loading from "./Loading";

export default function Personscreen() {
  const [personmovie, setpersonmovie] = useState([1, 2, 3, 4]);

  const navigation = useNavigation();

  const [toggleheart, settoggleheart] = useState(false);

  const [loading, setloading] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1D1D1D" }}>
      <SafeAreaView
        style={{
          zIndex: 20,
          width: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
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
            color={toggleheart == true ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* person detail */}
      {loading == true ? (
        <Loading></Loading>
      ) : (
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                overflow: "hidden",
                alignItems: "center",
                width: 300,
                height: 300,
                borderRadius: 200,
                borderBlockColor: "white",
                borderWidth: 0.4,
              }}
            >
              <Image
                style={{ width: width * 0.85, height: height * 0.57 }}
                source={require("../assets/images/castImage2.png")}
              ></Image>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 25,
              }}
            >
              Keanu Reeves
            </Text>
            <Text
              style={{ color: "#696969", textAlign: "center", fontSize: 14 }}
            >
              London United Kingdom
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 3,
              marginTop: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "gray",
              borderRadius: 15,
              padding: 8,
            }}
          >
            <View
              style={{
                borderRightWidth: 2,
                borderColor: "white",
                paddingHorizontal: 9,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Gender</Text>
              <Text style={{ color: "white", fontSize: 12 }}>Male</Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderColor: "white",
                paddingHorizontal: 9,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Birthday
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>04-04-2004</Text>
            </View>
            <View
              style={{
                borderRightWidth: 2,
                borderColor: "white",
                paddingHorizontal: 9,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Known for
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>Quite</Text>
            </View>
            <View>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Popularity
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>10.5</Text>
            </View>
          </View>
          <View style={{ marginVertical: 6, marginHorizontal: 6 }}>
            <Text style={{ color: "white" }}>Biography</Text>
            <Text style={{ color: "white" }}>
              intelligence, the epithets "dumb" and "dummy" became
              interchangeable with stupidity. Hoy himself often corrected
              individuals who addressed him as William, and referred to himself
              as Dummy.[citation needed] Said to have been able to speak with a
              voice that resembled a squeak,[5] he was one of the most
              intelligent players of his time.intelligence, the epithets "dumb"
              and "dummy" became interchangeable with stupidity. Hoy himself
              often corrected individuals who addressed him as William, and
              referred to himself as Dummy.[citation needed] Said to have been
              able to speak with a voice that resembled a squeak,[5] he was one
              of the most intelligent players of his time.[6]intelligence, the
              epithets "dumb" and "dummy" became interchangeable with stupidity.
              Hoy himself often corrected individuals who addressed him as
              William, and referred to himself as Dummy.[citation needed] Said
              to have been able to speak with a voice that resembled a
              squeak,[5] he was one of the most intelligent players of his
              time.[6]
            </Text>
          </View>
          <Movielist title="Movies" data={personmovie}></Movielist>
        </View>
      )}
      {/* <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              overflow: "hidden",
              alignItems: "center",
              width: 300,
              height: 300,
              borderRadius: 200,
              borderBlockColor: "white",
              borderWidth: 0.4,
            }}
          >
            <Image
              style={{ width: width * 0.85, height: height * 0.57 }}
              source={require("../assets/images/castImage2.png")}
            ></Image>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Keanu Reeves
          </Text>
          <Text style={{ color: "#696969", textAlign: "center", fontSize: 14 }}>
            London United Kingdom
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 3,
            marginTop: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "gray",
            borderRadius: 15,
            padding: 8,
          }}
        >
          <View
            style={{
              borderRightWidth: 2,
              borderColor: "white",
              paddingHorizontal: 9,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Gender</Text>
            <Text style={{ color: "white", fontSize: 12 }}>Male</Text>
          </View>
          <View
            style={{
              borderRightWidth: 2,
              borderColor: "white",
              paddingHorizontal: 9,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Birthday</Text>
            <Text style={{ color: "white", fontSize: 12 }}>04-04-2004</Text>
          </View>
          <View
            style={{
              borderRightWidth: 2,
              borderColor: "white",
              paddingHorizontal: 9,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Known for
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>Quite</Text>
          </View>
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Popularity
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>10.5</Text>
          </View>
        </View>
        <View style={{marginVertical:6 , marginHorizontal:6}}>
          <Text style={{color:'white'}}>Biography</Text>
          <Text style={{color:'white'}}>intelligence, the epithets "dumb" and "dummy" became interchangeable with stupidity. Hoy himself often corrected individuals who addressed him as William, and referred to himself as Dummy.[citation needed] Said to have been able to speak with a voice that resembled a squeak,[5] he was one of the most intelligent players of his time.intelligence, the epithets "dumb" and "dummy" became interchangeable with stupidity. Hoy himself often corrected individuals who addressed him as William, and referred to himself as Dummy.[citation needed] Said to have been able to speak with a voice that resembled a squeak,[5] he was one of the most intelligent players of his time.[6]intelligence, the epithets "dumb" and "dummy" became interchangeable with stupidity. Hoy himself often corrected individuals who addressed him as William, and referred to himself as Dummy.[citation needed] Said to have been able to speak with a voice that resembled a squeak,[5] he was one of the most intelligent players of his time.[6]</Text>
        </View>

        //movies
        <Movielist title='Movies' data={personmovie}></Movielist>
      </View> */}
    </ScrollView>
  );
}

// shadowColor:'gray' , shadowRadius:60 , shadowOffset:{width:0 , height:5} , shadowOpacity:1
