import { useState } from 'react';
import { Text, Pressable, View, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SelectDropdown from "react-native-select-dropdown"

import { styles, values, RGBA } from '../styles';
import { footer, playAudio } from '../default';



const alertText =
  'Welcome to the simulation! However we apologize, but this page is not ready yet! Please come back soon and the simulation will be fully complete!';


class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  welcome() {
    return `Welcome ${this.firstName} ${this.lastName}! (age: ${this.age}) The simulation will begin soon!`
  }
}

function SecondScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName ] = useState('')
  
  const [lastNameColor, setLastNameColor ] = useState(values.borderBg.line())
  const [firstNameColor, setFirstNameColor ] = useState(values.borderBg.line())
  const [userAge, setUserAge ] = useState()
  const [ ageColor, setAgeColor] = useState(values.borderBg.line())
    const ages = [];

    for (let i = 13; i <= 100; i++) {
      ages.push(i);
    }

  const handleSubmit = async () => {
      updateFirstName(firstName)
      updateLastName(lastName)
      updateAge(userAge)
      if(firstName.length > 0 && firstName.length > 0 && userAge) {
        await playAudio(0.02, require('../assets/audio/correct.mp3'))
        let user = new User(firstName, lastName, userAge)
        alert(user.welcome())
      } else playAudio(0.02, require('../assets/audio/wrong.mp3'))
    };

  const updateFirstName = (firstName) => {
      setFirstName(firstName)
      if (firstName.length === 0) {
        setFirstNameColor(simValues.inputError.line());
      } else {
        setFirstNameColor(values.borderBg.line())
      }
  }

  const updateLastName = (lastName) => {
      setLastName(lastName)
      if (lastName.length === 0) {
        setLastNameColor(simValues.inputError.line());
      } else {
        setLastNameColor(values.borderBg.line())
      }
  }
    const updateAge = (age) => {
      setUserAge(age)
      if (!age) {
        setAgeColor(simValues.inputError.line());
      } else {
        setAgeColor(values.borderBg.line())
      }
  }

  return (
    <LinearGradient
      style={[styles.information, styles.content]}
      colors={[values.bg.rawUmber.line(), values.bg.eerieBlack.line()]}>
      <form>
      <View style={simStyle.inputBoxContainer}>
        <View>
          <Text style={simStyle.inputLable}>First Name</Text>
          <TextInput
            style={[simStyle.input, {backgroundColor: firstNameColor}]}
            value={firstName}
            onChangeText={(text) => updateFirstName(text)}
          />
        </View>
        <View>
          <Text style={simStyle.inputLable}>Last Name</Text>
          <TextInput 
            style={[simStyle.input, {backgroundColor: lastNameColor}]}
            value={lastName}
            onChangeText={(text) => updateLastName(text)}></TextInput>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <SelectDropdown 
          buttonStyle={[styles.border, {height: 30, backgroundColor: ageColor}]} 
          buttonTextStyle={styles.text} 
          data={ages}
          defaultButtonText="Age"
          value={userAge}
          onSelect={(value) => updateAge(value)}/>
        <Text style={simStyle.dropDownText}>▼</Text>
      </View>
      </form>
      
      <Pressable style={simStyle.submitButton} onPress={handleSubmit}>
        <Text style={[styles.text, { color: values.submit.line() }]}>Submit!</Text>
      </Pressable>

      {footer()}
    </LinearGradient>
  );
}
// This exports the Second Screen to be used in the App.js
export default SecondScreen;

const simValues = {
    inputError: new RGBA(255,0,0, 0.3)
}

const simStyle = new StyleSheet.create({
  input: [
      styles.border,
      {
        width: 120, 
        color: values.fontColor.line(), 
        textAlign: 'center'
      }
    ],
  inputBoxContainer: {
    display:'flex', 
    flexDirection:'row', 
    justifyContent: 'space-around',
  },
  inputLable: {
    textAlign:'center',
    color: values.fontColor.line(),
    paddingBottom: 5,
  },
  dropDownText: {
    position: 'absolute', 
    marginLeft: "45%", 
    marginBottom: 15, 
    color: values.fontColor.line()
    },
  submitButton: [
    styles.border,
    {
      width: "95%",
      alignSelf: 'center'
    }
  ]
})