// src/pages/FinalizarPedido.jsx (CORRIGIDO)

import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCarrinho } from "../context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

export default function FinalizarPedido() {
  const navigate = useNavigate();
  const { carrinho } = useCarrinho();
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // AQUI ESTÁ A CORREÇÃO
  useEffect(() => {
    const temProduto = Object.values(carrinho).some((qtd) => qtd > 0);
    if (!temProduto) {
      navigate("/SorveteriaSummerIce");
      return;
    }

    setLoading(true);

    // 1. Fazemos UMA ÚNICA chamada para a nossa nova API do Google Script
    fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL)
      .then((res) => res.json())
      .then((dados) => {
        // 2. Extraímos os produtos e acompanhamentos da resposta única
        const produtos = dados.produtos || [];
        const acompanhamentosGrupos = dados.acompanhamentos || [];

        // O resto da sua lógica para processar os dados continua o mesmo!
        const produtosComAcompanhamentos = produtos.map((produto) => {
          if (produto.acompanhamentos?.length > 0) {
            const gruposCompletos = produto.acompanhamentos
              .map((grupo) => {
                const dadosGrupo = acompanhamentosGrupos.find((g) => g.nome === grupo.nome);
                if (!dadosGrupo) return null;
                return {
                  ...dadosGrupo,
                  min: grupo.min || 0,
                  max: grupo.max || 999,
                };
              })
              .filter(Boolean);
            return { ...produto, acompanhamentos: gruposCompletos };
          }
          return produto;
        });

        const selecionados = produtosComAcompanhamentos.flatMap((produto) => {
          const qtd = carrinho[produto.id] || 0;
          if (qtd === 0) return [];

          const acompanhamentos = [];
          produto.acompanhamentos?.forEach((grupo) => {
            grupo.itens.forEach((item) => {
              const itemId = `${produto.id}-${item.id}`;
              const qtdAcomp = carrinho[itemId] || 0;
              if (qtdAcomp > 0) {
                acompanhamentos.push({
                  ...item,
                  quantidade: qtdAcomp,
                  subcategoria: grupo.nome,
                });
              }
            });
          });
          return [{ ...produto, quantidade: qtd, acompanhamentos }];
        });

        const totalGeral = selecionados.reduce((soma, produto) => {
          let subtotal = produto.preco * produto.quantidade;
          if (produto.acompanhamentos) {
            produto.acompanhamentos.forEach((a) => {
              subtotal += a.preco * a.quantidade;
            });
          }
          return soma + subtotal;
        }, 0);

        setProdutosSelecionados(selecionados);
        setTotal(totalGeral);
      })
      .catch(error => {
        console.error("Falha ao buscar ou processar dados da API:", error);
        // Opcional: mostrar uma mensagem de erro para o usuário
      })
      .finally(() => setLoading(false));
  }, [carrinho, navigate]);



  // O resto do seu componente (o return com o JSX) continua o mesmo
  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="flex items-center justify-center shadow-sm overflow-hidden">
        <h2 className="text-xl text-center px-2 py-2">Resumo do Pedido</h2>
      </Card>

      {loading ? (
        <main>
          <div className="h-full flex flex-col items-center justify-center text-gray-600 my-[75%]">
            <svg
              className="animate-spin h-8 w-8 text-red-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <p className="text-lg font-medium">Carregando Pedido...</p>
          </div>
        </main>
      ) : (
        <>
          <main className="p-2 space-y-2 pb-24">
            {produtosSelecionados.map((produto) => (
              <Card key={produto.id} className="shadow-sm border rounded overflow-hidden">
                <CardContent className="p-2 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-800">{produto.nome}</span>
                    <span className="text-sm text-gray-500">x{produto.quantidade}</span>
                  </div>
                  <div className="text-sm text-red-600 font-bold">
                    R$ {(produto.preco * produto.quantidade).toFixed(2).replace(".", ",")}
                  </div>

                  {produto.acompanhamentos?.length > 0 && (
                    <div className="mt-2 border-t pt-2 space-y-2">
                      {produto.acompanhamentos.map((a, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          <div className="flex justify-between">
                            <div className="flex flex-col">
                              <span className="font-medium">+ {a.nome}</span>
                              <span className="text-xs text-gray-400">
                                {a.subcategoria && <>{a.subcategoria} · </>}
                                R$ {(a.preco * a.quantidade).toFixed(2).replace(".", ",")}
                              </span>
                            </div>
                            <span className="text-sm">x{a.quantidade}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </main>
        </>
      )}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t">
        <div className="flex gap-2">
          <Button
            disabled={total === 0}
            onClick={() => {
              const resumoPedido = produtosSelecionados.map((produto) => {
                const acompanhamentos = (produto.acompanhamentos || []).map((a) => ({
                  id: a.id,
                  nome: a.nome,
                  quantidade: a.quantidade,
                  precoUnitario: a.preco,
                  precoTotal: parseFloat((a.preco * a.quantidade).toFixed(2)),
                  subcategoria: a.subcategoria || null,
                }));

                const totalAcompanhamentos = acompanhamentos.reduce(
                  (soma, a) => soma + a.precoTotal,
                  0
                );

                return {
                  id: produto.id,
                  nome: produto.nome,
                  quantidade: produto.quantidade,
                  precoUnitario: produto.preco,
                  precoTotal: parseFloat((produto.preco * produto.quantidade).toFixed(2)),
                  totalAcompanhamentos,
                  acompanhamentos,
                };
              });

              const totalGeral = resumoPedido.reduce(
                (soma, p) => soma + p.precoTotal + (p.totalAcompanhamentos || 0),
                0
              );

              localStorage.setItem("resumoPedido", JSON.stringify(resumoPedido));
              localStorage.setItem("totalPedido", totalGeral.toFixed(2));

              navigate("/SorveteriaSummerIce/SelecionarEntrega");
            }}
            className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart />
              Selecionar Entrega
            </div>
            <span>R$ {total.toFixed(2).replace(".", ",")}</span>
          </Button>
        </div>
      </footer>

    </div>
  );
}