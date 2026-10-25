import { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {
    const [visible, setVisible] = useState(true);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        let finishTimer;
        let removeTimer;
        let finished = false;
        const startTime = Date.now();
        const minimumDuration = 1000;

        const finishLoading = () => {
            if (finished) return;

            finished = true;

            const elapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, minimumDuration - elapsed);

            finishTimer = setTimeout(() => {
                setVisible(false);

                removeTimer = setTimeout(() => {
                    setMounted(false);
                }, 500);
            }, remainingTime);
        };

        if (document.readyState === "complete") {
            finishLoading();
        } else {
            window.addEventListener("load", finishLoading);
        }

        return () => {
            window.removeEventListener("load", finishLoading);
            clearTimeout(finishTimer);
            clearTimeout(removeTimer);
        };

    }, []);

    if (!mounted) return null;

    return (
        <div
            className={`loader ${visible ? "" : "loader_hidden"}`}
            aria-hidden="true"
        >
            <div className="loader_content">
                <div className="loader_dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2>Yousef Ahmed</h2>
                <p>Welcome to my portfolio</p>
            </div>
        </div>

    );
}

export default Loader;
