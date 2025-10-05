import React from 'react';

const UserCard = ({ firstname,lastname,email,username,phone }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden m-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center p-6">
        {/* Hardcoded profile image */}
        <img
          className="w-24 h-24 rounded-full object-cover mb-4"
          src="https://i.pravatar.cc/150?img=3"
          alt="Profile"
        />
        
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">
          {firstname} {lastname}
        </h2>

        {/* Email */}
        <p className="text-sm text-gray-600">{email}</p>

        {/* Username */}
        <p className="text-sm text-gray-500">@{username}</p>

        {/* Phone */}
        <p className="mt-2 text-sm text-gray-700">{phone}</p>

        
      </div>
    </div>
  );
};

export default UserCard;
