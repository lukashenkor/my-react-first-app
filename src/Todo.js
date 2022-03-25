import React from 'react';
import styles from "./styles";

function Todo({todo, toggleTodo, isActiveOnly}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <>
      {
        ((!todo.complete && isActiveOnly) || (!isActiveOnly)) &&
        <div className="todo" style={todo.complete ? styles.CompletedToDo : null}>
          <label>
            <span>
              <input type="checkbox" name="is-completed" checked={ todo.complete } onChange={ handleTodoClick }/>
            </span>
            { todo.name }
          </label>
        </div>
      }
    </>
  );
}

export default Todo;