import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// Modification du logo (apparaissant sur la page d'accueil)
const logotext = "Gib ' Z #10"; // Remplace "Ton Prénom" par ton prénom ou nom
