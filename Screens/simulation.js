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
    // Idealy this would be within the same stylesheet as the planets but this was not possible
    const simStyle = StyleSheet.create({
      planet: {
        backgroundColor: new RGBA(255, 255, 255, 0.5).line(),
        borderRadius: "25px"
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2, // Ensure the overlay view stays on top
      },
      container: {
          flex: 1
      }
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
    const planets = {
        mercury: {
          description: "The smallest planet, closest to the Sun. It has a rocky surface and extreme temperature variations."
        },
        venus: {
          description: "Similar in size to Earth, it's known for its thick, toxic atmosphere and intense greenhouse effect, making it the hottest planet in our solar system."
        },
        earth: {
          description: "Our home planet, with a diverse environment that supports life as we know it. It has a unique combination of land, water, and atmosphere."
        },
        mars: {
          description: "Often called the 'Red Planet' due to its rusty color. It has polar ice caps, canyons, and extinct volcanoes, and it's a focus of exploration for its potential to harbor life."
        },
        jupiter: {
          description: "The largest planet, known for its massive size and iconic swirling bands of gas. It has a dynamic atmosphere and a large number of moons, including the four Galilean moons."
        },
        saturn: {
          description: "Known for its spectacular ring system, Saturn is the second-largest planet. It's mostly composed of hydrogen and helium gas, with a rocky core."
        },
        uranus: {
          description: "An ice giant with a unique feature: it rotates on its side. Uranus has a faint ring system and a blue-green color due to the presence of methane in its atmosphere."
        },
        neptune: {
          description: "Similar in composition to Uranus, Neptune is the farthest planet from the Sun. It has strong winds and a striking blue coloration, with faint rings and a large moon, Triton."
        },
        pluto: {
          description: "Classified as a dwarf planet, Pluto is located in the Kuiper Belt. It's composed of ice and rock and has a thin atmosphere. Pluto has five known moons, with its largest moon, Charon, being particularly notable for its size relative to Pluto."
        }
      };

    function handlePressinfo(key){
        console.log(planets[key].description)
    }
    return (
        <View style={simStyle.container}>
            <ScrollView
                horizontal={true}
                style={{ backgroundColor: new RGB(0, 0, 0).line()}}>
                <ImageBackground
                style={{ width: 2000 }}
                source={require('../assets/images/test.png')}>
                <Pressable style={planetStyles.mercury} onPress={() => handlePressinfo("mercury")}></Pressable>
                <Pressable style={planetStyles.venus} onPress={() => handlePressinfo("venus")}></Pressable>
                <Pressable style={planetStyles.earth} onPress={() => handlePressinfo("earth")}></Pressable>
                <Pressable style={planetStyles.mars} onPress={() => handlePressinfo("mars")}></Pressable>
                <Pressable style={planetStyles.jupiter} onPress={() => handlePressinfo("jupiter")}></Pressable>
                <Pressable style={planetStyles.saturn} onPress={() => handlePressinfo("saturn")}></Pressable>
                <Pressable style={planetStyles.uranus} onPress={() => handlePressinfo("uranus")}></Pressable>
                <Pressable style={planetStyles.neptune} onPress={() => handlePressinfo("neptune")}></Pressable>
                <Pressable style={planetStyles.pluto} onPress={() => handlePressinfo("pluto")}></Pressable>
                </ImageBackground>
            </ScrollView>
            <View style={styles.overlay}>
             {planets.mars.description}
            </View>
        </View>

    );
  }
  
  export default SimulationScreen;
  