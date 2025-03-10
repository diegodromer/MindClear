# 🧠 Mind Clear

Bem-vindo ao **Mind Clear**, um aplicativo inovador focado em ajudar usuários no combate a recaídas, com funcionalidades robustas e suporte à sincronização em tempo real. Este repositório está dividido em duas branches separadas, cada uma contendo um dos projetos principais:

- **Frontend**: Localizado na branch `mind-clear-frontend`.
- **Backend**: Localizado na branch `mind-clear-backend`.

---

## 📑 Índice

- [🚀 Proposta Tecnológica](#-proposta-tecnológica)
- [🛠️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [📚 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [✨ Funcionalidades](#-funcionalidades)
- [📦 Instruções de Instalação](#-instruções-de-instalação)
  - [⚙️ Pré-requisitos](#️-pré-requisitos)
  - [📥 Clonando o Repositório](#-clonando-o-repositório)
  - [🔧 Instalando e Executando o Backend](#-instalando-e-executando-o-backend)
  - [📱 Instalando e Executando o Frontend](#-instalando-e-executando-o-frontend)
- [🖼️ Telas do Aplicativo](#-telas-do-aplicativo)
  - [Tela Inicial](#tela-inicial)
  - [Tela de Login](#tela-de-login)
  - [Tela Home](#tela-home)
  - [Tela de Definições](#tela-de-definições)
- [👥 Usuários de Teste e Visualização de Dados](#-usuários-de-teste-e-visualização-de-dados)
- [🤔 Decisões Técnicas](#-decisões-técnicas)
- [🤝 Contribuição](#-contribuição)
- [📜 Licença](#-licença)

---

## 🚀 Proposta Tecnológica

O **Mind Clear** é um aplicativo mobile focado em ajudar pessoas a monitorar e evitar recaídas em seus processos de recuperação. Ele oferece:

- **Atualização em tempo real**: Os dados são sincronizados automaticamente com o backend, permitindo que o progresso do usuário seja salvo constantemente.
- **Troca de dispositivos sem perda de progresso**: Toda a lógica de persistência é gerenciada no backend, garantindo que o usuário possa continuar de onde parou, mesmo trocando de celular.
- **Acessibilidade e Usabilidade**: O design foi pensado para ser intuitivo e acessível, permitindo que qualquer pessoa utilize o aplicativo com facilidade.

---

## 🛠️ Arquitetura do Projeto

O **Mind Clear** foi desenvolvido com uma arquitetura moderna e bem estruturada, garantindo escalabilidade, organização e facilidade de manutenção. A arquitetura está dividida em dois principais componentes: **Frontend** e **Backend**. Aqui está uma visão geral:

### 🔷 Frontend

- **Framework e Ferramentas**: O frontend foi desenvolvido utilizando **React Native**, com o suporte do **Expo** para simplificar o processo de desenvolvimento e deploy. Isso garante compatibilidade entre plataformas (iOS e Android), além de acelerar o desenvolvimento.
- **Organização de Pastas**:
  - **src/components**: Componentes reutilizáveis para a interface do usuário.
  - **src/screens**: Telas principais do aplicativo, como Login, Home e Configurações.
  - **src/redux**: Lógica de gerenciamento de estado global utilizando **Redux Toolkit**.
  - **src/utils**: Funções auxiliares e manipulação de dados.
  - **assets/**: Recursos estáticos, como imagens e ícones.
- **Fluxo de Dados**: O gerenciamento de estado global é feito com **Redux Toolkit**, garantindo que os dados sejam compartilhados de forma eficiente entre os componentes. As requisições ao backend são feitas utilizando **Axios**.

### 🟢 Backend

- **Framework e Ferramentas**: O backend foi desenvolvido utilizando **NestJS**, um framework modular que facilita a criação de APIs escaláveis e organizadas.
- **Organização de Pastas**:
  - **src/modules**: Cada funcionalidade do sistema (como autenticação, gerenciamento de usuários, etc.) é organizada em módulos separados.
  - **src/entities**: Definições de entidades do banco de dados utilizando **Prisma ORM**.
  - **src/controllers**: Controladores que gerenciam as requisições e respostas da API.
  - **src/services**: Serviços que contêm a lógica de negócio.
  - **src/dtos**: Objetos de transferência de dados (DTOs) para validação e manipulação de entradas.
- **Banco de Dados**: Utilizamos **SQLite** durante o desenvolvimento e testes, pela sua simplicidade e portabilidade. Em produção, o sistema pode ser facilmente adaptado para outros bancos de dados, como PostgreSQL ou MySQL.

### Comunicação entre Frontend e Backend

- O frontend e o backend se comunicam por meio de **REST APIs** bem definidas e documentadas. Todas as requisições são feitas utilizando **Axios** no frontend, com respostas otimizadas e compactadas pelo backend utilizando **Compression**.

---

## 📚 Tecnologias Utilizadas

### 🔷 Frontend

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento mobile.
- **[Expo](https://expo.dev/)**: Ferramenta para simplificar o desenvolvimento e deploy de aplicativos React Native.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: Gerenciamento de estado global simplificado.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para requisições à API.
- **[React Navigation](https://reactnavigation.org/)**: Navegação entre telas.
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: Biblioteca avançada para animações fluidas.
- **[Lucide React Native](https://lucide.dev/)**: Ícones modernos e personalizáveis.
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)**: Ícones para UI.
- **[Async Storage](https://react-native-async-storage.github.io/async-storage/)**: Armazenamento local persistente.

### 🟢 Backend

- **[NestJS](https://nestjs.com/)**: Framework modular e escalável para construção de APIs.
- **[Prisma ORM](https://www.prisma.io/)**: ORM avançado para manipulação de banco de dados.
- **[SQLite](https://www.sqlite.org/)**: Banco de dados leve e eficiente.
- **[JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)**: Autenticação baseada em tokens.
- **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)**: Criptografia de senhas.
- **[Class-validator](https://github.com/typestack/class-validator)**: Validação de dados para DTOs.
- **[Swagger](https://swagger.io/)**: Documentação interativa da API.

---

## ✨ Funcionalidades

O **Mind Clear** foi projetado para ser uma ferramenta poderosa e intuitiva, ajudando usuários a manter o foco em suas jornadas de recuperação. Aqui estão algumas das principais funcionalidades que tornam o aplicativo único:

- **Monitoramento de Progresso**: Acompanhe suas metas e veja seu progresso diário, semanal e mensal.
- **Sistema de Alertas Personalizados**: Receba lembretes e notificações para manter-se no caminho certo, evitando recaídas.
- **Sincronização em Tempo Real**: Todos os dados são atualizados automaticamente entre dispositivos.
- **Personalização**: Ajuste o aplicativo de acordo com suas necessidades, incluindo temas, notificações e metas personalizadas.

---

## 📦 Instruções de Instalação

### ⚙️ Pré-requisitos

- **Node.js**: Versão 16 ou superior.
- **Expo CLI**: Para executar o frontend.
- **SQLite**: Banco de dados para o backend.

### 📥 Clonando o Repositório

1. Clone este repositório:
   ```bash
   git clone https://github.com/diegodromer/MindClear.git
   cd MindClear
   ```

### 🔧 Instalando e Executando o Backend

1. Acesse a branch do backend:
   ```bash
   git checkout mind-clear-backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor:
   ```bash
   npm run start
   ```

### 📱 Instalando e Executando o Frontend

1. Acesse a branch do frontend:
   ```bash
   git checkout mind-clear-frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o Expo:
   ```bash
   expo start
   ```

---

## 🖼️ Telas do Aplicativo

### Tela Inicial
[Tela inicial](https://github.com/user-attachments/assets/a5b0c90f-ae37-42ce-ac4e-873d159a4317)


### Tela de Login
![Login](https://github.com/user-attachments/assets/c60f9944-b9d4-49e4-b4f3-94b5c87427c4)


### Tela Home
![Home](https://github.com/user-attachments/assets/b6e4968c-533e-4f80-be74-c208d58c2312)


### Tela de Definições
![Definições](https://github.com/user-attachments/assets/96931923-6bbe-48dc-9192-4cedcd41b6fb)


---

## 👥 Usuários de Teste e Visualização de Dados

O backend do **Mind Clear** já contém usuários prontos para testes. Esses usuários são gerenciados pelo **Prisma ORM**, que facilita a manipulação e visualização dos dados no banco de dados. 

- As credenciais (como e-mails e senhas) dos usuários de teste estão disponíveis no arquivo `seed.ts`, localizado na pasta de configuração do backend. Certifique-se de verificar este arquivo para acessar os dados necessários durante os testes.

---

## 🤔 Decisões Técnicas

Durante o desenvolvimento do **Mind Clear**, foram tomadas decisões técnicas estratégicas para garantir que o projeto fosse escalável, eficiente e fácil de manter. Aqui estão os principais pontos que guiaram nossas escolhas:

- **Arquitetura Modular**: Backend com **NestJS**, permitindo separação de responsabilidades.
- **Prisma ORM**: Para consultas rápidas e seguras ao banco de dados.
- **Segurança e Autenticação**: Uso de **JWT** e **Bcrypt**.
- **Frontend com Expo**: Para acelerar o desenvolvimento mobile.

---

## 📜 Licença

Este projeto está sob a licença MIT.
