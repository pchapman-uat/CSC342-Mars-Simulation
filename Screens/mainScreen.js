import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';

import { styles } from '../styles';

import { header, footer, playAudio } from '../default';

function changeScreen(naviation) {
  playAudio(0.02, require("../assets/audio/comet.mp3"));
  naviation.navigate('Simulation');
}

// This is the main screen, also known as the home page
function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.content}>
      <ImageBackground
        style={styles.information}
        source={require('../assets/images/background.png')}>
        {/* The header function is called to allow for importing of the default values */}
        {header()}
        <View style={styles.border}>
          <Text style={styles.text}>
            Embark on a riveting odyssey beyond Earth's horizon with our Mars
            Simulation Application. Brace yourself for the unforgiving Martian
            terrain, where survival hinges on your wit and adaptability. This is
            not just an app; it's your ticket to the edge of human exploration.
            Dare to conquer Mars, where every decision echoes through the red
            sands of possibility. The future is now—immerse yourself in the
            extraordinary.
          </Text>
        </View>

        {/* Pressable is an area that supports multiple functions and events
        Right now the onPress is being used, where it is calling the navigation class, and using the naviation function, to load the page simulation
         */}
        <Pressable
          style={styles.border}
          onPress={() => changeScreen(navigation) }>
          <Text style={[styles.text, { color: 'rgb(0,255,0)' }]}>
            Start Simulation
          </Text>
        </Pressable>

        {footer()}
      </ImageBackground>
    </SafeAreaView>
  );
}

// This Exports the MainScreen to be used by App.js
export default MainScreen;
