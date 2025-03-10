# 🧠 Mind Clear - Frontend

Bem-vindo ao **Mind Clear - Frontend**, a interface do usuário para o aplicativo inovador focado em ajudar usuários no combate a recaídas. Este projeto foi desenvolvido com **React Native** e utiliza **Expo** para garantir compatibilidade entre plataformas e agilidade no desenvolvimento.

---

## 📑 Índice

- [🚀 Proposta Tecnológica](#-proposta-tecnológica)
- [🛠️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [📚 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [✨ Funcionalidades](#-funcionalidades)
- [📦 Instruções de Instalação](#-instruções-de-instalação)
  - [⚙️ Pré-requisitos](#️-pré-requisitos)
  - [📥 Clonando o Repositório](#-clonando-o-repositório)
  - [📱 Instalando e Executando o Frontend](#-instalando-e-executando-o-frontend)
- [🖼️ Telas do Aplicativo](#-telas-do-aplicativo)
- [📜 Licença](#-licença)

---

## 🚀 Proposta Tecnológica

O **Mind Clear - Frontend** é responsável por fornecer uma interface amigável e funcional para os usuários do aplicativo. Ele oferece:

- **Design Intuitivo**: Focado em acessibilidade e usabilidade.
- **Sincronização em Tempo Real**: Comunicação eficiente com o backend para salvar e recuperar dados.
- **Animações e Navegação Suave**: Experiência de usuário aprimorada com bibliotecas avançadas.

---

## 🛠️ Arquitetura do Projeto

### Organização de Pastas

- **src/components**: Componentes reutilizáveis para a interface do usuário.
- **src/hooks**: Hooks personalizados para lógica e reutilização de funcionalidades.
  - **auth/**: Hooks relacionados à autenticação.
  - **user/**: Hooks específicos para funcionalidade de usuários.
- **src/screens**: Telas principais do aplicativo, como Login, Home e Configurações.
- **src/navigation**: Configuração de rotas e navegação do aplicativo.
- **src/store**: Gerenciamento de estado global utilizando **Redux Toolkit**.
  - **slices/**: Divisão de estado por funcionalidades.
  - **hooks.ts**: Hooks personalizados para `useSelector` e `useDispatch`.
  - **store.ts**: Configuração do Redux Store.
- **src/services**: Serviços para comunicação com APIs.
- **src/utils**: Funções auxiliares e manipulação de dados.
- **src/styles**: Estilos globais ou utilitários para o design do app.
- **assets/**: Recursos estáticos, como imagens e ícones.

### Fluxo de Dados

- O gerenciamento de estado global é feito com **Redux Toolkit**, garantindo que os dados sejam compartilhados de forma eficiente entre os componentes.
- As requisições ao backend são feitas utilizando **Axios**.

---

## 📚 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento mobile.
- **[Expo](https://expo.dev/)**: Ferramenta para simplificar o desenvolvimento e deploy.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: Gerenciamento de estado global simplificado.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para requisições à API.
- **[React Navigation](https://reactnavigation.org/)**: Navegação entre telas.
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: Biblioteca avançada para animações fluidas.
- **[Lucide React Native](https://lucide.dev/)**: Ícones modernos e personalizáveis.
- **[Async Storage](https://react-native-async-storage.github.io/async-storage/)**: Armazenamento local persistente.

---

## ✨ Funcionalidades

- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela.
- **Navegação Intuitiva**: Fluxo de telas simples e direto.
- **Notificações e Alertas**: Sistema de lembretes para manter o usuário focado.

---

## 📦 Instruções de Instalação

### ⚙️ Pré-requisitos

- **Node.js**: Versão 16 ou superior.
- **Expo CLI**: Para executar o frontend.

### 📥 Clonando o Repositório

1. Clone este repositório:
   ```bash
   git clone https://github.com/diegodromer/MindClear.git
   cd MindClear
   ```

2. Acesse a branch do frontend:
   ```bash
   git checkout mind-clear-frontend
   ```

### 📱 Instalando e Executando o Frontend

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o Expo:
   ```bash
   expo start
   ```

---

## 🖼️ Telas do Aplicativo

### Tela Inicial
<img src="https://github.com/user-attachments/assets/a5b0c90f-ae37-42ce-ac4e-873d159a4317" alt="Tela inicial" width="350">

### Tela de Login
<img src="https://github.com/user-attachments/assets/c60f9944-b9d4-49e4-b4f3-94b5c87427c4" alt="Tela de Login" width="350">

### Tela Home
<img src="https://github.com/user-attachments/assets/b6e4968c-533e-4f80-be74-c208d58c2312" alt="Tela Home" width="350">

---

## 📜 Licença

Este projeto está sob a licença MIT.
