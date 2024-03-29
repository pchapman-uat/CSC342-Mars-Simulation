import { Text, View, Image } from 'react-native';
import {styles} from './styles'

import { Audio } from 'expo-av'

function intBetween(min, max){
  const arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
}

// This is the header function, that has the default information for all pages
function header(){
  return(
    <View>
        <Image
          style={styles.logo}
          source={require('./assets/images/mars.png')}></Image>
        <View style={styles.border}>
          <Text style={styles.header}>MartianQuest</Text>
          <Text style={styles.subHeader}>Expedition Beyond Earth</Text>
        </View>
      </View>
  )
}
// This is the footer, like the header it is made a function to be shown on multiple pages
function footer(){
    return(
        // There are multiple styles inputed as an array so both will show
        <View style={[styles.icons, styles.border]}>
          <Image
            style={styles.icon}
            source={require('./assets/images/uat-logo.png')}
          />
          <Image
            style={styles.icon}
            source={require('./assets/images/snack-icon.png')}
          />
        </View>
    )
}

async function playAudio(volume, file) {
  try {
    console.log('Playing Audio')
    Audio.setIsEnabledAsync;
    const sound = new Audio.Sound();
    await sound.loadAsync(file)
    await sound.setVolumeAsync(volume);
    await sound.playAsync(true);
  } catch (error) {
    console.log(error)
  }
}

export { footer, header, playAudio, intBetween }