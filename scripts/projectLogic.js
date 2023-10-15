import { Project } from "./models.js";

const projectList = document.querySelector(".projects");

//get JSON from API
export async function getProjectsFromServer(url) {
	const res = await fetch('http://localhost:8080/api/project/index');
	const data = await res.json();
		
	getProjectFromJSON(data);
  }
//make instances from JSON
function getProjectFromJSON(dataWithJson){
	let projectArr = [];

	for (let i = 0; i < dataWithJson.length; i++) {
		const element = dataWithJson[i];
		let project = new Project(JSON.parse(JSON.stringify(element)));
		projectArr[i] = project;
	}
	
	projectArr.forEach((element) => {
		
		let listElement = document.createElement("li");
		listElement.append(`Name - `);
		listElement.appendChild(document.createElement("strong")).textContent = element.name;
		listElement.append(`, id - ${element.projectId}.`);
		listElement.append(`, objective id - ${element.objectiveId}.`);
	
		projectList.appendChild(listElement);
	});
}