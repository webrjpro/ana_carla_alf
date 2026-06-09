# Tabuada Quest: O Reino dos Números 👑🎮

**Tabuada Quest** é um jogo educativo e interativo projetado para transformar o aprendizado e a memorização das tabuadas de 2 a 9 em uma aventura épica de RPG e quebra-cabeças! 

Projetado especialmente para crianças, o jogo substitui a sensação de "tarefa escolar" por desafios recompensadores, heróis personalizáveis e batalhas mágicas contra os Guardiões dos Números.

**Desenvolvedor:** Carlos Antonio de Oliveira Piquet  
**Contato:** carlospiquet.projetos@gmail.com

---

## 🌟 Funcionalidades e Diferenciais

1. **8 Reinos Temáticos (Tabuadas do 2 ao 9)**:
   - *Fase 1*: Reino do Dobro (Tabuada do 2) 🌲
   - *Fase 2*: Reino dos Triplos (Tabuada do 3) 💎
   - *Fase 3*: Fortaleza do 4 (Tabuada do 4) 🏰
   - *Fase 4*: Ilha do 5 (Tabuada do 5) 🏴‍☠️
   - *Fase 5*: Caverna do 6 (Tabuada do 6) 🌋
   - *Fase 6*: Torre do 7 (Tabuada do 7) ⚡
   - *Fase 7*: Labirinto do 8 (Tabuada do 8) 🌀
   - *Fase 8*: Castelo Final (Tabuada do 9) 👑

2. **Fluxo Pedagógico de 3 Etapas**:
   - **Etapa 1: Encaixe Rápido**: A criança associa operações às respostas corretas. Suporta drag-and-drop (arrastar e soltar) e toque direto, bem como um sistema de clique alternativo (clicar na conta e depois na resposta).
   - **Etapa 2: Quebra-Cabeça do Reino**: Cada resposta certa revela uma peça de um lindo monumento vetorial do reino.
   - **Etapa 3: Desafio do Chefe**: Uma batalha contra o Guardião da tabuada com limite de tempo. Respostas corretas desferem golpes no chefe; respostas erradas reduzem a vida do herói.

3. **Totalmente Auto-Contido (Zero Arquivos Externos)**:
   - **Gráficos e Customização**: Personagens, monstros e equipamentos são renderizados de forma dinâmica usando **SVG Inline** e CSS.
   - **Arte Cinematográfica Local e Inclusiva**: O jogo usa cenários ilustrados salvos em `assets/art/`, com versão otimizada para desktop e mobile, representando um grupo diverso de crianças aventureiras.
   - **Companheiros Premium**: Dragão, cachorro e robô usam imagens locais em `assets/companions/`, alinhadas ao estilo visual da arte principal.
   - **Quebra-Cabeças Variados por Tabuada**: As fases usam artes diferentes para evitar repetição, incluindo dragão na tabuada do 3, robô no 4, cachorro no 5, caverna mágica no 6, torre dos raios no 7 e labirinto no 8.
   - **Música de Fundo Local**: A trilha `musica de castelo/castelo.mp3` toca em loop após o primeiro clique/toque do jogador e respeita o botão de som.
   - **Áudio Sintetizado**: Os efeitos de áudio retrô (clicks, acertos, erros, moedas e vitória) são gerados em tempo real pela **Web Audio API**, garantindo som instantâneo e offline.
   - **Equipamentos Evolutivos**: Conforme a criança derrota os chefes, ela desbloqueia itens (capa, escudo, elmo, espada de luz) que aparecem visualmente no seu avatar.

4. **Aprendizado sem Frustração**:
   - Quando a criança erra, o jogo **não penaliza agressivamente**. Ele exibe uma **Dica Pedagógica Inteligente** (ex: *7x6 é o mesmo que somar o 7 seis vezes, ou adicionar 7 a 35*).
   - Em caso de derrota no chefe, um fluxo de retentativa amigável permite recomeçar o combate sem perder o progresso das etapas anteriores.

5. **Salvar Progresso (LocalStorage)**:
   - O jogo salva automaticamente as moedas, as estrelas coletadas em cada fase e os itens equipados no navegador da criança.

6. **Modo Especial: Arena dos Mestres**:
   - Desbloqueado ao completar as 8 fases. Uma batalha caótica contra o *Mestre Supremo Giga* com contas misturadas de 2 a 9 e tempo reduzido.

7. **Certificado Real Imprimível (PDF)**:
   - Ao vencer a Arena dos Mestres, a tela do Certificado é revelada. O botão de impressão usa regras CSS `@media print` para ocultar o jogo e renderizar um lindo diploma oficial pronto para salvar em PDF ou imprimir física e diretamente!

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 (Custom Properties HSL, Flexbox, Grid e Keyframe Animations)**
- **JavaScript Moderno (ES6)**
- **Web Audio API**
- **SVG Dinâmico**
- **LocalStorage**

---

## 🚀 Como Jogar

Como o projeto foi projetado para ser 100% estático e leve, **não é necessário instalar nenhuma dependência ou banco de dados**!

1. Baixe os arquivos do repositório em uma pasta.
2. Dê um clique duplo no arquivo **`index.html`** para abrir o jogo diretamente em qualquer navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
3. Caso queira rodar em modo servidor local para testes, você pode usar extensões como o *Live Server* do VSCode ou rodar:
   ```bash
   npx serve .
   ```
