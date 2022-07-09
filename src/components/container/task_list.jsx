import React from 'react'
import { LEVELS } from '../models/levels.enum'

import { Task } from '../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = props => {
  
  const defaulTask = new Task ('Example','Default description',false,LEVELS.NORMAL)

  return (
    <div>
        <div>
          Your Tasks:
        </div>  
        <TaskComponent task={defaulTask}>        </TaskComponent>
    </div>
  )
}


export default TaskListComponent