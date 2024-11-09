import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import{s} from "./Button.style";

export function ButtonConvert({unit,onPress}){
    return <TouchableOpacity onPress={onPress} style={s.button}>
<Text style={s.buttonTxt}>Convert to {unit}</Text>
    </TouchableOpacity>;
}