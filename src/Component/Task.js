import React from 'react'
import Edit from './Edit'
import {useDispatch} from 'react-redux'
import { doneTask } from '../JS/Action/action'
import { deleteTask } from '../JS/Action/action'
import Task1 from "./Task1.css"
import { Button } from 'react-bootstrap'


const Task = ({task}) => {
    const dispatch = useDispatch();
    return (
        <div>
           <br/>
           <span className={task.isDone?"done":null}>{task.text}</span>
            <Button style={{marginLeft:"7px"}} variant="dark" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
            <Edit task={task}/>
            <Button style={{marginLeft:"7px"}} variant="dark" onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "Undone":"Done"} </Button>

            
        </div>
    )
}

export default Task
