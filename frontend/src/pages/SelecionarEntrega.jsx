import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ORS_API_KEY = import.meta.env.VITE_ORS_API_KEY;

export default function SelecionarEntrega() {
  const [tipoEntrega, setTipoEntrega] = useState("");
  const [form, setForm] = useState({
    nome: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: "",
    complemento: "",
    frete: null,
  });

  const [calculandoFrete, setCalculandoFrete] = useState(false);

  const resumo = JSON.parse(localStorage.getItem("resumoPedido") || "[]");

  const subtotal = resumo.reduce((soma, produto) => {
    const totalAcomp = produto.totalAcompanhamentos || 0;
    return soma + produto.precoTotal + totalAcomp;
  }, 0);

  const total = subtotal + (tipoEntrega === "entrega" ? form.frete ?? 0 : 0);

  const navigate = useNavigate();
  const enderecoLoja = [-53.776, -24.701];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cep") {
      const numeros = value.replace(/\D/g, "").slice(0, 8);
      if (numeros.length === 8) {
        const cepFormatado = numeros.replace(/(\d{5})(\d{3})/, "$1-$2");
        setForm((prev) => ({ ...prev, cep: cepFormatado }));
      } else {
        setForm((prev) => ({ ...prev, cep: numeros }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const buscarEndereco = async () => {
    const cepNumeros = form.cep.replace(/\D/g, "");
    if (cepNumeros.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cepNumeros}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setForm((prev) => ({
            ...prev,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
      }
    }
  };

  const calcularFrete = async () => {
    setCalculandoFrete(true); // 👉 Inicia carregamento
    try {
      const enderecoCompleto = `${form.rua}, ${form.numero}, ${form.bairro}, ${form.cidade}, ${form.estado}`;

      const geoRes = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(enderecoCompleto)}`
      );
      const geoData = await geoRes.json();

      if (!geoData.features || geoData.features.length === 0) {
        alert("Endereço não encontrado.");
        return;
      }

      const [lng, lat] = geoData.features[0].geometry.coordinates;

      const matrixRes = await fetch("https://api.openrouteservice.org/v2/matrix/driving-car", {
        method: "POST",
        headers: {
          Authorization: ORS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locations: [enderecoLoja, [lng, lat]],
          metrics: ["distance"],
          units: "km",
        }),
      });

      const matrixData = await matrixRes.json();
      console.log("Resposta da matrix:", matrixData);

      if (
        matrixData.distances &&
        Array.isArray(matrixData.distances) &&
        matrixData.distances[0] &&
        typeof matrixData.distances[0][1] === "number"
      ) {
        const distanciaKm = matrixData.distances[0][1];

        let valor = 10;
        for (let i = 1; i <= 10; i++) {
          if (distanciaKm <= i) {
            valor = 10 + (i - 1) * 2;
            break;
          }
        }

        setForm((prev) => ({ ...prev, frete: valor }));
      } else {
        throw new Error("Estrutura de resposta inesperada da API.");
      }
    } catch (error) {
      console.error("Erro ao calcular frete:", error);
      alert("Erro ao calcular frete. Verifique os dados e tente novamente.");
    } finally {
      setCalculandoFrete(false); // 👉 Finaliza carregamento
    }
  };


  useEffect(() => {
    if (
      form.cep.length === 9 &&
      form.rua &&
      form.numero &&
      form.bairro &&
      form.cidade &&
      form.estado
    ) {
      calcularFrete();
    }
  }, [form.cep, form.rua, form.numero, form.bairro, form.cidade, form.estado]);

  const camposObrigatoriosPreenchidos =
    form.nome &&
    form.cep.length === 9 &&
    form.rua &&
    form.bairro &&
    form.cidade &&
    form.estado &&
    form.numero;

  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="flex items-center justify-center shadow-sm overflow-hidden">
        <h2 className="text-xl text-center px-2 py-2">Entrega ou Retirada</h2>
      </Card>
      <main className="p-4 space-y-4">
        {/* Botões de seleção de Entrega ou Retirada */}
        <div className="flex flex-col gap-4">
          {[
            { id: "retirada", titulo: "Retirada", descricao: "Retire na loja" },
            { id: "entrega", titulo: "Entrega", descricao: "Receba em casa" },
          ].map((opcao) => (
            <div
              key={opcao.id}
              onClick={() => setTipoEntrega(opcao.id)}
              className={`cursor-pointer transition border-2 rounded-lg bg-white p-4 flex items-center gap-4 w-full ${tipoEntrega === opcao.id ? "border-red-500 bg-red-50" : "border-gray-200"
                }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${tipoEntrega === opcao.id ? "border-red-500" : "border-gray-400"
                  }`}
              >
                {tipoEntrega === opcao.id && (
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{opcao.titulo}</h3>
                <p className="text-sm text-gray-500">{opcao.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Campos de endereço aparecem só se for entrega */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="grid gap-3">
              <input type="text" name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} className="border rounded p-2 w-full" />
              {tipoEntrega === "entrega" && (
                <>
                  <input type="text" name="cep" placeholder="CEP (somente números)" value={form.cep} onChange={handleChange} onBlur={buscarEndereco} className="border rounded p-2 w-full" />
                  <input type="text" name="rua" placeholder="Rua" value={form.rua} onChange={handleChange} className="border rounded p-2 w-full" />
                  <input type="text" name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} className="border rounded p-2 w-full" />
                  <input type="text" name="numero" placeholder="Número" value={form.numero} onChange={handleChange} className="border rounded p-2 w-full" />
                  <input type="text" name="complemento" placeholder="Complemento" value={form.complemento} onChange={handleChange} className="border rounded p-2 w-full" />
                </>
              )}
            </div>
          </CardContent>
        </Card>

      </main>


      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t">
        <div className="w-full space-y-2">
          {tipoEntrega === "entrega" && form.frete !== null && (
            <div className="text-end text-lg text-gray-800 font-medium mr-4">
              Valor do Frete: <span className="font-bold">R$ {form.frete.toFixed(2).replace(".", ",")}</span>
            </div>
          )}
          <Button
            onClick={() => {
              localStorage.setItem("nome", form.nome);
              localStorage.setItem(
                "endereco",
                `${form.rua}, ${form.numero} - ${form.bairro}, ${form.cidade} - ${form.estado}`
              );
              localStorage.setItem("frete", form.frete?.toString() ?? "0");
              localStorage.setItem("tipoEntrega", tipoEntrega);

              navigate("/SorveteriaSummerIce/SelecionarPagamento");
            }}
            className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white disabled:opacity-60"
            disabled={
              !tipoEntrega ||
              !form.nome.trim() ||
              (tipoEntrega === "entrega" &&
                (!camposObrigatoriosPreenchidos || form.frete === null || isNaN(form.frete) || calculandoFrete))
            }
          >
            {!tipoEntrega ? (
              <div className="w-full text-center">Selecione Entrega ou Retirada</div>
            ) : !form.nome.trim() ? (
              <div className="w-full text-center">Preencha seu nome</div>
            ) : tipoEntrega === "entrega" && calculandoFrete ? (
              <div className="w-full text-center">Calculando Frete...</div>
            ) : tipoEntrega === "entrega" &&
              (!camposObrigatoriosPreenchidos || form.frete === null || isNaN(form.frete)) ? (
              <div className="w-full text-center">Preencha os dados de entrega</div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <ShoppingCart />
                  Selecionar Pagamento
                </div>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </>
            )}

          </Button>




        </div>
      </footer>
    </div>
  );
}
