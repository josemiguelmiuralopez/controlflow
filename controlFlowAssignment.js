//Part 1: Growing Pains
//Set up constants
const radiusOfPlantContainer = 5;
const pi = 3.14;
const areaOfPlantContainer = pi * radiusOfPlantContainer * radiusOfPlantContainer;
const minPlantSpace = 0.8;

//Set up rest of variables
let startingNumberOfPlants = 20;
let maxNumberOfPlantsThatFit = areaOfPlantContainer / minPlantSpace;
let prune = maxNumberOfPlantsThatFit * 0.8;
let monitor = maxNumberOfPlantsThatFit * 0.5;

//Plant growth by week
let week1 = startingNumberOfPlants * 2;
let week2 = week1 * 2;
let week3 = week2 * 2;

//Week 1
if (week1 > prune) {
  console.log("Prune");
} else if (week1 > monitor) {
  console.log("Monitor");
} else {
  console.log("Room for more");
}

//Week 2
if (week2 > prune) {
  console.log("Prune");
} else if (week2 > monitor) {
  console.log("Monitor");
} else {
  console.log("Room for more");
}

//Week 3
if (week3 > prune) {
  console.log("Prune");
} else if (week3 > monitor) {
  console.log("Monitor");
} else {
  console.log("Room for more")
}

//Part 2: Thinking Bigger
let newStartingNumberOfPlants = 100;

let newNumberOfPlants = newStartingNumberOfPlants * 2 ** 10;
let plantGrowthAfterTenWeeks = newNumberOfPlants * minPlantSpace;
let additionalSpaceNeeded = plantGrowthAfterTenWeeks - maxNumberOfPlantsThatFit;
console.log(additionalSpaceNeeded);
let newContainerSize = areaOfPlantContainer + additionalSpaceNeeded;
console.log(newContainerSize);

//Part 3: Errors in Judgement
try {
  if (newContainerSize <= areaOfPlantContainer) { 
    console.log("Proceed")
    } else {
      throw "Error - not enough space"
    }
  } catch (error) {
    console.log(error);
  }

  console.log("Happy Thanksgiving!")
  