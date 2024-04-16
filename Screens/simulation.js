import {
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    View,
  } from 'react-native';
  import { RGB, RGBA, styles, values } from '../styles';
  function SimulationScreen({ navigation }) {
    // Idealy this would be within the same stylesheet as the planets but this was not possible
    const simStyle = StyleSheet.create({
      planet: {
        backgroundColor: new RGBA(255, 255, 255, 0.5).line(),
        borderRadius: "25px"
      },
    });
    const planetStyles = new StyleSheet.create({
      mercury: [
        simStyle.planet,
        {
          height: 50,
          width: 50,
          position: 'absolute',
          left: '18.1%',
          top: '50.5%',
        },
      ],
      venus: [
        simStyle.planet,
        {
          height: 180,
          width: 180,
          position: 'absolute',
          left: '20.8%',
          top: '39%',
        },
      ],
      earth: [
        simStyle.planet,
        {
          height: 180,
          width: 180,
          position: 'absolute',
          left: '30%',
          top: '39%',
        },
      ],
      mars: [
        simStyle.planet,
        {
          height: 80,
          width: 80,
          position: 'absolute',
          left: '39.5%',
          top: '48%',
        },
      ],
      jupiter: [
        simStyle.planet,
        {
          height: 250,
          width: 250,
          position: 'absolute',
          left: '43.7%',
          top: '34.5%',
        },
      ],
      saturn: [
        simStyle.planet,
        {
          height: 260,
          width: 375,
          position: 'absolute',
          left: '56.8%',
          top: '30%',
        },
      ],
      uranus: [
        simStyle.planet,
        {
          height: 170,
          width: 170,
          position: 'absolute',
          left: '75.8%',
          top: '33.5%',
        },
      ],
      neptune: [
        simStyle.planet,
        {
          height: 170,
          width: 170,
          position: 'absolute',
          left: '85.1%',
          top: '33.5%',
        },
      ],
      pluto: [
        simStyle.planet,
        {
          height: 50,
          width: 50,
          position: 'absolute',
          left: '94.5%',
          top: '42.5%',
        },
      ],
    });
    return (
      <ScrollView
        horizontal={true}
        style={{ backgroundColor: new RGB(0, 0, 0).line() }}>
        <ImageBackground
          style={{ width: 2000 }}
          source={require('../assets/images/test.png')}>
          <View style={planetStyles.mercury}></View>
          <View style={planetStyles.venus}></View>
          <View style={planetStyles.earth}></View>
          <View style={planetStyles.mars}></View>
          <View style={planetStyles.jupiter}></View>
          <View style={planetStyles.saturn}></View>
          <View style={planetStyles.uranus}></View>
          <View style={planetStyles.neptune}></View>
          <View style={planetStyles.pluto}></View>
        </ImageBackground>
      </ScrollView>
    );
  }
  
  export default SimulationScreen;
  