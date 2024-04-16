import { Text, ScrollView, ImageBackground, StyleSheet, View} from 'react-native'
import { RGB, RGBA, styles, values } from '../styles'
function SimulationScreen({navigation}){
    const simStyles = new StyleSheet.create({
        testBtn: {
            height: 100,
            width: 100,
            backgroundColor: new RGBA(0,0,0,0.5).line()
        }
    })
    return(
        <ScrollView horizontal={true} style={{backgroundColor: new RGB(0,0,0).line()}}>
            <ImageBackground style={{width:2000}} source={require("../assets/images/test.png")}>
                <View style={simStyles.testBtn}>

                </View>
            
            </ImageBackground>
        </ScrollView>
    )

}

export default SimulationScreen
