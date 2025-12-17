import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const nav = useNavigate();

    return (
        <div className="shell">
            <header className="topTitle">Title</header>

            <main className="card bigCard">
                <h1 className="welcomeText">Who’s Your Little Friend?</h1>

                <div className="welcomeArt">
                    <div className="floatStar star1" />
                    <div className="floatStar star2" />
                    <div className="pixelPlus" />
                    {/* Replace this with your own welcome image */}
                    <div className="welcomePlaceholder">🐰</div>
                </div>

                <button className="arrowBtn" onClick={() => nav("/info")} aria-label="Go to info">
                    →
                </button>
            </main>

            <footer className="footerPill">footer</footer>
        </div>
    );
}
