import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Task from "./Task"
import  {Button} from "react-bootstrap"


const ListTask = () => {
const listtask = useSelector((state)=> state.task.listTasks) ;
const [status, setStatus]=useState("all")  
    
    return (
        <div className="mt-3" style={{}}>
            <Button variant="dark"  onClick={()=>setStatus("all")}>all</Button>
            <Button variant="dark" style={{marginLeft:"7px"}}  onClick={()=>setStatus("done")}>done</Button>
            <Button variant="dark" style={{marginLeft:"7px"}}  onClick={()=>setStatus("undone")}>undone</Button>

            
 
            {
            status==="done"
            ?listtask
            .filter((el)=> el.isDone===true)
            
            .map((el)=> <Task task={el} key={el.id}/>)
            :status==="undone"
            
            
            ?listtask
            .filter((el)=> el.isDone===false)
            .map((el)=> <Task task={el} key={el.id}/>)
            :listtask.map((el)=><Task task={el} key={el.id}/>)
            }
        </div>
    )
}

export default ListTask
