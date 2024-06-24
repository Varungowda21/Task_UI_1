
export default function TaskItem(props){
const {id,title,description,isCompleted}=props

const handleRemove=(id)=>{
  console.log('in ti')
  props.handleRemoveTask(id)
}
const handleClick=()=>{
  // we should do api call here
  props.handleUpdatestatus(id)
}
 return(
  <li><input type="checkbox" checked={isCompleted} onChange={handleClick}></input>{title}-{description}<button onClick={()=>handleRemove(id)}>remove</button></li>
 )
}