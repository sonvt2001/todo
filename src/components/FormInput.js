import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from './Data'

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  // const [todoTime, setTodoTime] = useState( new Date());
  const todoInput = useRef();
  const addTodo = e =>{
    e.preventDefault();
    const date = new Date()
    // const hoursValue = date.getHours()
    // const minutesValue = date.getMinutes()
    const dayValue = date.getDate()
    const monthValue = date.getMonth() + 1
    const yearValue = date.getFullYear()
    // const styleHours = hoursValue >= 12 ? 'pm' : 'am'

    const dateValue = "Date: " + dayValue + "/" + monthValue + "/" + yearValue
    // console.log(dateValue) 
    setTodos([...todos,{name: todoName, time: dateValue , complete: false}])
    setTodoName('');
    todoInput.current.focus();
  }
  useEffect(() =>{
    todoInput.current.focus();
  },[])

  return (
    <form autoComplete = "off" onSubmit ={addTodo}> 
        <input type="text" name="todo" id="todo" ref={todoInput}
        required placeholder="What do you want to do today..." value={todoName} 
        onChange ={e => setTodoName(e.target.value)}/>
        
        <button type="submit" className="submitCreate">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      
    </form>
  )
}
