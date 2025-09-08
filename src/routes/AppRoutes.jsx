import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurStory from "../pages/ourStory/OurStory";
import VisionMission from "../pages/ourStory/VisionMission";
import OurPurpose from "../pages/ourStory/OurPurpose";

import CraftedPrecision from "../pages/CraftedPrecision/CraftedPrecision";
import MfgExcellence from "../pages/CraftedPrecision/MfgExcellence";
import SmartWarehousing from "../pages/CraftedPrecision/SmartWarehousing";

import Innovation from "../pages/Innovation";
import WeavingStories from "../pages/WeavingStories";
import ElevatedCraft from "../pages/ElevatedCraft";
import OurPeople from "../pages/OurPeople";
import Sustainability from "../pages/Sustainability";
import CraftingTomorrow from "../pages/craftingTomorrow/CraftingTomorrow";
import GlobalFootprint from "../pages/globalFootprint/GlobalFootprint";
import OurInfrastructure from "../pages/OurInfrastructure";
import Media from "../pages/media/Media";
import UnitLocationMap from "../components/UnitLocationMap";

import InnovationThatLeads from "../pages/Innovation/InnovationThatLeads";
import StandardOfPerfection from "../pages/Innovation/StandardOfPerfection";
import HandcraftedLuxury from "../pages/Innovation/HandcraftedLuxury";
import Products from "../pages/Product/Products";
import Peoples from "../pages/People/Peoples";
import ResponsibilityRoute from "../pages/Responsibility/ResponsibilityRoute";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/vision-values" element={<VisionMission />} />
            <Route path="/our-purpose" element={<OurPurpose />} />

            <Route path="/craftedprecision" element={<CraftedPrecision />} />
            <Route path="/mfg-excellence" element={<MfgExcellence />} />
            <Route path="/smart-warehousing" element={<SmartWarehousing />} />

            <Route path="/innovation" element={<Innovation />} />
            <Route path="/weavingstories" element={<WeavingStories />} />
            <Route path="/elevatedcraft" element={<ElevatedCraft />} />
            <Route path="/ourpeople" element={<OurPeople />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/craftingtomorrow" element={<CraftingTomorrow />} />
            <Route path="/globalfootprint" element={<GlobalFootprint />} />
            <Route path="/ourinfrastructure" element={<OurInfrastructure />} />
            <Route path="/media" element={<Media />} />
            <Route path="/unitmap" element={<UnitLocationMap />} />

            <Route
                path="/innovation/innovationleads"
                element={<InnovationThatLeads />}
            />
            <Route
                path="/innovation/standardperfection"
                element={<StandardOfPerfection />}
            />
            <Route
                path="/innovation/handcraftedluxury"
                element={<HandcraftedLuxury />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/peoples" element={<Peoples />} />
            <Route
                path="/responsibilityroute"
                element={<ResponsibilityRoute />}
            />
        </Routes>
    );
}
