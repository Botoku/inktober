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
      <div className="grid grid-cols-3 gap-4">
        {themes.map((theme, i) => {
          return (
            <Link
              key={i}
              href={`/imgPost/${theme}`}
              className="w-24 h-24 flex items-center justify-center text-black bg-[#D9D9D9]"
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
