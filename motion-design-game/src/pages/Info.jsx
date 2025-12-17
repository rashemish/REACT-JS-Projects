import { useNavigate } from "react-router-dom";

export default function Info() {
    const nav = useNavigate();

    return (
        <div className="shell">
            <header className="topTitle">Title</header>

            <main className="card bigCard infoLayout">
                <div className="photoTall leftPhoto">image</div>

                <div className="infoCenter">
                    <p className="infoText">Add a little bit of body text</p>

                    <button className="pixelBtn" onClick={() => nav("/home")}>
                        button
                    </button>
                </div>

                <div className="photoTall rightPhoto">image</div>
            </main>

            <footer className="footerPill">footer</footer>
        </div>
    );
}
