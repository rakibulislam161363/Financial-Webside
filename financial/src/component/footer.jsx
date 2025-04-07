import React from 'react'


const footerData = [
  {
    heder: 'About us',
    items: ['Investors', 'Features', 'Book a demo', 'Security '],
  },
  {
    heder: 'Products',
    items: ['Credits Cards', 'Gift Cards', 'Savings accounts', 'NFT'],
  },
  {
    heder: 'Useful Links',
    items: ['Free rewards', 'Documentation', 'Affiliate program'],
  },
  {
    heder: 'Social',
    items: ['Changelog', 'License', 'Site Maps', 'News'],
  },
];

const extra = {
  img: 'Exclude.png',
  heading: 'Wern Finance',
  para: 'Discover the power of our secure and rewarding credit cards'
};


function Footer() {

  return (
    <footer className="pt-20 pb-52 sm:grid grid-cols-12">
      <div className="col-span-4">
        <div className="text-white flex gap-2">
          <img src={extra.img} alt="" />
          <h1 className='font-bold'>{extra.heading}</h1>
        </div>
        <p className="text-base text-[#ADB2B1] pt-2">{extra.para}</p>
      </div>
      <div className="text-white col-span-8 sm:flex justify-around pt-3 md:pt-0">
        {footerData.map(item => (
          <div key={item}>
            <h1 className='font-bold pt-3 md:pt-0'>{item.heder}</h1>
            <p>
              {item.items.map(it => (
                <p className="text-base text-[#ADB2B1] pt-2">{it}</p>
              ))}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
