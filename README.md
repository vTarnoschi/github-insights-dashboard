# GitHub Insights Dashboard

Aplicação construída usando **Next.js** com **Shadcn** que consome a api pública do **GitHub** para exibir estatísticas sobre o usuário pesquisado e seus repositórios públicos.


## Decisões técnicas

### **React Query**

Escolhi o **react-query** gerenciar o estado de dados assíncronos de forma declarativa e performática oferecendo:

- Cache automático e revalidação de dados;
- Controle de estado de carregamento, erro e sucesso de forma simples;
- Prefetch de dados melhorando a experiêcia de navegação;
- Integração fluida com SSR/Next.js e suporte a **hydration** de cache no servidor.


## Tema e persistência

O app oferece modo claro e escuro, utilizando o componente **ThemeToggle**.
A preferência do usuário é salva no localStorage, garantindo que o tema seja persistente entre sessões.


## Atualização em tempo real (mock)

Para simular novos via WebSocket, foi criado o hook **useWebsockMockRepos**, que utiliza setInterval para adicionar dados mockados a cada 30 segundos.


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

## Decisão de Arquitetura

O projeto segue uma arquitetura modular e escalável, organizada para facilitar manutenção, testes e performance:

- **Separação por responsabilidades**  
  - `app/`: páginas Next.js (App Router) e layout principal;
  - `components/`: UI reutilizável;
  - `hooks/`: lógica de estado e efeitos colaterais;
  - `lib/`: configurações e funções utilitárias;
  - `providers/`: contextos globais;
  - `services/`: chamadas à API do GitHub, mantendo desacoplamento  
  - `types/`: tipagem TypeScript consistente  
  - `__tests__/`: testes unitários e de integração

- **App Router do Next.js**  
  Cada rota dinâmicapossui sua própria pasta com `page.tsx` e `queries.ts`, permitindo SSR/SSG específicos por página.

- **Abstração da API**  
  Services e Axios centralizados isolando chamadas externas.

- **Hooks customizados**  
  lógica de estado e efeitos encapsulados, mantendo componentes puros e focados em UI.

- **Providers globais**  
  Gerencimaneto de estado compartilhado, hydration de cache e contexto de forma organizada.

- **UI modular**  
  Componentes estilizados com ShadCN/UI + Tailwind.

- **Testes organizados**  
  Cada página ou componente relevante possui testes correspondentes.
