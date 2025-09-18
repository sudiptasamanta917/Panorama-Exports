import {React, useEffect} from 'react'
import InnovationThatLeads from './InnovationThatLeads';
import StandardOfPerfection from './StandardOfPerfection';
import HandcraftedLuxury from './HandcraftedLuxury';
import { useLocation } from "react-router-dom";

const labels = {
    "#innovation-leads": "InnovationThatLeads",
    "#standard-perfection": "StandardOfPerfection",
    "#handcrafted-luxury": "HandcraftedLuxury",
};

function Innovation() {
    const location = useLocation();

    // Smooth scroll on hash change
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.querySelector(location.hash);
                if (section) {
                    const yOffset = -80; // adjust based on your navbar/breadcrumb height
                    const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    // Scroll to top when opening the page.....................
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

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