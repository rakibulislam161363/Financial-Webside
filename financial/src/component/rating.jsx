import React from 'react'

function Rating() {


  const Data = [
    {
      img: 'Group(3).png',
      paragraph:
        '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
      revew: [
        {
          imgs: 'Ellipse.png',
          name: 'Hadid Khan',
          title: 'UIUX Designer',
        },
      ],
    },
    {
      img: 'Group(3).png',
      paragraph:
        "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
      revew: [
        {
          imgs: 'Ellipse(1).png',
          name: 'Wade Warren',
          title: 'Web Designer',
        },
      ],
    },
    {
      img: 'Group(3).png',
      paragraph:
        "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
      revew: [
        {
          imgs: 'Ellipse(2).png',
          name: 'Jenny Wilson',
          title: 'Trust Administrator',
        },
      ],
    },
  ];

  
  return (
    <div className="text-white flex sm:flex-row flex-col pt-10 gap-8">
      {Data.map(items => (
        <div key={items} className="">
          <div className="bg-[#3D3F54] rounded-full p-5 w-[56px] h-[56px]">
            <img className="" src={items.img} alt="" />
          </div>
          <p className="text-base mt-2">{items.paragraph}</p>

          <div>
            {items.revew.map(item => (
              <div key={item} className="flex gap-2 mt-8">
                <img src={item.imgs} alt="" />
                <div>
                  <h1 className="text-base">{item.name}</h1>
                  <p className="text-xs text-[#ADB2B1]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rating
