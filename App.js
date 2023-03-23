import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import AppLoading from 'expo-app-loading';
import CourseDetails from './src/screens/CourseDetails';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';


export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontLoaded] = useFonts({
     JosefinSans_400Regular,
     JosefinSans_500Medium,
     Nunito_600SemiBold,
     Nunito_700Bold,
  });

  if(!fontLoaded){
    <AppLoading />
  }else{
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' options={{headerShown:false}}>
            {(props)=> <Home {...props} channelName={"Mahboob Hassan"} />}
          </Stack.Screen>
          <Stack.Screen name='Course' component={Course}
           options={{headerTitleStyle:{
            fontSize : 25,
            fontFamily : "JosefinSans_500Medium"
           },
          headerTitleAlign : 'center'
          }}
          />
          <Stack.Screen name='Student' component={UserData} 
           options={{headerTitleStyle:{
            fontSize : 25,
            fontFamily : "JosefinSans_500Medium"
           },
          headerTitleAlign : 'center'
          }}
          />
          <Stack.Screen name='About' component={About}
           options={{headerTitleStyle:{
            fontSize : 25,
            fontFamily : "JosefinSans_500Medium"
           },
          headerTitleAlign : 'center'
          }}
          />
          <Stack.Screen name='Contact' component={Contact}
           options={{headerTitleStyle:{
            fontSize : 25,
            fontFamily : "JosefinSans_500Medium"
           },
          headerTitleAlign : 'center'
          }}
          />

          <Stack.Screen 
           name='CourseDetails'
           component={CourseDetails}
           options={{headerTitleStyle:{
            fontSize : 25,
            fontFamily : "JosefinSans_500Medium"
           },
          headerTitleAlign : "center"
        }}
          />
       </Stack.Navigator>
    </NavigationContainer>
  )
}}

