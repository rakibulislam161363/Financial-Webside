import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center py-2 lg:py-5 lg:px-5">
        <img
          className="sm:w-20 w-10 h-5 sm:h-10 mr-3"
          src="Group(1).png"
          alt=""
        />
        <h1 className="sm:text-3xl font-bold text-xl text-white">Wern Finance</h1>
      </div>
      <div className="lg:py-5 py-2">
        <h1 className="lg:px-8 lg:py-3 px-4 py-2 border-[1px] rounded-full hover:bg-gray-500 hover:text-white text-xl text-[#772AB3]">
          Contact
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
