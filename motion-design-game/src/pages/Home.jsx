import { useNavigate } from "react-router-dom";
import { characters } from "../data/characters.js";

export default function Home() {
    const nav = useNavigate();

    return (
        <div className="shell">
            <header className="topTitle">Title</header>

            <main className="card bigCard collage">
                {characters.map((c) => (
                    <button
                        key={c.id}
                        className="charBtn"
                        style={{
                            top: c.pos.top,
                            left: c.pos.left,
                            width: c.pos.w,
                            transform: `translate(-50%, -50%) rotate(${c.pos.rot})`,
                        }}
                        onClick={() => nav(`/character/${c.id}`)}
                        aria-label={`Open ${c.name} bio`}
                    >
                        <img className="charImg" src={c.img} alt={c.name} />
                    </button>
                ))}
            </main>

            <footer className="footerPill">footer</footer>
        </div>
    );
}
