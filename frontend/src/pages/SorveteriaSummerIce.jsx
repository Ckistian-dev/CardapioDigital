// src/pages/PaginaInicial.jsx
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";

export default function PaginaInicial() {
  const { carrinho, alterarQuantidade } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  // Não precisamos mais do estado de acompanhamentos aqui
  const [acompAberta, setAcompAberta] = useState({});
  const [erroGrupo, setErroGrupo] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        setLoading(true);
        const res = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL);
        const dados = await res.json();

        const dadosProdutos = dados.produtos || [];
        const dadosAcomp = dados.acompanhamentos || [];

        const atualizados = dadosProdutos.map((produto) => {
          if (produto.acompanhamentos?.length > 0) {
            const gruposCompletos = produto.acompanhamentos
              .map((grupo) => {
                const dadosGrupo = dadosAcomp.find((g) => g.nome === grupo.nome);
                if (!dadosGrupo) return null;
                return {
                  ...JSON.parse(JSON.stringify(dadosGrupo)),
                  min: grupo.min || 0,
                  max: grupo.max || 999,
                };
              })
              .filter(Boolean);
            return { ...produto, acompanhamentos: gruposCompletos };
          }
          return produto;
        });

        setProdutos(atualizados);
      } catch (err) {
        console.error("Erro ao carregar dados do Google Sheets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  const produtosComAcompanhamentos = produtos;

  const total = produtosComAcompanhamentos.reduce((soma, produto) => {
    const qtd = carrinho[produto.id] || 0;
    let subtotal = produto.preco * qtd;
    if (produto.acompanhamentos && qtd > 0) {
      produto.acompanhamentos.forEach((grupo) => {
        grupo.itens.forEach((acomp) => {
          const itemId = `${produto.id}-${acomp.id}`;
          const qtdAcomp = carrinho[itemId] || 0;
          subtotal += acomp.preco * qtdAcomp;
        });
      });
    }
    return soma + subtotal;
  }, 0);

  const verificarMinimos = () => {
    for (const produto of produtosComAcompanhamentos) {
      if (produto.acompanhamentos && carrinho[produto.id] > 0) {
        for (let i = 0; i < produto.acompanhamentos.length; i++) {
          const grupo = produto.acompanhamentos[i];
          const total = grupo.itens.reduce((acc, item) => {
            const itemId = `${produto.id}-${item.id}`;
            return acc + (carrinho[itemId] || 0);
          }, 0);
          if (grupo.min && total < grupo.min) {
            const idGrupo = `${produto.id}-${i}`;
            setErroGrupo({
              mensagem: `Selecione no mínimo ${grupo.min} em ${grupo.nome} de "${produto.nome}"`,
              idGrupo,
            });
            return false;
          }
        }
      }
    }
    return true;
  };

  const carrinhoVazio = Object.values(carrinho).every((qtd) => qtd === 0);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="grid grid-cols-4 divide-x divide-gray-200 shadow-sm bg-white rounded overflow-hidden text-center text-lg font-normal sticky top-0 z-10">
        {["Sorvetes", "Lanches", "Porções", "Bebidas"].map((categoria) => (
          <button
            key={categoria}
            onClick={() => {
              const section = document.getElementById(categoria);
              if (section) {
                const yOffset = -50;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="py-3 w-full hover:bg-gray-100"
          >
            {categoria}
          </button>
        ))}


      </div>

      <main className="p-2 space-y-4">
        {loading ? (
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
            <p className="text-lg font-medium">Carregando Itens...</p>
          </div>
        ) : (
          produtos.length > 0 && ["Sorvetes", "Lanches", "Porções", "Bebidas"].map((categoria) => (

            <section key={categoria} id={categoria}>
              <h2 className="text-xl font-bold px-2 py-2">{categoria}</h2>

              <div className="space-y-3">
                {produtosComAcompanhamentos
                  .filter((p) => p.categoria === categoria && p.situacao === "Ativo")
                  .map((produto) => {
                    const qtd = carrinho[produto.id] || 0;
                    const precoOriginal =
                      produto.precoOriginal || produto.preco * 1.25;
                    const temDesconto = produto.preco < precoOriginal;

                    return (
                      <Card
                        key={produto.id}
                        className="flex flex-col shadow-sm"
                      >
                        <div className="flex h-auto">
                          <div className="w-36 h-auto">
                            <img
                              src={produto.imagem}
                              alt={produto.nome}
                              className="w-full h-full object-fill rounded"
                            />
                          </div>

                          <CardContent className="flex flex-col justify-between flex-1 px-2 py-2">
                            <div className="flex justify-between items-start gap-2">
                              <div className="flex-1">
                                <h2 className="text-sm sm:text-base font-semibold">
                                  {produto.nome}
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-500">
                                  {produto.descricao}
                                </p>
                              </div>
                              {produto.precoOriginal > produto.preco && (
                                <span className="bg-orange-400 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full ml-2">
                                  -{Math.round(100 - (produto.preco * 100) / produto.precoOriginal)}%
                                </span>
                              )}

                            </div>

                            <div className="flex items-end justify-between mt-auto pt-2">
                              <div>
                                <span className="text-red-600 font-bold mr-2 text-sm sm:text-base">
                                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                                </span>
                                {temDesconto && (
                                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                                    R$ {precoOriginal
                                      .toFixed(2)
                                      .replace(".", ",")}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                {qtd > 0 && (
                                  <>
                                    <button
                                      onClick={() => alterarQuantidade(produto.id, -1)}
                                      className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-gray-200 text-black rounded-full hover:bg-gray-300"
                                    >
                                      <Minus size={14} />
                                    </button>
                                    <span className="min-w-[20px] text-center text-sm font-medium">
                                      {qtd}
                                    </span>
                                  </>
                                )}
                                <button
                                  onClick={() =>
                                    alterarQuantidade(produto.id, 1)
                                  }
                                  className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>

                            </div>
                          </CardContent>
                        </div>

                        <div className={`transition-all duration-300 overflow-hidden ${qtd > 0 && produto.acompanhamentos?.length > 0 ? "max-h-auto mt-1 space-y-1" : "max-h-0"}`} >
                          {produto.acompanhamentos?.map((grupo, index) => {
                            const idGrupo = `${produto.id}-${index}`;
                            const aberto = acompAberta[idGrupo];
                            const totalSelecionado = grupo.itens.reduce((acc, item) => {
                              const itemId = `${produto.id}-${item.id}`;
                              return acc + (carrinho[itemId] || 0);
                            }, 0);
                            const atingiuMaximo = grupo.max && totalSelecionado >= grupo.max;
                            const atingiuMinimo = grupo.min && totalSelecionado < grupo.min;


                            return (
                              <div key={idGrupo} id={idGrupo} className="mb-2">
                                {/* Botão de abrir/fechar */}
                                <button
                                  onClick={() =>
                                    setAcompAberta((prev) => ({
                                      ...prev,
                                      [idGrupo]: !prev[idGrupo],
                                    }))
                                  }
                                  className="w-full flex items-center justify-between text-sm font-semibold bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded transition"
                                >
                                  <span className="flex items-center gap-2">
                                    <svg
                                      className={`w-4 h-4 transform transition-transform ${aberto ? "rotate-90" : "rotate-0"}`}
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                    {grupo.nome}
                                  </span>

                                  <span className="text-xs text-gray-500">
                                    {aberto ? "Clique para ocultar" : "Clique para ver"}
                                  </span>
                                </button>


                                {/* Itens */}
                                <div className={`transition-all duration-300 overflow-hidden ${aberto ? "max-h-[999999px] mt-2 space-y-2" : "max-h-0"}`}>
                                  {grupo.itens.filter((item) => item.situacao === "Ativo").map((item) => {
                                    const itemId = `${produto.id}-${item.id}`;
                                    const qtdAcomp = carrinho[itemId] || 0;
                                    return (
                                      <div
                                        key={item.id}
                                        className="flex items-center gap-2 bg-white border rounded shadow-sm px-3 py-2"
                                      >
                                        <img
                                          src={item.imagem}
                                          alt={item.nome}
                                          className="w-12 h-12 object-cover rounded"
                                        />
                                        <div className="flex-1 flex justify-between items-center">
                                          <p className="text-sm font-medium">{item.nome}</p>
                                          <span className="text-sm text-gray-600">
                                            R$ {item.preco.toFixed(2).replace(".", ",")}
                                          </span>
                                        </div>
                                        <div className="min-w-[70px] flex items-center justify-end gap-1">
                                          {qtdAcomp > 0 && (
                                            <>
                                              <button
                                                onClick={() => alterarQuantidade(itemId, -1)}
                                                className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs"
                                              >
                                                <Minus size={14} />
                                              </button>
                                              <span className="text-sm">{qtdAcomp}</span> {/* <- Deixa aqui dentro */}
                                            </>
                                          )}

                                          <button
                                            onClick={() => !atingiuMaximo && alterarQuantidade(itemId, 1)}
                                            disabled={atingiuMaximo}
                                            className={`w-6 h-6 ${atingiuMaximo ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                                              } text-white rounded-full flex items-center justify-center text-xs`}
                                          >
                                            <Plus size={14} />
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}

                                  {atingiuMaximo && (
                                    <p className="text-xs text-red-500 px-4">
                                      Máximo de {grupo.max} permitido para {grupo.nome}.
                                    </p>
                                  )}
                                  {grupo.min > 0 && atingiuMinimo && (
                                    <p className="text-xs text-yellow-500 px-4">
                                      Selecione no mínimo {grupo.min} em {grupo.nome}.
                                    </p>
                                  )}


                                </div>
                              </div>
                            );
                          })}


                        </div>
                      </Card>
                    );
                  })}
              </div>
            </section>
          )))}

        <div className="h-[50px]" />
      </main>

      {erroGrupo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center border-t-4 border-red-500 relative animate-slide-up">
            <div className="flex justify-center mb-3">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M9.88 9.88l4.24 4.24M1 12a11 11 0 1122 0 11 11 0 01-22 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-red-600 mb-2">Atenção</h3>
            <p className="text-gray-700 mb-5">{erroGrupo.mensagem}</p>
            <Button
              onClick={() => {
                const el = document.getElementById(erroGrupo.idGrupo);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 200;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
                setErroGrupo(null);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-2"
            >
              OK
            </Button>
          </div>
        </div>
      )}



      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-center items-center border-t">
        <Button
          onClick={() => {
            if (verificarMinimos()) {
              navigate("/SorveteriaSummerIce/ConferirPedido");
            }
          }}
          disabled={carrinhoVazio || total === 0}
          className="w-[100%] flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white disabled:opacity-60"
        >
          <div className="flex items-center gap-2">
            <ShoppingCart />
            Conferir Pedido
          </div>
          <span>R${total.toFixed(2).replace(".", ",")}</span>
        </Button>

      </footer>
    </div>
  );
}
