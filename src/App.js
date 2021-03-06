import { useState } from 'react';
import './App.css';

  const App = () =>{
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])
    const [editid, seteditid] = useState(0)
    const submitHandler=(e)=>
    {
      e.preventDefault();
      if(editid)
      {
        // const edittodo=todos.find(i=>{
        //   return editid===i.id
        // })
        const updatedtodo=todos.map((i)=>{
          return i.id===editid ? ({id: i.id,todo}) : i;
        })
        settodos(updatedtodo)
        seteditid(0)
        settodo("")
      }
      else
      {
        settodos([...todos,
        {
          id:`${todo}`,todo:`${todo}`
        }]);
        settodo("");
      }
    }
    const editHandler=(id)=>
    {
      const editTodo=todos.find((t)=>{
        return t.id===id;
      })
      seteditid(id);
      settodo(editTodo.todo);
    }
    const deleteHandler=(id)=>
    {
        const updatetodo=todos.filter(t=>{
          return id!==t.id;
        })
        settodos(updatetodo)
    }
  return (
    <div className="App">
    <div className="container">
    <h1>TODO LIST APP</h1>
    <form onSubmit={submitHandler} className="myForm">
      <input type="text" value={todo} onChange={(e)=>{
        settodo(e.target.value)}
      } />
      <button type="submit">{editid?"Edit":"Go"}</button>
    </form>
    <ul className="allTodos">
      {todos.map((todo)=>{ 
        return(
          <li className="mytodo">
        <span>{todo.todo}</span>
        <button onClick={()=>{editHandler(todo.id)}}>Edit</button>
        <button onClick={()=>{deleteHandler(todo.id)}}>Delete</button>
      </li>
        
        ) 
      })}
    </ul>
    </div>
    </div>
  );
}

export default App;
