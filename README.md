# 🧠 Mind Clear - Backend

Bem-vindo ao **Mind Clear - Backend**, a API responsável por gerenciar a lógica de negócios, persistência de dados e comunicação com o frontend do aplicativo **Mind Clear**.

---

## 📑 Índice

- [🚀 Proposta Tecnológica](#-proposta-tecnológica)
- [🛠️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [📚 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📦 Instruções de Instalação](#-instruções-de-instalação)
  - [⚙️ Pré-requisitos](#️-pré-requisitos)
  - [📥 Clonando o Repositório](#-clonando-o-repositório)
  - [🔧 Instalando e Executando o Backend](#-instalando-e-executando-o-backend)
- [📜 Licença](#-licença)

---

## 🚀 Proposta Tecnológica

O **Mind Clear - Backend** é o núcleo do sistema, responsável por:

- Gerenciar a lógica de negócios e persistência de dados.
- Garantir a segurança e autenticação dos usuários.
- Fornecer APIs REST bem definidas para comunicação com o frontend.

---

## 🛠️ Arquitetura do Projeto

### Organização de Pastas

A estrutura do projeto foi organizada com base em boas práticas para garantir escalabilidade e manutenção. Aqui está a descrição das principais pastas:

- **prisma**: Configuração do Prisma ORM.
  - `schema.prisma`: Definição do esquema do banco de dados.
  - `migrations/`: Migrações do banco de dados.
  - `seed.ts`: Script para popular o banco de dados com dados iniciais.

- **src/auth**: Gerenciamento de autenticação e autorização.
  - **interfaces**:
    - `jwt-payload.interface.ts`: Interface para o payload do JWT.
  - **services**:
    - `auth.ts`: Serviço de autenticação.
    - `jwt-auth.guard.ts`: Guard para proteger rotas com JWT.
    - `jwt.strategy.ts`: Estratégia de autenticação JWT.

- **src/config**: Configurações do sistema.
  - `database.config.ts`: Configuração do banco de dados.
  - `env.validation.ts`: Validação das variáveis de ambiente.
  - `jwt.config.ts`: Configuração do JWT.

- **src/decorators**: Decorators personalizados para facilitar o uso de funcionalidades específicas.
  - `get-user.decorator.ts`: Decorator para obter o usuário autenticado.
  - `public.decorator.ts`: Decorator para rotas públicas.

- **src/types**: Tipos e enums utilizados no sistema.
  - `index.ts`: Exportação centralizada dos tipos.
  - `user-role.enum.ts`: Enum para os papéis dos usuários.

- **src/users**: Módulo de gerenciamento de usuários.
  - **dto**: Objetos de transferência de dados para validação de entradas.
  - **interfaces**:
    - `user.interface.ts`: Interface para o modelo de usuário.
  - `user.controller.ts`: Controlador para gerenciar rotas relacionadas a usuários.
  - `user.module.ts`: Módulo do NestJS para o gerenciamento de usuários.
  - `user.service.ts`: Serviço com a lógica de negócios para usuários.

- **test**: Testes automatizados.
  - `app.e2e-spec.ts`: Testes end-to-end.

---

## 📚 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)**: Framework modular e escalável para construção de APIs.
- **[Prisma ORM](https://www.prisma.io/)**: ORM avançado para manipulação de banco de dados.
- **[SQLite](https://www.sqlite.org/)**: Banco de dados leve e eficiente (usado no desenvolvimento).
- **[JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)**: Autenticação baseada em tokens.
- **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)**: Criptografia de senhas.
- **[Class-validator](https://github.com/typestack/class-validator)**: Validação de dados para DTOs.
- **[Swagger](https://swagger.io/)**: Documentação interativa da API.

---

## 📦 Instruções de Instalação

### ⚙️ Pré-requisitos

- **Node.js**: Versão 16 ou superior.
- **SQLite**: Banco de dados para o backend.

### 📥 Clonando o Repositório

1. Clone este repositório:
   ```bash
   git clone https://github.com/diegodromer/MindClear.git
   cd MindClear
   ```

2. Acesse a branch do backend:
   ```bash
   git checkout mind-clear-backend
   ```

### 🔧 Instalando e Executando o Backend

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o arquivo `.env`:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as seguintes variáveis de ambiente (exemplo):
     ```
     DATABASE_URL="file:./dev.db"
     JWT_SECRET="sua_chave_secreta"
     ```

3. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

4. Execute o servidor:
   ```bash
   npm run start:dev
   ```

5. Para acessar a documentação interativa da API (Swagger), abra:
   ```
   http://[::1]:3000/docs
   ```
6. Para acessar o Prisma Studio, execute:
   ```   
   npx prisma studio
   ```

7. Para acessar o Prisma Studio, abra:
   ```   
   http://localhost:5555/
   ```
---

## 📜 Licença

Este projeto está sob a licença MIT.
