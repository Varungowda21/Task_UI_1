import { useState } from "react"
import TaskItem from "./TaskItem"

export default function TaskList(props){
  const {tasks}=props
  const [selectedStatus,setSelectedStatus]=useState('all')

  const filterTasks=()=>{
    if(selectedStatus=='all'){
      return tasks;
    }else if(selectedStatus=='completed'){
      return tasks.filter(ele=>ele.isCompleted);
    }
    else if(selectedStatus=='pending'){
     return tasks.filter(ele=>!ele.isCompleted);
    }
  }

  return(
    <div>
      <input 
      type="radio"
      name="status"
      id="all"
      checked={selectedStatus=='all'
      }
      onChange={()=>{setSelectedStatus('all')}}/>
      <label htmlFor="all">All</label>
      <input 
      type="radio"
      name="status"
      id="completed"
      checked={selectedStatus=='completed'
      } 
      onChange={()=>setSelectedStatus('completed')}/>
      <label htmlFor="completed">Completed</label>
      <input 
      type="radio"
      name="status"
      id="pending"
      checked={selectedStatus=='pending'
      }
      onChange={()=>setSelectedStatus('pending')}/>
      <label htmlFor="pending">Pending</label>
    <ul>
      {filterTasks().map(ele=>{
        return (
          <TaskItem  key={ele.id} id={ele.id}  title={ele.title} description={ele.description} isCompleted={ele.isCompleted}
          handleRemoveTask={props.handleRemoveTask}
          handleUpdatestatus={props.handleUpdatestatus}/>
        )
      })}
    </ul>
    </div>
  )
}