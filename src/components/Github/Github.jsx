import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();

  return (
      <div className="bg-gray-900 mx-auto w-full max-w-7xl flex flex-col items-center justify-center h-screen backdrop-blur-lg backdrop-filter bg-opacity-50 text-white">
        <img
          src={data.avatar_url}
          alt="User Avatar"
          className="w-48 h-48 rounded-full border-4 border-white"
        />
        <h1 className="text-5xl mt-4">Followers: {data.followers}</h1>
      </div>
  );
};

export default Github;
