// src/layouts/LayoutCardapio.jsx (AJUSTADO)

import { Outlet, Link } from "react-router-dom";

export default function LayoutCardapio() {
  return (
    // 1. Adicionado "flex flex-col" para controlar o layout verticalmente
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/fVSP3ggQ/Chat-GPT-Image-1-de-abr-de-2025-20-02-34.png')",
        }}
      >
        <header className="flex items-center gap-4 p-4">
          <Link to="/SorveteriaSummerIce" className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/hJp6v6jn/Chat-GPT-Image-1-de-abr-de-2025-19-44-40.png"
              alt="Logo"
              className="w-16 h-16 rounded-full"
            />
            <h1
              className="text-3xl font-bold text-white tracking-wide"
              style={{ textShadow: "4px 4px 8px rgba(0,0,0,0.5)" }}
            >
              Summer Ice
            </h1>
          </Link>
        </header>
      </div>

      {/* 2. Adicionado "flex-grow" para que esta área ocupe todo o espaço restante */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}