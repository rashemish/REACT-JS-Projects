import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { characters } from "../data/characters.js";

export default function Bio() {
    const nav = useNavigate();
    const { id } = useParams();

    const character = useMemo(() => characters.find((c) => c.id === id), [id]);

    if (!character) {
        return (
            <div className="shell">
                <header className="topTitle">Title</header>
                <main className="card bigCard">
                    <p>Character not found.</p>
                    <button className="pixelBtn" onClick={() => nav("/home")}>Back</button>
                </main>
                <footer className="footerPill">footer</footer>
            </div>
        );
    }

    return (
        <div className="shell">
            <header className="topTitle">Title</header>

            <main className="card bigCard bioGrid">
                <section className="bioLeft">
                    <div className="bioAvatarWrap">
                        <img className="bioAvatar" src={character.img} alt={character.name} />
                        <div className="bioName">{character.name}</div>
                    </div>

                    <div className="box">
                        <div className="boxTitle">title</div>
                        <div className="boxBody">{character.vibe}</div>
                    </div>
                </section>

                <section className="bioCenter">
                    <div className="box bigBox">
                        <div className="boxTitle">title</div>
                        <div className="boxBody">{character.about}</div>
                    </div>

                    <div className="wideImage">image</div>
                </section>

                <section className="bioRight">
                    <div className="box">
                        <div className="boxTitle">title</div>
                        <div className="boxBody">
                            <ul className="list">
                                {character.facts.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="box">
                        <div className="boxTitle">title</div>
                        <div className="boxBody">{character.likes.join(", ")}</div>
                    </div>

                    <button className="pillBtn" onClick={() => nav("/home")}>button</button>
                    <button className="pillBtn" onClick={() => nav("/info")}>button</button>
                </section>
            </main>

            <footer className="footerPill">footer</footer>
        </div>
    );
}
