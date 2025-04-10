// src/context/CarrinhoContext.js

import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState({});

  const alterarQuantidade = (id, delta) => {
    setCarrinho((prev) => {
      const novaQtd = (prev[id] || 0) + delta;
      if (novaQtd <= 0) {
        const { [id]: _, ...resto } = prev;
        return resto;
      }
      return { ...prev, [id]: novaQtd };
    });
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, alterarQuantidade }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
