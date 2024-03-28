import { useState } from 'react';
import { Text, Pressable, View, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SelectDropdown from "react-native-select-dropdown"

import { styles, values, RGBA } from '../styles';
import { footer, playAudio, intBetween, AsyncAlert } from '../default';

// This is a class for the user, it stores the use's first and last name, as well as their age
// It also containes a methods to welcome the user
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

// This is the function for the second screen
function SecondScreen({ navigation }) {
  // create two states, first and last name, both start empty and have a setter
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName ] = useState('')
  // Create two color states, with the default value being the border background
  const [lastNameColor, setLastNameColor ] = useState(values.borderBg.line())
  const [firstNameColor, setFirstNameColor ] = useState(values.borderBg.line())
  // Create an age state for the user, starting as undefined
  const [userAge, setUserAge ] = useState()
  // Create an ageColor state, starting with the border background
  const [ ageColor, setAgeColor] = useState(values.borderBg.line())
  // Create an array using the intBetween function
  // This return an array of intagers between the min and max value
  ages = intBetween(13,100)

  // Function to handle when the submit was pressed
  const handleSubmit = async () => {
      //Update the first name, last name, and age colors and values 
      let b_first = updateFirstName(firstName)
      let b_last = updateLastName(lastName)
      let b_age = updateAge(userAge)
      // if all values exist
      if(b_first && b_last && b_age) {
        // Play the correct sound
        await playAudio(0.02, require('../assets/audio/correct.mp3'))
        // Create a new user
        let user = new User(firstName, lastName, userAge)
        // Display the user welcome
        await AsyncAlert("Test", "test")

        navigation.navigate('')
      // Else play the wrong sound
      } else playAudio(0.02, require('../assets/audio/wrong.mp3'))
    };

  // Update the first name
  const updateFirstName = (firstName) => {
      //Set the state of the firstName value  
      setFirstName(firstName)
      // If the length is greater than 0, return true and update the color
      if (firstName.length === 0) {
        setFirstNameColor(simValues.inputError.line());
        return false
      // Else set the color back to normal and return true
      } else {
        setFirstNameColor(values.borderBg.line())
        return true
      }
  }

  // Same function as updateFirst name
  // TODO: Combine update first and last name
  const updateLastName = (lastName) => {
      setLastName(lastName)
      if (lastName.length === 0) {
        setLastNameColor(simValues.inputError.line());
        return false
      } else {
        setLastNameColor(values.borderBg.line())
        return true
      }
  }
  // update the age
    const updateAge = (age) => {
      setUserAge(age)
      // If the age is undefined, or false, set the color and return false
      if (!age) {
        setAgeColor(simValues.inputError.line());
        return false
      } else {
        setAgeColor(values.borderBg.line())
        return true
      }
  }

  return (
    // Gradient background
    <LinearGradient
      style={[styles.information, styles.content]}
      // Set the colors for the background using an array
      colors={[values.bg.rawUmber.line(), values.bg.eerieBlack.line()]}>
        {/* Container for the input boxes */}
        <View style={simStyle.inputBoxContainer}>
          {/* Container for first name input */}
          <View>
            {/* Lable for first name */}
            <Text style={simStyle.inputLable}>First Name</Text>
            {/* Text input for first name */}
            <TextInput
              style={[simStyle.input, {backgroundColor: firstNameColor}]}
              value={firstName}
              // On change update the first name color and value
              onChangeText={(text) => updateFirstName(text)}
            />
          </View>
          {/* Same as first name */}
          <View>
            <Text style={simStyle.inputLable}>Last Name</Text>
            <TextInput 
              style={[simStyle.input, {backgroundColor: lastNameColor}]}
              value={lastName}
              onChangeText={(text) => updateLastName(text)}></TextInput>
          </View>
        </View>
        {/* Container for dropdown */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {/* Selection dropdown object */}
          <SelectDropdown 
            // Style for the button
            buttonStyle={[styles.border, {height: 40, backgroundColor: ageColor, padding: 0}]} 
            // Style for the text
            buttonTextStyle={styles.text}
            // Array of data
            data={ages}
            // Default text
            defaultButtonText="Age"
            // Current value
            value={userAge}
            // On change update the value
            onSelect={(value) => updateAge(value)}/>
            {/* Text for dropdown arrow using ascii */}
          <Text style={simStyle.dropDownText}>▼</Text>
        </View>
      {/* Submit button */}
      <Pressable style={simStyle.submitButton} onPress={handleSubmit}>
        <Text style={[styles.text, { color: values.submit.line() }]}>Submit!</Text>
      </Pressable>
      {/* Footer object */}
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
  // Absolute position is needed to align this properly
  // pointer events is set to none to allow presses to pass through
  dropDownText: {
    position: 'absolute',
    paddingLeft: 150,
    paddingBottom: 15, 
    color: values.fontColor.line(),
    pointerEvents: 'none'
    },
  submitButton: [
    styles.border,
    {
      width: "95%",
      alignSelf: 'center'
    }
  ]
})