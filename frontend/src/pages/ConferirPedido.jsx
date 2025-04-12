import React, { useEffect} from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ShoppingCart, MapPin } from "lucide-react";
import { useCarrinho } from "../context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

import produtos from "../data/produtos";

export default function FinalizarPedido() {
  const navigate = useNavigate();
  const { carrinho } = useCarrinho();

  useEffect(() => {
    const produtos = localStorage.getItem("resumoPedido");

    if (!produtos || !total) {
      navigate("/SorveteriaSummerIce");
      return;
    }

  }, []);

  const produtosSelecionados = produtos.flatMap((produto) => {
    const qtd = carrinho[produto.id] || 0;
    if (qtd === 0) return [];

    const acompanhamentos = [];

    (produto.acompanhamentos || []).forEach((grupo) => {
      grupo.itens.forEach((item) => {
        const qtdAcomp = carrinho[item.id] || 0;
        if (qtdAcomp > 0) {
          acompanhamentos.push({
            ...item,
            quantidade: qtdAcomp,
            subcategoria: grupo.subcategoria,
          });
        }
      });
    });

    return [{ ...produto, quantidade: qtd, acompanhamentos }];

  });

  const total = produtosSelecionados.reduce((soma, produto) => {
    let subtotal = produto.preco * produto.quantidade;
    if (produto.acompanhamentos) {
      produto.acompanhamentos.forEach((a) => {
        subtotal += a.preco * a.quantidade;
      });
    }
    return soma + subtotal;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho com imagem e nome */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/fVSP3ggQ/Chat-GPT-Image-1-de-abr-de-2025-20-02-34.png')",
        }}
      >
        <header className="flex items-center gap-4 p-4">
          <img
            src="https://i.ibb.co/hJp6v6jn/Chat-GPT-Image-1-de-abr-de-2025-19-44-40.png"
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
          <h1
            className="text-3xl font-bold text-white tracking-wide"
            style={{ textShadow: "4px 4px 8px rgba(0,0,0,5)" }}
          >
            Summer Ice
          </h1>
        </header>
      </div>

      {/* Conteúdo dos produtos */}
      <Card className="flex items-center justify-center shadow-sm overflow-hidden">
        <h2 className="text-xl text-center px-2 py-2">Resumo do Pedido</h2>
      </Card>

      <main className="p-2 space-y-2">
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

      {/* Rodapé com botões */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t">
        <div className="flex gap-2">
          <Button
            onClick={() => {
              const resumoPedido = produtosSelecionados.map((produto) => {
                const acompanhamentos = (produto.acompanhamentos || []).map((a) => ({
                  id: a.id,
                  nome: a.nome,
                  quantidade: a.quantidade,
                  precoUnitario: a.preco,
                  precoTotal: parseFloat((a.preco * a.quantidade).toFixed(2)),
                  subcategoria: a.subcategoria || null
                }));

                const totalAcompanhamentos = acompanhamentos.reduce((soma, a) => soma + a.precoTotal, 0);

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

              const totalGeral = resumoPedido.reduce((soma, p) => soma + p.precoTotal + (p.totalAcompanhamentos || 0), 0);

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
