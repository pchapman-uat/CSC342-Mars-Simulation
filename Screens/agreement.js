import { Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { styles, values } from '../styles';
const message = "Mars Adventure Simulation Terms & Conditions\nWelcome to the Mars Adventure Simulation (MAS)! Before you embark on this out-of-this-world experience, please take a moment to review the following terms and conditions:\n1. Mission Overview\n1.1. The MAS is a simulated journey to Mars, organized by the Galactic Exploration Consortium (GEC), where participants will experience the thrills and challenges of Martian exploration from the comfort of Earth.\n1.2. Participants will engage in various activities designed to simulate life on Mars, including but not limited to, rover driving, habitat maintenance, and extraterrestrial cuisine sampling.\n2. Participation Requirements\n2.1. Participants must be at least 18 years old or have parental consent to join the simulation.\n2.2. By signing up for the MAS, participants agree to abide by all rules and regulations set forth by the GEC and MAS staff.\n2.3. Participants must have a good sense of humor and a willingness to embrace the absurdity of pretending to be on Mars while still firmly planted on Earth.\n3. Gear Up for Mars\n3.1. Participants are responsible for bringing their own space-themed attire, including but not limited to, astronaut suits, alien costumes, and Martian hats.\n3.2. Don't forget your imagination and sense of wonder—these are essential tools for the journey!\n4. Health and Safety\n4.1. While MAS is all about fun and adventure, safety is paramount. Participants must refrain from engaging in any activities that could result in harm to themselves or others.\n4.2. Remember, while Martians may be fictional, slips, trips, and falls are very real. Watch your step, Earthling!\n5. Intellectual Property\n5.1. Participants agree that any ideas, inventions, or cosmic revelations discovered during the simulation shall become the property of the GEC for future intergalactic endeavors.\n5.2. However, participants will be credited with any groundbreaking discoveries, such as the elusive Martian space squirrel or the legendary green cheese mines of Phobos.\n6. Termination\n6.1. The GEC reserves the right to terminate a participant's journey to Mars if they fail to comply with the rules of the simulation or exhibit behavior deemed detrimental to the mission's success.\n6.2. Participants may request to return to Earth at any time by shouting, \"Beam me up, Scotty!\" (Note: Actual transportation back to Earth not guaranteed.)\n7. General Provisions\n7.1. By participating in MAS, participants acknowledge that they are embarking on a fantastical voyage of the imagination and agree to suspend disbelief for the duration of the simulation.\n7.2. Participants release the GEC from any liability for injuries sustained while pretending to be on Mars, including but not limited to, Martian sunburns and encounters with imaginary alien life forms.\n8. Agreement Acknowledgement\n8.1. By clicking \"I Agree\" or otherwise indicating acceptance of these terms and conditions, participants acknowledge that they have read, understood, and agreed to abide by all provisions outlined herein.\nLet the Martian Madness Begin!"

function AgreementScreen() {
  return(
    <LinearGradient
      style={[styles.information, styles.content]}
      // Set the colors for the background using an array
      colors={values.bgArr()}>
      <Text>
         {message}
      </Text>
    </LinearGradient>
    )
}

export default AgreementScreen