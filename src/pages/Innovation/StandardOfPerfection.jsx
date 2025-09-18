import React from 'react'
import Certifications from '../../components/Certifications';

function StandardOfPerfection() {
  return (
      <>
          <div className="py-4 text-[#01276a] mt-6 w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
              <div className="flex items-center justify-start">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                      Standard Of Perfection
                      <div className="mt-10 flex flex-col items-center">
                          <h1 className="text-lg md:text-2xl xl:text-3xl font-semibold text-blue-900">
                              Global Standards, Local Soul
                          </h1>
                          <p className="text-sm md:text-lg mt-3 md:mb-14 text-gray-600 ml-1 font-thin w-[50%] text-justify">
                              From ethical sourcing to flawless finishing, our
                              certifications speak of trust, transparency, and
                              excellence, every garment carries the seal of
                              global trust and credibility
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <Certifications />
      </>
  );
}

export default StandardOfPerfection