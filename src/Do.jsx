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

const Do = ({todos}) => {
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type='checkbox' />
            <p className={style.text}>{todos}</p>
        </div>
        <button><FaRegTrashAlt /></button>
    </li>
  )
}

export default Do;
