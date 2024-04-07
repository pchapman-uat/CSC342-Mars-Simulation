import React from 'react';
import { View, StyleSheet, Button, Pressable, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { styles, values } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';


export default function App({navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({ isPlaying: 'Pause'});
  return (
    <LinearGradient style={videoStyles.content}
    colors={[values.bg.champagne.line(), values.bg.rawUmber.line()]}>
      <View>
        <Video
          ref={video}
          style={videoStyles.video}
          source={require('../assets/video/SolarSystem_NationalGeographic.mp4')}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={videoStyles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </View>
      <Pressable
      style={styles.border}
      onPress={() => navigation.navigate('Simulation')}>
        <Text style={[styles.text, {color: 'rgb(0,255,0)'}]}> 
          Start Simulation
        </Text>
      </Pressable>
    </LinearGradient>
  );
}

const videoStyles = StyleSheet.create({
  content: [
    styles.content,
    styles.information,
    {
      backgroundColor: values.bg.rawUmber.line(),
    }
  ],
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
