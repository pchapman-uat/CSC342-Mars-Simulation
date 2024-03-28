import { Text, ScrollView, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { styles, values } from '../styles';
const message = `
**Mars Adventure Simulation Terms & Conditions**

Welcome to the Mars Adventure Simulation (MAS)! Before you embark on this out-of-this-world experience, please take a moment to review the following terms and conditions:

**1. Mission Overview**
   1.1. The MAS is a simulated journey to Mars, organized by the Galactic Exploration Consortium (GEC), where participants will experience the thrills and challenges of Martian exploration from the comfort of Earth.
   1.2. Participants will engage in various activities designed to simulate life on Mars, including but not limited to, rover driving, habitat maintenance, and extraterrestrial cuisine sampling.

**2. Participation Requirements**
   2.1. Participants must be at least 18 years old or have parental consent to join the simulation.
   2.2. By signing up for the MAS, participants agree to abide by all rules and regulations set forth by the GEC and MAS staff.
   2.3. Participants must have a good sense of humor and a willingness to embrace the absurdity of pretending to be on Mars while still firmly planted on Earth.

**3. Gear Up for Mars**
   3.1. Participants are responsible for bringing their own space-themed attire, including but not limited to, astronaut suits, alien costumes, and Martian hats.
   3.2. Don't forget your imagination and sense of wonder—these are essential tools for the journey!

**4. Health and Safety**
   4.1. While MAS is all about fun and adventure, safety is paramount. Participants must refrain from engaging in any activities that could result in harm to themselves or others.
   4.2. Remember, while Martians may be fictional, slips, trips, and falls are very real. Watch your step, Earthling!

**5. Intellectual Property**
   5.1. Participants agree that any ideas, inventions, or cosmic revelations discovered during the simulation shall become the property of the GEC for future intergalactic endeavors.
   5.2. However, participants will be credited with any groundbreaking discoveries, such as the elusive Martian space squirrel or the legendary green cheese mines of Phobos.

**6. Termination**
   6.1. The GEC reserves the right to terminate a participant's journey to Mars if they fail to comply with the rules of the simulation or exhibit behavior deemed detrimental to the mission's success.
   6.2. Participants may request to return to Earth at any time by shouting, "Beam me up, Scotty!" (Note: Actual transportation back to Earth not guaranteed.)

**7. General Provisions**
   7.1. By participating in MAS, participants acknowledge that they are embarking on a fantastical voyage of the imagination and agree to suspend disbelief for the duration of the simulation.
   7.2. Participants release the GEC from any liability for injuries sustained while pretending to be on Mars, including but not limited to, Martian sunburns and encounters with imaginary alien life forms.

**8. Agreement Acknowledgement**
   8.1. By clicking "I Agree" or otherwise indicating acceptance of these terms and conditions, participants acknowledge that they have read, understood, and agreed to abide by all provisions outlined herein.

**Let the Martian Madness Begin!**

GEC Galactic Headquarters
[Signature]
`
function AgreementScreen() {
  return(
    <ScrollView style={{backgroundColor: values.bg.rawUmber.line()}}>
      <LinearGradient
      style={[styles.information, styles.content]}
      // Set the colors for the background using an array
      colors={values.bgArr()}>
        <View style={styles.border}>
          <Text style={agreeStyle.text}>
            {message}
          </Text>
        </View>

      </LinearGradient>
    </ScrollView>
    )
}
export default AgreementScreen


const agreeStyle = new StyleSheet.create({
  text: {
      color: values.fontColor.line()
    }
})