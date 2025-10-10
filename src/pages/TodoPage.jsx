import React, { useEffect, useState } from "react";
import CreateTodo from "../components/CreateTodo";
import ListTodo from "../components/ListTodo";

const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("myTodos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todoText) => {
    setTodos((prevTodos) => [...prevTodos, todoText]);
  };
  return (
    <div>
      <h1 className="flex justify-center text-3xl mt-10 mb-4 mask-radial-from-inherit" >Create To-Do</h1>
      <CreateTodo onAddTodos={handleAddTodo} />
      <ListTodo todos={todos} />
    </div>
  );
};

export default TodoPage;
