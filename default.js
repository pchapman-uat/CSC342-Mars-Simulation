import { Text, View, Image, Alert } from 'react-native';
import {styles} from './styles'

import { Audio } from 'expo-av'

import Config from 'react-native-config'

function intBetween(min, max){
  const arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr
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

const AsyncAlert = async (title, message) => new Promise((resolve) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'ok',
        onPress: () => {
          resolve('YES');
        },
      },
    ],
    { cancelable: false },
  );
});


class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.registerDate = new Date()
    this.modifyDate = this.registerDate
  }
  welcome() {
    return `Welcome ${this.firstName} ${this.lastName}! (age: ${this.age}) The simulation will begin soon!`
  }
  updateUser(firstName, lastName, age){
    this.setFirstName(firstName)
    this.setLastName(lastName)
    this.setAge(age)
  }
  setFirstName(firstName){
    this.firstName = firstName
    this.modifyDate = new Date()
  }
  setLastName(lastName){
    this.lastName = lastName
    this.modifyDate = new Date()
  }
  setAge(age) {
    this.age = age
    this.modifyDate = new Date()
  }

  registerDateString(){
    return this.printDate(this.registerDate)
  }
  modifyDateString(){
    return this.printDate(this.modifyDate)
  }

  printDate(date) {
    let date = new Intl.DateTimeFormat('en', { year: 'numeric',  month: '2-digit',  day: '2-digit' }).format(date);
    let time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute:'2-digit'}).format(date);
    return `${date} @ ${time}`;
  }
}

/**
 * @typedef Config
 * @property {User} userData 
 */
export { footer, header, playAudio, intBetween, AsyncAlert, User, Config }