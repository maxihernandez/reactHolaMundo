import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/forms/task'

const TasListComponent = () => {
    const defaultTask = new Task('Examle','Deafult desrciption', false, LEVELS.NORMAL)
    
    
    return (
        <div>
            <div>
               Your Tasks :
            </div>
            <TaskComponent task={defaultTask}>

            </TaskComponent>
        </div>
  )
}



export default TasListComponent