import React from 'react';
import Todo from "./Todo";

function TodoList({ todos, toggleTodo, isActiveOnly, deleteTodo }) {
  return (
    <div className="todo-list">
      <div className="wrapper">
        { todos.map(todo => {
          return <Todo key={ todo.id }
                       toggleTodo={ toggleTodo }
                       todo={ todo }
                       isActiveOnly={ isActiveOnly }
                       deleteTodo={ deleteTodo }
          />;
        }) }
      </div>
    </div>
  );
}

export default TodoList;