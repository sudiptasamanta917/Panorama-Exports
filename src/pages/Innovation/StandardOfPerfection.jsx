import React from 'react'
import Certifications from '../../components/Certifications';

function StandardOfPerfection() {
  return (
      <>
          <div className="p-4 pt-16 text-[#01276a] mt-6 w-[90%] mx-auto px-6 md:px-20 rounded-t-md">
              <div className="flex items-center justify-start pt-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                            STANDARD OF PERFECTION
                      </h1>
                      <div className="mt-10 flex flex-col items-center">
                          <h1 className="text-lg md:text-2xl xl:text-3xl font-semibold text-blue-900">
                              Global Standards, Local Soul
                          </h1>
                          <p className="text-sm md:text-lg mt-3 text-gray-600 ml-1 font-thin w-[50%] text-justify">
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