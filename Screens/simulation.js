import { useState } from 'react';
import {
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet,
    View,
    Pressable,
    Dimensions,
  } from 'react-native';
  import { RGB, RGBA, styles, values } from '../styles';
  function SimulationScreen({ navigation }) {
    const [infoColor, setInfoColor] = useState(new RGBA(0,0,0,0))
    const [info, setInfo ] = useState("")
    // Idealy this would be within the same stylesheet as the planets but this was not possible
    const simStyle = StyleSheet.create({
      planet: {
        backgroundColor: new RGBA(255, 255, 255, 0.5).line(),
        borderRadius: "25px",
        position: 'absolute',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: infoColor.line(),
        margin: 10,
        borderRadius: "20px",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2, // Ensure the overlay view stays on top
      },
      infoText:{
        padding: 10
      },
      container: {
          flex: 1
      },
      imgBg: { 
          width: 2000,
          display: 'flex'
        }
    });
    const planetStyles = new StyleSheet.create({
      mercury: [
        simStyle.planet,
        {
          height: 50,
          width: 50,
          left: '18.1%'
        },
      ],
      venus: [
        simStyle.planet,
        {
          height: 180,
          width: 180,
          left: '20.8%',
        },
      ],
      earth: [
        simStyle.planet,
        {
          height: 180,
          width: 180,
          left: '30%',
        },
      ],
      mars: [
        simStyle.planet,
        {
          height: 80,
          width: 80,
          left: '39.5%',
        },
      ],
      jupiter: [
        simStyle.planet,
        {
          height: 250,
          width: 250,
          left: '43.7%',
        },
      ],
      saturn: [
        simStyle.planet,
        {
          height: 260,
          width: 375,
          left: '56.8%',
        },
      ],
      uranus: [
        simStyle.planet,
        {
          height: 170,
          width: 170,
          left: '75.8%',
        },
      ],
      neptune: [
        simStyle.planet,
        {
          height: 170,
          width: 170,
          left: '85.1%',
        },
      ],
      pluto: [
        simStyle.planet,
        {
          height: 50,
          width: 50,
          left: '94.5%',

        },
      ],
      sun: [
        simStyle.planet,
        {
          height: "100%",
          width: 430,
          left: '-5%',
          borderRadius: "40%",
          zIndex: 4
        }
      ],
      container: {
        justifyContent: 'center',
        marginTop: "2.3%",
        flex: 1
      },
      offset1: {
        marginBottom: '12.3%'
      },
      offset2: {
        height: "100px",
        marginTop: "-9.7%"
      },
    });
    const planets = {
        mercury: {
            description: "The smallest planet, closest to the Sun. It has a rocky surface and extreme temperature variations.",
            color: new RGB(194, 194, 194)
        },
        venus: {
            description: "Similar in size to Earth, it's known for its thick, toxic atmosphere and intense greenhouse effect, making it the hottest planet in our solar system.",
            color: new RGB(239, 226, 105)
        },
        earth: {
            description: "Our home planet, with a diverse environment that supports life as we know it. It has a unique combination of land, water, and atmosphere.",
            color: new RGB(91, 155, 213)
        },
        mars: {
          description: "Often called the 'Red Planet' due to its rusty color. It has polar ice caps, canyons, and extinct volcanoes, and it's a focus of exploration for its potential to harbor life.",
          color: new RGB(228, 96, 96)
        },
        jupiter: {
            description: "The largest planet, known for its massive size and iconic swirling bands of gas. It has a dynamic atmosphere and a large number of moons, including the four Galilean moons.",
            color: new RGB(244, 187, 99)
        },
        saturn: {
            description: "Known for its spectacular ring system, Saturn is the second-largest planet. It's mostly composed of hydrogen and helium gas, with a rocky core.",
            color: new RGB(218, 214, 203)
        },
        uranus: {
            description: "An ice giant with a unique feature: it rotates on its side. Uranus has a faint ring system and a blue-green color due to the presence of methane in its atmosphere.",
            color: new RGB(133, 204, 239)
        },
        neptune: {
            description: "Similar in composition to Uranus, Neptune is the farthest planet from the Sun. It has strong winds and a striking blue coloration, with faint rings and a large moon, Triton.",
            color: new RGB(68, 109, 162)
        },
        pluto: {
            description: "Classified as a dwarf planet, Pluto is located in the Kuiper Belt. It's composed of ice and rock and has a thin atmosphere. Pluto has five known moons, with its largest moon, Charon, being particularly notable for its size relative to Pluto.",
            color: new RGB(180, 169, 169)
        },
        sun: {
            description: "The Sun is a luminous sphere of hot plasma at the center of our solar system, primarily composed of hydrogen and helium. It provides the light, heat, and energy necessary for life on Earth through the process of nuclear fusion.",
            color: new RGB(255, 255, 0)
        }
      };

    function handlePressinfo(key){
        console.log(`Diplaying ${key}`)
        let currentInfo = planets[key]
        setInfoColor(currentInfo.color)
        setInfo(currentInfo.description)
    }



    

    return (
        <View style={simStyle.container}>
            <ScrollView
                horizontal={true}
                style={{ backgroundColor: new RGB(0, 0, 0).line()}}>
                <ImageBackground
                style={simStyle.imgBg}
                source={require('../assets/images/test.png')}>
                <Pressable style={planetStyles.sun} onPress={() => handlePressinfo("sun")}></Pressable>  
                <View style={planetStyles.container}> 
                  
                  <Pressable style={planetStyles.mercury} onPress={() => handlePressinfo("mercury")}></Pressable>
                  <Pressable style={planetStyles.venus} onPress={() => handlePressinfo("venus")}></Pressable>
                  <Pressable style={planetStyles.earth} onPress={() => handlePressinfo("earth")}></Pressable>
                  <Pressable style={planetStyles.mars} onPress={() => handlePressinfo("mars")}></Pressable>
                  <Pressable style={planetStyles.jupiter} onPress={() => handlePressinfo("jupiter")}></Pressable>
                  <Pressable style={planetStyles.saturn} onPress={() => handlePressinfo("saturn")}></Pressable>
                  <View style={planetStyles.offset1}>
                    <Pressable style={planetStyles.uranus} onPress={() => handlePressinfo("uranus")}></Pressable>
                    <Pressable style={planetStyles.neptune} onPress={() => handlePressinfo("neptune")}></Pressable>
                  </View>
                  <View style={planetStyles.test}>
                    <View style={planetStyles.offset2}> 
                      <Pressable style={planetStyles.pluto} onPress={() => handlePressinfo("pluto")}></Pressable>
                    </View>   
                  </View>
                </View>

                </ImageBackground>
            </ScrollView>
            <View style={simStyle.overlay}>
                <Text style={simStyle.infoText}>
                    {info}
                </Text>
            </View>
        </View>

    );
  }
  
  export default SimulationScreen;
  