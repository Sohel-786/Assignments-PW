let color1 = "green";
let color2 = "yellow";

switch (true) {
    case color1 == "red" && color2 == "blue": case color1 == "blue" && color2 == "red":
            console.log("purple");
            break;

    case color1 == "blue" && color2 == "yellow": case color1 == "yellow" && color2 == "blue":
            console.log("green");
            break;

    case color1 == "red" && color2 == "yellow": case color1 == "yellow" && color2 == "red":
            console.log("orange");
            break;

    default:
        console.log("Invalid color combination");
        break;
}