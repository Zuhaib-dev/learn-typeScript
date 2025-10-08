import React from "react";
import { useForm } from "react-hook-form";

const CreateTodo = ({ onAddTodos }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.todo) {
      onAddTodos(data.todo);
      reset();
    }
  };
  return (
    <form
      className="flex justify-center text-center items-center mb-30"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="outline-0 rounded-2xl text-2xl px-4 py-2"
        type="text"
        placeholder="Enter Title🤞"
        {...register("todo")}
      />
      <button className="bg-rose-500 px-4 py-2 rounded-2xl active:scale-75">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
