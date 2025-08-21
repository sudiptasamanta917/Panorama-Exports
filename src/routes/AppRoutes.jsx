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
        </Routes>
    );
}
