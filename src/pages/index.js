import * as React from "react";
import { useState } from "react";

export default function Home() {

  // Variable d'état
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  // Mise à jour de l'état
  function addTodo() {
    setTodoList(
      list => {
        return [...list, [todoList.length + 1, todo]]
      }
    );
    setTodo("");
  }
  function removeTodo(id) {
    setTodoList(todoList.filter((element) => element[0] != id));
  };
  function modifyTodo(id){
    setTodoList(todoList[id].replace(to))
  }

  function onChange (event) {
    setTodo(event.target.value);
  };

  const showTodo = todoList .map((element) =>{
    return ( 
      <div>
          <span key={element[0]} onClick={() => modifyTodo}>{element[1]}</span>
          <button onClick={() => removeTodo(element[0])}> - </button>
      </div>
    );
  });

  // Retourne le composant
  return (
    <>
      <div>
        <input type="text" id="todo" placeholder="ToDo ... " value={todo} onChange={onChange}/>
        <button onClick={addTodo}> + </button>
        <p>To do list :</p>
        {showTodo}
      </div>
    </>
  )
}


