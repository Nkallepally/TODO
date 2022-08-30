import React from 'react'


const Todo = ({todos,deleteHandler,}) => {
  // const[edit,setEdit]=useState(null)
  // const[editText,setEditText]=useState("")
  return (
    <div>
        {todos.map((todo,index)=>  //todo here is a variable
      //  {edit===edit.id ?
      //   (<input/>)
      
       
       
       <div key={index}>
            <h5>{todo}</h5>
           
             <button onClick={()=>deleteHandler(index)}>Delete</button> 
            {/* <button onClick={()=>setEdit(todo.index)}>Edit Task</button> */}
        </div>
            )}




    </div>
  )
}

export default Todo