import React from 'react'

function DebitCard() {
  return (
    <div className="lg:mt-32 mt-10 flex md:flex-row flex-col items-center">
      {/* left */}
      <div className="text-center md:text-start">
        <h1 className="text-2xl font-bold text-white">Wern Debit Card</h1>
        <p className="text-xs pt-2 text-[#ADB2B1] lg:w-[400px]">
          More than just a card, it's a bridge to a new financial experience.
          Embrace the simplicity and security of spending your Cardano with the
          Wern Card.
        </p>
        <div className='flex md:justify-start justify-center'>
          <button className="lg:px-8 lg:py-3 px-4 py-2 border-[1px] rounded-full hover:bg-gray-500 mt-5 hover:text-white  bg-[#772AB3] text-white flex items-cente justify-center">
            Create New Card
            <img className="size-4 ml-2 mt-1" src="Vector 7.png" alt="" />
          </button>
        </div>
      </div>
      {/* right */}
      <div className="mt-10 sm:mt-0">
        <img className="max-w-md" src="Group 16.png" alt="" />
      </div>
    </div>
  );
}

export default DebitCard;
