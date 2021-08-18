import { ADD_TASK, EDIT_TASK, DONE_TASK, DELETE_TASK } from "../Constant/action-Type";


const intialState = {
    listTasks : [{id:1,text:"Take a coffee"}],
}

const TaskReducer = (state= intialState, {type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return {...state, listTasks: [...state.listTasks,payload]}
            case EDIT_TASK:
                return {...state,listTasks: state.listTasks.map((el)=>
                    el.id === payload.id ? {...el, text: payload.newTask} : el )}
        case DELETE_TASK:
            return {...state, listTasks: state.listTasks.filter ((el)=>
            el.id !== payload )};
        case DONE_TASK :
            return {...state, listTasks: state.listTasks.map ((el)=>
                el.id === payload ?{...el, isDone: !el.isDone}: el )};

        
            
            
    
        default:
            return state
    }
}

export default TaskReducer