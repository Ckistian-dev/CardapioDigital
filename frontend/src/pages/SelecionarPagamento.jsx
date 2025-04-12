import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ShoppingCart } from "lucide-react";

const opcoesPagamento = [
  { id: "PIX", titulo: "PIX", descricao: "Pagamento Instantâneo" },
  { id: "Cartão de Crédito", titulo: "Cartão de Crédito", descricao: "Pagamento na Entrega" },
  { id: "Dinheiro", titulo: "Dinheiro", descricao: "Pagamento na Entrega" },
];

function formatarParaReal(valor) {
  // Remove tudo que não for número
  const numeros = valor.replace(/\D/g, "");

  // Divide por 100 para obter centavos
  const numero = (parseFloat(numeros) / 100).toFixed(2);

  // Formata como R$ XX,XX
  return `R$ ${numero.replace(".", ",")}`;
}


export default function SelecionarPagamento() {
  const [selecionado, setSelecionado] = useState(null);
  const navigate = useNavigate();
  const [troco, setTroco] = useState("");

  useEffect(() => {
    const tipoEntrega = localStorage.getItem("tipoEntrega");
    const nome = localStorage.getItem("nome");
    const endereco = localStorage.getItem("endereco");
    const frete = localStorage.getItem("frete");
    const produtos = localStorage.getItem("resumoPedido");
    const total = localStorage.getItem("totalPedido");

    if (!produtos || !total) {
      navigate("/SorveteriaSummerIce");
      return;
    }

    if (!nome) {
      navigate("/SorveteriaSummerIce/SelecionarEntrega");
      return;
    }

    if (!tipoEntrega) {
      navigate("/SorveteriaSummerIce/SelecionarEntrega");
      return;
    }

    if (tipoEntrega === "entrega") {
      if (!endereco || !frete || isNaN(parseFloat(frete))) {
        navigate("/SorveteriaSummerIce/SelecionarEntrega");
        return;
      }
    }
  }, []);



  const frete = parseFloat(localStorage.getItem("frete") || "0");

  const resumo = JSON.parse(localStorage.getItem("resumoPedido") || "[]");

  const subtotal = resumo.reduce((soma, produto) => {
    const totalAcomp = produto.totalAcompanhamentos || 0;
    return soma + produto.precoTotal + totalAcomp;
  }, 0);

  const total = subtotal + frete;


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/fVSP3ggQ/Chat-GPT-Image-1-de-abr-de-2025-20-02-34.png')",
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

      {/* Título */}
      <Card className="flex items-center justify-center shadow-sm overflow-hidden">
        <h2 className="text-xl text-center px-2 py-2">Forma de Pagamento</h2>
      </Card>

      {/* Opções */}
      <main className="p-4 space-y-4 pb-32">
        {opcoesPagamento.map((opcao) => (
          <div
            key={opcao.id}
            onClick={() => setSelecionado(opcao.id)}
            className={`cursor-pointer transition border-2 rounded-lg bg-white p-4 flex items-center gap-4 w-full ${selecionado === opcao.id
              ? "border-red-500 bg-red-50"
              : "border-gray-200"
              }`}
          >
            {/* Bolinha de seleção */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selecionado === opcao.id
                ? "border-red-500"
                : "border-gray-400"
                }`}
            >
              {selecionado === opcao.id && (
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              )}
            </div>

            {/* Texto */}
            <div>
              <h3 className="text-lg font-semibold">{opcao.titulo}</h3>
              <p className="text-sm text-gray-500">{opcao.descricao}</p>
            </div>
          </div>
        ))}
        {selecionado === "Dinheiro" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Troco para quanto?</label>
            <input
              type="text"
              value={troco}
              onChange={(e) => setTroco(formatarParaReal(e.target.value))}
              placeholder="Ex: R$ 50,00"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

          </div>
        )}

      </main>

      {/* Rodapé */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t">
        <Button
          onClick={() => {
            localStorage.setItem("pagamento", selecionado);

            if (selecionado === "Dinheiro") {
              const valorNumerico = parseFloat(troco.replace(/\D/g, "")) / 100;
              localStorage.setItem("troco", valorNumerico.toFixed(2));
            } else {
              localStorage.removeItem("troco");
            }


            const frete = parseFloat(localStorage.getItem("frete") || "0");
            const totalComFrete = total + frete;

            localStorage.setItem("total", totalComFrete.toFixed(2));

            navigate("/SorveteriaSummerIce/EnviarPedido");
          }}
          className="w-[100%] flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white disabled:opacity-60"
          disabled={
            !selecionado || (selecionado === "Dinheiro" && troco.trim() === "")
          }
        >
          {!selecionado ? (
            <div className="w-full text-center">Selecione uma Forma de Pagamento</div>
          ) : selecionado === "Dinheiro" && troco.trim() === "" ? (
            <div className="w-full text-center">Informe o valor do troco</div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <ShoppingCart />
                Enviar Pedido
              </div>
              <span>R$ {total.toFixed(2).replace(".", ",")}</span>
            </>
          )}

        </Button>



      </footer>
    </div>
  );
}
