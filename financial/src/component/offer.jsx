import React from 'react'

function Offer() {

  const Data = [
    {
      img: 'security.png',
      header: 'Cardano Debit-Cards',
      paragraph:
        'Cardano, simplified. The debit card that makes crypto spending easy.',
    },
    {
      img: 'Group 23.png',
      header: 'On & Off Ramp',
      paragraph: 'Fiat meets crypto, effortlessly buy, sell, and manage.',
    },
    {
      img: 'anali.png',
      header: 'Solutions for business',
      paragraph:
        'Empowering businesses with effortless crypto payments and seamless fiat solutions.',
    },
  ];
  return (
    <div className="mt-[100px]">
      <h1 className="text-2xl font-bold text-white text-center">
        What do we offer?
      </h1>

      <div className="md:flex mt-5 md:gap-3 justify-start">
        {Data.map(item => (
          <div
            key={item}
            className="text-white flex md:justify-center mt-5 gap-3"
          >
            <div className="bg-[#3D3F54] rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <img className="size-8 mt-2" src={item.img} alt="" />
            </div>
            <div>
              <h1 className="text-xl">{item.header}</h1>
              <p className="text-xs pt-2 text-[#ADB2B1]">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
