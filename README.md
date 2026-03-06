# 📱 Telegram Clone — Projeto Educacional

> ⚠️ **AVISO IMPORTANTE:** Este projeto é **estritamente educacional** e **não possui nenhuma afiliação, parceria ou aprovação oficial com o Telegram Messenger** ou qualquer empresa relacionada. O nome "Telegram" e o conceito de interface são usados apenas como referência de aprendizado. Nenhum dado real de usuários do Telegram é acessado ou utilizado.

---

## 🎓 Sobre o Projeto

Este é um aplicativo de chat em tempo real desenvolvido como **projeto de estudos**, com o objetivo de explorar e aprofundar conhecimentos em **React Native**, **Expo**, **Firebase**, **CometChat** e outras tecnologias do ecossistema mobile moderno.

A ideia central é reproduzir a experiência visual e funcional de um aplicativo de mensagens — inspirado no Telegram — para entender na prática como funcionam autenticação, troca de mensagens em tempo real, navegação entre telas e gerenciamento de estado em aplicações mobile.

> Este projeto **não é um produto comercial**. Foi criado exclusivamente para fins de aprendizado e desenvolvimento de habilidades técnicas.

---

## 🚀 Tecnologias Utilizadas

### Core

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React Native](https://reactnative.dev/) | 0.83.2 | Framework principal para desenvolvimento mobile |
| [React](https://react.dev/) | 19.2.0 | Biblioteca de UI e gerenciamento de estado |
| [Expo](https://expo.dev/) | ~55.0.2 | Plataforma e toolchain para React Native |
| [TypeScript](https://www.typescriptlang.org/) | ~5.9.2 | Tipagem estática para JavaScript |

### Autenticação & Backend

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Firebase](https://firebase.google.com/) | ^12.9.0 | Autenticação de usuários (Firebase Auth) |
| [CometChat SDK](https://www.cometchat.com/) | ^4.0.19 | Mensagens em tempo real e gerenciamento de usuários de chat |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | 2.2.0 | Persistência local de dados no dispositivo |

### Navegação

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React Navigation](https://reactnavigation.org/) | ^7.1.31 | Sistema de navegação entre telas |
| [React Navigation Native Stack](https://reactnavigation.org/) | ^7.14.2 | Navegação nativa com stack de telas |

### UI & Experiência

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) | ~2.30.0 | Manipulação avançada de gestos |
| [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) | 4.2.1 | Animações de alta performance |
| [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context) | ~5.6.2 | Suporte a áreas seguras (notch, barra de status) |
| [React Native Screens](https://github.com/software-mansion/react-native-screens) | ~4.23.0 | Otimização de telas nativas |
| [React Native Web](https://necolas.github.io/react-native-web/) | ^0.21.0 | Suporte para execução no navegador |

---

## 🧠 Conceitos Praticados

Ao desenvolver este projeto, os seguintes conceitos foram explorados e aplicados na prática:

- **Autenticação com Firebase Auth** — registro e login de usuários com e-mail e senha
- **Mensagens em tempo real** com o CometChat SDK (envio, recebimento e histórico)
- **Gerenciamento de estado global** com React Context API (`AuthContext`)
- **Navegação condicional** — fluxos separados para usuário autenticado e não autenticado
- **TypeScript em React Native** — uso de interfaces, tipos genéricos e tipagem de props/navigators
- **Componentização** — separação de responsabilidades em componentes reutilizáveis (ex: `MessageBubble`)
- **Hooks do React** — `useState`, `useEffect`, `useContext` e `createContext`
- **KeyboardAvoidingView** — tratamento correto do teclado em iOS e Android
- **FlatList otimizada** — renderização eficiente de listas de mensagens
- **Integração entre dois serviços** — Firebase (identidade) + CometChat (chat)
- **Ciclo de vida do app Expo** e configuração com `app.json`

---

## 📂 Estrutura do Projeto

```
telegram-clone/
├── App.tsx                   # Raiz do app, contexto de autenticação e navegação
├── index.ts                  # Ponto de entrada
├── app.json                  # Configuração do Expo
├── tsconfig.json             # Configuração do TypeScript
├── package.json              # Dependências
└── src/
    ├── components/
    │   └── MessageBuble.tsx  # Componente de bolha de mensagem
    ├── navigation/
    │   └── RootNavigator.tsx # Configuração central de navegação
    ├── screens/
    │   ├── LoginScreen.tsx   # Tela de login
    │   ├── RegisterScreen.tsx# Tela de registro de usuário
    │   ├── ChatListScreen.tsx# Lista de conversas disponíveis
    │   └── ChatScreen.tsx    # Tela de chat em tempo real
    └── services/
        ├── firebase.ts       # Inicialização e configuração do Firebase
        ├── cometchat.ts      # Inicialização, login e funções do CometChat
        └── authService.ts    # Funções auxiliares de autenticação
```

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Conta no [Firebase](https://firebase.google.com/) configurada
- Conta no [CometChat](https://www.cometchat.com/) configurada

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/telegram-clone.git
cd telegram-clone

# Instale as dependências
npm install
```

### Configuração

1. Configure seu projeto no **Firebase Console** e substitua as credenciais em [src/services/firebase.ts](src/services/firebase.ts)
2. Configure seu app no **CometChat Dashboard** e substitua `appID` e as chaves em [src/services/cometchat.ts](src/services/cometchat.ts)

### Execução

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Rodar no Android
npm run android

# Rodar no iOS
npm run ios

# Rodar no navegador (Web)
npm run web
```

---

## 📌 Avisos e Disclaimers

- 🚫 **Não oficial:** Este projeto **não é** afiliado, endossado ou patrocinado pelo Telegram Messenger LLP.
- 🎓 **Educacional:** Desenvolvido exclusivamente para fins de aprendizado em React Native e tecnologias associadas.
- 🔒 **Segurança:** As credenciais presentes no código são de ambientes de desenvolvimento/teste. **Nunca exponha credenciais reais em projetos públicos.**
- ⚙️ **Sem garantias:** O projeto pode conter bugs ou comportamentos inesperados, pois o foco é o aprendizado, não a produção.

---

## 📄 Licença

Este projeto é de uso **estritamente educacional** e não possui licença para uso comercial. Sinta-se livre para estudar, modificar e aprender com o código.

---

*Desenvolvido com fins educacionais para aprendizado de React Native, Expo, Firebase e CometChat.*
