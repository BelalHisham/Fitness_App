import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import { WorkoutContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <WorkoutContextProvider>
    <App />
    </WorkoutContextProvider>
    </BrowserRouter>
);  