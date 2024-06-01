import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View , Text, Dimensions, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
var {width , height} = Dimensions.get('window')

export default function Trendingmovies({state}) {


  return (
    <View style={{marginTop:8}}>
        <Text style={{color:'white' , fontSize:17 , fontWeight:'bold'}}>Trending Movies</Text>
        <Carousel  data={state} firstItem={1} inactiveSlideOpacity={0.09} sliderWidth={width} itemWidth={width*0.53} slideStyle={{alignItems:'center'}} renderItem={({item})=><Moviecard item={item}></Moviecard>}>
        </Carousel>
    </View>
  )
}


const  Moviecard=({item})=>{

  // handlclick iss item k sath likhna hai aor Moviecard say pass bhi krana hai aor neechay wala function oper define krna hai agr koi error ae to

  const navigation = useNavigation()

  const handleclick=()=>{

    // navigation.navigate('Movie' , item)

  }

    return(
        <TouchableWithoutFeedback onPress={handleclick}>
            <Image style={{width:width*0.5 , height:height*0.39 , borderRadius:40 }} source={require('../assets/images/moviePoster1.png')}></Image>
        </TouchableWithoutFeedback>
    )
}
