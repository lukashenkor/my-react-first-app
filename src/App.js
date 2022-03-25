import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import {v4} from 'uuid';

const LOCAL_STORAGE_KEY = 'ToDoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const [isActiveOnly, setIsActiveOnly] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function handleClearCompletedTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    if (e) {
      e.preventDefault()
    }
    const name = todoNameRef.current.value;
    if (name === '') return;
    todoNameRef.current.value = null;
    setTodos(prevTodo => {
      return [...prevTodo, {id: v4(), name: name, complete: false}];
    })
  }

  function handleActiveOnly() {
    setIsActiveOnly(!isActiveOnly);
  }

  return (
    <div className="todo-form">
      <TodoList todos={ todos }
                toggleTodo={ toggleTodo }
                isActiveOnly={ isActiveOnly }
      />
      <textarea placeholder="Print your task"
                ref={ todoNameRef }
                type="text"
                onKeyPress={ (e) => e.key === 'Enter' ? handleAddTodo(e) : null }
      />
      <label className="active-only">
        <input type="checkbox"
               checked={ isActiveOnly }
               onChange={ handleActiveOnly }
        />
        Show active only
      </label>
      <div className="footer">
        <button className="add-todo"
                onClick={ handleAddTodo }
        >
          Add task
        </button>
        <button className="clear-todo"
                onClick={ handleClearCompletedTodos }
        >
          Clear completed Todos
        </button>
      </div>
      <div className="hint">{ todos.filter(todo => !todo.complete).length } tasks left to do</div>
    </div>
  );
}

export default App;
