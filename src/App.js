import React,{useState, useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Do from "./Do";
import {db} from './Firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

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

const [todo, setTodo] = useState([]);
const [text, setText] = useState('');

// carryout all the todo function(creating, updating, deleting all todo from firebase)

useEffect(()=>{
  const a = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(a, (querySnapshot) => {
    let todosArray = []
    querySnapshot.forEach((entry) => {
      todosArray.push({...entry.data(), id: entry.id})
    });
    setTodo(todosArray)
  })
  return () => unsubscribe()
},[])


//updating firebase
const taskComplete = async (todos) => {
  await updateDoc(doc(db, 'todos', todos.id),{
    completed: !todos.completed
  })
};


//creating todo to add to existing ones
const newTodo = async (e) => {
  e.preventDefault(e)
  if (text === '') {
    alert('please enter a new item')
    return
  }
  await addDoc(collection(db, 'todos'), {
    text: text,
    completed: false,
  })
  setText('');
};

// Deleting items from todo list
const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h3 className={styles.heading}>T0-do App</h3>

        <form 
        onSubmit={newTodo} 
        className={styles.form}>

          <input 
          value={text} 
          onChange={(e) =>setText(e.target.value)} 
          type="text" 
          placeholder="Add To-do" 
          className={styles.input} />

          <button 
          className={styles.button}>
            <AiOutlinePlus size={30} />
            </button>
        </form>

        <ul>
          {todo.map((todos, index)=>(
            <Do key={index} todos={todos} taskComplete={taskComplete} deleteTodo={deleteTodo} />
          ))}
        </ul>

        {todo.length < 1 ? null : <p className={styles.count}>{`You Have ${todo.length} todos`}</p>}
      </div>
    </div>
  );
}

export default App;
