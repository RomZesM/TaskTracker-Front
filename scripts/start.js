
import { getObjectivesFromServer } from "./objectivesLogic.js";
import { getProjectsFromServer } from "./projectLogic.js";

console.log("HEll0 W0RLD!!!");



const objectivesList = document.querySelector(".objectives");





getObjectivesFromServer();
getProjectsFromServer();
 