import React, {useContext, useState} from 'react'
import {DataContext} from './Data'

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos,setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo =() =>{
    const newTodos = todos.filter(todo => {
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }

  return (
    <>
    {
      todos.length === 0 ? <h5>Congratulations! 
        <br/>You have nothing to do today!</h5> :
      <div className="row">
        <label htmlFor="all">
        <input type="checkbox" name="all" id="all"
          onChange={handleCheckAll} checked={checkAll}/>All
        </label>
        <p>You have ({todos.length}) things to do!</p>
        <button id="delete" onClick={deleteTodo}>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
    }
    </> 
  )
}
