import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos dos arquivos JSON
const produtosPath = path.join(__dirname, "data", "produtos.json");
const acompanhamentosPath = path.join(__dirname, "data", "acompanhamentos.json");

// Conexão com banco
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


/**
 * Salva um JSON dentro de uma célula da tabela especificada (tipo JSON)
 * @param {string} tabela - Nome da tabela (ex: 'produtos_json')
 * @param {object} jsonData - Objeto JSON a ser salvo
 */
async function salvarJSONNoBanco(tabela, jsonData) {
    try {
        const dados = JSON.stringify(jsonData);
        await db.execute(`DELETE FROM \`${tabela}\``); // limpa a tabela (opcional)
        await db.execute(`INSERT INTO \`${tabela}\` (dados) VALUES (?)`, [dados]);
        console.log(`✅ JSON salvo com sucesso na tabela '${tabela}'`);
    } catch (err) {
        console.error(`❌ Erro ao salvar JSON na tabela '${tabela}':`, err);
    }
}

async function carregarEEnviar() {
    try {
        const produtosData = await fs.readFile(produtosPath, "utf-8");
        const acompanhamentosData = await fs.readFile(acompanhamentosPath, "utf-8");

        await salvarJSONNoBanco("produtos", JSON.parse(produtosData));
        await salvarJSONNoBanco("acompanhamentos", JSON.parse(acompanhamentosData));

        console.log("✅ Dados enviados para o banco com sucesso.");
        process.exit(0);
    } catch (err) {
        console.error("❌ Erro ao carregar ou salvar JSON:", err);
        process.exit(1);
    }
}

carregarEEnviar();
