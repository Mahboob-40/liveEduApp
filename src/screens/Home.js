import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';

const Home = (props) => {

  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });

   if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  const description = "The agents set up dummy companies, acquire advanced computers, and then they quietly fold and go home, taking their hardware with them."
                      
  return (
    <View style={styles.mainContainer}>
     <Image 
          resizeMode="contain"
          style={styles.headerImage}
          source={require("../../assets/pic4.jpg")}
            />
        <View style={styles.homeTop}>
            <Text style={[styles.mainHeader]}>Welcome to</Text>
            <Text style={[styles.mainHeader, {
              fontSize : 33,
              color : "#4c5dab",
              marginTop : 0
            }]}>{props.channelName}</Text>
            <Text style={styles.paraStyle}>{description}</Text>
        </View>
        <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
          <Menu />
        <View style={[styles.lineStyle,{
          marginVertical : 10
        }]}></View>
        </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  mainContainer : {
    height : "100%",
    width : "100%",
    display : "flex",
    justifyContent : "space-between",
    paddingHorizontal : 20,
    backgroundColor : "#fff",
    textAlign: "center"
  },
  homeTop : {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    paddingHorizontal : 10,
  },
  headerImage : {
    marginTop : 70,
    width : "100%",
    height: undefined,
    aspectRatio : 1,
    borderRadius : 10
  },
  mainHeader : {
    fontSize : 30,
    color : '#344055',
    textTransform : "uppercase",
    fontWeight : "600",
    fontFamily : " Nunito_700Bold"
  },
  paraStyle : {
    textAlign : "left",
    fontSize : 19,
    color : "#7d7d7d",
    marginTop: 30,
    paddingBottom : 50,
    lineHeight : 26,
    fontFamily : "JosefinSans_400Regular"
  },
  lineStyle : {
    marginBottom : 10,
    borderWidth : 0.2,
    borderColor : "grey"
  }
});

export default Home
