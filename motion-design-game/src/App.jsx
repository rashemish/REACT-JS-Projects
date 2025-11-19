import { useState } from "react";
import "./App.css";
import "./index.css";

export default function ImageGallery() {
    const images = [
        {
            src: "/images/nails1.jpg",
            info: "pastel colored, Tiger Lily inspired nails",
        },
        {
            src: "/images/nails2.jpg",
            info: "red and gold blooming gel detailed nails",
        },
        {
            src: "/images/nails3.jpg",
            info: "opaque magenta nails with 3D nail art swirls",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgColor, setBgColor] = useState("white");
    const [showInfo, setShowInfo] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handleBackgroundChange = () => {
        setBgColor((prev) => (prev === "white" ? "#DDFDFE" : "white"));
    };

    return (
        <div
            className="app-screen"
            style={{
                backgroundColor: bgColor,
                padding: "20px",
                borderRadius: "16px",
                maxWidth: "400px",
                textAlign: "center",
            }}
        >
            <h1 style={{ marginBottom: "16px", fontSize: "24px", fontWeight: "bold", color: "#E4B4C2"}}>
                Nail Art Gallery
            </h1>

            <img
                src={images[currentIndex].src}
                alt="Nail art"
                style={{
                    width: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                }}
            />

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                    justifyContent: "center",
                }}
            >
                <button className="purple" onClick={handleNext}>
                    Next Image
                </button>

                <button className="pink" onClick={handleBackgroundChange}>
                    Toggle Background
                </button>

                <button
                    className="mauve"
                    onClick={() => setShowInfo((prev) => !prev)}
                >
                    {showInfo ? "Hide Info" : "Show Info"}
                </button>
            </div>

            {showInfo && (
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                    {images[currentIndex].info}
                </p>
            )}
        </div>
    );
}
