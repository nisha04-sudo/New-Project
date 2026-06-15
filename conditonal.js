var light= "white";
if (light=="green"){
    console.log("go");
}
else if (light=="yellow"){
    console.log("slow down");
}
else if (light=="red"){
    console.log("stop");
}
else{
    console.log("invalid light");
}   
console.log("end of program");

//switch case
var light= "white";
switch(light){
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "red":
        console.log("stop");
        break;
    default:
        console.log("invalid light");
}   