//CONFIG. PADRÃO DO EXPRESS
import express from "express";
const app = express();
app.use(express.json());

//CONFIG. PADRÃO DO DOTENV
import { config } from 'dotenv';
config();

//CONFIG. PADRÃO DO SOCKET
import http from 'http';
import SocketSetup from "./socket/SocketSetup";
const httpServer = http.createServer(app);
SocketSetup(httpServer)

//EXECUTA A FUNÇÃO DE CONEXÃO COM O BANCO DE DADOS
import Conn from "./data/Conn";
Conn();

httpServer.listen(8080, () => console.log('servidor rodando'));
