import React from 'react';
// import { Link } from 'react-scroll'


export default function Menus() {
  return (
    <>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>RoadMap</a>
      </div>
      {/* <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>RoadMap</a>
      </div> */}
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Documentation</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Tools</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>App</a>
      </div>
      <div className="w-full">
        <a href="/" className='hover:text-primary py-2 block'>Community</a>
      </div>
        <div className="w-full">
          <a href="" className='hover:text-primary py-2 block'>DEX</a>
        </div>
    
        <div className="w-full">
          <a   href="" className='hover:text-primary py-2 block'>Casino</a>
        </div>
    
        <div className="w-full">
          <a  href="" className='hover:text-primary py-2 block'>FAQ's</a>
        </div>
    
    </>
  );
}

//  to="faq" spy={true} smooth={true} offset={50} duration={1000}  href="../sections//FaqSection.jsx"