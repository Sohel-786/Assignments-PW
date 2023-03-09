let color1 = "red";
let color2 = "blue";

switch (color1,color2) {
    case "red","blue" || "blue","red":
            console.log("purple");
        break;

    default:
        console.log("Invalid color combination");
        break;
}