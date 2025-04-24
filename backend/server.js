import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Corrigir e normalizar caminho para frontend
const frontendPath = path.normalize(path.join(__dirname, "../frontend/dist"));

const acompanhamentosPath = path.join(__dirname, "data/acompanhamentos.json");
const produtosPath = path.join(__dirname, "data/produtos.json");

app.use(cors());
app.use(express.json());

// GET acompanhamentos
app.get("/api/acompanhamentos", async (req, res) => {
    try {
        const data = await fs.readFile(acompanhamentosPath, "utf-8");
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: "Erro ao ler acompanhamentos.json" });
    }
});

// PUT acompanhamentos
app.put("/api/acompanhamentos", async (req, res) => {
    try {
        const dados = JSON.stringify(req.body, null, 2);
        await fs.writeFile(acompanhamentosPath, dados, "utf-8");
        res.json({ message: "Acompanhamentos salvos com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao salvar acompanhamentos.json" });
    }
});

// GET produtos
app.get("/api/produtos", async (req, res) => {
    try {
        const data = await fs.readFile(produtosPath, "utf-8");
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: "Erro ao ler produtos.json" });
    }
});

// PUT produtos
app.put("/api/produtos", async (req, res) => {
    try {
        const dados = JSON.stringify(req.body, null, 2);
        await fs.writeFile(produtosPath, dados, "utf-8");
        res.json({ message: "Produtos salvos com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao salvar produtos.json" });
    }
});

// Serve arquivos estáticos do frontend
app.use(express.static(frontendPath));


app.listen(process.env.PORT || 3001, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3001}`);
});

