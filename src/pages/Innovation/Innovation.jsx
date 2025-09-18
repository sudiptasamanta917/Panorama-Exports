import React from 'react'
import InnovationThatLeads from './InnovationThatLeads';
import StandardOfPerfection from './StandardOfPerfection';
import HandcraftedLuxury from './HandcraftedLuxury';

function Innovation() {
  return (
      <>
          <section id="innovation-leads">
              <InnovationThatLeads />
          </section>
          <section id="standard-perfection">
              <StandardOfPerfection />
          </section>
          <section id="handcrafted-luxury">
              <HandcraftedLuxury />
          </section>
      </>
  );
}

export default Innovation