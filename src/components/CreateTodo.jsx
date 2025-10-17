import React from 'react';
import { useForm } from 'react-hook-form';

const CreateTodo = ({ onAddTodos }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
        {...register('todo')}
      />
      {errors.todo && (
        <span className="flex text-red-400">This Field is required</span>
      )}
      <button
        className="bg-rose-500 px-4 py-2 rounded-2xl active:scale-90 text-white
       hover:bg-rose-600 "
      >
        Add ToDo
      </button>
    </form>
  );
};

export default CreateTodo;
