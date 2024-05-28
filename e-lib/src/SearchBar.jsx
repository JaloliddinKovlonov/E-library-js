import React from 'react';

const SearchBar = ({width}) => {
  return (
    <div className={`flex p-4 ${width}`}>
      <input
        type="text"
        placeholder="Search..."
        aria-label="Search"
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
      />
      <button
        aria-label="Search button"
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
