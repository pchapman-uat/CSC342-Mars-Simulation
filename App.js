import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Each screen has been made as a seperate file, it is referenced here
import MainScreen from './Screens/mainScreen'
import SecondScreen from './Screens/simulation'
import Example from './changeValMSExample'

import { playAudio } from './default.js'

import { values } from './styles'



// This is creates the stack navigator to a variable named Stack
const Stack = createStackNavigator()

// This is the main function of the app
function App(){
  playAudio(0.005, require('./assets/audio/backgroundSound.mp3')) 
    // This allows for support of custom fonts
    const [fontsLoaded] =  useFonts({
        Jumpers3D: require('./assets/fonts/Jumpers3D.ttf'),
    });
  if (!fontsLoaded) {
    return null;
  }
  return(
     <NavigationContainer>
        {/* This sets the default page, as well as adjusts the screen options, such as changing the background color based on the values const */}
        <Stack.Navigator initialRouteName="Home">
            {/* This is where all pages are put that are used for the application */}
            {/* headerShown is set to false so it is not shown on the home page */}
            <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Simulation" component={SecondScreen} options={{headerStyle:{backgroundColor:values.bg.rawUmber.line()}, headerTitleStyle: {color: values.fontColor.line()}}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
// This exports the App as the default function to be referenced by the actuall aplication
export default App;


