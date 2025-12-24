import { useNavigate } from "react-router-dom";
import info1 from "../assets/info1.jpg";
import info2 from "../assets/info2.jpg";

export default function Info() {
    const nav = useNavigate();

    return (
        <div className="shell">
            <header className="topTitle">DIGIT 400: Final Project</header>

            <main className="card bigCard infoLayout">
                <img src={info1} alt="girls with sonny angels in their jean pockets" className="photoTall leftPhoto" />

                <div className="infoCenter">
                    <p className="infoText">Why are young adult women obsessed with these cute characters? There might not be an exact answer to these cult followings, however we can all relate to collecting and adoring icons and characters we personally love. Want to know more about Gen Z's darlings, click the button below to explore more!</p>

                    <button className="pixelBtn" onClick={() => nav("/home")}>
                        Let's Explore!
                    </button>
                </div>

                <img src={info2} alt="girl with a snoopy shirt" className="photoTall rightPhoto" />
            </main>

            <footer className="footerPill">DIGIT 400 © 2025 by Raashee Mishra is licensed under CC BY-NC-SA 4.0</footer>
        </div>
    );
}
