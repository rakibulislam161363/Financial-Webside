import React from 'react'

function FindCard() {
  return (
    <div className="lg:mt-32 mt-10 flex md:flex-row flex-col items-center">
      {/* left */}
      <div className="mt-10 sm:mt-0 order-4 md:order-1">
        <img className="max-w-md" src="Group 16(1).png" alt="" />
      </div>

      {/* right */}
      <div className="text-center md:text-start order-2">
        <h1 className="text-2xl font-bold text-white">
          Find the Perfect Card for You
        </h1>
        <p className="text-xs pt-2 text-[#ADB2B1] lg:w-[400px]">
          Manage your crypto effortlessly and spend it seamlessly with Wern. Our
          virtual card allows for instant and secure online transactions, while
          the physical Wern Card empowers you to convert and spend your crypto
          at millions of merchants worldwide. Experience the flexibility and
          convenience of both options, all within the secure and user-friendly
          Wern ecosystem.
        </p>
        <div className="flex md:justify-start justify-center">
          <button className="lg:px-8 lg:py-3 px-4 py-2 border-[1px] rounded-full hover:bg-gray-500 mt-5 hover:text-white  bg-[#772AB3] text-white flex items-cente justify-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindCard;
