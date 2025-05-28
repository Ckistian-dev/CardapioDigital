import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Carrega variáveis de ambiente do .env
dotenv.config();

// Inicializa o app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // para interpretar JSON no corpo da requisição

// Conexão com MySQL usando um Pool de Conexões
const pool = mysql.createPool({ // <--- Alterado de createConnection para createPool
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // <--- Opção: Esperar por uma conexão se todas estiverem em uso
    connectionLimit: 10,      // <--- Opção: Número máximo de conexões no pool
    queueLimit: 0             // <--- Opção: Número máximo de requisições de conexão na fila (0 para sem limite)
});

// =================== ROTAS ===================

// GET produtos
app.get("/api/produtos", async (req, res) => {
    try {
        // Use pool.execute ou pool.query diretamente
        const [rows] = await pool.execute("SELECT dados FROM produtos LIMIT 1"); // <--- Alterado db para pool
        if (rows.length > 0) {
            const dadosJson = typeof rows[0].dados === "string"
                ? JSON.parse(rows[0].dados)
                : rows[0].dados;
            res.json(dadosJson);
        } else {
            res.json([]);
        }
    } catch (err) {
        console.error("Erro ao ler produtos:", err);
        res.status(500).json({ error: "Erro ao ler produtos do banco" });
    }
});

// PUT produtos
app.put("/api/produtos", async (req, res) => {
    try {
        const dados = JSON.stringify(req.body);
        // Para operações que devem acontecer juntas (como deletar e depois inserir),
        // é uma boa prática usar uma transação se o seu motor de BD suportar e for crítico.
        // No entanto, para simplicidade aqui, usaremos o pool diretamente para cada comando.
        // Uma solução mais robusta poderia envolver obter uma conexão do pool e rodar ambos os comandos nela.
        await pool.execute("DELETE FROM produtos"); // <--- Alterado db para pool
        await pool.execute("INSERT INTO produtos (dados) VALUES (?)", [dados]); // <--- Alterado db para pool
        res.json({ message: "Produtos salvos com sucesso no banco!" });
    } catch (err) {
        console.error("Erro ao salvar produtos:", err);
        res.status(500).json({ error: "Erro ao salvar produtos no banco" });
    }
});

// GET acompanhamentos
app.get("/api/acompanhamentos", async (req, res) => {
    try {
        const [rows] = await pool.execute("SELECT dados FROM acompanhamentos LIMIT 1"); // <--- Alterado db para pool
        if (rows.length > 0) {
            const dadosJson = typeof rows[0].dados === "string"
                ? JSON.parse(rows[0].dados)
                : rows[0].dados;
            res.json(dadosJson);
        } else {
            res.json([]);
        }
    } catch (err) {
        console.error("Erro ao ler acompanhamentos:", err);
        res.status(500).json({ error: "Erro ao ler acompanhamentos do banco" });
    }
});

// PUT acompanhamentos
app.put("/api/acompanhamentos", async (req, res) => {
    try {
        const dados = JSON.stringify(req.body);
        await pool.execute("DELETE FROM acompanhamentos"); // <--- Alterado db para pool
        await pool.execute("INSERT INTO acompanhamentos (dados) VALUES (?)", [dados]); // <--- Alterado db para pool
        res.json({ message: "Acompanhamentos salvos com sucesso no banco!" });
    } catch (err) {
        console.error("Erro ao salvar acompanhamentos:", err);
        res.status(500).json({ error: "Erro ao salvar acompanhamentos no banco" });
    }
});

// =================== SERVIDOR ===================

app.listen(process.env.PORT || 3001, () => {
    console.log(`✅ Servidor rodando em http://localhost:${process.env.PORT || 3001}`);
});