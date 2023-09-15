import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-300 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-500 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Do = ({todos, taskComplete, deleteTodo}) => {
  return (
    <li 
    className={todos.completed ? style.liComplete : style.li}>
        <div className={style.row}>

            <input 
            onChange={()=>taskComplete(todos)} 
            type='checkbox' 
            checked={todos.completed ? 'checked' : ''} />

            <p 
            onClick={()=>taskComplete(todos)} 
            className={todos.completed ? style.textComplete : style.text}>
              {todos.text}
              </p>
        </div>

        <button onClick={()=>deleteTodo(todos.id)}>
          <FaRegTrashAlt />
          </button>
    </li>
  )
};

export default Do;
