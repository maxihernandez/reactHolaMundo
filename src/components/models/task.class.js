import { LEVELS } from "./levels.enum";

export class Task {
    name= '';
    description='';
    copmleted = false;
    level = LEVELS.NORMAL


    constructor(name,description,clompleted,level){
            this.name = name;
            this.description = description;
            this.completed = clompleted;
            this.level = level
    }
    

}