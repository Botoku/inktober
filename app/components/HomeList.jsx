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
  return (
    <div>
      <p className="text-center mb-8 pt-8 text-2xl text-mint">Inktober Christmas 2024 COMING SOON</p>
      <div className="grid grid-cols-3 gap-4">
        {themes.map((theme, i) => {
          return (
            <Link
              key={i}
              href={`/imgPost/${theme}`}
              className="px-5 pb-3 w-60 h-60 flex items-end justify-left text-navy font-bold capitalize bg-yellow"
            >
              {theme}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeList;
