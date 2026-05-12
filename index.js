import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
 // Importante para ler o .env
// Correção da importação:
import { PacienteController } from './src/controller/PacienteController.js';




const app = express();

// Configura o Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main', 
}));
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware para ler dados do formulário (IMPORTANTE)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota para exibir a tela
app.get('/', (req, res) => {
    res.render('cadastro');
});

// Rota para exibir a listagem de pacientes
app.get('/listagem', PacienteController.exibirListagem);

// Rota que recebe os dados
// Note que adicionamos uma função assíncrona para lidar com o redirect ou resposta
app.post("/pacientes/cadastrar", async (req, res) => {
    const resultado = await PacienteController.cadastrarPaciente(req.body);
    
    if (resultado.success) {
        // Você pode renderizar uma tela de sucesso ou mandar um alert
        res.send(`<script>alert("${resultado.message}"); window.location.href="/";</script>`);
    } else {
        res.status(400).send(resultado.message);
    }
});


app.listen(8800, () => {
    console.log('Servidor rodando em http://localhost:8800');
});