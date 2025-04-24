import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Trash2, Pencil } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom"; // se estiver usando react-router

const senhaCorreta = import.meta.env.VITE_SENHA_ADMIN;




export default function EditarAcompanhamentos() {
    const [acompanhamentos, setAcompanhamentos] = useState([]);
    const [novoGrupo, setNovoGrupo] = useState("");
    const [erro, setErro] = useState(null);
    const [grupoAberto, setGrupoAberto] = useState(null);
    const [grupoEditando, setGrupoEditando] = useState(null);
    const [itemEditando, setItemEditando] = useState(null);
    const navigate = useNavigate();
    const inputRef = useRef(null);

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

    const alternarGrupo = (id) => {
        setGrupoAberto((atual) => (atual === id ? null : id));
    };


    useEffect(() => {
        fetch("http://localhost:3001/api/acompanhamentos")
            .then((res) => res.json())
            .then((data) => setAcompanhamentos(data))
            .catch(() => setErro("Erro ao carregar acompanhamentos."));
    }, []);

    useEffect(() => {
        if (itemEditando && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [itemEditando]);


    const handleGrupoChange = (index, campo, valor) => {
        const novos = [...acompanhamentos];
        novos[index][campo] = valor;
        setAcompanhamentos(novos);
    };

    const handleItemChange = (grupoIndex, itemIndex, campo, valor) => {
        const novos = [...acompanhamentos];

        if (campo === "preco") {
            valor = valor.replace(/\D/g, ""); // remove tudo que não for número
            const float = (parseInt(valor, 10) || 0) / 100;
            novos[grupoIndex].itens[itemIndex].preco = float;
        } else {
            novos[grupoIndex].itens[itemIndex][campo] = valor;
        }

        setAcompanhamentos(novos);
    };


    const adicionarGrupo = () => {
        if (!novoGrupo.trim()) return;
        setAcompanhamentos([
            ...acompanhamentos,
            { id: Date.now(), nome: novoGrupo.trim(), itens: [] },
        ]);
        setNovoGrupo("");
    };

    const removerGrupo = (index) => {
        const novos = [...acompanhamentos];
        novos.splice(index, 1);
        setAcompanhamentos(novos);
    };

    const adicionarItem = (grupoIndex) => {
        const novos = [...acompanhamentos];
        const novoId = `${acompanhamentos[grupoIndex].id}-${Date.now()}`;
        const novoItem = {
            id: novoId,
            nome: "",
            preco: 0,
            imagem: "",
            situacao: "Ativo",
        };
        novos[grupoIndex].itens.push(novoItem);
        setAcompanhamentos(novos);
        setGrupoAberto(acompanhamentos[grupoIndex].id); // mantém o grupo aberto
        setItemEditando(novoId); // entra em modo de edição
    };


    const removerItem = (grupoIndex, itemIndex) => {
        const novos = [...acompanhamentos];
        novos[grupoIndex].itens.splice(itemIndex, 1);
        setAcompanhamentos(novos);
    };

    const salvarAlteracoes = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/acompanhamentos", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(acompanhamentos),
            });

            if (!response.ok) throw new Error();
            alert("Alterações salvas com sucesso!");
        } catch (err) {
            alert("Erro ao salvar as alterações.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Card className="flex items-center justify-center shadow-sm overflow-hidden">
                <h2 className="text-xl text-center px-2 py-2">Editar Acompanhamentos</h2>
            </Card>

            <div className="max-w-7xl mx-auto px-4 pb-10 mt-5">
                {acompanhamentos.map((grupo, grupoIndex) => (
                    <Card key={grupo.id} className="mb-6 shadow-md border border-gray-200">
                        <div
                            onClick={() => alternarGrupo(grupo.id)}
                            className="w-full flex justify-between items-center bg-gray-100 px-4 py-3 rounded-t hover:bg-gray-200 cursor-pointer"
                        >
                            {grupoEditando === grupo.id ? (
                                <input
                                    type="text"
                                    value={grupo.nome}
                                    onChange={(e) => handleGrupoChange(grupoIndex, "nome", e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                    onBlur={() => setGrupoEditando(null)}
                                    autoFocus
                                    className="text-lg font-semibold bg-white border-2 border-black px-2 py-1 rounded outline-none"
                                />
                            ) : (
                                <span className="text-lg font-semibold break-words">{grupo.nome}</span>
                            )}


                            <div className="flex gap-2 items-center mr-3">
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation(); // <- isso evita que o clique feche o grupo
                                        adicionarItem(grupoIndex);
                                    }}
                                    variant="ghost"
                                >
                                    <Plus size={18} />
                                </Button>


                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setGrupoEditando(grupo.id);
                                    }}
                                    variant="ghost"
                                >
                                    <Pencil size={18} />
                                </Button>


                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removerGrupo(grupoIndex);
                                    }}
                                    variant="ghost"
                                    className="text-red-600"
                                >
                                    <Trash2 size={18} />
                                </Button>
                            </div>


                        </div>



                        {grupoAberto === grupo.id && (
                            <CardContent className="p-4 space-y-4 bg-white rounded">

                                <div className="space-y-2">
                                    {grupo.itens.map((item, itemIndex) => (
                                        <div
                                            key={item.id}
                                            className="col-span-full flex flex-col sm:flex-row gap-3 bg-slate-50 p-3 rounded items-start sm:items-center"
                                        >

                                            <input
                                                ref={itemEditando === item.id ? inputRef : null}
                                                type="text"
                                                placeholder="Nome"
                                                value={item.nome}
                                                onChange={(e) => handleItemChange(grupoIndex, itemIndex, "nome", e.target.value)}
                                                className="border p-2 rounded w-full sm:min-w-[300px]"
                                                disabled={itemEditando !== item.id}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        setItemEditando(null);
                                                        e.target.blur(); // remove o foco após Enter
                                                    }
                                                }}
                                            />

                                            <div className="flex items-center gap-2 w-full sm:w-40 lg:w-52">

                                                <span className="text-sm">R$</span>
                                                <input
                                                    type="text"
                                                    placeholder="Preço"
                                                    value={item.preco.toFixed(2).replace('.', ',')}
                                                    onChange={(e) => handleItemChange(grupoIndex, itemIndex, "preco", e.target.value)}
                                                    className="border p-2 rounded w-full text-right"
                                                    disabled={itemEditando !== item.id}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            setItemEditando(null);
                                                            e.target.blur(); // remove o foco após Enter
                                                        }
                                                    }}
                                                />


                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center w-full">
                                                <img src={item.imagem} alt="preview" className="w-12 h-12 rounded object-cover border" />
                                                <input
                                                    type="text"
                                                    placeholder="Imagem URL"
                                                    value={item.imagem}
                                                    onChange={(e) => handleItemChange(grupoIndex, itemIndex, "imagem", e.target.value)}
                                                    className="border p-2 rounded w-full"
                                                    disabled={itemEditando !== item.id}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            setItemEditando(null);
                                                            e.target.blur(); // remove o foco após Enter
                                                        }
                                                    }}
                                                />

                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.situacao === "Ativo"}
                                                        onChange={(e) => handleItemChange(grupoIndex, itemIndex, "situacao", e.target.checked ? "Ativo" : "Inativo")}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-red-500 transition duration-300"></div>
                                                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full shadow-md"></div>
                                                </label>
                                                <span className="text-sm text-gray-600">{item.situacao}</span>
                                            </div>
                                            <div className="col-span-full flex justify-end gap-2">
                                                <Button
                                                    onClick={() => setItemEditando(item.id)}
                                                    variant="ghost"
                                                    className="text-blue-600"
                                                >
                                                    <Pencil size={18} />
                                                </Button>


                                                <Button
                                                    onClick={() => removerItem(grupoIndex, itemIndex)}
                                                    variant="ghost"
                                                    className="text-red-600"
                                                >
                                                    <Trash2 size={18} />
                                                </Button>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        )}

                    </Card>
                ))}

                <div className="flex items-center gap-3 border rounded px-4 py-3 bg-white shadow-sm mt-6">
                    <input
                        type="text"
                        value={novoGrupo}
                        onChange={(e) => setNovoGrupo(e.target.value)}
                        placeholder="Novo grupo de acompanhamentos"
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <Button
                        onClick={adicionarGrupo}
                        className="bg-red-500 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 mr-4"
                    >
                        <Plus size={16} />
                        Adicionar
                    </Button>
                </div>


                <div className="text-center mt-8">
                    <Button onClick={salvarAlteracoes} className="bg-red-600 hover:bg-red-700 text-white">
                        Salvar Acompanhamentos
                    </Button>
                </div>

                {erro && <p className="text-red-600 mt-4 text-center">{erro}</p>}
            </div>
        </div>
    );
}
