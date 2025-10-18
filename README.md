# GitHub Insights Dashboard

Aplicação construída usando **Next.js** com **Shadcn** que consome a api pública do **GitHub** para exibir estatísticas sobre o usuário pesquisado e seus repositórios públicos.

---

## Decisões técnicas

### **React Query**

Escolhi o **react-query** gerenciar o estado de dados assíncronos de forma declarativa e performática oferecendo:

- Cache automático e revalidação de dados;
- Controle de estado de carregamento, erro e sucesso de forma simples;
- Prefetch de dados melhorando a experiêcia de navegação;
- Integração fluida com SSR/Next.js e suporte a **hydration** de cache no servidor.

---

## Tema e persistência

O app oferece modo claro e escuro, utilizando o componente **ThemeToggle**.
A preferência do usuário é salva no localStorage, garantindo que o tema seja persistente entre sessões.

---

## Atualização em tempo real (mock)

Para simular novos via WebSocket, foi criado o hook **useWebsockMockRepos**, que utiliza setInterval para adicionar dados mockados a cada 30 segundos.

---

## Instalação e execução

1. **Clone o repositório**

   ```bash
    git clone https://github.com/seuusuario/github-insights-dashboard.git
    cd github-insights-dashboard
   ```

2. **Instale as dependências**

   ```bash
    npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
    npm run dev
    http://localhost:3000
   ```

## Executando os testes

1. **Executar todos os testes**
   ```bash
    npm run test
   ```
