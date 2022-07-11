import React from 'react'
import { LEVELS } from '../models/levels.enum'

import { Task } from '../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = props => {
  
  const defaulTask = new Task ('Example','Default description',false,LEVELS.NORMAL)

  return (
    <div>
        <div>
         <h1> Your Tasks: </h1>
        </div>  
        <TaskComponent task={defaulTask}>        </TaskComponent>
    </div>
  )
}


export default TaskListComponent