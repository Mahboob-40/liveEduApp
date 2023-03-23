import { FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import Courses from "../api/Courseapi";
import CourseDetails from './CourseDetails';

const Course = ({navigation}) => {
  const courseCard = ({item}) =>{
      return(
        <View style={styles.mainContainer}>
           <View style={styles.courseContainer}>
               <View>
                 <Image style={styles.cardImage}
                 source={item.image}
                 resizeMode="contain"
                 />
               </View>
               <View>
                  <Text style={styles.mainHeader}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
               </View>
               <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.buttonStyle}
                 onPress={()=>navigation.navigate("CourseDetails",
                   {
                    courseId : item.id
                   })
                }
                 >
                   <Text style={styles.buttonText}>Course Details</Text>
                 </TouchableOpacity>
               </View>
           </View>
        </View>
      )
  }
  return (
    <View>
      <FlatList
      keyExtractor={(item)=>{
       return item.id
      }}
      data={Courses}
      renderItem={courseCard}
      />
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
  cardImage : {
    width : "100%",
    height : undefined,
    aspectRatio : 1
  },
  mainContainer : {
    paddingHorizontal : 20,
    backgroundColor : "#fff"
  },
  courseContainer : {
    paddingHorizontal : 30,
    paddingBottom : 20,
    backgroundColor : "rgba(255,255,255,0.90)",
    textAlign : "center",
    borderRadius : 5,
    shadowColor : "grey",
    shadowOffset : {width : 0, height : 0},
    shadowOpacity : 0.5,
    shadowRadius : 8,
    elevation : 8,
    marginVertical : 30
  },
  mainHeader : {
    fontSize : 22,
    color : "#344052",
    textTransform : "uppercase",
    paddingBottom : 15,
    fontFamily : "Nunito_600SemiBold"
  },
  description : {
    fontFamily : "JosefinSans_400Regular",
    textAlign : "left",
    fontSize : 17,
    paddingBottom : 20,
    color : "#7d7d7d"
  },
  buttonContainer : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "center"
  },
  buttonStyle : {
    backgroundColor : "#809fff",
    borderRadius : 5,
    paddingVertical : 10,
    paddingHorizontal : 20,
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  },
  buttonText : {
    fontSize : 20,
    color : "#eee",
    fontFamily : "JosefinSans_500Medium",
    textTransform : "capitalize"
  }
})