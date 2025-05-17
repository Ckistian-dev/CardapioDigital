import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom"; // se estiver usando react-router
const senhaCorreta = import.meta.env.VITE_SENHA_ADMIN;


export default function EditarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [acompanhamentosGrupos, setAcompanhamentosGrupos] = useState([]);
  const [produtoAberto, setProdutoAberto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const jaAutenticado = sessionStorage.getItem("autenticadoAdmin");
    if (jaAutenticado) return;

    const senha = prompt("Digite a senha para acessar:");
    if (senha === senhaCorreta) {
      sessionStorage.setItem("autenticadoAdmin", "true");
    } else {
      alert("Senha incorreta!");
      navigate("/SorveteriaSummerIce");
    }
  }, []);


  const alternarProduto = (id) => {
    setProdutoAberto((atual) => (atual === id ? null : id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProdutos = await fetch(`${import.meta.env.VITE_API_URL}/api/produtos`);
        const dadosProdutos = await resProdutos.json();
        setProdutos(dadosProdutos);

        const resGrupos = await fetch(`${import.meta.env.VITE_API_URL}/api/acompanhamentos`);
        const dadosGrupos = await resGrupos.json();
        setAcompanhamentosGrupos(dadosGrupos);
      } catch (error) {
        console.error("Erro ao buscar produtos ou acompanhamentos:", error);
        alert("Erro ao carregar dados. Verifique sua conexão.");
      }
    };
    fetchData();
  }, []);


  const handleChange = (id, campo, valor) => {
    setProdutos((prev) =>
      prev.map((produto) =>
        produto.id === id ? { ...produto, [campo]: valor } : produto
      )
    );
  };

  const handleGrupoChange = (produtoId, index, campo, valor) => {
    setProdutos((prev) =>
      prev.map((produto) => {
        if (produto.id === produtoId) {
          const novosGrupos = [...produto.acompanhamentos];
          novosGrupos[index] = { ...novosGrupos[index], [campo]: valor };
          return { ...produto, acompanhamentos: novosGrupos };
        }
        return produto;
      })
    );
  };

  const adicionarGrupo = (produtoId) => {
    setProdutos((prev) =>
      prev.map((produto) =>
        produto.id === produtoId
          ? {
            ...produto,
            acompanhamentos: [
              ...produto.acompanhamentos,
              { nome: "", min: 0, max: 1 },
            ],
          }
          : produto
      )
    );
  };

  const removerGrupo = (produtoId, index) => {
    setProdutos((prev) =>
      prev.map((produto) => {
        if (produto.id === produtoId) {
          const novosGrupos = [...produto.acompanhamentos];
          novosGrupos.splice(index, 1);
          return { ...produto, acompanhamentos: novosGrupos };
        }
        return produto;
      })
    );
  };

  const adicionarProduto = () => {
    const novoProduto = {
      id: Date.now(),
      nome: "",
      descricao: "",
      preco: 0,
      precoOriginal: 0,
      imagem: "",
      categoria: "",
      situacao: "Ativo",
      acompanhamentos: [],
    };
    setProdutos((prev) => [...prev, novoProduto]);
    setProdutoAberto(novoProduto.id); // já abre para editar
  };


  const salvarAlteracoes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/produtos`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produtos),
      });
      if (!response.ok) throw new Error("Erro ao salvar produtos");
      alert("Alterações salvas com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar as alterações.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="flex items-center justify-center shadow-sm overflow-hidden">
        <h2 className="text-xl text-center px-2 py-2">Editar Produtos</h2>
      </Card>

      <div className="max-w-7xl mx-auto px-2 pb-10 mt-5 flex-col items-center justify-center">
        {produtos.map((produto) => (
          <Card key={produto.id} className="mb-6 shadow-md border border-gray-200">
            <div
              onClick={() => alternarProduto(produto.id)}
              className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-100 px-4 py-3 rounded-t hover:bg-gray-200 cursor-pointer"
            >
              {/* ESQUERDA: IMAGEM + NOME */}
              <div className="flex sm:items-center gap-4">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-20 w-20 object-cover rounded border mx-auto sm:mx-0"
                />
                <p className="text-center sm:text-left font-bold text-base">{produto.nome}</p>
              </div>

              {/* DIREITA: BOTÕES + SWITCH */}
              <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={produto.situacao === "Ativo"}
                      onChange={(e) =>
                        handleChange(produto.id, "situacao", e.target.checked ? "Ativo" : "Inativo")
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-red-500 transition duration-300"></div>
                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full shadow-md"></div>
                  </label>
                  <span className="text-sm text-gray-600">{produto.situacao}</span>
                </div>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setProdutoAberto(produto.id);
                  }}
                  variant="ghost"
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Pencil size={18} />
                </Button>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setProdutos((prev) => prev.filter((p) => p.id !== produto.id));
                  }}
                  variant="ghost"
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </div>


            {produtoAberto === produto.id && (
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 font-semibold mb-1">Nome do Produto</label>
                    <input
                      type="text"
                      value={produto.nome}
                      onChange={(e) => handleChange(produto.id, "nome", e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 font-semibold mb-1">Preço Promocional</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={produto.preco.toFixed(2).replace('.', ',')}
                        onChange={(e) => {
                          const valor = e.target.value.replace(/\D/g, "");
                          const float = (parseInt(valor, 10) || 0) / 100;
                          handleChange(produto.id, "preco", float);
                        }}
                        className="w-full border border-gray-300 p-2 rounded text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 font-semibold mb-1">Categoria</label>
                    <input
                      type="text"
                      value={produto.categoria}
                      onChange={(e) => handleChange(produto.id, "categoria", e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 font-semibold mb-1">Preço Normal</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={produto.precoOriginal?.toFixed(2).replace('.', ',') || ""}
                        onChange={(e) => {
                          const valor = e.target.value.replace(/\D/g, "");
                          const float = (parseInt(valor, 10) || 0) / 100;
                          handleChange(produto.id, "precoOriginal", float);
                        }}
                        className="w-full border border-gray-300 p-2 rounded text-right"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 font-semibold mb-1">Descrição</label>
                    <textarea
                      value={produto.descricao}
                      onChange={(e) => handleChange(produto.id, "descricao", e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 font-semibold mb-1">Imagem</label>
                    <input
                      type="text"
                      value={produto.imagem}
                      onChange={(e) => handleChange(produto.id, "imagem", e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                </div>


                <div className="w-full max-w-full">
                  <label className="block font-semibold text-slate-700 mb-3 text-base">Grupos de Acompanhamento:</label>
                  <div className="space-y-4">
                    {produto.acompanhamentos.map((grupo, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end bg-slate-50 p-2 rounded border">
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-600 mb-1">Grupo</label>
                          <select
                            value={grupo.nome}
                            onChange={(e) => handleGrupoChange(produto.id, index, "nome", e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                          >
                            <option value="">Selecione um grupo</option>
                            {acompanhamentosGrupos.map((g) => (
                              <option key={g.nome} value={g.nome}>{g.nome}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex gap-2 items-end justify-between">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Mínimo</label>
                            <input
                              type="number"
                              value={grupo.min}
                              onChange={(e) => handleGrupoChange(produto.id, index, "min", parseInt(e.target.value))}
                              className="w-full border border-gray-300 p-2 rounded"
                              placeholder="0"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 items-end justify-between">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Máximo</label>
                            <input
                              type="number"
                              value={grupo.max}
                              onChange={(e) => handleGrupoChange(produto.id, index, "max", parseInt(e.target.value))}
                              className="w-full border border-gray-300 p-2 rounded"
                              placeholder="1"
                            />
                          </div>
                          <Button
                            onClick={() => removerGrupo(produto.id, index)}
                            variant="ghost"
                            className="text-red-600 h-10"
                          >
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button
                      onClick={() => adicionarGrupo(produto.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 shadow"
                    >
                      <Plus size={16} />
                      Adicionar grupo de acompanhamento
                    </Button>
                  </div>
                </div>

              </CardContent>
            )}
          </Card>
        ))}

        <div className="flex items-center gap-3 border rounded px-4 py-3 bg-white shadow-sm mt-6 max-w-7xl mx-auto">
          <p className="flex-1 text-gray-700 font-medium">Adicionar novo produto ao cardápio</p>
          <Button
            onClick={adicionarProduto}
            className="bg-red-500 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Plus size={16} />
            Adicionar Produto
          </Button>
        </div>


        <div className="text-center mt-8">
          <Button onClick={salvarAlteracoes} className="bg-red-600 hover:bg-red-700 text-white">
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
}
