import React, { useState } from 'react'
import Todo from './Todo'
import "./App.css"

const App = () => {
  const[task,setTask]=useState("")
  const[todos,setTodos]=useState([])
  const changeHandler=(e)=>{
    setTask(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(task);
    const newTodos=[...todos,task] //for adding
    setTodos(newTodos);
    setTask("") 
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue);   //for deleting we shld filter with
    setTodos(newTodos)
  }
  return (
    <div>
       <div className="App">
      <form onSubmit={submitHandler}>

      <h1>TODO LIST</h1>
      <div className="body">
        <input type="text" name="Task" value={task} onChange={changeHandler} /> 
        <input type="submit" name="Add Task" value="Add Task" />
        {/* <input type="submit" name="Delete" value="Delete" /><br/> */}

      </div>
      </form>
      <Todo todos={todos} deleteHandler={deleteHandler}/> 
      {/* to get todos wch we mentioned in todo component */}
     </div>
     
    </div>
  )
}

export default App