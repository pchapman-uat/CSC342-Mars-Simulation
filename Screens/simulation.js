import { Text, ScrollView, ImageBackground, StyleSheet} from 'react-native'
import { RGB, styles, values } from '../styles'
function SimulationScreen({navigation}){
    return(
        <ScrollView horizontal={true} style={{backgroundColor: new RGB(0,0,0).line()}}>
            <ImageBackground style={{width:2000}} source={require("../assets/images/test.png")}>
            
            </ImageBackground>
        </ScrollView>
    )

}
export default SimulationScreen
