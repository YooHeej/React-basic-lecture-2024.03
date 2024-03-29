import { useEffect, useState } from 'react';
import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
  const initData = readFromLocalStorage()
  const [todos, setTodos] = useState(initData);
  const handleUpdate = updated =>
    setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));
  const handleDelete = deleted =>
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <ul>
        {
          todos.map(todo => (
            <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function readFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  console.log(todos);
  return todos ? JSON.parse(todos) : [];
}