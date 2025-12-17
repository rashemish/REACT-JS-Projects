import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Info from "./pages/Info.jsx";
import Home from "./pages/Home.jsx";
import Bio from "./pages/Bio.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/info" element={<Info />} />
            <Route path="/home" element={<Home />} />
            <Route path="/character/:id" element={<Bio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}