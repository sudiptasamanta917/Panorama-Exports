import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurStory from "../pages/ourStory/OurStory";

import Innovation from "../pages/Innovation";
import WeavingStories from "../pages/WeavingStories";
import ElevatedCraft from "../pages/ElevatedCraft";
import OurPeople from "../pages/OurPeople";
import Sustainability from "../pages/Sustainability";
import CraftingTomorrow from "../pages/craftingTomorrow/CraftingTomorrow";
import GlobalFootprint from "../pages/globalFootprint/GlobalFootprint";
import OurInfrastructure from "../pages/OurInfrastructure";
import Community from "../pages/Community";
import Media from "../pages/media/Media";
import UnitLocationMap from "../components/UnitLocationMap";


import MfgExcellence from "../pages/CraftedPrecision/MfgExcellence";
import SmartWarehousing from "../pages/CraftedPrecision/SmartWarehousing";
import ArtInEveryThread from "../pages/CraftedPrecision/ArtInEveryThread";
import ExactingStandards from "../pages/CraftedPrecision/ExactingStandards";
import SustainableDesigns from "../pages/CraftedPrecision/SustainableDesigns";
import AdvancedWashing from "../pages/CraftedPrecision/AdvancedWashing";
import AdaptiveCapacity from "../pages/CraftedPrecision/AdaptiveCapacity";
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
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/weavingstories" element={<WeavingStories />} />
            <Route path="/elevatedcraft" element={<ElevatedCraft />} />
            <Route path="/ourpeople" element={<OurPeople />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/craftingtomorrow" element={<CraftingTomorrow />} />
            <Route path="/globalfootprint" element={<GlobalFootprint />} />
            <Route path="/ourinfrastructure" element={<OurInfrastructure />} />
            <Route path="/community" element={<Community />} />
            <Route path="/media" element={<Media />} />
            <Route path="/unitmap" element={<UnitLocationMap />} />
        
            <Route
                path="/craftedprecision/manufacturingexcellence"
                element={<MfgExcellence />}
            />
            <Route
                path="/craftedprecision/smartwarehousing"
                element={<SmartWarehousing />}
            />
            <Route
                path="/craftedprecision/artthread"
                element={<ArtInEveryThread />}
            />
            <Route
                path="/craftedprecision/exactingstandards"
                element={<ExactingStandards />}
            />
            <Route
                path="/craftedprecision/sustainabledesigns"
                element={<SustainableDesigns />}
            />
            <Route
                path="/craftedprecision/advancedwashing"
                element={<AdvancedWashing />}
            />
            <Route
                path="/craftedprecision/adaptivecapacity"
                element={<AdaptiveCapacity />}
            />
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
