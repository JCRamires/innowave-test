import { useState } from "react";
import type { Todo } from "./app.types";
import { AddTodoForm } from "./components/add-todo-form";
import { TodoItem } from "./components/todo-item";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (todoId: number) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const getTodos = () => todos.filter((todo) => !todo.completed);
  const getCompleteTodos = () => todos.filter((todo) => todo.completed);

  return (
    <>
      <h1>My Todos</h1>
      <section>
        <article>
          <AddTodoForm onAdd={addTodo} />
        </article>
      </section>
      <section>
        <ul>
          {getTodos().map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              tags={todo.tags}
              completed={todo.completed}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2>Completed</h2>
        <ul>
          {getCompleteTodos().map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              tags={todo.tags}
              completed={todo.completed}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
