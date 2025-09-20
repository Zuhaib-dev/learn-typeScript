import React from 'react';

const UserCard = ({  name, email, address  }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D'
        alt={name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
      <div className='p-4'>
        <h3 className="text-lg font-semibold text-gray-800">  {email} </h3>
      </div>
      <div className='p-5'>
        <h4 className='text-lg font-semibold text-gray-800"'> {address} </h4>
      </div>
    </div>
  );
};

export default UserCard;
