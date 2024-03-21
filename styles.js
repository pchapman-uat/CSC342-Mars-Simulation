import { StyleSheet } from 'react-native'

class RGBA{
  constructor(red, green,blue,alpha){
    this.r = red
    this.g = green
    this.b = blue
    this.a = alpha
  }
  line() {
      return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  } 
  /**
   * Create a new RGBA instance with the same color values.
   * @returns {RGBA} A new RGBA instance.
   */
  clone() {
    return new RGBA(this.r,this.g,this.b,this.a);
  }
}

class RGB extends RGBA{
    constructor(red, green, blue){
      super(red, green, blue, 1)
    }
}

const values = {
  // "rgb(255, 255, 240)"
  fontColor : new RGB(255,255,240),
  bg: {
    // "rgba(21, 30, 28, 1)"
    eerieBlack: new RGB(21,30,28),
    // "rgba(254, 230, 199, 1)"
    champagne: new RGB(254,230,199),
    // "rgba(255, 232, 211, 1)"
    almond: new RGB(255,232,211),
    // "rgba(131, 69, 49, 1)"
    chestnut: new RGB(131,69,49),
    // "rgba(146, 103, 81, 1)"
    rawUmber: new RGB(146, 103, 81),
  },
  borderBg: new RGBA(0,0,0,0.6),
  bgArr: function(){
    let colors = []
    for (let [ key, value ]  of Object.entries(this.bg)) {
      colors.push(value.line)
    }
    console.log(colors)
    return colors
  },
  submit: new RGB(0,255,0)
}
// This creats a stylesheet
const styles = StyleSheet.create({
  content: {
    backgroundColor: values.bg.champagne.line(),
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
  },
  information: {
    padding: '5%',
  },
  text: {
    color: values.fontColor.line(),
    textAlign: 'center',
    fontSize: "15px"
  },
  border: {
    marginBottom: '5%',
    backgroundColor: values.borderBg.line(),
    padding: '5%',
    borderRadius: '25px',
  },
  icons: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'space-between',
    width: 'auto',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 25,
    marginRight: 25,
    width: 50,
    height: 50,
  },
  logo: {
    alignSelf: 'center',
    width: 75,
    height: 75,
    marginBottom: '5%',
  },
  header: {
    color: values.fontColor.line(),
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Jumpers3D',
    fontSize: 30,
  },
  subHeader: {
    color: values.fontColor.line(),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export { styles, values, RGB, RGBA };