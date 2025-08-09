import React, { useState } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
    const [entered, setEntered] = useState(false);

    const handleEnter = () => {
        setEntered(true);
    };

    return (
        <>
            {!entered && <Landing onEnter={handleEnter} />}
            {entered && (
                <div className="">
                    <Navbar />
                    <AppRoutes />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
