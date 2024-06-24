import { useState } from "react"

export default function TaskForm(props){
  //title
  //description
  //cleintErrors
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [cleintErrors,setClientErrors]=useState( {})
  const errors={}

const runClientValidation=()=>{
    if(title.trim().length===0){
      errors.title='Title cannot be empty'
    }
    if(description.trim().length===0){
      errors.description='Description cannot be empty'
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    runClientValidation()
    if(Object.keys(errors).length==0){
   const task={
    id:Number(new Date()),
    title:title,
    description:description,
    isCompleted:false
   }
  //  console.log(task)
  props.handleAddTask(task)
   
   setClientErrors({})
   setTitle('')
   setDescription('')
    }else{
      setClientErrors(errors)
    }
  }
  return <div>
    <h2>Add Task</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Enter Task</label>
      <input id="title"
      value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      {cleintErrors.title && <span>{cleintErrors.title}</span>}<br></br>

      <label htmlFor="description">Enter description</label>
      <textarea id="description"
      value={description}
      onChange={(e)=>{setDescription(e.target.value)}}>
      </textarea>{cleintErrors.description && <span>{cleintErrors.description}</span>}<br></br>
      <input type="submit"></input>
    </form>
  </div>
}