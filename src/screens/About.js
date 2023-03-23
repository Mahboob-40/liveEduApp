import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Mahboob Hassan</Text>
      <Text style={styles.paraStyle}>I am a Student of BZU Multan</Text>

      <View>
         <Image
           style={styles.imgStyle}
           source={require("../../assets/ja.jpg")}
         />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About me</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>

      <Text style={styles.mainHeader}>Follow me on social network</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={styles.buttonStyle}
         onPress={()=>
           Linking.openURL("https://www.youtube.com/@arshadgardeningtipsandtric1367")
        }
        >
            <Image 
             style={styles.iconStyle}
             source={{uri : "https://img.icons8.com/color/256/youtube-play.png"}}
            />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonStyle}
         onPress={()=>
           Linking.openURL("https://www.instagram.com/")
        }
        >
            <Image 
             style={styles.iconStyle}
             source={{uri : "https://img.icons8.com/fluency/256/instagram-new.png"}}
            />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonStyle}
         onPress={()=>
           Linking.openURL("https://www.facebook.com/profile.php?id=100038009377735")
        }
        >
            <Image 
             style={styles.iconStyle}
             source={{uri : "https://img.icons8.com/color/256/facebook-new.png"}}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  aboutContainer : {
    display : "flex",
    alignItems : "center",
    backgroundColor : "#fff",
    height:"100%"
  },
  imgStyle : {
    width : 150,
    height : 150,
    borderRadius : 100
  },
  mainHeader : {
    fontSize : 18,
    color : "#344055",
    textTransform : "uppercase",
    fontWeight : "bold",
    marginTop : 50,
    marginBottom : 10,
    fontFamily : "JosefinSans_400Regular",
    lineHeight : 30
  },
  paraStyle : {
    fontSize : 18,
    color : "#7d7d7d",
    paddingBottom : 30
  },
  aboutLayout : {
    backgroundColor : "#4c5dab",
    paddingHorizontal : 30,
    marginVertical : 30
  },
  aboutSubHeader : {
    fontSize : 18,
    color : "#fff",
    textTransform : "uppercase",
    fontWeight : "bold",
    marginVertical : 15,
    fontFamily : "JosefinSans_700Bold",
    alignSelf : "center"
  },
  aboutPara : {
    color : "#fff"
  },
  menuContainer : {
    width : "100%",
    flexDirection : "row",
    justifyContent : "space-evenly",
    alignItems : "center",
    marginTop : 30
  },
  iconStyle : {
    width : "100%",
    height : 50,
    aspectRatio : 1
  }
})