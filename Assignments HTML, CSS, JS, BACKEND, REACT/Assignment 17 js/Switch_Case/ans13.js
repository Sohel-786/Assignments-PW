let day = "Friday";

switch (day) {
    case "Monday":
        console.log("There are 5 days until the weekend");
        break;

    case "Tuesday":
         console.log("There are 4 days until the weekend");
         break;

    case "Wednesday":
         console.log("There are 3 days until the weekend");
         break;

    case "Thursday":
          console.log("There are 2 days until the weekend");
          break;

    case "Friday":
          console.log("There are 1 days until the weekend");
          break;

    case "Saturday":
    case "Sunday":
          console.log("Today is the weekend!");
          break;

    default:
        console.log("Invalid Day");
        break;
}