# 🏥 Sistema de Cadastro de Pacientes - Clínica Médica

Este projeto é uma aplicação web desenvolvida para modernizar a gestão de uma clínica médica de pequeno porte, substituindo fichas físicas por um sistema digital seguro, centralizado e acessível.

## 🚀 Tecnologias Utilizadas

* **Frontend:** HTML5, Bootstrap 5 e Handlebars (HBS)
* **Backend:** Node.js com Express
* **Banco de Dados:** PostgreSQL hospedado no **Supabase**
* **Hospedagem:** **Vercel**
* **Arquitetura:** MVC (Model-View-Controller)

---

## 🛠️ Passo a Passo de Implantação

### 1. Configuração do Banco de Dados (Supabase)
1. Criado um novo projeto no Supabase chamado `ClinicaMedica`.
2. No **SQL Editor**, foi executado o script de criação da tabela:
   ```sql
   CREATE TABLE pacientes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     nome TEXT NOT NULL,
     celular VARCHAR(20) NOT NULL,
     email TEXT UNIQUE NOT NULL,
     criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
Configuração de Políticas de Segurança (RLS) para permitir INSERT e SELECT públicos.

2. Conexão e Desenvolvimento
Configuração do arquivo config/supabase.js utilizando a biblioteca @supabase/supabase-js.

Utilização de variáveis de ambiente (.env) para proteger a SUPABASE_URL e a SUPABASE_KEY.

Desenvolvimento das rotas seguindo o padrão MVC:

Model: Gerencia a comunicação com o Supabase.

View: Templates HBS para Cadastro e Listagem.

Controller: Lógica de negócio e formatação de dados.

3. Versionamento com Git
Inicialização do repositório local: git init.

Criação do arquivo .gitignore para excluir node_modules e .env.

Commit dos arquivos:

Bash
git add .
git commit -m "feat: implementação do sistema MVC e integração Supabase"
Vinculação e envio para o GitHub:

Bash
git remote add origin [URL_DO_REPOSITORIO]
git push -u origin main
4. Publicação na Vercel
Importação do repositório do GitHub na plataforma Vercel.

Configuração das Environment Variables no painel da Vercel (copiando os valores do arquivo .env).

Deploy realizado com sucesso, gerando o link de produção.

5. Testes em Produção
Cadastro: Testado o envio de formulário com sucesso e validação de e-mail único.

Listagem: Verificada a recuperação de dados em tempo real do banco PostgreSQL.

Interface: Verificada a responsividade com Bootstrap em dispositivos móveis.

💻 Como Rodar o Projeto Localmente
Clone o repositório:

Bash
git clone [URL_DO_REPOSITORIO]
Instale as dependências:

Bash
npm install
Configure o arquivo .env com suas chaves do Supabase.

Inicie o servidor:

Bash
npm run dev
Acesse: http://localhost:8800


---

### Dicas Finais para a Entrega:

1.  **O arquivo `.gitignore`:** Certifique-se de que ele existe e contém apenas a linha `node_modules` e `.env`. Isso é essencial para não "vazar" suas senhas no GitHub.
2.  **O link da Vercel:** Não esqueça de colocar o link da aplicação rodando no final do README ou na descrição do repositório no GitHub.
3.  **Compactação:** Para o link da prova, você deve selecionar todos os arquivos da pasta (exceto a pasta `node_modules`), clicar com o botão direito e escolher "Enviar para pasta compactada (zip)".

Com esse README e a estrutura que montamos, você cobriu todos os pontos da Questão 1! Boa sorte na entrega!
