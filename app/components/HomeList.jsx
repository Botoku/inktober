import Link from "next/link";
import React from "react";

const themes = [
  "miedo",
  "flor",
  "muneco",
  "calabaza",
  "murcielago",
  "pocion",
  "telarana",
  "snack",
  "dulce",
  "esqueleto",
  "panDulce",
  "cafe",
  "animal",
  "velas",
  "coquita",
  "fantasma",
  "sombrero",
  "paleta",
  "bruja",
  "luna",
  "castillo",
  "caricatura",
  "mounstro",
  "bosque",
  "hada",
  "musica",
  "cuchillo",
  "payaso",
  "tarot",
  "tumba",
  "halloween",
];
const HomeList = () => {
  return <div>HomeList

    <div>
        {themes.map((theme, i) => {
            return <div key={i}>
            <Link href={`/imgPost/${theme}`}>{theme}</Link>
            </div>
        })}
    </div>
  </div>;
};

export default HomeList;
