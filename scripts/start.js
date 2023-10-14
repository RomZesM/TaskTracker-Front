import { Objective } from "./models.js";

console.log("HEll0 W0RLD!!!");



const objectivesList = document.querySelector(".objectives");



//get JSON from API
async function getObjectivesFromServer(url) {
	const res = await fetch('http://localhost:8080/api/objective/index');
	const data = await res.json();
		
	getObjectivesFromJSON(data);
  }
//make instances from JSON
function getObjectivesFromJSON(dataWithJson){
	let objectiveArr = [];

	for (let i = 0; i < dataWithJson.length; i++) {
		const element = dataWithJson[i];
		let objective = new Objective(JSON.parse(JSON.stringify(element)))
		objectiveArr[i] = objective
	}
	
	objectiveArr.forEach((element) => {
		console.log("inside");
		let listElement = document.createElement("li");
		listElement.append(`Name - ${element.name} `);
		listElement.append(`, id - ${element.objectiveId}.`);
		listElement.appendChild(document.createElement("strong")).textContent = element.name;
		objectivesList.appendChild(listElement);
	});
}

getObjectivesFromServer();
 