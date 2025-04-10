import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";
import produtos from "../data/produtos";

const ORS_API_KEY = import.meta.env.VITE_ORS_API_KEY;

export default function SelecionarEntrega() {
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


  const { carrinho } = useCarrinho();
  const produtosSelecionados = produtos.flatMap((produto) => {
    const qtd = carrinho[produto.id] || 0;
    if (qtd === 0) return [];

    const acompanhamentos = (produto.acompanhamentos || [])
      .filter((a) => carrinho[a.id] > 0)
      .map((a) => ({ ...a, quantidade: carrinho[a.id] }));

    return [{ ...produto, quantidade: qtd, acompanhamentos }];
  });

  const resumo = JSON.parse(localStorage.getItem("resumoPedido") || "[]");

  const subtotal = resumo.reduce((soma, produto) => {
    const totalAcomp = produto.totalAcompanhamentos || 0;
    return soma + produto.precoTotal + totalAcomp;
  }, 0);
  

  const total = subtotal + (form.frete ?? 0);

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
  
        let valor = 5;
        for (let i = 1; i <= 10; i++) {
          if (distanciaKm <= i) {
            valor = 5 + (i - 1) * 2;
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
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/fVSP3ggQ/Chat-GPT-Image-1-de-abr-de-2025-20-02-34.png')" }}
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

        <Card className="flex items-center justify-center shadow-sm overflow-hidden">
          <h2 className="text-xl text-center px-2 py-2">Entrega</h2>
        </Card>

        <main className="p-4 space-y-4 pb-32">
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="grid gap-3">
                <input type="text" name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} className="border rounded p-2 w-full" />
                <input type="text" name="cep" placeholder="CEP (somente números)" value={form.cep} onChange={handleChange} onBlur={buscarEndereco} className="border rounded p-2 w-full" />
                <input type="text" name="rua" placeholder="Rua" value={form.rua} onChange={handleChange} className="border rounded p-2 w-full" />
                <input type="text" name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} className="border rounded p-2 w-full" />
                <input type="text" name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} className="border rounded p-2 w-full" />
                <input type="text" name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} className="border rounded p-2 w-full" />
                <input type="text" name="numero" placeholder="Número" value={form.numero} onChange={handleChange} className="border rounded p-2 w-full" />
                <input type="text" name="complemento" placeholder="Complemento" value={form.complemento} onChange={handleChange} className="border rounded p-2 w-full" />
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t">
          <div className="w-full space-y-2">
            {form.frete !== null && (
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

                navigate("/SorveteriaSummerIce/SelecionarPagamento");
              }}
              className="w-[100%] flex justify-between items-center px-4 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white disabled:opacity-60"
              disabled={
                !camposObrigatoriosPreenchidos ||
                form.frete === null ||
                isNaN(form.frete) ||
                calculandoFrete
              }
            >
              {calculandoFrete ? (
                <div className="w-full text-center">Calculando Frete...</div>
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
