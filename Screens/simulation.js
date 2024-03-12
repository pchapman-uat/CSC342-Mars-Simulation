import { Text, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, values } from '../styles';
import { header, footer } from '../default';

const alertText =
  'Welcome to the simulation! However we appologize, but this page is not ready yet! Please come back soon and the simulation will be fully complete!';

// This is the function for the second scree, the navigation is unused as this page dose not load any others
function SecondScreen({ navigation }) {
  return (
    <LinearGradient
      style={[styles.information, styles.content]}
      colors={[values.bg.rawUmber.line(), values.bg.eerieBlack.line()]}>
      {header()}
      <Pressable
        style={styles.border}
        // alert(alertText) can be used, however importing alert from react-native has more options
        onPress={() => Alert.alert('Not Available', alertText)}>
        <Text style={[styles.text, { color: 'rgb(0,255,0)' }]}>Launch!</Text>
      </Pressable>
      {footer()}
    </LinearGradient>
  );
}

// This exports the Second Screen to be used in the App.js
export default SecondScreen;
