import React from 'react';
import styles from "./styles";

function Todo({ todo, toggleTodo, isActiveOnly, deleteTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  function handleCrossMarkClick() {
    deleteTodo(todo.id);
  }

  return (
    <>
      {
        ((!todo.complete && isActiveOnly) || (!isActiveOnly)) &&
        <div className="todo">
          <label style={todo.complete ? styles.CompletedToDo : null}>
            <span>
              <input type="checkbox" name="is-completed" checked={ todo.complete } onChange={ handleTodoClick }/>
            </span>
            { todo.name }
          </label>
          <span className="cross-mark" onClick={ handleCrossMarkClick }/>
        </div>
      }
    </>
  );
}

export default Todo;