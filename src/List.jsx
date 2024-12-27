import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function List() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="left-container">
      <div className="c-list">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <h1>Christmas List</h1>
        <div className="bottom-half">
          <NewTodoForm onSubmit={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          </div>
      </div>
    </div>
  );
}
