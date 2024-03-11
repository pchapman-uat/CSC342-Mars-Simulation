import { Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles, values } from './styles';

import { AdjustColor, AdjustableColor } from './adjustColor'
function Example() {
  const test = new AdjustableColor(values.bg.rawUmber, "r")
  let newColor = AdjustColor(test)

  return(
    <SafeAreaView>
      <LinearGradient style={[styles.information, styles.content]}
      colors={[
        newColor.line(),
        values.bg.eerieBlack.line(),
      ]}>
          <Text> Hello World</Text>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Example