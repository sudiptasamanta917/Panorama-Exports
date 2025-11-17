import React from 'react'
import Image1 from "../../assets/LookBook/Lookbook1.webp";

function LookBook() {
  return (
      <div>
          <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
          <img src={Image1} alt="lookbook" className="w-full" />
      </div>
  );
}

export default LookBook