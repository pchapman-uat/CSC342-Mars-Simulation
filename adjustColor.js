import { useState, useEffect } from 'react';



class AdjustableColor {
  amount = 1
  loopable = false
  speed = 100
  constructor(color, type) {
    this.colorObject = color
    this.colorType = type
  }
}
/**
 * 
 * @param {AdjustableColor} AdjustColObject 
 * @returns 
 */
function AdjustColor(AdjustColObject) {
  const ACO = AdjustColObject
  const [time, setTime] = useState(new Date());
  const [newColor, setNewColor] = useState(ACO.colorObject.clone()); // Assuming values is in scope

  useEffect(() => {
    const interval = setInterval(() => {
      // Update newColor with the incremented value using a functional update
      setNewColor(prevColor => {
        const value = ACO.colorType
        const updatedColor = prevColor.clone();
        if(ACO.loopable){
          if(updatedColor[value] > 255) updatedColor[value] = 0;
          else if(updatedColor[value] < 0) updatedColor[value] = 255;
        }
        updatedColor[value] = updatedColor[value] + ACO.amount;
        return updatedColor;
      });

      // Update the time to trigger a re-render
      setTime(new Date());
    }, ACO.speed);

    return () => clearInterval(interval);
  }, []);
  return newColor
}

export { AdjustColor, AdjustableColor}
