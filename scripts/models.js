export  class Objective{
	constructor({objectiveId, name}){
		this.objectiveId = objectiveId;
		this.name = name;
	}
}

export class Project{
	constructor({projectId,name,objectiveId}){
		this.projectId = projectId;
		this.name = name;
		this.objectiveId = objectiveId;
	}

}