import { Text, Pressable, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, values } from '../styles';
import { footer } from '../default';
import { TextInput } from 'react-native-gesture-handler';

const alertText =
  'Welcome to the simulation! However we appologize, but this page is not ready yet! Please come back soon and the simulation will be fully complete!';

// This is the function for the second screen, the navigation is unused as this page dose not load any others
function SecondScreen({ navigation }) {
  return (
    <LinearGradient
      style={[styles.information, styles.content]}
      colors={[values.bg.rawUmber.line(), values.bg.eerieBlack.line()]}>
      <View style={simStyle.inputBoxContainer}>
        <View>
          <Text style={simStyle.inputLable}>First Name</Text>
          <TextInput style={simStyle.input}></TextInput>
        </View>
        <View>
          <Text style={simStyle.inputLable}>Last Name</Text>
          <TextInput style={simStyle.input}></TextInput>
        </View>
      </View>

      {/* TODO: Pressable does not do anything */}
      {/* TODO: Impliment Alert */}
      <Pressable style={simStyle.submitButton}>
        <Text style={[styles.text, {color: values.submit.line()}]}>Submit!</Text>
      </Pressable>
      {footer()}
    </LinearGradient>
  );
}

// This exports the Second Screen to be used in the App.js
export default SecondScreen;

// A second style sheet is created for this page specificly
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
    paddingBottom: 10
  },

  submitButton: [
    styles.border,
    {
      width: "95%",
      alignSelf: 'center'
    }
  ]
})