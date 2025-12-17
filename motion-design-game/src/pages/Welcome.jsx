import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const nav = useNavigate();

    return (
        <div className="shell">
            <header className="topTitle">DIGIT 400: Final Project</header>

            <main className="card bigCard">
                <h1 className="welcomeText">Who’s Your <br />
                    Little <br />
                    Friend?
                </h1>

                <div className="welcomeArt">
                    <img src={miffywelcome} alt="Miffy" className="heroImg" />
                </div>

                <button className="arrowBtn" onClick={() => nav("/info")} aria-label="Go to info">
                    →
                </button>
            </main>

            <footer className="footerPill">DIGIT 400 © 2025 by Raashee Mishra is licensed under CC BY-NC-SA 4.0</footer>
        </div>
    );
}
