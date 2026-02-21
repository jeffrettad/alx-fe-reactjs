import { useState } from "react";

function TodoList() {

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false }
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add todo
  const addTodo = () => {

    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };

    setTodos([...todos, todo]);

    setNewTodo("");
  };

  // Toggle todo
  const toggleTodo = (id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  return (

    <div>

      <h1>Todo List</h1>

      <input
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) =>
          setNewTodo(e.target.value)
        }
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>

        {todos.map((todo) => (

          <li key={todo.id}>

            <span
              onClick={() =>
                toggleTodo(todo.id)
              }
              style={{
                textDecoration:
                  todo.completed
                    ? "line-through"
                    : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                deleteTodo(todo.id)
              }
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default TodoList;