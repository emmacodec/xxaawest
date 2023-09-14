import React,{useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Do from "./Do";


const styles = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#AF69EF] to-[#A45EE5]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl bg-slate-200`,
  button: `border p-4 ml-2 bg-purple-700 text-slate-100`,
  count: `text-center p-2 font-bold`
}

function App() {

const [todo, setTodo] = useState(['Code for 8hrs', 'Go for Hiking'])

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h3 className={styles.heading}>T0-do App</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Add To-do" className={styles.input} />
          <button className={styles.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todo.map((todos, index)=>(
            <Do key={index} todos={todos} />
          ))}
        </ul>
        <p className={styles.count}>You Have 2 To-dos</p>
      </div>
    </div>
  );
}

export default App;
