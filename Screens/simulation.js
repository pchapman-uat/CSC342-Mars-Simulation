import { Text, ScrollView, ImageBackground, StyleSheet, View} from 'react-native'
import { RGB, RGBA, styles, values } from '../styles'
function SimulationScreen({navigation}){
    const simStyles = new StyleSheet.create({
        mars: {
            height: 100,
            width: 100,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            left: "39%",
            top: "45%"
        }
    })
    return(
        <ScrollView horizontal={true} style={{backgroundColor: new RGB(0,0,0).line()}}>
            <ImageBackground style={{width:2000}} source={require("../assets/images/test.png")}>
            <View style={simStyles.mercury}>

            
            </View>
            <View style={simStyles.venus}>

            </View>
            <View style={simStyles.earth}>

            </View>
            <View style={simStyles.mars}>

            </View>
            <View style={simStyles.jupiter}>

            </View>
            <View style={simStyles.saturn}>

            </View>
            <View style={simStyles.uranus}>

            </View>
            <View style={simStyles.neptune}>

            </View>
            <View style={simStyles.pluto}>

            </View>
            
            </ImageBackground>
        </ScrollView>
    )

}

export default SimulationScreen
