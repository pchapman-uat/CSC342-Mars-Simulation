import { Text, ScrollView, ImageBackground, StyleSheet, View} from 'react-native'
import { RGB, RGBA, styles, values } from '../styles'
function SimulationScreen({navigation}){
    const simStyles = new StyleSheet.create({
        mercury: {
            height: 50,
            width: 50,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "18.1%",
            top: "50.5%"
        },
        venus: {
            height: 180,
            width: 180,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "20.8%",
            top: "39%"
        },
        earth: {
            height: 180,
            width: 180,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "30%",
            top: "39%"
        },
        mars: {
            height: 80,
            width: 80,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "39.5%",
            top: "48%"
        },
        jupiter: {
            height: 250,
            width: 250,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "43.7%",
            top: "34.5%"
        },
        saturn: {
            height: 260,
            width: 375,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "56.8%",
            top: "30%"
        },
        uranus: {
            height: 170,
            width: 170,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "75.8%",
            top: "33.5%"
        },
        neptune: {
            height: 170,
            width: 170,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "85.1%",
            top: "33.5%"
        },
        pluto: {
            height: 50,
            width: 50,
            backgroundColor: new RGBA(255,255,255,0.5).line(),
            position: 'absolute',
            left: "94.5%",
            top: "43%"
        },
        
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
