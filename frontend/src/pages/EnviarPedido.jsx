// src/pages/EnviarPedido.jsx (ATUALIZADO PARA ENVIO ESTRUTURADO)

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from 'react-toastify';

export default function EnviarPedido() {
  const navigate = useNavigate();

  // Seus states continuam os mesmos
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [frete, setFrete] = useState(0);
  const [produtos, setProdutos] = useState([]); // Este é o 'resumoPedido'
  const [troco, setTroco] = useState(null);
  const [total, setTotal] = useState(0);
  const [tipoEntrega, setTipoEntrega] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Seu useEffect para carregar dados do localStorage continua o mesmo
  useEffect(() => {
    const nomeLocal = localStorage.getItem("nome");
    const enderecoLocal = localStorage.getItem("endereco");
    const pagamentoLocal = localStorage.getItem("pagamento");
    const freteLocal = localStorage.getItem("frete");
    const produtosLocal = localStorage.getItem("resumoPedido");
    const totalLocal = localStorage.getItem("totalPedido");
    const trocoLocal = localStorage.getItem("troco");
    const tipoEntregaLocal = localStorage.getItem("tipoEntrega");
    if (trocoLocal && pagamentoLocal === "Dinheiro") {
      setTroco(parseFloat(trocoLocal));
    }

    if (!produtosLocal || !totalLocal) {
      navigate("/SorveteriaSummerIce");
      return;
    }

    if (!nomeLocal || (tipoEntregaLocal === "entrega" && !enderecoLocal)) {
      navigate("/SorveteriaSummerIce/SelecionarEntrega");
      return;
    }

    if (!tipoEntregaLocal) {
      navigate("/SorveteriaSummerIce/SelecionarEntrega");
      return;
    }

    if (tipoEntregaLocal === "entrega" && (!freteLocal || isNaN(parseFloat(freteLocal)))) {
      navigate("/SorveteriaSummerIce/SelecionarEntrega");
      return;
    }

    if (!pagamentoLocal) {
      navigate("/SorveteriaSummerIce/SelecionarPagamento");
      return;
    }

    setNome(nomeLocal);
    setEndereco(enderecoLocal);
    setPagamento(pagamentoLocal);
    setFrete(parseFloat(freteLocal));
    setProdutos(JSON.parse(produtosLocal)); // Carrega o resumo estruturado
    setTotal(parseFloat(totalLocal) + parseFloat(freteLocal));
    setTipoEntrega(tipoEntregaLocal);
  }, [navigate]);


  const codigoPix = "52764726000102";
  const nomePix = "Summer Ice Sorvetes LTDA";

  const textoBase =
    `🌞 *Pedido Summer Ice* 🧊\n\n` +
    produtos
      .map((p) =>
        `📋 *${p.nome}* x${p.quantidade} - R$ ${p.precoTotal
          .toFixed(2)
          .replace(".", ",")}` +
        (p.acompanhamentos?.length
          ? `\n     *Acompanhamentos:*\n` +
          p.acompanhamentos
            .map(
              (a) =>
                `     - ${a.nome} x${a.quantidade} - R$ ${a.precoTotal
                  .toFixed(2)
                  .replace(".", ",")}`
            )
            .join("\n")
          : "")
      )
      .join("\n\n") +
    (tipoEntrega === "entrega"
      ? `\n\n🚚 *Frete:* R$ ${frete.toFixed(2).replace(".", ",")}`
      : "\n") +
    `\n💰 *Total:* R$ ${total.toFixed(2).replace(".", ",")}` +
    `\n💳 *Pagamento:* ${pagamento}` +
    (pagamento === "Dinheiro" && troco
      ? `\n💵 *Troco para:* R$ ${troco.toFixed(2).replace(".", ",")}`
      : "") +
    (pagamento === "PIX"
      ? `\n💱 *Chave PIX:* ${codigoPix}
      *Nome da chave PIX:* ${nomePix}
      📎 *Faça o PIX e envie o comprovante via Whatsapp!*`
      : "") +
    `\n\n🙋 *Cliente:* ${nome}` +
    (tipoEntrega === "entrega"
      ? `\n🏠 *Endereço:* ${endereco}`
      : `\n🏃 *Retirada na loja*`) +
    (pagamento === "pix" ? `\n🔢 *Chave PIX:* ${codigoPix}` : "") +
    `\n\n🛒 _Pedido gerado via Cardápio Digital_`;



  const mensagem = encodeURIComponent(textoBase);
  const numeroWhatsApp = "5545991542767";
  const linkWhatsApp = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${mensagem}`;

  const enviarPedidoParaPlanilha = async () => {
    setEnviando(true);
    try {
      // --- INÍCIO DA CORREÇÃO ---

      // 1. Criar o resumo legível dos itens para a coluna 'itensPedido'
      const itensPedidoString = produtos.map(p => {
        let textoAcomps = "";
        if (p.acompanhamentos && p.acompanhamentos.length > 0) {
          textoAcomps = " -> Acomps: " + p.acompanhamentos.map(a => `${a.quantidade}x ${a.nome}`).join(", ");
        }
        return `${p.quantidade}x ${p.nome}${textoAcomps}`;
      }).join(" | ");

      // 2. Montar o objeto de dados com os NOMES CORRETOS que o script espera
      const dadosPedido = {
        cliente: nome,
        tipoEntrega: tipoEntrega,
        endereco: endereco,
        pagamento: pagamento,
        trocoPara: troco ? troco.toFixed(2).replace(".", ",") : "0",
        frete: frete,
        totalPedido: total, // CORRIGIDO de 'total' para 'totalPedido'
        itensPedido: itensPedidoString, // CORRIGIDO de 'pedidoResumo' para 'itensPedido'
      };

      // --- FIM DA CORREÇÃO ---

      console.log("Enviando para a planilha:", dadosPedido); // Mantendo o debug para confirmar

      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosPedido),
      });

      window.open(linkWhatsApp, "_blank");

    } catch (error) {
      console.error("Erro ao enviar pedido para a planilha:", error);
      toast.error("Erro ao registrar o pedido. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  // O seu JSX (return) continua o mesmo, só ajustamos a função do botão
  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="flex items-center justify-center shadow-sm overflow-hidden">
        <h2 className="text-xl text-center px-2 py-2">Enviar Pedido</h2>
      </Card>
      <main className="p-4 pb-32">
        <Card className="h-auto shadow-sm border">
          <CardContent className="p-4 whitespace-pre-line text-sm text-gray-800">
            {decodeURIComponent(mensagem)}
          </CardContent>
        </Card>
        {pagamento === "PIX" && (
          <div className="mt-4 flex flex-col items-center">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(codigoPix);
                toast.success("Código PIX copiado!", {
                  icon: "✅",
                });
              }}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-12 py-2 rounded"
            >
              Copiar chave PIX
            </Button>
          </div>
        )}
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t">
        <Button
          onClick={enviarPedidoParaPlanilha} // A função foi atualizada
          disabled={enviando}
          className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white disabled:opacity-60"
        >
          {enviando ? (
            <div className="w-full text-center">Enviando...</div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <MessageCircle />
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