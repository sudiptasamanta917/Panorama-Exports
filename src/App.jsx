import React, { useState } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const [entered, setEntered] = useState(false);

    const handleEnter = () => {
        setEntered(true);
    };

    return (
        <>
            {!entered && <Landing onEnter={handleEnter} />}
            {entered && (
                <>
                    <Navbar />
                    <AppRoutes />
                </>
            )}
        </>
    );
}

export default App;
