import HumanResources from "./HumanResources";
import HealthSafety from "./HealthSafety";
import PeoplePurpose from "./PeoplePurpose";

function Peoples() {

  return (
      <>
          <section className="bg-white pb-10">
              <div className="w-full h-20 bg-gray-900"></div>
              <div className="w-[90%] mx-auto 2xl:pt-16  py-12 px-6 md:px-20">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                      People
                  </h2>
              </div>
              <HumanResources />
              <HealthSafety />
              <PeoplePurpose />
          </section>
      </>
  );
}

export default Peoples

