import React from 'react'

const ListTodo = ({todos}) => {
  return (
     <div className="flex justify-center">
      <ul className="w-full max-w-xl space-y-3">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:bg-rose-400 transition"
          >
            <span className="text-gray-800 text-lg">{todo}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListTodo