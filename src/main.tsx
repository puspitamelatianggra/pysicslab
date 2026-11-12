import React from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App.tsx";

// reducedMotion="user": animasi framer-motion ikut mati bila pengguna memilih "reduce motion" di sistemnya
ReactDOM.createRoot(document.getElementById("root")!).render(
    <MotionConfig reducedMotion="user">
        <App />
    </MotionConfig>);
