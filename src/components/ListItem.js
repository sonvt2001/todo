import React, {useState} from 'react'

export default function ListItem({todo,id,checkComplete,handleEditTodos, deleteTodo}) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit =() =>{
        setOnEdit(true)
    }
    
    const handleSave = id =>{
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue,id)
        }else{
            setEditValue(todo.name)
        }
    }

    
    if(onEdit){
        return (
            <li>
                <input type="text" id="editValue" className="saveEdit" value={editValue} 
                name="editValue" 
                onChange={e => setEditValue (e.target.value)}/>
                <button onClick={()=> handleSave(id)}>
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                </button>
            </li>
        )
    }else{
        return (
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""}>
                    <input type="checkbox" id={id} checked={todo.complete}
                    onChange={() => checkComplete(id)}/>
                    {todo.name}
                    <br/>
                    <span style={{fontSize: "12px", fontStyle: "italic", opacity: "0.7"}}>
                        {todo.time}
                    </span>
                </label>
                <div>
                    <button className='completeButton' onClick={() => checkComplete(id)}>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button className="Editbutton" disabled={todo.complete} onClick={handleOnEdit}>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>
                    
                </div>
            </li>
        )
    }

}
