import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import App from "./App";
import "./index.css";

function Root() {
  useEffect(() => {
    const loader = document.getElementById("initial-loader");

    if (!loader) return;

    loader.classList.add("initial-loader-hidden");

    const timer = setTimeout(() => {
      loader.remove();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(<Root />);
