<div align="center">  
  <img src="https://github.com/user-attachments/assets/2acc5cab-7ec9-4cc6-a3fc-1fe80eceee73" alt="logo" style="width:100px"></img>
</div>

# MyClub - Aplicação Interativa para Fãs de Futebol ⚽

## Descrição
O **MyClub** é uma aplicação web desenvolvida com **React**, **Next.js**, **Tailwind CSS** e **TypeScript**, que permite aos usuários acompanhar informações sobre seus times de futebol favoritos. A aplicação inclui funcionalidades de autenticação, seleção de times, exibição de plantéis e histórico dos clubes.

---

## Funcionalidades
- **Autenticação**: Cadastro e login de usuários com validação de credenciais.
- **Seleção de Times**: Escolha de times com base em países e competições.
- **Exibição de Plantel**: Visualize os jogadores do time selecionado.
- **Histórico do Time**: Informações detalhadas sobre o clube, incluindo ano de fundação, títulos e estádio.
- **Interface Responsiva**: Design otimizado para dispositivos móveis e desktops.
- **Efeitos Visuais**: Animações suaves e interativas com `framer-motion`.

---

## Tecnologias Utilizadas
- **Frontend**:
  - React
  - Next.js
  - Tailwind CSS
  - TypeScript
- **Backend**:
  - Node.js
  - Express
  - JSON Web Token (JWT) para autenticação
- **APIs**:
  - OpenAI API para geração de histórico dos times
  - API externa para informações de times e competições

---

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** para gerenciar pacotes
- **Git** para clonar o repositório

---

## Instalação

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/myclub.git
cd myclub
```
### 2. Instale as Dependências
#### Frontend:
```bash
cd my-app
npm install
npm run dev
```
#### Backend:
```bash
cd backend
npm install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:
```bash
NEXT_PUBLIC_API_KEY=sua_chave_da_api
NEXT_PUBLIC_OPENAI_API_KEY=sua_chave_da_openai
```

### Estrutura de Pastas
```markdown
public/
src/
├── app/                # Páginas e layouts do Next.js
├── components/         # Componentes reutilizáveis
├── services/           # Serviços para chamadas de API
├── types/              # Tipos TypeScript
├── pages/api           # Next Routes
└── styles/             # Estilos globais
```
```markdown
src/
├── controller/         # Controladores para rotas
├── data/               # Dados em memória
├── routes/             # Rotas da API
├── services/           # Lógica de negócios
└── index.js            # Inicialização do servidor
```
    
