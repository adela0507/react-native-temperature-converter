import { Text, View, ImageBackground } from "react-native";
import {s} from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hot from "../assets/hot.png"
import cold from "../assets/cold.png"
import {Input} from "../components/Inputs/Input";
import { useEffect, useState } from "react";
import {DisplayTemperature} from "../components/DisplayTemperature/DisplayTemperature"
import {UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature} from "../utils/temperature"
import {ButtonConvert} from "../components/ButtonConvert/ButtonConvert";
export default function Page() {
  const [inputValue, setInputValue]=useState(0);
  const[currentUnit,setCurrentUnit]=useState("°C");
  const [currentBackground,setCurrentBackground]=useState(cold);
  const oppositeUnit=getOppositeUnit(currentUnit);

  useEffect(()=>{
    if(isIceTemperature(inputValue,currentUnit)){
          setCurrentBackground(cold);
    }else {
      setCurrentBackground(hot);
    }
  },[inputValue,currentUnit]);

  function getConvertedTemperature(){
    if(isNaN(inputValue)){
      return"";
    }else{
     return convertTemperatureTo(inputValue,oppositeUnit).toFixed(1);
    }
  }

  return (
  <ImageBackground style={s.backgroundImage} source={currentBackground}>
  <SafeAreaProvider>
    <SafeAreaView style={s.root}> 
      <View style={s.workspace}>
        <DisplayTemperature 
        unit={oppositeUnit}
        temperature={getConvertedTemperature()}/>
        <Input 
        unit={currentUnit}
        onChange={setInputValue} defaultValue={0}/>
        <ButtonConvert onPress={()=>{setCurrentUnit(oppositeUnit)}} unit={currentUnit}/>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
  </ImageBackground>
  );
}
