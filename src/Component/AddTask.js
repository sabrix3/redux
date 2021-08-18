import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Action/action';

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e)=>{e.preventDefault();
    if (text){
        dispatch(addTask({id:Math.random(),text:text, isDone:false}));
        setText("");
    }else {
        alert("Can't add an empty task !")
    }

    }

    return (
        <div className="mt-3">
            <input placeholder="Add a task..." onChange={(e)=>setText(e.target.value)} value={text} />
            <Button variant="dark" className="" style={{marginLeft:"10px"}} onClick={handleChange}>Add</Button>
        </div>
    )
}

export default AddTask
