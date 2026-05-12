# 🏥 Sistema de Gestão de Pacientes - Clínica Médica

Este sistema foi desenvolvido para resolver os problemas de organização de uma clínica médica, substituindo fichas físicas por uma aplicação web moderna, segura e eficiente.

---

## 🛠️ Tecnologias e Arquitetura
O projeto utiliza o padrão **MVC (Model-View-Controller)** para garantir uma estrutura organizada e de fácil manutenção.

* **Frontend:** Handlebars (HBS) & Bootstrap 5
* **Backend:** Node.js & Express
* **Banco de Dados:** PostgreSQL (via Supabase)
* **Versionamento:** Git & GitHub
* **Deploy:** Vercel

---

## 📋 Passo a Passo de Implantação

### 1. Configuração do Banco de Dados (Supabase)
1. Criação do projeto `ClinicaMedica` no painel do Supabase.
2. Execução do script SQL para criação da tabela de pacientes:
   ```sql
   CREATE TABLE pacientes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     nome TEXT NOT NULL,
     celular VARCHAR(20) NOT NULL,
     email TEXT UNIQUE NOT NULL,
     criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );


3. Configuração de **Políticas de Segurança (RLS)** para permitir que a aplicação realize inserções e consultas.

### 2. Desenvolvimento e Conexão

1. **Conexão:** Configuração do cliente Supabase em `config/supabase.js`.
2. **Segurança:** Uso de variáveis de ambiente (`.env`) para proteger as credenciais da API.
3. **Estrutura MVC:**
* **Model:** Gerencia as chamadas ao Supabase (`PacienteModel.js`).
* **Controller:** Processa as requisições e formata dados (`PacienteController.js`).
* **View:** Interfaces dinâmicas em Handlebars (`cadastro.hbs` e `listagem.hbs`).



### 3. Versionamento com Git

Comandos utilizados para organizar o código:

```bash
# Inicialização
git init

# Ignorar arquivos sensíveis (node_modules e .env)
# Criado arquivo .gitignore

# Commit inicial
git add .
git commit -m "feat: implementação do sistema MVC e integração Supabase"

# Envio para Repositório Remoto
git remote add origin [URL_DO_REPOSITORIO]
git branch -M main
git push -u origin main

```

### 4. Publicação na Vercel

1. Conexão do repositório GitHub com a plataforma **Vercel**.
2. Configuração das **Environment Variables** (URL e KEY) no painel administrativo da Vercel.
3. Deploy automático disparado pelo push no branch `main`.

### 5. Testes Finais de Funcionamento

* ✅ **Cadastro:** Pacientes registrados com sucesso no banco de dados.
* ✅ **Listagem:** Dados recuperados e exibidos com data formatada (PT-BR).
* ✅ **Navegação:** Botões de fluxo entre telas operando corretamente.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Crie um arquivo `.env` com suas credenciais.
4. Execute o comando: `npm run dev`.
5. Acesse: `http://localhost:8800`.
