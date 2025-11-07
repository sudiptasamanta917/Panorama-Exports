import React from 'react'
import Image1 from "../../assets/LookBook/Lookbook1.png";

function LookBook() {
  return (
      <div>
          <div className="w-full h-20 bg-gray-900"></div>
          <img src={Image1} alt="lookbook" className="w-full" />
      </div>
  );
}

export default LookBook