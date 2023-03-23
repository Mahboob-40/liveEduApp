import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native'

const Menu = () =>{
    const navigation = useNavigation()
    return(
        <View style={styles.menuContainer}>
          <TouchableOpacity
           style={styles.buttonStyle}
           onPress={()=>{navigation.navigate("Course")}}
          >
            <Image
              style={styles.iconStyle}
             source={{uri:"https://img.icons8.com/clouds/1x/classroom.png"}}
            />
          </TouchableOpacity>

        <TouchableOpacity
           style={styles.buttonStyle}
           onPress={()=>{navigation.navigate("Student")}}
          >
             <Image
              style={styles.iconStyle}
              source={{uri:"https://img.icons8.com/color/256/man_reading_a_book.png"}}
             />
          </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonStyle}
           onPress={()=>{navigation.navigate("About")}}
          >
        {/* <Text style={styles.textStyle}>About</Text>*/}
           <Image
             style={styles.iconStyle}
             source={{uri:"https://img.icons8.com/ios/1x/about.png"}}
           />
          </TouchableOpacity>

        <TouchableOpacity
           style={styles.buttonStyle}
           onPress={()=>{navigation.navigate("Contact")}}
          >
             <Image 
             style={styles.iconStyle}
             source={{uri:"https://img.icons8.com/external-itim2101-lineal-itim2101/256/external-contact-us-contact-and-message-itim2101-lineal-itim2101.png"}}
             />
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer : {
        flexDirection : "row",
        justifyContent : "space-evenly"
    },
    textStyle : {
        textTransform : "uppercase",
    },
    iconStyle : {
      width:"100%",
      height:50,
      aspectRatio : 1
    }
})


export default Menu