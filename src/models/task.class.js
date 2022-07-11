import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    descrition = '';
    completed = false;
    level = LEVELS.NORMAL;


    constructor(name,description,completed,level){
        this.name = name;
        this.descrition = description;
        this.completed = completed;
        this.level = level
    }

}