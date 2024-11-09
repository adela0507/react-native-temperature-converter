const UNITS={
    celsius:"°C",
    farahneit:"°F",
}

function convertTemperatureTo(temperature, unitTo){
if(unitTo==UNITS.celsius){
    return(temperature-32)/1.8;

}
else if(unitTo==UNITS.farahneit){
    return temperature*1.8+32;
}
else{
    throw new Error("Invalid unit");
}
}
function getOppositeUnit(unit){
    return unit===UNITS.celsius? UNITS.farahneit : UNITS.celsius;
}
function isIceTemperature(temperature,unit){
    if (unit===UNITS.celsius){
        return temperature<=0;
    }else if(unit===UNITS.farahneit){
return temperature<=32;
    }
    else {
        throw new ERROR("invalid unit");
    }
}

export {UNITS, convertTemperatureTo, getOppositeUnit,isIceTemperature}