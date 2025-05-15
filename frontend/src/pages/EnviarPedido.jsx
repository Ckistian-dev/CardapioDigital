import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MessageCircle} from "lucide-react";
import { toast } from 'react-toastify';


export default function EnviarPedido() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [frete, setFrete] = useState(0);
  const [produtos, setProdutos] = useState([]);
  const [troco, setTroco] = useState(null);
  const [total, setTotal] = useState(0);
  const [tipoEntrega, setTipoEntrega] = useState("");
  const [toastPix, setToastPix] = useState(false);

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
    setProdutos(JSON.parse(produtosLocal));
    setTotal(parseFloat(totalLocal) + parseFloat(freteLocal));
    setTipoEntrega(tipoEntregaLocal);

  }, []);


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
          onClick={() => window.open(linkWhatsApp, "_blank")}
          className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white"
        >
          <div className="flex items-center gap-2">
            <MessageCircle />
            Enviar Pedido
          </div>
          <span>R$ {total.toFixed(2).replace(".", ",")}</span>
        </Button>
      </footer>
    </div>
  );
}
