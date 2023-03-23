import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState();
 
    const getUserData = async() =>{
        try {
          const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
          const myData = await response.json();
          setMyData(myData);
          setIsLoaded(false);
         // console.log(myData)
        } catch (error) {
            
        }
    }

  useEffect(()=>{
    getUserData()
  },[]);

  
  return (
    <View>
    {isLoaded ? (
       <View style={styles.loaderStyle}>
         <ActivityIndicator
         size='large' 
         color="#0000ff"
        />
      </View>
    ) :(
      <View style={styles.parentContainer}>
      <Text style={styles.parentHeading}>List of Students</Text>
      <FlatList
        data={myData}
        renderItem={({item})=>{
          return(
               <View style={styles.container}>
                 <View>
                       <Image 
                       style={styles.ImageStyle}
                       source={{ uri : item.image}}
                       />
                  </View>
                  <View style={styles.textContainer}>
                  <View style={styles.bioContainer}>
                     <Text style={styles.bioText}>Bio-Data</Text>
                     <Text style={styles.bioText}>{
                        item.id < 10 ? `#0${item.id}` : `#{item.id}`
                    }</Text>
                  </View>
                 <Text style={styles.textStyle}>{item.name}</Text>
                 <Text style={styles.textStyle}>{item.email}</Text>
                 <Text style={styles.textStyle}>{item.mobile}</Text>
                </View>
                </View>
          )
        }}
        />
      </View>
  )
}
 </View>
  )}

export default UserData

const styles = StyleSheet.create({
      parentContainer : {
        alignItems : "center",
        backgroundColor : "#fff",
        justifyContent : "center"
    },
    parentHeading : {
        fontSize : 40,
        paddingTop : 50,
        paddingBottom : 30,
        color : "#393f47",
        // position : "fixed",
    },
    container : {
        justifyContent : "center",
        alignItems : "center",
    },
    ImageStyle : {
        width : 200,
        height : 200,
        borderWidth : 5,
        borderColor : "#ffffff"
    },
    textContainer : {
        backgroundColor : "#ffffff",
        width : 200,
        height : 130,
        marginBottom : 20,
        paddingHorizontal : 10
    },
    textStyle : {
        fontSize : 15,
        color : "#393f47"
    },
    bioContainer : {
        display: "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingVertical: 8
    },
    bioText : {
        fontSize : 25,
        color : "#393f47",
        paddingVertical : 4
    },
    loaderStyle : {
      flexDirection : "row",
      justifyContent : "center",
      alignItems : "center"    
    },
})