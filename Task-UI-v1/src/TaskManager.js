import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
export default function TaskManager(){
  const [tasks,setTasks]=useState([])
  
  const handleAddTask=(task)=>{
   console.log('tm',task)
   const newArr=[...tasks,task]
   setTasks(newArr)
  }
  const handleRemoveTask=(id)=>{
    console.log('in tm',id)
    const newArr=tasks.filter(ele=>{
      return ele.id!==id
    })
    setTasks(newArr)
  }
  const handleUpdatestatus=(id)=>{
    const newArr=tasks.map(ele=>{
      if(ele.id===id){
        return {...ele,isCompleted:!ele.isCompleted}
      }else{
        return {...ele}
      }
    })
    setTasks(newArr)
  }
return (
  <div>
  <h1>Tasks-{tasks.length}</h1>
  <TaskList tasks={tasks}
   handleRemoveTask={handleRemoveTask}
   handleUpdatestatus={handleUpdatestatus}/>
  <TaskForm handleAddTask={handleAddTask}/>
  </div>
)
}