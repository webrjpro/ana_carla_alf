/* ==========================================================================
   TABUADA QUEST - GAME SCRIPT
   Desenvolvedor: Carlos Antonio de Oliveira Piquet
   Contato: carlospiquet.projetos@gmail.com
   ========================================================================== */

// 1. GAME CONSTANTS & DATABASE
const KINGDOMS = {
    2: {
        name: "Reino das Vogais",
        icon: "🍎",
        bossName: "Monstro Come-Vogais",
        puzzleTitle: "Pomar das Vogais",
        rewardName: "Medalha das Vogais",
        rewardIcon: "🏅",
        gearId: "espada_luz",
        gearName: "Espada de Luz",
        gearIcon: "⚔️",
        gearSlot: "hand",
        color: "var(--k-2)"
    },
    3: {
        name: "Reino do Alfabeto",
        icon: "🔤",
        bossName: "Lorde das Letras Soltas",
        puzzleTitle: "Cachoeira do A-B-C",
        rewardName: "Cristal do Alfabeto",
        rewardIcon: "💎",
        gearId: "capa_heroi",
        gearName: "Capa de Herói",
        gearIcon: "🧥",
        gearSlot: "back",
        color: "var(--k-3)"
    },
    4: {
        name: "Fortaleza do Som Inicial",
        icon: "🔊",
        bossName: "Mago Silenciador",
        puzzleTitle: "Muralha do Som",
        rewardName: "Escudo do Som",
        rewardIcon: "🛡️",
        gearId: "escudo_reino",
        gearName: "Escudo do Reino",
        gearIcon: "🛡️",
        gearSlot: "hand",
        color: "var(--k-4)"
    },
    5: {
        name: "Ilha das Sílabas Iniciais",
        icon: "🗣️",
        bossName: "Pirata Sombra das Sílabas",
        puzzleTitle: "Navio das Sílabas Iniciais",
        rewardName: "Insígnia de Sílabas",
        rewardIcon: "🪙",
        gearId: "chapeu_explorador",
        gearName: "Chapéu de Explorador",
        gearIcon: "🤠",
        gearSlot: "head",
        color: "var(--k-5)"
    },
    6: {
        name: "Caverna das Palavrinhas",
        icon: "🐱",
        bossName: "Duende Embaraçador",
        puzzleTitle: "Monumento de Palavras",
        rewardName: "Chave das Palavras",
        rewardIcon: "🔑",
        gearId: "mochila_aventura",
        gearName: "Mochila de Aventura",
        gearIcon: "🎒",
        gearSlot: "back",
        color: "var(--k-6)"
    },
    7: {
        name: "Torre das Rimas",
        icon: "🔔",
        bossName: "Mago Sem-Rima",
        puzzleTitle: "Torre dos Sinos",
        rewardName: "Sino Rítmico",
        rewardIcon: "⚡",
        gearId: "elmo_fogo",
        gearName: "Elmo de Fogo",
        gearIcon: "🪖",
        gearSlot: "head",
        color: "var(--k-7)"
    },
    8: {
        name: "Labirinto das Sílabas Finais",
        icon: "🌀",
        bossName: "Minotauro dos Sons Finais",
        puzzleTitle: "Labirinto Sonoro",
        rewardName: "Estrela Guia",
        rewardIcon: "💎",
        gearId: "mochila_jato",
        gearName: "Mochila a Jato",
        gearIcon: "🚀",
        gearSlot: "back",
        color: "var(--k-8)"
    },
    9: {
        name: "Castelo das Palavras",
        icon: "👑",
        bossName: "Dragão das Letras Sumidas",
        puzzleTitle: "Palácio do Saber",
        rewardName: "Coroa do Saber",
        rewardIcon: "👑",
        gearId: "coroa_imperial",
        gearName: "Coroa Imperial",
        gearIcon: "👑",
        gearSlot: "head",
        color: "var(--k-9)"
    }
};

const CHARACTERS = {
    robo: {
        name: "Roby",
        description: "Curioso e elétrico!",
        baseColor: "#8b5cf6",
        image: "assets/companions/companion-robot-card.jpg",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Body -->
            <rect x="25" y="60" width="50" height="40" rx="10" fill="#6d28d9" stroke="#4c1d95" stroke-width="3"/>
            <rect x="35" y="70" width="30" height="20" rx="5" fill="#3b0764"/>
            <!-- Neck -->
            <rect x="45" y="50" width="10" height="15" fill="#9d4edd"/>
            <!-- Head -->
            <rect x="20" y="15" width="60" height="40" rx="12" fill="#8b5cf6" stroke="#4c1d95" stroke-width="3"/>
            <!-- Eyes -->
            <circle cx="38" cy="35" r="7" fill="#22d3ee"/>
            <circle cx="38" cy="35" r="3" fill="#fff"/>
            <circle cx="62" cy="35" r="7" fill="#22d3ee"/>
            <circle cx="62" cy="35" r="3" fill="#fff"/>
            <!-- Mouth -->
            <rect x="35" y="44" width="30" height="4" rx="2" fill="#22d3ee"/>
            <!-- Antennas -->
            <line x1="50" y1="15" x2="50" y2="5" stroke="#9d4edd" stroke-width="4"/>
            <circle cx="50" cy="5" r="5" fill="#a78bfa"/>
            <!-- Ears -->
            <rect x="14" y="27" width="6" height="16" rx="3" fill="#4c1d95"/>
            <rect x="80" y="27" width="6" height="16" rx="3" fill="#4c1d95"/>
            <g id="acc-slots-robo"></g>
        </svg>`
    },
    dragao: {
        name: "Draco",
        description: "Adoooora fogo!",
        baseColor: "#10b981",
        image: "assets/companions/companion-dragon-card.jpg",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Wings -->
            <path d="M15,50 C5,30 5,60 20,65 Z" fill="#047857"/>
            <path d="M85,50 C95,30 95,60 80,65 Z" fill="#047857"/>
            <!-- Tail -->
            <path d="M75,90 C90,95 85,110 80,115 C70,110 70,95 75,90 Z" fill="#10b981"/>
            <!-- Body -->
            <ellipse cx="50" cy="85" rx="30" ry="25" fill="#10b981" stroke="#047857" stroke-width="3"/>
            <ellipse cx="50" cy="88" rx="18" ry="16" fill="#6ee7b7"/>
            <!-- Head -->
            <ellipse cx="50" cy="45" rx="28" ry="24" fill="#10b981" stroke="#047857" stroke-width="3"/>
            <!-- Snout -->
            <ellipse cx="50" cy="53" rx="16" ry="10" fill="#6ee7b7"/>
            <circle cx="45" cy="51" r="2" fill="#047857"/>
            <circle cx="55" cy="51" r="2" fill="#047857"/>
            <!-- Eyes -->
            <circle cx="38" cy="38" r="6" fill="#fff" stroke="#047857" stroke-width="1"/>
            <circle cx="38" cy="38" r="3" fill="#000"/>
            <circle cx="62" cy="38" r="6" fill="#fff" stroke="#047857" stroke-width="1"/>
            <circle cx="62" cy="38" r="3" fill="#000"/>
            <!-- Cheeks -->
            <circle cx="28" cy="48" r="3" fill="#f43f5e" opacity="0.6"/>
            <circle cx="72" cy="48" r="3" fill="#f43f5e" opacity="0.6"/>
            <!-- Horns -->
            <path d="M35,23 Q30,10 25,12 Q32,20 37,25" fill="#f59e0b" stroke="#047857" stroke-width="1.5"/>
            <path d="M65,23 Q70,10 75,12 Q68,20 63,25" fill="#f59e0b" stroke="#047857" stroke-width="1.5"/>
            <g id="acc-slots-dragao"></g>
        </svg>`
    },
    cachorro: {
        name: "Toby",
        description: "Companheiro leal!",
        baseColor: "#d97706",
        image: "assets/companions/companion-dog-card.jpg",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <ellipse cx="50" cy="84" rx="30" ry="24" fill="#d97706" stroke="#92400e" stroke-width="3"/>
            <circle cx="50" cy="44" r="28" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
            <ellipse cx="32" cy="34" rx="10" ry="18" fill="#92400e"/>
            <ellipse cx="68" cy="34" rx="10" ry="18" fill="#92400e"/>
            <circle cx="40" cy="42" r="5" fill="#fff"/>
            <circle cx="60" cy="42" r="5" fill="#fff"/>
            <circle cx="40" cy="42" r="2.5" fill="#111827"/>
            <circle cx="60" cy="42" r="2.5" fill="#111827"/>
            <ellipse cx="50" cy="54" rx="13" ry="9" fill="#fed7aa"/>
            <circle cx="50" cy="51" r="4" fill="#111827"/>
            <path d="M45,59 Q50,64 55,59" fill="none" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>
            <g id="acc-slots-cachorro"></g>
        </svg>`
    },
    gatinho: {
        name: "Miaurício",
        description: "Caçador de mistérios!",
        baseColor: "#f59e0b",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Tail -->
            <path d="M75,90 Q95,80 90,65 Q85,50 80,60" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
            <!-- Body -->
            <rect x="28" y="70" width="44" height="36" rx="15" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
            <!-- Head -->
            <ellipse cx="50" cy="45" rx="30" ry="24" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
            <!-- Ears -->
            <polygon points="23,26 12,5 34,22" fill="#d97706" stroke="#b45309" stroke-width="2"/>
            <polygon points="77,26 88,5 66,22" fill="#d97706" stroke="#b45309" stroke-width="2"/>
            <!-- Inner Ears -->
            <polygon points="22,23 16,9 30,20" fill="#fda4af"/>
            <polygon points="78,23 84,9 70,20" fill="#fda4af"/>
            <!-- Eyes -->
            <ellipse cx="38" cy="42" rx="6" ry="7" fill="#fff" stroke="#d97706" stroke-width="1"/>
            <circle cx="38" cy="42" r="3.5" fill="#10b981"/>
            <circle cx="39" cy="40" r="1.5" fill="#fff"/>
            <ellipse cx="62" cy="42" rx="6" ry="7" fill="#fff" stroke="#d97706" stroke-width="1"/>
            <circle cx="62" cy="42" r="3.5" fill="#10b981"/>
            <circle cx="63" cy="40" r="1.5" fill="#fff"/>
            <!-- Snout & Nose -->
            <polygon points="50,49 46,46 54,46" fill="#fda4af"/>
            <path d="M47,53 Q50,56 53,53" fill="none" stroke="#d97706" stroke-width="2"/>
            <!-- Whiskers -->
            <line x1="22" y1="50" x2="8" y2="48" stroke="#d97706" stroke-width="1.5"/>
            <line x1="22" y1="54" x2="6" y2="55" stroke="#d97706" stroke-width="1.5"/>
            <line x1="78" y1="50" x2="92" y2="48" stroke="#d97706" stroke-width="1.5"/>
            <line x1="78" y1="54" x2="94" y2="55" stroke="#d97706" stroke-width="1.5"/>
            <g id="acc-slots-gatinho"></g>
        </svg>`
    },
    astronauta: {
        name: "Leo",
        description: "Amigo do espaço!",
        baseColor: "#e2e8f0",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Suits Pack -->
            <rect x="22" y="65" width="56" height="15" rx="5" fill="#94a3b8"/>
            <!-- Body -->
            <rect x="25" y="72" width="50" height="32" rx="10" fill="#cbd5e1" stroke="#94a3b8" stroke-width="3"/>
            <!-- Center Badge -->
            <circle cx="50" cy="85" r="8" fill="#3b82f6"/>
            <polygon points="50,81 54,87 46,87" fill="#fff"/>
            <!-- Helmet Connect -->
            <rect x="36" y="58" width="28" height="15" fill="#64748b"/>
            <!-- Helmet Glass -->
            <circle cx="50" cy="38" r="28" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
            <circle cx="50" cy="38" r="24" fill="#1e293b"/>
            <circle cx="50" cy="38" r="22" fill="#334155"/>
            <!-- Face inside Helmet -->
            <circle cx="50" cy="40" r="14" fill="#fed7aa"/>
            <circle cx="44" cy="38" r="2" fill="#000"/>
            <circle cx="56" cy="38" r="2" fill="#000"/>
            <path d="M47,44 Q50,47 53,44" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Helmet Shading Reflection -->
            <path d="M30,26 A24,24 0 0,1 70,26" fill="none" stroke="#fff" stroke-width="3" opacity="0.3" stroke-linecap="round"/>
            <g id="acc-slots-astronauta"></g>
        </svg>`
    }
};

const GEAR_SVGS = {
    // Head items
    chapeu_explorador: `<path d="M20,18 Q50,5 80,18 L70,30 L30,30 Z" fill="#b45309" stroke="#78350f" stroke-width="2"/>
                        <rect x="10" y="27" width="80" height="5" rx="2" fill="#d97706" stroke="#78350f" stroke-width="1.5"/>`,
    elmo_fogo: `<path d="M22,12 L50,0 L78,12 L70,25 L30,25 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
                <polygon points="45,0 50,-10 55,0" fill="#f59e0b"/>`,
    coroa_imperial: `<polygon points="20,28 30,10 40,24 50,5 60,24 70,10 80,28" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
                     <circle cx="50" cy="5" r="3" fill="#ef4444"/>
                     <circle cx="30" cy="10" r="2" fill="#3b82f6"/>
                     <circle cx="70" cy="10" r="2" fill="#3b82f6"/>`,
    
    // Back items
    capa_heroi: `<path d="M25,75 L10,118 L45,110 L50,75 Z" fill="#dc2626"/>
                 <path d="M75,75 L90,118 L55,110 L50,75 Z" fill="#dc2626"/>`,
    mochila_aventura: `<rect x="20" y="74" width="12" height="25" rx="3" fill="#78350f"/>
                       <rect x="68" y="74" width="12" height="25" rx="3" fill="#78350f"/>`,
    mochila_jato: `<rect x="14" y="70" width="14" height="30" rx="3" fill="#94a3b8" stroke="#475569"/>
                   <rect x="72" y="70" width="14" height="30" rx="3" fill="#94a3b8" stroke="#475569"/>
                   <path d="M16,100 L21,112 L26,100 Z" fill="#f97316"/>
                   <path d="M74,100 L79,112 L84,100 Z" fill="#f97316"/>`,
                   
    // Hand items
    espada_luz: `<rect x="80" y="50" width="6" height="40" rx="3" fill="#22d3ee" filter="drop-shadow(0 0 5px #06b6d4)"/>
                 <rect x="78" y="86" width="10" height="10" fill="#475569"/>`,
    escudo_reino: `<path d="M12,65 Q12,95 24,100 Q36,95 36,65 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
                   <polygon points="24,70 28,82 18,75 30,75 20,82" fill="#fbbf24"/>`
};

const PUZZLE_ART = {
    2: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#064e3b"/>
        <circle cx="120" cy="150" r="60" fill="#047857"/>
        <circle cx="360" cy="180" r="80" fill="#047857"/>
        <rect x="110" y="150" width="20" height="120" fill="#78350f"/>
        <rect x="350" y="180" width="20" height="120" fill="#78350f"/>
        <polygon points="60,150 120,40 180,150" fill="#10b981"/>
        <polygon points="280,180 360,60 440,180" fill="#10b981"/>
        <circle cx="240" cy="70" r="30" fill="#fbbf24" opacity="0.8"/>
        <text x="240" y="340" fill="#a7f3d0" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Floresta do Dobro 🌲</text>
    </svg>`,
    3: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#1e1b4b"/>
        <polygon points="120,260 160,120 200,260" fill="#06b6d4" opacity="0.7"/>
        <polygon points="240,280 280,80 320,280" fill="#22d3ee" opacity="0.9"/>
        <polygon points="320,260 350,150 380,260" fill="#0891b2" opacity="0.6"/>
        <rect x="0" y="260" width="480" height="124" fill="#312e81"/>
        <text x="240" y="340" fill="#cffafe" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Catarata de Cristais 💎</text>
    </svg>`,
    4: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#451a03"/>
        <rect x="60" y="100" width="80" height="200" fill="#7c2d12" stroke="#ea580c" stroke-width="4"/>
        <rect x="340" y="100" width="80" height="200" fill="#7c2d12" stroke="#ea580c" stroke-width="4"/>
        <rect x="140" y="160" width="200" height="140" fill="#9a3412"/>
        <rect x="210" y="220" width="60" height="80" rx="30" fill="#1c1917"/>
        <polygon points="50,100 100,50 150,100" fill="#ea580c"/>
        <polygon points="330,100 380,50 430,100" fill="#ea580c"/>
        <text x="240" y="340" fill="#ffedd5" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Fortaleza Quadrada 🏰</text>
    </svg>`,
    5: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#0c4a6e"/>
        <!-- Pirate Ship -->
        <path d="M120,220 L360,220 C340,280 140,280 120,220 Z" fill="#78350f" stroke="#451a03" stroke-width="4"/>
        <rect x="235" y="60" width="10" height="160" fill="#451a03"/>
        <!-- Sails -->
        <path d="M245,70 Q310,110 245,150 Z" fill="#f8fafc"/>
        <path d="M245,150 Q290,180 245,210 Z" fill="#f8fafc"/>
        <circle cx="400" cy="80" r="30" fill="#fef08a"/>
        <text x="240" y="340" fill="#e0f2fe" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Navio Pirata do 5 🏴‍☠️</text>
    </svg>`,
    6: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#2e1065"/>
        <polygon points="0,0 80,180 160,0" fill="#4c1d95"/>
        <polygon points="320,0 400,180 480,0" fill="#4c1d95"/>
        <polygon points="120,384 240,150 360,384" fill="#1e1b4b"/>
        <circle cx="240" cy="220" r="40" fill="#c084fc" opacity="0.6"/>
        <text x="240" y="340" fill="#f3e8ff" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Tesouro da Caverna 🌋</text>
    </svg>`,
    7: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#111827"/>
        <rect x="210" y="80" width="60" height="240" fill="#374151" stroke="#4b5563" stroke-width="3"/>
        <polygon points="190,80 240,10 290,80" fill="#1f2937" stroke="#4b5563" stroke-width="2"/>
        <path d="M100,50 L120,120 L80,130 L130,220 L50,230" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <path d="M380,50 L400,120 L360,130 L410,220 L330,230" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <text x="240" y="350" fill="#f9fafb" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Torre dos Relâmpagos ⚡</text>
    </svg>`,
    8: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#0f172a"/>
        <!-- Maze representation -->
        <rect x="40" y="40" width="400" height="260" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linejoin="round"/>
        <path d="M100,100 L380,100 L380,240 L160,240 L160,170 L280,170" fill="none" stroke="#0284c7" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="280" cy="170" r="14" fill="#f43f5e"/>
        <text x="240" y="340" fill="#e0f2fe" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Labirinto Infinito 🌀</text>
    </svg>`,
    9: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#1e293b"/>
        <!-- Cloud details -->
        <circle cx="80" cy="320" r="90" fill="#fff" opacity="0.1"/>
        <circle cx="400" cy="320" r="90" fill="#fff" opacity="0.1"/>
        <circle cx="240" cy="340" r="120" fill="#fff" opacity="0.15"/>
        <!-- Golden Castle -->
        <rect x="180" y="100" width="120" height="150" fill="#d97706"/>
        <rect x="140" y="160" width="40" height="90" fill="#b45309"/>
        <rect x="300" y="160" width="40" height="90" fill="#b45309"/>
        <polygon points="130,160 160,100 190,160" fill="#fbbf24"/>
        <polygon points="290,160 320,100 350,160" fill="#fbbf24"/>
        <polygon points="170,100 240,30 310,100" fill="#fbbf24"/>
        <text x="240" y="340" fill="#fef3c7" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Castelo das Nuvens 👑</text>
    </svg>`
};

const BOSS_DATA = {
    2: { name: "Monstro Come-Vogais", bodyColor: "#334155", detailColor: "#94a3b8", icon: "🍎" },
    3: { name: "Lorde das Letras Soltas", bodyColor: "#0891b2", detailColor: "#22d3ee", icon: "🔤" },
    4: { name: "Mago Silenciador", bodyColor: "#7c2d12", detailColor: "#f97316", icon: "🔊" },
    5: { name: "Pirata Sombra das Sílabas", bodyColor: "#7c3aed", detailColor: "#a78bfa", icon: "🗣️" },
    6: { name: "Duende Embaraçador", bodyColor: "#b91c1c", detailColor: "#f87171", icon: "🐱" },
    7: { name: "Mago Sem-Rima", bodyColor: "#1e1b4b", detailColor: "#fbbf24", icon: "🔔" },
    8: { name: "Minotauro dos Sons Finais", bodyColor: "#451a03", detailColor: "#f59e0b", icon: "🌀" },
    9: { name: "Dragão das Letras Sumidas", bodyColor: "#065f46", detailColor: "#34d399", icon: "👑" },
    "arena": { name: "Mestre Supremo da Alfabetização", bodyColor: "#1e1b4b", detailColor: "#f43f5e", icon: "🔱" }
};

const LITERACY_DATABASE = {
    2: {
        // Reino das Vogais
        stage1: [
            { q: "A", a: "a", hint: "A vogal <strong>A</strong> maiúscula combina com o <strong>a</strong> minúsculo. Lembra da <strong>A</strong>belha? 🐝" },
            { q: "E", a: "e", hint: "A vogal <strong>E</strong> maiúscula combina com o <strong>e</strong> minúsculo. Lembra do <strong>E</strong>lefante? 🐘" },
            { q: "I", a: "i", hint: "A vogal <strong>I</strong> maiúscula combina com o <strong>i</strong> minúsculo. Lembra da <strong>I</strong>greja? ⛪" },
            { q: "O", a: "o", hint: "A vogal <strong>O</strong> maiúscula combina com o <strong>o</strong> minúsculo. Lembra da <strong>O</strong>velha? 🐑" },
            { q: "U", a: "u", hint: "A vogal <strong>U</strong> maiúscula combina com o <strong>u</strong> minúsculo. Lembra da <strong>U</strong>va? 🍇" },
            { q: "ÃO", a: "ão", hint: "O som nasal <strong>ÃO</strong> combina com <strong>ão</strong>, como no final do Bal<strong>ão</strong>! 🎈" }
        ],
        stage2: [
            { q: "A", a: "Abelha 🐝", hint: "A palavra <strong>Abelha</strong> começa com a letra <strong>A</strong>! 🐝" },
            { q: "E", a: "Elefante 🐘", hint: "A palavra <strong>Elefante</strong> começa com a letra <strong>E</strong>! 🐘" },
            { q: "I", a: "Igreja ⛪", hint: "A palavra <strong>Igreja</strong> começa com a letra <strong>I</strong>! ⛪" },
            { q: "O", a: "Ovelha 🐑", hint: "A palavra <strong>Ovelha</strong> começa com a letra <strong>O</strong>! 🐑" },
            { q: "U", a: "Uva 🍇", hint: "A palavra <strong>Uva</strong> começa com a letra <strong>U</strong>! 🍇" },
            { q: "a", a: "Avião ✈️", hint: "A palavra <strong>Avião</strong> começa com a letra <strong>a</strong>! ✈️" },
            { q: "e", a: "Estrela ⭐", hint: "A palavra <strong>Estrela</strong> começa com a letra <strong>e</strong>! ⭐" },
            { q: "i", a: "Iguana 🦎", hint: "A palavra <strong>Iguana</strong> começa com a letra <strong>i</strong>! 🦎" },
            { q: "o", a: "Ovo 🥚", hint: "A palavra <strong>Ovo</strong> começa com a letra <strong>o</strong>! 🥚" },
            { q: "u", a: "Urso 🐻", hint: "A palavra <strong>Urso</strong> começa com a letra <strong>u</strong>! 🐻" }
        ],
        stage3: [
            { q: "Qual letra completa: _belha 🐝?", a: "A", options: ["A", "E", "I", "O"], hint: "O som inicial de <strong>Abelha</strong> é <strong>A</strong>!" },
            { q: "Qual letra completa: _strela ⭐?", a: "E", options: ["E", "A", "O", "I"], hint: "O som inicial de <strong>Estrela</strong> é <strong>E</strong>!" },
            { q: "Qual letra completa: _greja ⛪?", a: "I", options: ["I", "E", "U", "A"], hint: "O som inicial de <strong>Igreja</strong> é <strong>I</strong>!" },
            { q: "Qual letra completa: _velha 🐑?", a: "O", options: ["O", "U", "E", "A"], hint: "O som inicial de <strong>Ovelha</strong> é <strong>O</strong>!" },
            { q: "Qual letra completa: _rso 🐻?", a: "U", options: ["U", "O", "I", "E"], hint: "O som inicial de <strong>Urso</strong> é <strong>U</strong>!" },
            { q: "Qual letra completa: _va 🍇?", a: "U", options: ["U", "A", "E", "O"], hint: "O som inicial de <strong>Uva</strong> é <strong>U</strong>!" }
        ]
    },
    3: {
        // Reino do Alfabeto
        stage1: [
            { q: "B", a: "b", hint: "A letra <strong>B</strong> maiúscula se parece com o <strong>b</strong> minúsculo. Ela é de <strong>B</strong>ola!" },
            { q: "C", a: "c", hint: "A letra <strong>C</strong> maiúscula se parece com o <strong>c</strong> minúsculo. Ela é de <strong>C</strong>asa!" },
            { q: "D", a: "d", hint: "A letra <strong>D</strong> maiúscula se parece com o <strong>d</strong> minúsculo. Ela é de <strong>D</strong>ado!" },
            { q: "F", a: "f", hint: "A letra <strong>F</strong> maiúscula se parece com o <strong>f</strong> minúsculo. Ela é de <strong>F</strong>ada!" },
            { q: "G", a: "g", hint: "A letra <strong>G</strong> maiúscula se parece com o <strong>g</strong> minúsculo. Ela é de <strong>G</strong>ato!" },
            { q: "H", a: "h", hint: "A letra <strong>H</strong> maiúscula se parece com o <strong>h</strong> minúsculo. Ela é de <strong>H</strong>arpa!" }
        ],
        stage2: [
            { q: "B", a: "Bola ⚽", hint: "A palavra <strong>Bola</strong> começa com a letra <strong>B</strong>! ⚽" },
            { q: "C", a: "Casa 🏠", hint: "A palavra <strong>Casa</strong> começa com a letra <strong>C</strong>! 🏠" },
            { q: "D", a: "Dado 🎲", hint: "A palavra <strong>Dado</strong> começa com a letra <strong>D</strong>! 🎲" },
            { q: "F", a: "Fada 🧚", hint: "A palavra <strong>Fada</strong> começa com a letra <strong>F</strong>! 🧚" },
            { q: "G", a: "Gato 🐱", hint: "A palavra <strong>Gato</strong> começa com a letra <strong>G</strong>! 🐱" },
            { q: "H", a: "Harpa 🪕", hint: "A palavra <strong>Harpa</strong> começa com a letra <strong>H</strong>! 🪕" },
            { q: "J", a: "Jacaré 🐊", hint: "A palavra <strong>Jacaré</strong> começa com a letra <strong>J</strong>! 🐊" },
            { q: "L", a: "Leão 🦁", hint: "A palavra <strong>Leão</strong> começa com a letra <strong>L</strong>! 🦁" },
            { q: "M", a: "Macaco 🐒", hint: "A palavra <strong>Macaco</strong> começa com a letra <strong>M</strong>! 🐒" },
            { q: "N", a: "Navio 🚢", hint: "A palavra <strong>Navio</strong> começa com a letra <strong>N</strong>! 🚢" }
        ],
        stage3: [
            { q: "Qual letra começa: Casa 🏠?", a: "C", options: ["C", "B", "D", "G"], hint: "O som inicial da palavra <strong>Casa</strong> é <strong>C</strong>!" },
            { q: "Qual letra começa: Bola ⚽?", a: "B", options: ["B", "P", "D", "C"], hint: "O som inicial da palavra <strong>Bola</strong> é <strong>B</strong>!" },
            { q: "Qual letra começa: Gato 🐱?", a: "G", options: ["G", "J", "C", "K"], hint: "O som inicial da palavra <strong>Gato</strong> é <strong>G</strong>!" },
            { q: "Qual letra começa: Dado 🎲?", a: "D", options: ["D", "T", "B", "G"], hint: "O som inicial da palavra <strong>Dado</strong> é <strong>D</strong>!" },
            { q: "Qual letra começa: Jacaré 🐊?", a: "J", options: ["J", "G", "CH", "S"], hint: "O som inicial da palavra <strong>Jacaré</strong> é <strong>J</strong>!" },
            { q: "Qual letra começa: Leão 🦁?", a: "L", options: ["L", "N", "M", "I"], hint: "O som inicial da palavra <strong>Leão</strong> é <strong>L</strong>!" }
        ]
    },
    4: {
        // Reino do Som Inicial
        stage1: [
            { q: "P", a: "Pato 🦆", hint: "A letra <strong>P</strong> faz o som inicial de <strong>Pato</strong>!" },
            { q: "R", a: "Rato 🐭", hint: "A letra <strong>R</strong> faz o som forte inicial de <strong>Rato</strong>!" },
            { q: "S", a: "Sapo 🐸", hint: "A letra <strong>S</strong> faz o som de sssss inicial de <strong>Sapo</strong>!" },
            { q: "T", a: "Tatu 🦦", hint: "A letra <strong>T</strong> faz o som inicial de <strong>Tatu</strong>!" },
            { q: "V", a: "Vaca 🐮", hint: "A letra <strong>V</strong> faz o som inicial de <strong>Vaca</strong>!" },
            { q: "Z", a: "Zebra 🦓", hint: "A letra <strong>Z</strong> faz o som de zzzz inicial de <strong>Zebra</strong>!" }
        ],
        stage2: [
            { q: "K", a: "Kiwi 🥝", hint: "A palavra <strong>Kiwi</strong> começa com a letra <strong>K</strong>!" },
            { q: "W", a: "Wafer 🧇", hint: "A palavra <strong>Wafer</strong> começa com a letra <strong>W</strong>!" },
            { q: "Y", a: "Yakult 🥛", hint: "A palavra <strong>Yakult</strong> começa com a letra <strong>Y</strong>!" },
            { q: "P", a: "Peixe 🐟", hint: "A palavra <strong>Peixe</strong> começa com a letra <strong>P</strong>!" },
            { q: "R", a: "Roda 🎡", hint: "A palavra <strong>Roda</strong> começa com a letra <strong>R</strong>!" },
            { q: "S", a: "Sino 🔔", hint: "A palavra <strong>Sino</strong> começa com a letra <strong>S</strong>!" },
            { q: "T", a: "Trem 🚂", hint: "A palavra <strong>Trem</strong> começa com a letra <strong>T</strong>!" },
            { q: "V", a: "Vela 🕯️", hint: "A palavra <strong>Vela</strong> começa com a letra <strong>V</strong>!" },
            { q: "Z", a: "Zíper 🤐", hint: "A palavra <strong>Zíper</strong> começa com a letra <strong>Z</strong>!" },
            { q: "X", a: "Xícara ☕", hint: "A palavra <strong>Xícara</strong> começa com a letra <strong>X</strong>!" }
        ],
        stage3: [
            { q: "Qual é a primeira letra de: Rato 🐭?", a: "R", options: ["R", "L", "S", "M"], hint: "O som inicial da palavra <strong>Rato</strong> é <strong>R</strong>!" },
            { q: "Qual é a primeira letra de: Sapo 🐸?", a: "S", options: ["S", "Z", "C", "F"], hint: "O som inicial da palavra <strong>Sapo</strong> é <strong>S</strong>!" },
            { q: "Qual é a primeira letra de: Zebra 🦓?", a: "Z", options: ["Z", "S", "J", "X"], hint: "O som inicial da palavra <strong>Zebra</strong> é <strong>Z</strong>!" },
            { q: "Qual é a primeira letra de: Pato 🦆?", a: "P", options: ["P", "B", "T", "F"], hint: "O som inicial da palavra <strong>Pato</strong> é <strong>P</strong>!" },
            { q: "Qual é a primeira letra de: Vaca 🐮?", a: "V", options: ["V", "F", "U", "B"], hint: "O som inicial da palavra <strong>Vaca</strong> é <strong>V</strong>!" },
            { q: "Qual é a primeira letra de: Xícara ☕?", a: "X", options: ["X", "S", "CH", "Z"], hint: "O som inicial da palavra <strong>Xícara</strong> é <strong>X</strong>!" }
        ]
    },
    5: {
        // Reino das Sílabas Iniciais
        stage1: [
            { q: "BA", a: "Banana 🍌", hint: "A sílaba <strong>BA</strong> começa a palavra <strong>BA-NA-NA</strong>!" },
            { q: "CA", a: "Cavalo 🐴", hint: "A sílaba <strong>CA</strong> começa a palavra <strong>CA-VA-LO</strong>!" },
            { q: "DA", a: "Dado 🎲", hint: "A sílaba <strong>DA</strong> começa a palavra <strong>DA-DO</strong>!" },
            { q: "FA", a: "Faca 🔪", hint: "A sílaba <strong>FA</strong> começa a palavra <strong>FA-CA</strong>!" },
            { q: "GA", a: "Galinha 🐔", hint: "A sílaba <strong>GA</strong> começa a palavra <strong>GA-LI-NHA</strong>!" },
            { q: "MA", a: "Mala 💼", hint: "A sílaba <strong>MA</strong> começa a palavra <strong>MA-LA</strong>!" }
        ],
        stage2: [
            { q: "BO", a: "Bolo 🎂", hint: "A palavra <strong>Bolo</strong> começa com <strong>BO</strong>!" },
            { q: "CO", a: "Copo 🥛", hint: "A palavra <strong>Copo</strong> começa com <strong>CO</strong>!" },
            { q: "DO", a: "Doce 🍬", hint: "A palavra <strong>Doce</strong> começa com <strong>DO</strong>!" },
            { q: "FO", a: "Fogo 🔥", hint: "A palavra <strong>Fogo</strong> começa com <strong>FO</strong>!" },
            { q: "GO", a: "Gota 💧", hint: "A palavra <strong>Gota</strong> começa com <strong>GO</strong>!" },
            { q: "JA", a: "Janela 🪟", hint: "A palavra <strong>Janela</strong> começa com <strong>JA</strong>!" },
            { q: "LA", a: "Lápis ✏️", hint: "A palavra <strong>Lápis</strong> começa com <strong>LA</strong>!" },
            { q: "MA", a: "Mesa 🪑", hint: "A palavra <strong>Mesa</strong> começa com <strong>MA</strong>!" },
            { q: "PA", a: "Pena 🪶", hint: "A palavra <strong>Pena</strong> começa com <strong>PA</strong>!" },
            { q: "SA", a: "Sapo 🐸", hint: "A palavra <strong>Sapo</strong> começa com <strong>SA</strong>!" }
        ],
        stage3: [
            { q: "Qual sílaba começa: Bolo 🎂?", a: "BO", options: ["BO", "BA", "CO", "LO"], hint: "O som inicial de <strong>Bolo</strong> é <strong>BO</strong>!" },
            { q: "Qual sílaba começa: Copo 🥛?", a: "CO", options: ["CO", "CA", "BO", "PO"], hint: "O som inicial de <strong>Copo</strong> é <strong>CO</strong>!" },
            { q: "Qual sílaba começa: Janela 🪟?", a: "JA", options: ["JA", "JE", "GE", "LA"], hint: "O som inicial de <strong>Janela</strong> é <strong>JA</strong>!" },
            { q: "Qual sílaba começa: Galinha 🐔?", a: "GA", options: ["GA", "GO", "JA", "CA"], hint: "O som inicial de <strong>Galinha</strong> é <strong>GA</strong>!" },
            { q: "Qual sílaba começa: Dente 🦷?", a: "DE", options: ["DE", "DA", "TE", "DO"], hint: "O som inicial de <strong>Dente</strong> é <strong>DE</strong>!" },
            { q: "Qual sílaba começa: Banana 🍌?", a: "BA", options: ["BA", "BO", "MA", "PA"], hint: "O som inicial de <strong>Banana</strong> é <strong>BA</strong>!" }
        ]
    },
    6: {
        // Reino das Palavrinhas
        stage1: [
            { q: "GA + TO", a: "GATO 🐱", hint: "Juntando <strong>GA</strong> e <strong>TO</strong> formamos <strong>GATO</strong>!" },
            { q: "BO + LO", a: "BOLO 🎂", hint: "Juntando <strong>BO</strong> e <strong>LO</strong> formamos <strong>BOLO</strong>!" },
            { q: "CA + SA", a: "CASA 🏠", hint: "Juntando <strong>CA</strong> e <strong>SA</strong> formamos <strong>CASA</strong>!" },
            { q: "PA + TO", a: "PATO 🦆", hint: "Juntando <strong>PA</strong> e <strong>TO</strong> formamos <strong>PATO</strong>!" },
            { q: "MA + LA", a: "MALA 💼", hint: "Juntando <strong>MA</strong> e <strong>LA</strong> formamos <strong>MALA</strong>!" },
            { q: "SU + CO", a: "SUCO 🍹", hint: "Juntando <strong>SU</strong> e <strong>CO</strong> formamos <strong>SUCO</strong>!" }
        ],
        stage2: [
            { q: "BOLA", a: "Bola ⚽", hint: "A palavra <strong>BOLA</strong> representa o brinquedo bola!" },
            { q: "COLA", a: "Cola 🧪", hint: "A palavra <strong>COLA</strong> é o adesivo que cola!" },
            { q: "DADO", a: "Dado 🎲", hint: "A palavra <strong>DADO</strong> é o cubo de jogo com pontos!" },
            { q: "FADA", a: "Fada 🧚", hint: "A palavra <strong>FADA</strong> é o ser mágico das asas!" },
            { q: "GATO", a: "Gato 🐱", hint: "A palavra <strong>GATO</strong> é o bichinho que mia!" },
            { q: "LAMA", a: "Lama 🕳️", hint: "A palavra <strong>LAMA</strong> é a mistura de terra e água!" },
            { q: "MAPA", a: "Mapa 🗺️", hint: "A palavra <strong>MAPA</strong> mostra o caminho do tesouro!" },
            { q: "NETO", a: "Neto 👦", hint: "A palavra <strong>NETO</strong> é o filho do vovô!" },
            { q: "PIPA", a: "Pipa 🪁", hint: "A palavra <strong>PIPA</strong> voa alto presa a uma linha!" },
            { q: "RATO", a: "Rato 🐭", hint: "A palavra <strong>RATO</strong> é o bichinho que adora queijo!" }
        ],
        stage3: [
            { q: "Junte as partes: CA + SA ?", a: "CASA", options: ["CASA", "CAMA", "CADA", "COSA"], hint: "Juntando <strong>CA</strong> e <strong>SA</strong> formamos a palavra <strong>CASA</strong>!" },
            { q: "Junte as partes: BOLA ?", a: "BO + LA", options: ["BO + LA", "BA + LA", "BO + TA", "CO + LA"], hint: "As sílabas que formam <strong>BOLA</strong> são <strong>BO</strong> e <strong>LA</strong>!" },
            { q: "Junte as partes: PA + TO ?", a: "PATO", options: ["PATO", "PANO", "PAPO", "GATO"], hint: "Juntando <strong>PA</strong> e <strong>TO</strong> formamos a palavra <strong>PATO</strong>!" },
            { q: "Junte as partes: MA + LA ?", a: "MALA", options: ["MALA", "MACA", "MAPA", "BOLA"], hint: "Juntando <strong>MA</strong> e <strong>LA</strong> formamos a palavra <strong>MALA</strong>!" },
            { q: "Qual palavra é: G A T O?", a: "GATO", options: ["GATO", "MATO", "RATO", "PATO"], hint: "Soletrando <strong>G-A-T-O</strong> formamos a palavra <strong>GATO</strong>!" },
            { q: "Qual palavra é: B O L O?", a: "BOLO", options: ["BOLO", "COLO", "BOLA", "LOTO"], hint: "Soletrando <strong>B-O-L-O</strong> formamos a palavra <strong>BOLO</strong>!" }
        ]
    },
    7: {
        // Reino das Rimas
        stage1: [
            { q: "Gato", a: "Rato", hint: "<strong>Gato</strong> rima com <strong>Rato</strong> porque as duas terminam com o som -ATO!" },
            { q: "Cão", a: "Pão", hint: "<strong>Cão</strong> rima com <strong>Pão</strong> porque as duas terminam com o som -ÃO!" },
            { q: "Pena", a: "Cena", hint: "<strong>Pena</strong> rima com <strong>Cena</strong> porque as duas terminam com o som -ENA!" },
            { q: "Mola", a: "Bola", hint: "<strong>Mola</strong> rima com <strong>Bola</strong> porque as duas terminam com o som -OLA!" },
            { q: "Chulé", a: "Pé", hint: "<strong>Chulé</strong> rima com <strong>Pé</strong> porque as duas terminam com o som -É!" },
            { q: "Mamão", a: "Limão", hint: "<strong>Mamão</strong> rima com <strong>Limão</strong> porque as duas terminam com o som -ÃO!" }
        ],
        stage2: [
            { q: "Anel", a: "Papel 📄", hint: "<strong>Anel</strong> e <strong>Papel</strong> terminam com o som -EL!" },
            { q: "Pão", a: "Mão ✋", hint: "<strong>Pão</strong> e <strong>Mão</strong> terminam com o som -ÃO!" },
            { q: "Janela", a: "Panela 🍳", hint: "<strong>Janela</strong> e <strong>Panela</strong> terminam com o som -ELA!" },
            { q: "Gato", a: "Pato 🦆", hint: "<strong>Gato</strong> e <strong>Pato</strong> terminam com o som -ATO!" },
            { q: "Cachorro", a: "Morro ⛰️", hint: "<strong>Cachorro</strong> e <strong>Morro</strong> terminam com o som -ORRO!" },
            { q: "Pé", a: "Café ☕", hint: "<strong>Pé</strong> e <strong>Café</strong> terminam com o som -É!" },
            { q: "Pipa", a: "Fita 🎀", hint: "<strong>Pipa</strong> e <strong>Fita</strong> terminam com sons parecidos!" },
            { q: "Leão", a: "Balão 🎈", hint: "<strong>Leão</strong> e <strong>Balão</strong> terminam com o som -ÃO!" },
            { q: "Castelo", a: "Martelo 🔨", hint: "<strong>Castelo</strong> e <strong>Martelo</strong> terminam com o som -ELO!" },
            { q: "Sino", a: "Menino 👦", hint: "<strong>Sino</strong> e <strong>Menino</strong> terminam com o som -INO!" }
        ],
        stage3: [
            { q: "O que rima com: Gato 🐱?", a: "Rato 🐭", options: ["Rato 🐭", "Pato 🦆", "Mão ✋", "Bolo 🎂"], hint: "<strong>Gato</strong> rima perfeitamente com <strong>Rato</strong>!" },
            { q: "O que rima com: Pão 🍞?", a: "Mão ✋", options: ["Mão ✋", "Pé 🦶", "Copo 🥛", "Bola ⚽"], hint: "<strong>Pão</strong> rima com <strong>Mão</strong>!" },
            { q: "O que rima com: Pé 🦶?", a: "Café ☕", options: ["Café ☕", "Chá 🍵", "Bolo 🎂", "Dado 🎲"], hint: "<strong>Pé</strong> rima com <strong>Café</strong>!" },
            { q: "O que rima com: Anel 💍?", a: "Papel 📄", options: ["Papel 📄", "Anzol ⚓", "Céu ☁️", "Chapéu 🤠"], hint: "<strong>Anel</strong> rima com <strong>Papel</strong>!" },
            { q: "O que rima com: Janela 🪟?", a: "Panela 🍳", options: ["Panela 🍳", "Janota 👔", "Canela 🪵", "Fivela 🎗️"], hint: "<strong>Janela</strong> rima com <strong>Panela</strong>!" },
            { q: "O que rima com: Leão 🦁?", a: "Balão 🎈", options: ["Balão 🎈", "Lobo 🐺", "Uva 🍇", "Gato 🐱"], hint: "<strong>Leão</strong> rima com <strong>Balão</strong>!" }
        ]
    },
    8: {
        // Reino das Sílabas Finais
        stage1: [
            { q: "CamiNHÃO", a: "AviÃO", hint: "Ambas terminam com o mesmo som de sílaba nasal <strong>ÃO</strong>!" },
            { q: "BoneCA", a: "PipoCA", hint: "Ambas terminam com a sílaba <strong>CA</strong>!" },
            { q: "EscuDO", a: "DaDO", hint: "Ambas terminam com a sílaba <strong>DO</strong>!" },
            { q: "GaraFA", a: "FaFA", hint: "Ambas terminam com a sílaba <strong>FA</strong>!" },
            { q: "SapaTO", a: "PaTO", hint: "Ambas terminam com a sílaba <strong>TO</strong>!" },
            { q: "AbacaXI", a: "XiXI", hint: "Ambas terminam com a sílaba <strong>XI</strong>!" }
        ],
        stage2: [
            { q: "TARTARUGA", a: "GA (Ruga)", hint: "A última sílaba de <strong>Tarta-ru-ga</strong> é <strong>GA</strong>!" },
            { q: "BORBOLETA", a: "TA (Chupeta)", hint: "A última sílaba de <strong>Bor-bo-le-ta</strong> é <strong>TA</strong>!" },
            { q: "CAVALO", a: "LO (Galo)", hint: "A última sílaba de <strong>Ca-va-lo</strong> é <strong>LO</strong>!" },
            { q: "SAPATO", a: "TO (Gato)", hint: "A última sílaba de <strong>Sa-pa-to</strong> é <strong>TO</strong>!" },
            { q: "BONECA", a: "CA (Faca)", hint: "A última sílaba de <strong>Bo-ne-ca</strong> é <strong>CA</strong>!" },
            { q: "CEBOLA", a: "LA (Bola)", hint: "A última sílaba de <strong>Ce-bo-la</strong> é <strong>LA</strong>!" },
            { q: "TUCANO", a: "NO (Pano)", hint: "A última sílaba de <strong>Tu-ca-no</strong> é <strong>NO</strong>!" },
            { q: "AMIGO", a: "GO (Fogo)", hint: "A última sílaba de <strong>A-mi-go</strong> é <strong>GO</strong>!" },
            { q: "CENOURA", a: "RA (Hora)", hint: "A última sílaba de <strong>Ce-nou-ra</strong> é <strong>RA</strong>!" },
            { q: "PIPOCA", a: "CA (Boca)", hint: "A última sílaba de <strong>Pi-po-ca</strong> é <strong>CA</strong>!" }
        ],
        stage3: [
            { q: "Qual a última sílaba de: Sapato 👟?", a: "TO", options: ["TO", "SA", "PA", "TA"], hint: "Diga a palavra devagar: Sa-pa-<strong>to</strong>!" },
            { q: "Qual a última sílaba de: Borboleta 🦋?", a: "TA", options: ["TA", "LE", "BO", "TE"], hint: "Diga a palavra devagar: Bor-bo-le-<strong>ta</strong>!" },
            { q: "Qual a última sílaba de: Pipoca 🍿?", a: "CA", options: ["CA", "PO", "PI", "CO"], hint: "Diga a palavra devagar: Pi-po-<strong>ca</strong>!" },
            { q: "Qual a última sílaba de: Cavalo 🐴?", a: "LO", options: ["LO", "CA", "VA", "LA"], hint: "Diga a palavra devagar: Ca-va-<strong>lo</strong>!" },
            { q: "Qual a última sílaba de: Cebola 🧅?", a: "LA", options: ["LA", "CE", "BO", "LO"], hint: "Diga a palavra devagar: Ce-bo-<strong>la</strong>!" },
            { q: "Qual a última sílaba de: Tucano 🪶?", a: "NO", options: ["NO", "TU", "CA", "NA"], hint: "Diga a palavra devagar: Tu-ca-<strong>no</strong>!" }
        ]
    },
    9: {
        // Castelo das Palavras
        stage1: [
            { q: "B_LA", a: "O (BOLA)", hint: "Com a letra <strong>O</strong> no meio, formamos a palavra <strong>BOLA</strong>! ⚽" },
            { q: "C_SA", a: "A (CASA)", hint: "Com a letra <strong>A</strong> no meio, formamos a palavra <strong>CASA</strong>! 🏠" },
            { q: "G_TO", a: "A (GATO)", hint: "Com a letra <strong>A</strong> no meio, formamos a palavra <strong>GATO</strong>! 🐱" },
            { q: "L_PO", a: "U (LUPO)", hint: "Com a letra <strong>U</strong> no meio, formamos a palavra <strong>LUPO</strong>! 🐺" },
            { q: "U_A", a: "V (UVA)", hint: "Com a letra <strong>V</strong> no meio, formamos a palavra <strong>UVA</strong>! 🍇" },
            { q: "P_TO", a: "A (PATO)", hint: "Com a letra <strong>A</strong> no meio, formamos a palavra <strong>PATO</strong>! 🦆" }
        ],
        stage2: [
            { q: "CA_A", a: "S (CASA)", hint: "Colocando a consoante <strong>S</strong> completamos <strong>CASA</strong>!" },
            { q: "BO_A", a: "L (BOLA)", hint: "Colocando a consoante <strong>L</strong> completamos <strong>BOLA</strong>!" },
            { q: "GA_O", a: "T (GATO)", hint: "Colocando a consoante <strong>T</strong> completamos <strong>GATO</strong>!" },
            { q: "DO_E", a: "C (DOCE)", hint: "Colocando a consoante <strong>C</strong> completamos <strong>DOCE</strong>!" },
            { q: "MA_A", a: "L (MALA)", hint: "Colocando a consoante <strong>L</strong> completamos <strong>MALA</strong>!" },
            { q: "SA_O", a: "P (SAPO)", hint: "Colocando a consoante <strong>P</strong> completamos <strong>SAPO</strong>!" },
            { q: "VE_A", a: "L (VELA)", hint: "Colocando a consoante <strong>L</strong> completamos <strong>VELA</strong>!" },
            { q: "PI_A", a: "P (PIPA)", hint: "Colocando a consoante <strong>P</strong> completamos <strong>PIPA</strong>!" },
            { q: "SU_O", a: "C (SUCO)", hint: "Colocando a consoante <strong>C</strong> completamos <strong>SUCO</strong>!" },
            { q: "LU_A", a: "V (LUVA)", hint: "Colocando a consoante <strong>V</strong> completamos <strong>LUVA</strong>!" }
        ],
        stage3: [
            { q: "Falta uma letra em: BO_A ⚽", a: "L", options: ["L", "T", "C", "M"], hint: "Para chutar a BOLA, precisamos da letra <strong>L</strong> no meio!" },
            { q: "Falta uma letra em: G_TO 🐱", a: "A", options: ["A", "O", "E", "I"], hint: "O felino que mia é o GATO, que leva a vogal <strong>A</strong>!" },
            { q: "Falta uma letra em: SA_O 🐸", a: "P", options: ["P", "T", "B", "M"], hint: "O anfíbio saltador é o SAPO, que leva a letra <strong>P</strong>!" },
            { q: "Falta uma letra em: DO_E 🍬", a: "C", options: ["C", "S", "Z", "X"], hint: "A bala de açúcar é um DOCE, que leva a consoante <strong>C</strong>!" },
            { q: "Falta uma letra em: LU_A 🧤", a: "V", options: ["V", "B", "M", "F"], hint: "Para aquecer a mão usamos a LUVA, que leva a consoante <strong>V</strong>!" },
            { q: "Falta uma letra em: MA_A 💼", a: "L", options: ["L", "C", "P", "T"], hint: "Para viajar levamos a MALA, que leva a consoante <strong>L</strong>!" }
        ]
    }
};

function speakText(text) {
    if (!AudioPlayer || !AudioPlayer.enabled) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        
        // Clean text of emojis and special characters for natural pronunciation
        let cleanText = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "") // Emojis
                            .replace(/_/g, " ... ") // Pause for fill-in-the-blank
                            .replace(/\+/g, " mais ") // Plus sign
                            .trim();
        
        // If it's a single letter, pronounce it in lowercase
        if (cleanText.length === 1) {
            cleanText = cleanText.toLowerCase();
        }
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = "pt-BR";
        utterance.rate = 0.9; // Slightly slower, very clear for kids
        window.speechSynthesis.speak(utterance);
    }
}

// 2. SOUND EFFECTS SYNTHESIZER (WEB AUDIO API)
class SoundSynth {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    toggle(state) {
        this.enabled = state !== undefined ? state : !this.enabled;
        return this.enabled;
    }

    playClick() {
        if (!this.enabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);
        
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playSuccess() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.06 + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.15);
            
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.18);
        });
    }

    playError() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        
        osc.start();
        osc.stop(now + 0.26);
    }

    playHit() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        
        // Synthesize noise blast for physical impact
        const bufferSize = this.ctx.sampleRate * 0.15; // 0.15s noise
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 800;
        
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        
        noise.start();
        
        // Also play a quick low pitch sweep
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.15);
        oscGain.gain.setValueAtTime(0.2, now);
        oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        
        osc.start();
        osc.stop(now + 0.16);
    }

    playVictoryMelody() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        // C4, E4, G4, C5, E5, G5
        const melody = [
            { freq: 261.63, time: 0.0 },
            { freq: 329.63, time: 0.12 },
            { freq: 392.00, time: 0.24 },
            { freq: 523.25, time: 0.36 },
            { freq: 392.00, time: 0.48 },
            { freq: 523.25, time: 0.60 },
            { freq: 659.25, time: 0.72 },
            { freq: 783.99, time: 0.84 }
        ];
        
        melody.forEach(note => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = "triangle";
            osc.frequency.setValueAtTime(note.freq, now + note.time);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.18, now + note.time + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + 0.25);
            
            osc.start(now + note.time);
            osc.stop(now + note.time + 0.3);
        });
    }
}

const AudioPlayer = new SoundSynth();

// Background castle music. Browsers only allow playback after a user gesture.
const BackgroundMusic = {
    audio: null,
    enabled: true,
    started: false,

    init() {
        if (this.audio) return;
        this.audio = new Audio("musica de castelo/castelo.mp3");
        this.audio.loop = true;
        this.audio.volume = 0.22;
        this.audio.preload = "auto";
    },

    setEnabled(enabled) {
        this.enabled = enabled;
        this.init();

        if (!enabled) {
            this.audio.pause();
            return;
        }

        if (this.started) {
            this.play();
        }
    },

    play() {
        if (!this.enabled) return;
        this.init();
        this.started = true;
        this.audio.play().catch(() => {
            // Autoplay may still be blocked until the next click/touch.
        });
    }
};

// 3. GAME STATE MANAGEMENT
class GameState {
    constructor() {
        this.defaultState = {
            playerName: "Aventureiro",
            characterSelected: "", // 'robo', 'dragao', 'gatinho', 'astronauta'
            childPhoto: "",
            coins: 0,
            unlockedLevels: [2], // Level 2 unlocked by default
            stars: {}, // { '2': 3, '3': 2 }
            errors: {}, // { '2': 0 }
            equippedGear: {
                head: "none",
                back: "none",
                hand: "none"
            },
            unlockedGear: [], // list of unlocked items ids
            soundEnabled: true,
            completedAll: false,
            activeRun: null
        };
        this.data = this.mergeWithDefaults({});
        this.load();
    }

    load() {
        const saved = localStorage.getItem("alfabetizacao_quest_progresso");
        if (saved) {
            try {
                this.data = this.mergeWithDefaults(JSON.parse(saved));
            } catch (e) {
                this.data = this.mergeWithDefaults({});
            }
        }
    }

    mergeWithDefaults(savedData) {
        return {
            ...this.defaultState,
            ...savedData,
            stars: { ...this.defaultState.stars, ...(savedData.stars || {}) },
            errors: { ...this.defaultState.errors, ...(savedData.errors || {}) },
            equippedGear: { ...this.defaultState.equippedGear, ...(savedData.equippedGear || {}) },
            unlockedLevels: Array.isArray(savedData.unlockedLevels) ? savedData.unlockedLevels : [...this.defaultState.unlockedLevels],
            unlockedGear: Array.isArray(savedData.unlockedGear) ? savedData.unlockedGear : [...this.defaultState.unlockedGear],
            activeRun: savedData.activeRun || null
        };
    }

    save() {
        localStorage.setItem("alfabetizacao_quest_progresso", JSON.stringify(this.data));
    }

    reset() {
        this.data = JSON.parse(JSON.stringify(this.defaultState)); // deep clone
        this.save();
    }
}

const State = new GameState();

const CINEMATIC_ART = {
    kingdom: "assets/art/fantasy-friends-desktop.jpg"
};

const PUZZLE_IMAGE_ART = {
    2: "assets/art/fantasy-friends-desktop.jpg",
    3: "assets/puzzles/puzzle-3-dragon.jpg",
    4: "assets/puzzles/puzzle-4-robot.jpg",
    5: "assets/puzzles/puzzle-5-dog.jpg",
    6: "assets/puzzles/puzzle-6-cave.jpg",
    7: "assets/puzzles/puzzle-7-tower.jpg",
    8: "assets/puzzles/puzzle-8-labyrinth.jpg",
    9: "assets/art/fantasy-friends-desktop.jpg"
};

function getAdventureProgress() {
    const levels = [2, 3, 4, 5, 6, 7, 8, 9];
    const totalStars = Object.values(State.data.stars).reduce((sum, value) => sum + value, 0);
    const completedLevels = levels.filter(level => (State.data.stars[level] || 0) > 0);
    const nextOpenLevel = levels.find(level => State.data.unlockedLevels.includes(level) && !(State.data.stars[level] > 0));
    const allKingdomsCompleted = completedLevels.length === levels.length;
    const activeRun = State.data.activeRun;

    if (activeRun && activeRun.type === "level" && KINGDOMS[activeRun.level]) {
        const stage = activeRun.stage || 1;
        const kingdom = KINGDOMS[activeRun.level];
        return {
            totalStars,
            completedCount: completedLevels.length,
            nextLevel: activeRun.level,
            nextName: `Continuar ${kingdom.name}`,
            nextDetail: `Você parou na etapa ${stage} do ${kingdom.name}.`,
            nextReward: `Conclua para ganhar ${kingdom.gearName}.`,
            allKingdomsCompleted,
            activeRun
        };
    }

    if (activeRun && activeRun.type === "arena") {
        return {
            totalStars,
            completedCount: completedLevels.length,
            nextLevel: "arena",
            nextName: "Continuar Arena dos Mestres",
            nextDetail: "Você parou no desafio final misturado.",
            nextReward: "Vença para liberar o certificado real.",
            allKingdomsCompleted,
            activeRun
        };
    }

    if (allKingdomsCompleted) {
        return {
            totalStars,
            completedCount: completedLevels.length,
            nextLevel: "arena",
            nextName: State.data.completedAll ? "Jornada completa" : "Arena dos Mestres",
            nextDetail: State.data.completedAll ? "Você já conquistou o certificado real." : "Desafio final de alfabetização misturado.",
            nextReward: State.data.completedAll ? "Certificado conquistado." : "Vença para liberar o certificado real.",
            allKingdomsCompleted,
            activeRun: null
        };
    }

    const nextLevel = nextOpenLevel || 2;
    const kingdom = KINGDOMS[nextLevel];

    return {
        totalStars,
        completedCount: completedLevels.length,
        nextLevel,
        nextName: kingdom.name,
        nextDetail: `O ${kingdom.name} espera por você.`,
        nextReward: `Vença para ganhar ${kingdom.gearName}.`,
        allKingdomsCompleted,
        activeRun: null
    };
}

function setGameMissionStrip(kicker, missionText, progressText, progressPct) {
    const kickerEl = document.getElementById("stage-kicker");
    const textEl = document.getElementById("stage-mission-text");
    const labelEl = document.getElementById("stage-progress-label");
    const fillEl = document.getElementById("stage-progress-fill");

    if (kickerEl) kickerEl.innerText = kicker;
    if (textEl) textEl.innerText = missionText;
    if (labelEl) labelEl.innerText = progressText;
    if (fillEl) fillEl.style.width = `${Math.max(0, Math.min(100, progressPct))}%`;
}

function showQuestToast(message) {
    let toast = document.getElementById("quest-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "quest-toast";
        toast.className = "quest-toast";
        document.getElementById("game-container").appendChild(toast);
    }

    toast.innerText = message;
    toast.classList.remove("active");
    requestAnimationFrame(() => toast.classList.add("active"));

    clearTimeout(showQuestToast.timer);
    showQuestToast.timer = setTimeout(() => {
        toast.classList.remove("active");
    }, 2200);
}

function getPuzzleArtworkMarkup(levelNum) {
    const src = PUZZLE_IMAGE_ART[levelNum] || CINEMATIC_ART.kingdom;
    return `<img src="${src}" alt="">`;
}

function renderChildPhoto(targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return false;

    container.classList.remove("has-photo");

    if (!State.data.childPhoto) {
        return false;
    }

    container.innerHTML = `<img class="child-photo-img" src="${State.data.childPhoto}" alt="Foto do herói">`;
    container.classList.add("has-photo");
    return true;
}

function renderHeroIdentity(targetElementId, fallbackToCharacter = true) {
    if (renderChildPhoto(targetElementId)) return;

    const container = document.getElementById(targetElementId);
    if (container) container.classList.remove("has-photo");

    if (fallbackToCharacter) {
        renderCharacterAvatar(State.data.characterSelected, targetElementId);
    }
}

function renderWatermark() {
    const container = document.getElementById("cert-watermark");
    if (!container) return;

    container.innerHTML = `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer circle with dots -->
        <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(45, 100%, 35%)" stroke-width="1.5" stroke-dasharray="3,3"/>
        <!-- Inner circle -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(45, 100%, 35%)" stroke-width="1"/>
        <!-- Open Book -->
        <path d="M 30,55 C 38,55 42,50 50,53 C 58,50 62,55 70,55 L 70,35 C 62,35 58,30 50,33 C 42,30 38,35 30,35 Z" fill="none" stroke="hsl(45, 100%, 35%)" stroke-width="2" stroke-linejoin="round"/>
        <!-- Book spine line -->
        <line x1="50" y1="33" x2="50" y2="53" stroke="hsl(45, 100%, 35%)" stroke-width="2"/>
        <!-- Crown on top of book -->
        <path d="M 38,30 L 40,22 L 45,26 L 50,18 L 55,26 L 60,22 L 62,30 Z" fill="none" stroke="hsl(45, 100%, 35%)" stroke-width="1.5" stroke-linejoin="round"/>
        <!-- Faint Letter A inside book page left -->
        <text x="38" y="47" font-family="'Fredoka', sans-serif" font-size="11" font-weight="bold" fill="hsl(45, 100%, 35%)" text-anchor="middle">A</text>
        <!-- Faint Letter Z inside book page right -->
        <text x="62" y="47" font-family="'Fredoka', sans-serif" font-size="11" font-weight="bold" fill="hsl(45, 100%, 35%)" text-anchor="middle">Z</text>
    </svg>`;
}

function updateChildPhotoPreview() {
    const preview = document.getElementById("child-photo-preview");
    if (!preview) return;

    preview.classList.remove("has-photo");

    if (State.data.childPhoto) {
        preview.innerHTML = `<img class="child-photo-img" src="${State.data.childPhoto}" alt="Foto do herói">`;
        preview.classList.add("has-photo");
    } else {
        preview.innerHTML = `<span class="photo-placeholder-icon">📷</span><span>Foto do Herói</span>`;
    }
}

function resizePhotoForStorage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const maxSize = 720;
                const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
                const width = Math.max(1, Math.round(img.width * scale));
                const height = Math.max(1, Math.round(img.height * scale));
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg", 0.82));
            };
            img.onerror = reject;
            img.src = reader.result;
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// 4. DYNAMIC CHARACTER SVG GENERATOR & CUSTOMIZER
function renderCharacterAvatar(charKey, targetElementId, renderGears = true) {
    const container = document.getElementById(targetElementId);
    if (!container) return;
    
    if (!charKey) {
        container.innerHTML = `<span style="font-size:2rem;">❓</span>`;
        return;
    }

    const charConfig = CHARACTERS[charKey];
    if (!charConfig) return;

    if (charConfig.image) {
        container.innerHTML = `<img class="companion-card-img" src="${charConfig.image}" alt="${charConfig.name}">`;
        return;
    }

    // Load base SVG
    container.innerHTML = charConfig.svg;
    
    // Inject gear items
    if (renderGears) {
        const slotsGroup = container.querySelector(`#acc-slots-${charKey}`);
        if (slotsGroup) {
            slotsGroup.innerHTML = ""; // Clear active
            
            // Head
            const headItem = State.data.equippedGear.head;
            if (headItem && headItem !== "none" && GEAR_SVGS[headItem]) {
                const headGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                headGroup.innerHTML = GEAR_SVGS[headItem];
                // Apply slight transform overrides based on character to align head gear nicely
                if (charKey === "robo") {
                    headGroup.setAttribute("transform", "translate(0, -5) scale(1)");
                } else if (charKey === "dragao") {
                    headGroup.setAttribute("transform", "translate(0, 15) scale(1)");
                } else if (charKey === "gatinho") {
                    headGroup.setAttribute("transform", "translate(0, 15) scale(1)");
                } else if (charKey === "astronauta") {
                    headGroup.setAttribute("transform", "translate(0, 10) scale(1)");
                }
                slotsGroup.appendChild(headGroup);
            }

            // Back
            const backItem = State.data.equippedGear.back;
            if (backItem && backItem !== "none" && GEAR_SVGS[backItem]) {
                const backGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                backGroup.innerHTML = GEAR_SVGS[backItem];
                slotsGroup.appendChild(backGroup);
            }

            // Hand
            const handItem = State.data.equippedGear.hand;
            if (handItem && handItem !== "none" && GEAR_SVGS[handItem]) {
                const handGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                handGroup.innerHTML = GEAR_SVGS[handItem];
                if (charKey === "dragao" || charKey === "gatinho") {
                    handGroup.setAttribute("transform", "translate(-5, 20) scale(0.95)");
                } else if (charKey === "astronauta") {
                    handGroup.setAttribute("transform", "translate(-5, 12) scale(0.95)");
                }
                slotsGroup.appendChild(handGroup);
            }
        }
    }
}

// 5. BOSS SVG GENERATION DYNAMICALLY
function generateBossSVG(bossId, targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return;

    const data = BOSS_DATA[bossId] || BOSS_DATA[2];
    
    let svgBody = "";
    if (bossId === "arena") {
        svgBody = `
            <!-- Giga Arena Boss -->
            <polygon points="50,15 15,40 15,90 50,115 85,90 85,40" fill="${data.bodyColor}" stroke="${data.detailColor}" stroke-width="4"/>
            <circle cx="50" cy="50" r="18" fill="#f43f5e"/>
            <polygon points="50,40 60,60 40,60" fill="#fff"/>
            <path d="M30,80 Q50,100 70,80" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
        `;
    } else {
        svgBody = `
            <!-- Kingdom Boss -->
            <circle cx="50" cy="60" r="38" fill="${data.bodyColor}" stroke="${data.detailColor}" stroke-width="3"/>
            <!-- Eyes -->
            <circle cx="36" cy="50" r="6" fill="#fff"/>
            <circle cx="36" cy="50" r="3" fill="#000"/>
            <circle cx="64" cy="50" r="6" fill="#fff"/>
            <circle cx="64" cy="50" r="3" fill="#000"/>
            <!-- Boss Horns/Crown -->
            <polygon points="50,10 40,28 60,28" fill="${data.detailColor}"/>
            <polygon points="25,18 25,35 38,32" fill="${data.detailColor}"/>
            <polygon points="75,18 75,35 62,32" fill="${data.detailColor}"/>
            <!-- Mouth -->
            <path d="M40,75 Q50,65 60,75" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        `;
    }

    container.innerHTML = `
        <svg viewBox="0 0 100 120" width="100%" height="100%" class="floating-boss">
            ${svgBody}
            <!-- Floating particles -->
            <circle cx="20" cy="30" r="3" fill="${data.detailColor}" opacity="0.6"/>
            <circle cx="80" cy="80" r="4" fill="${data.detailColor}" opacity="0.5"/>
            <circle cx="15" cy="85" r="2" fill="${data.detailColor}" opacity="0.7"/>
        </svg>
    `;
}

function getPedagogicalHint(level, idx, stage = 1) {
    const db = LITERACY_DATABASE[level] || LITERACY_DATABASE[2];
    if (stage === 1) {
        if (db.stage1 && db.stage1[idx]) return db.stage1[idx].hint;
    } else if (stage === 2) {
        if (db.stage2 && db.stage2[idx]) return db.stage2[idx].hint;
    } else if (stage === 3) {
        if (db.stage3 && db.stage3[idx]) return db.stage3[idx].hint;
    }
    return "Continue tentando! Você é capaz! 🌟";
}

// 7. SCREEN NAVIGATION SYSTEM
const Screens = {
    active: "screen-start",
    show(screenId) {
        AudioPlayer.playClick();
        
        // Hide active screen
        const prev = document.getElementById(this.active);
        if (prev) {
            prev.classList.remove("active");
        }
        
        // Show new screen
        const next = document.getElementById(screenId);
        if (next) {
            next.classList.add("active");
            this.active = screenId;
        }

        // Setup screen-specific rendering
        if (screenId === "screen-start") {
            this.renderStartScreen();
        } else if (screenId === "screen-map") {
            this.renderMapScreen();
        } else if (screenId === "screen-achievements") {
            this.renderAchievementsScreen();
        } else if (screenId === "screen-character") {
            updateChildPhotoPreview();
        }
    },

    renderStartScreen() {
        const btnContinue = document.getElementById("btn-continue");
        const progress = getAdventureProgress();
        document.getElementById("start-stars-summary").innerText = `${progress.totalStars}/24 estrelas`;
        document.getElementById("start-next-mission").innerText = progress.nextName;
        document.getElementById("start-next-mission-detail").innerText = progress.nextDetail;


        if (State.data.characterSelected) {
            btnContinue.disabled = false;
            btnContinue.innerHTML = State.data.activeRun
                ? `<span class="icon">💾</span> Continuar Missão`
                : `<span class="icon">💾</span> Continuar Aventura`;
            renderHeroIdentity("start-char-preview");
        } else {
            btnContinue.disabled = true;
            btnContinue.innerHTML = `<span class="icon">💾</span> Continuar Aventura`;
            document.getElementById("start-char-preview").innerHTML = "";
        }
    },

    renderMapScreen() {
        // Render HUD stats
        document.getElementById("hud-player-name").innerText = State.data.playerName;
        document.getElementById("hud-coins").innerText = State.data.coins;
        document.getElementById("game-coins").innerText = State.data.coins;
        
        // Toggle map HUD certificate button
        const btnMapCert = document.getElementById("btn-map-certificate");
        if (btnMapCert) {
            btnMapCert.style.display = State.data.completedAll ? "block" : "none";
        }
        
        // Compute total stars
        const progress = getAdventureProgress();
        document.getElementById("hud-stars").innerText = progress.totalStars;
        document.getElementById("map-next-mission").innerText = progress.nextName;
        document.getElementById("map-next-reward").innerText = progress.nextReward;
        document.getElementById("map-progress-label").innerText = `${progress.completedCount} de 8 reinos libertos`;
        document.getElementById("map-progress-fill").style.width = `${(progress.completedCount / 8) * 100}%`;

        // Player Level Title based on progress
        const countLevels = State.data.unlockedLevels.length;
        let title = "Iniciante do ABC";
        if (countLevels >= 8) title = "Rei/Rainha do Alfabeto";
        else if (countLevels >= 5) title = "Guardião das Letras";
        else if (countLevels >= 3) title = "Explorador das Vogais";
        document.getElementById("hud-player-title").innerText = title;

        // Render player portrait or fallback avatar
        renderHeroIdentity("map-avatar-preview");

        // Loop all nodes to apply class states
        for (let lvl = 2; lvl <= 9; lvl++) {
            const node = document.getElementById(`node-${lvl}`);
            if (!node) continue;
            
            const starCount = State.data.stars[lvl] || 0;
            const starsContainer = node.querySelector(".node-stars");

            if (State.data.unlockedLevels.includes(lvl)) {
                const classes = ["map-node", "unlocked"];
                if (starCount > 0) classes.push("completed");
                if (progress.nextLevel === lvl) classes.push("next-node");
                node.className = classes.join(" ");
                let starsStr = "";
                for (let s = 0; s < 3; s++) {
                    starsStr += s < starCount ? "⭐" : "☆";
                }
                starsContainer.innerText = starsStr;
            } else {
                node.className = "map-node locked";
                starsContainer.innerText = "";
            }
        }

        // Arena node status
        const arenaNode = document.getElementById("node-arena");
        const allCompleted = [2, 3, 4, 5, 6, 7, 8, 9].every(l => State.data.unlockedLevels.includes(l) && State.data.stars[l] > 0);
        
        if (allCompleted) {
            arenaNode.className = `map-node unlocked special-node ${State.data.completedAll ? 'completed' : 'next-node'}`;
        } else {
            arenaNode.className = "map-node locked special-node";
        }

        requestAnimationFrame(() => this.drawMapPath());
    },

    renderAchievementsScreen() {
        document.getElementById("customizer-name").innerText = State.data.playerName;
        renderHeroIdentity("customizer-avatar-preview");
        updateChildPhotoPreview();

        // Update slots descriptors
        document.getElementById("slot-head-name").innerText = State.data.equippedGear.head !== "none" ? KINGDOMS[getKingdomOfItem(State.data.equippedGear.head)].gearName : "Nenhum";
        document.getElementById("slot-back-name").innerText = State.data.equippedGear.back !== "none" ? KINGDOMS[getKingdomOfItem(State.data.equippedGear.back)].gearName : "Nenhum";
        document.getElementById("slot-hand-name").innerText = State.data.equippedGear.hand !== "none" ? KINGDOMS[getKingdomOfItem(State.data.equippedGear.hand)].gearName : "Nenhum";

        // Render Medals Grid
        const medalsGrid = document.getElementById("medals-grid-container");
        medalsGrid.innerHTML = "";
        
        for (let lvl = 2; lvl <= 9; lvl++) {
            const k = KINGDOMS[lvl];
            const unlocked = State.data.stars[lvl] > 0;
            
            const card = document.createElement("div");
            card.className = `album-medal-card ${unlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="album-medal-icon">${k.rewardIcon}</div>
                <div class="album-medal-name">${k.rewardName}</div>
                <div class="album-medal-desc">${k.name}</div>
            `;
            medalsGrid.appendChild(card);
        }

        // Render Equipment Items Grid
        const itemsGrid = document.getElementById("items-grid-container");
        itemsGrid.innerHTML = "";

        let itemsCount = 0;
        for (let lvl = 2; lvl <= 9; lvl++) {
            const k = KINGDOMS[lvl];
            const itemUnlocked = State.data.unlockedGear.includes(k.gearId);
            
            if (itemUnlocked) {
                itemsCount++;
                const isEquipped = State.data.equippedGear[k.gearSlot] === k.gearId;
                
                const card = document.createElement("div");
                card.className = "album-item-card unlocked";
                card.innerHTML = `
                    <div class="album-item-icon">${k.gearIcon}</div>
                    <div class="album-item-name">${k.gearName}</div>
                    <button class="btn btn-small btn-equip ${isEquipped ? 'btn-danger' : 'btn-primary'}" data-gear-id="${k.gearId}" data-slot="${k.gearSlot}">
                        ${isEquipped ? 'Remover' : 'Equipar'}
                    </button>
                `;
                
                // Add equip listener
                card.querySelector(".btn-equip").addEventListener("click", (e) => {
                    const gid = e.target.getAttribute("data-gear-id");
                    const slot = e.target.getAttribute("data-slot");
                    
                    if (State.data.equippedGear[slot] === gid) {
                        State.data.equippedGear[slot] = "none";
                    } else {
                        State.data.equippedGear[slot] = gid;
                    }
                    
                    State.save();
                    AudioPlayer.playClick();
                    this.renderAchievementsScreen();
                });
                
                itemsGrid.appendChild(card);
            }
        }

        if (itemsCount === 0) {
            itemsGrid.innerHTML = `<p style="grid-column: span 3; text-align:center; color:var(--color-text-muted);">Você ainda não desbloqueou equipamentos. Vença reinos para conseguir!</p>`;
        }
    },

    drawMapPath() {
        const svg = document.getElementById("map-path-lines");
        const nodesWrap = document.querySelector(".map-nodes");
        if (!svg || !nodesWrap || Screens.active !== "screen-map") return;

        const nodeIds = ["node-2", "node-3", "node-4", "node-5", "node-6", "node-7", "node-8", "node-9", "node-arena"];
        const nodes = nodeIds.map(id => document.getElementById(id)).filter(Boolean);
        if (nodes.length < 2 || nodesWrap.offsetWidth === 0) return;

        const wrapBox = nodesWrap.getBoundingClientRect();
        const points = nodes.map(node => {
            const box = node.getBoundingClientRect();
            return {
                x: box.left - wrapBox.left + box.width / 2,
                y: box.top - wrapBox.top + box.height / 2
            };
        });

        const buildPath = (pathPoints) => {
            if (pathPoints.length === 0) return "";
            let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
            for (let i = 1; i < pathPoints.length; i++) {
                const prev = pathPoints[i - 1];
                const curr = pathPoints[i];
                const midX = (prev.x + curr.x) / 2;
                d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
            }
            return d;
        };

        const unlockedCount = [2, 3, 4, 5, 6, 7, 8, 9].filter(level => State.data.unlockedLevels.includes(level)).length;
        const allCompleted = getAdventureProgress().allKingdomsCompleted;
        const progressPointCount = allCompleted ? points.length : Math.max(1, unlockedCount);
        const progressPoints = points.slice(0, progressPointCount);

        svg.setAttribute("viewBox", `0 0 ${nodesWrap.offsetWidth} ${nodesWrap.offsetHeight}`);
        svg.style.left = `${nodesWrap.offsetLeft}px`;
        svg.style.top = `${nodesWrap.offsetTop}px`;
        svg.style.width = `${nodesWrap.offsetWidth}px`;
        svg.style.height = `${nodesWrap.offsetHeight}px`;
        svg.innerHTML = `
            <path class="map-path-base" d="${buildPath(points)}"></path>
            <path class="map-path-progress" d="${buildPath(progressPoints)}"></path>
        `;
    }
};

function getKingdomOfItem(itemId) {
    for (let lvl = 2; lvl <= 9; lvl++) {
        if (KINGDOMS[lvl].gearId === itemId) return lvl;
    }
    return 2;
}

// 8. GAMEPLAY CONTROLLER (FASES, DRAG AND DROP, ETAPAS)
class GameplayController {
    constructor() {
        this.currentLevel = 2; // Active Kingdom Number
        this.currentStage = 1; // 1, 2, or 3
        this.errorsMade = 0;
        this.selectedEquationCard = null; // Click-matching selection
        
        // Touch tracking helpers
        this.activeTouchElement = null;
        this.touchOffsetX = 0;
        this.touchOffsetY = 0;
        
        // Stage 3 Battle Variables
        this.bossMaxHealth = 100;
        this.bossHealth = 100;
        this.playerHearts = 3;
        this.battleTimerInterval = null;
        this.battleTimerVal = 100; // percent
        this.battleCurrentEquation = null;

        this.setupGeneralEvents();
    }

    configureLevelUI(levelNumber) {
        const k = KINGDOMS[levelNumber];
        document.getElementById("game-reino-name").innerText = k.name;
        document.getElementById("game-reino-icon").innerText = k.icon;
        document.getElementById("game-coins").innerText = State.data.coins;
        document.documentElement.style.setProperty('--color-primary', k.color);
    }

    saveActiveRun(stageNum = this.currentStage) {
        State.data.activeRun = {
            type: "level",
            level: this.currentLevel,
            stage: stageNum,
            errorsMade: this.errorsMade
        };
        State.save();
    }

    recordMistake() {
        this.errorsMade++;
        this.saveActiveRun(this.currentStage);
    }

    resumeSavedRun() {
        const run = State.data.activeRun;

        if (!run) {
            Screens.show("screen-map");
            return;
        }

        if (run.type === "arena") {
            finalArena.startArena({ resume: true });
            return;
        }

        if (run.type !== "level" || !KINGDOMS[run.level]) {
            State.data.activeRun = null;
            State.save();
            Screens.show("screen-map");
            return;
        }

        this.currentLevel = run.level;
        this.errorsMade = run.errorsMade || 0;
        this.configureLevelUI(run.level);

        const stage = Math.max(1, Math.min(3, run.stage || 1));
        this.setStageIndicator(stage);

        if (stage === 3) {
            this.loadStage3();
        } else if (stage === 2) {
            this.loadStage2();
        } else {
            this.loadStage1();
        }

        Screens.show("screen-game");
    }

    startLevel(levelNumber) {
        this.currentLevel = levelNumber;
        this.currentStage = 1;
        this.errorsMade = 0;
        
        // Load UI configurations for Kingdom
        this.configureLevelUI(levelNumber);

        this.setStageIndicator(1);
        this.loadStage1();
        
        Screens.show("screen-game");
    }

    setStageIndicator(stageNum) {
        this.currentStage = stageNum;
        for (let i = 1; i <= 3; i++) {
            const dot = document.getElementById(`dot-stage-${i}`);
            dot.className = "stage-dot";
            if (i < stageNum) dot.classList.add("complete");
            else if (i === stageNum) dot.classList.add("active");
        }
    }

    updateStageProgress(stageNum, completed, total) {
        const levelName = KINGDOMS[this.currentLevel].name;
        const pct = total > 0 ? (completed / total) * 100 : 0;

        if (stageNum === 1) {
            setGameMissionStrip(
                "Etapa 1 de 3",
                `Abra o portal do ${levelName} combinando contas e resultados.`,
                `${completed}/${total} pares`,
                pct
            );
        } else if (stageNum === 2) {
            setGameMissionStrip(
                "Etapa 2 de 3",
                `Restaure o monumento do ${levelName}.`,
                `${completed}/${total} peças`,
                pct
            );
        }
    }

    getPuzzleSlotFromElement(element) {
        if (!element) return null;
        if (element.classList?.contains("puzzle-slot")) return element;
        return element.closest?.(".puzzle-slot") || null;
    }

    // ==========================================
    // ETAPA 1: ENCAIXE RÁPIDO
    // ==========================================
    loadStage1() {
        document.getElementById("game-stage-1").classList.add("active");
        document.getElementById("game-stage-2").classList.remove("active");
        document.getElementById("game-stage-3").classList.remove("active");
        this.saveActiveRun(1);

        const eqCol = document.getElementById("stage1-equations");
        const ansCol = document.getElementById("stage1-answers");
        eqCol.innerHTML = "";
        ansCol.innerHTML = "";
        
        this.selectedEquationCard = null;

        const levelNum = this.currentLevel;
        const db = LITERACY_DATABASE[levelNum] || LITERACY_DATABASE[2];
        let formulas = db.stage1.map((item, idx) => ({
            term1: levelNum,
            term2: idx,
            leftText: item.q,
            resultText: item.a,
            result: item.a
        }));
        
        formulas.sort(() => Math.random() - 0.5);
        const activePairs = formulas.slice(0, 6);

        // Render Equations (Left side)
        const shuffledEquations = [...activePairs].sort(() => Math.random() - 0.5);
        shuffledEquations.forEach(pair => {
            const card = document.createElement("div");
            card.className = "match-card";
            card.innerText = pair.leftText;
            card.setAttribute("draggable", "true");
            card.setAttribute("data-result", pair.result);
            card.setAttribute("data-equation", `${pair.term1}x${pair.term2}`);
            
            // Drag listeners
            card.addEventListener("dragstart", (e) => this.onDragStart(e));
            card.addEventListener("dragend", (e) => this.onDragEnd(e));
            
            // Touch listeners (mobile custom drag-drop)
            card.addEventListener("touchstart", (e) => this.onTouchStart(e), { passive: false });
            card.addEventListener("touchmove", (e) => this.onTouchMove(e), { passive: false });
            card.addEventListener("touchend", (e) => this.onTouchEnd(e));

            // Click listener (Click-to-match fallback)
            card.addEventListener("click", () => this.onMatchCardClick(card, "eq"));
            
            eqCol.appendChild(card);
        });

        // Render Answers (Right side)
        const shuffledAnswers = [...activePairs].sort(() => Math.random() - 0.5);
        shuffledAnswers.forEach(pair => {
            const card = document.createElement("div");
            card.className = "match-card";
            card.innerText = pair.resultText;
            card.setAttribute("data-result", pair.result);
            
            // Drop target listeners
            card.addEventListener("dragover", (e) => this.onDragOver(e));
            card.addEventListener("dragleave", (e) => this.onDragLeave(e));
            card.addEventListener("drop", (e) => this.onDrop(e));

            // Click listener (Click-to-match fallback)
            card.addEventListener("click", () => this.onMatchCardClick(card, "ans"));

            ansCol.appendChild(card);
        });

        this.updateStageProgress(1, 0, activePairs.length);
    }

    onMatchCardClick(card, type) {
        if (card.classList.contains("matched")) return;
        AudioPlayer.playClick();
        speakText(card.innerText);

        if (type === "eq") {
            // Unselect previous
            if (this.selectedEquationCard) {
                this.selectedEquationCard.classList.remove("selected-match");
            }
            this.selectedEquationCard = card;
            card.classList.add("selected-match");
        } else {
            // User clicked an answer card
            if (this.selectedEquationCard) {
                const eqRes = this.selectedEquationCard.getAttribute("data-result");
                const ansRes = card.getAttribute("data-result");
                
                if (eqRes === ansRes) {
                    // Success!
                    this.selectedEquationCard.classList.remove("selected-match");
                    this.selectedEquationCard.classList.add("matched");
                    card.classList.add("matched");
                    this.selectedEquationCard = null;
                    
                    AudioPlayer.playSuccess();
                    this.checkStage1Complete();
                } else {
                    // Incorrect Match
                    this.recordMistake();
                    this.selectedEquationCard.classList.remove("selected-match");
                    this.selectedEquationCard.classList.add("shake");
                    card.classList.add("shake");
                    
                    AudioPlayer.playError();
                    
                    const eqTerms = this.selectedEquationCard.getAttribute("data-equation").split("x");
                    setTimeout(() => {
                        if (this.selectedEquationCard) this.selectedEquationCard.classList.remove("shake");
                        card.classList.remove("shake");
                        this.selectedEquationCard = null;
                        this.showDicaPedagogica(parseInt(eqTerms[0]), parseInt(eqTerms[1]));
                    }, 500);
                }
            }
        }
    }

    // Drag-Drop Standard Implementation
    onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.getAttribute("data-result"));
        e.dataTransfer.setData("eq-selector", e.target.getAttribute("data-equation"));
        e.target.classList.add("dragging");
        speakText(e.target.innerText);
    }

    onDragEnd(e) {
        e.target.classList.remove("dragging");
    }

    onDragOver(e) {
        e.preventDefault();
        const target = e.target.closest?.(".match-card, .puzzle-slot") || e.target;
        if (!target.classList.contains("matched") && !target.classList.contains("revealed")) {
            target.classList.add("drag-over");
        }
    }

    onDragLeave(e) {
        const target = e.target.closest?.(".match-card, .puzzle-slot") || e.target;
        target.classList.remove("drag-over");
    }

    onDrop(e) {
        e.preventDefault();
        e.target.classList.remove("drag-over");
        
        const expectedResult = e.dataTransfer.getData("text/plain");
        const eqCode = e.dataTransfer.getData("eq-selector");
        const actualResult = e.target.getAttribute("data-result");

        const sourceCard = document.querySelector(`[data-equation="${eqCode}"]`);
        if (!sourceCard) return;

        if (expectedResult === actualResult) {
            sourceCard.classList.add("matched");
            e.target.classList.add("matched");
            AudioPlayer.playSuccess();
            this.checkStage1Complete();
        } else {
            this.recordMistake();
            sourceCard.classList.add("shake");
            e.target.classList.add("shake");
            AudioPlayer.playError();
            
            const terms = eqCode.split("x");
            setTimeout(() => {
                sourceCard.classList.remove("shake");
                e.target.classList.remove("shake");
                this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
            }, 500);
        }
    }

    // Touch Support Implementation
    onTouchStart(e) {
        const touch = e.touches[0];
        const target = e.currentTarget;
        if (target.classList.contains("matched")) return;
        
        this.activeTouchElement = target;
        target.classList.add("dragging");
        speakText(target.innerText);
        
        // Calculate offsets
        const rect = target.getBoundingClientRect();
        this.touchOffsetX = touch.clientX - rect.left;
        this.touchOffsetY = touch.clientY - rect.top;
        
        // Prepare positioning properties
        target.style.position = 'fixed';
        target.style.zIndex = '1000';
        target.style.width = rect.width + 'px';
        target.style.left = (touch.clientX - this.touchOffsetX) + 'px';
        target.style.top = (touch.clientY - this.touchOffsetY) + 'px';
    }

    onTouchMove(e) {
        if (!this.activeTouchElement) return;
        e.preventDefault();
        const touch = e.touches[0];
        
        this.activeTouchElement.style.left = (touch.clientX - this.touchOffsetX) + 'px';
        this.activeTouchElement.style.top = (touch.clientY - this.touchOffsetY) + 'px';
    }

    onTouchEnd(e) {
        if (!this.activeTouchElement) return;
        const target = this.activeTouchElement;
        this.activeTouchElement = null;
        target.classList.remove("dragging");
        
        // Check landing element under touch coordinate
        const touch = e.changedTouches[0];
        target.style.display = 'none'; // Hide temporarily to detect element below
        const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        target.style.display = ''; // Restore display
        
        // Reset positioning
        target.style.position = '';
        target.style.zIndex = '';
        target.style.width = '';
        target.style.left = '';
        target.style.top = '';

        if (dropTarget && dropTarget.classList.contains("match-card") && !dropTarget.classList.contains("matched") && dropTarget.parentElement.classList.contains("answers")) {
            const expectedResult = target.getAttribute("data-result");
            const actualResult = dropTarget.getAttribute("data-result");
            const eqCode = target.getAttribute("data-equation");
            
            if (expectedResult === actualResult) {
                target.classList.add("matched");
                dropTarget.classList.add("matched");
                AudioPlayer.playSuccess();
                this.checkStage1Complete();
            } else {
                this.recordMistake();
                target.classList.add("shake");
                dropTarget.classList.add("shake");
                AudioPlayer.playError();
                
                const terms = eqCode.split("x");
                setTimeout(() => {
                    target.classList.remove("shake");
                    dropTarget.classList.remove("shake");
                    this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
                }, 500);
            }
        }
    }

    checkStage1Complete() {
        const totalEqs = document.getElementById("stage1-equations").children.length;
        const matchedEqs = document.querySelectorAll("#stage1-equations .match-card.matched").length;
        this.updateStageProgress(1, matchedEqs, totalEqs);
        
        if (matchedEqs === totalEqs) {
            // Stage 1 Completed! Transition to Stage 2
            setTimeout(() => {
                this.setStageIndicator(2);
                this.loadStage2();
            }, 1000);
        }
    }

    // ==========================================
    // ETAPA 2: QUEBRA-CABEÇA DA IMAGEM
    // ==========================================
    loadStage2() {
        document.getElementById("game-stage-1").classList.remove("active");
        document.getElementById("game-stage-2").classList.add("active");
        document.getElementById("game-stage-3").classList.remove("active");
        document.getElementById("puzzle-complete-banner").classList.remove("active");
        this.saveActiveRun(2);

        const piecesPool = document.getElementById("puzzle-pieces-pool");
        const board = document.getElementById("puzzle-board");
        piecesPool.innerHTML = "";
        board.innerHTML = "";

        const levelNum = this.currentLevel;
        this.selectedEquationCard = null;

        // Render board grid slots (10 slots corresponding to x1 to x10)
        // Set background artwork of the board dynamically using Kingdom SVGs
        const boardWrapper = document.querySelector(".puzzle-board-wrapper");
        boardWrapper.style.backgroundImage = "";
        
        const puzzleArtwork = getPuzzleArtworkMarkup(levelNum);

        const db = LITERACY_DATABASE[levelNum] || LITERACY_DATABASE[2];
        let formulas = db.stage2.map((item, idx) => ({
            term1: levelNum,
            term2: idx,
            leftText: item.q,
            resultText: item.a,
            result: item.a,
            index: idx + 1
        }));

        // Render slots inside the board in sequential order
        formulas.forEach(pair => {
            const slot = document.createElement("div");
            slot.className = "puzzle-slot";
            slot.setAttribute("data-result", pair.result);
            slot.setAttribute("data-equation", `${pair.term1}x${pair.term2}`);
            
            // Set slice background position for visual assembly
            // 2 rows, 5 columns grid.
            // Cols: 0 to 4. Rows: 0 to 1.
            const colIdx = (pair.index - 1) % 5;
            const rowIdx = Math.floor((pair.index - 1) / 5);

            // Inner label representing the result answer
            slot.innerHTML = `
                <span class="slot-art" style="left: -${colIdx * 100}%; top: -${rowIdx * 100}%;">${puzzleArtwork}</span>
                <span class="slot-answer-label">${pair.resultText}</span>
            `;
            
            // Drop target listeners
            slot.addEventListener("dragover", (e) => this.onDragOver(e));
            slot.addEventListener("dragleave", (e) => this.onDragLeave(e));
            slot.addEventListener("drop", (e) => this.onPuzzleDrop(e));

            // Click listener
            slot.addEventListener("click", () => this.onPuzzleSlotClick(slot));

            board.appendChild(slot);
        });

        // Render draggable Equation puzzle pieces (Shuffled)
        const shuffledPieces = [...formulas].sort(() => Math.random() - 0.5);
        shuffledPieces.forEach(pair => {
            const piece = document.createElement("div");
            piece.className = "puzzle-piece";
            piece.innerText = pair.leftText;
            piece.setAttribute("draggable", "true");
            piece.setAttribute("data-result", pair.result);
            piece.setAttribute("data-equation", `${pair.term1}x${pair.term2}`);
            
            // Drag listeners
            piece.addEventListener("dragstart", (e) => this.onDragStart(e));
            piece.addEventListener("dragend", (e) => this.onDragEnd(e));
            
            // Touch listeners
            piece.addEventListener("touchstart", (e) => this.onTouchStart(e), { passive: false });
            piece.addEventListener("touchmove", (e) => this.onTouchMove(e), { passive: false });
            piece.addEventListener("touchend", (e) => this.onPuzzleTouchEnd(e));

            // Click listener
            piece.addEventListener("click", () => this.onPuzzlePieceClick(piece));

            piecesPool.appendChild(piece);
        });

        this.updateStageProgress(2, 0, formulas.length);
    }

    onPuzzlePieceClick(piece) {
        if (piece.classList.contains("placed")) return;
        AudioPlayer.playClick();
        speakText(piece.innerText);
        
        if (this.selectedEquationCard) {
            this.selectedEquationCard.classList.remove("selected-match");
        }
        this.selectedEquationCard = piece;
        piece.classList.add("selected-match");
    }

    onPuzzleSlotClick(slot) {
        if (slot.classList.contains("revealed")) return;
        
        const label = slot.querySelector(".slot-answer-label");
        if (label) {
            speakText(label.innerText);
        }
        
        if (this.selectedEquationCard) {
            const eqRes = this.selectedEquationCard.getAttribute("data-result");
            const slotRes = slot.getAttribute("data-result");
            const eqCode = this.selectedEquationCard.getAttribute("data-equation");

            if (eqRes === slotRes) {
                // Success! Place piece
                this.selectedEquationCard.classList.remove("selected-match");
                this.selectedEquationCard.classList.add("placed");
                slot.classList.add("revealed");
                this.selectedEquationCard = null;
                
                AudioPlayer.playSuccess();
                this.checkStage2Complete();
            } else {
                // Error
                this.recordMistake();
                this.selectedEquationCard.classList.remove("selected-match");
                this.selectedEquationCard.classList.add("shake");
                slot.classList.add("shake");
                
                AudioPlayer.playError();
                
                const terms = eqCode.split("x");
                setTimeout(() => {
                    if (this.selectedEquationCard) this.selectedEquationCard.classList.remove("shake");
                    slot.classList.remove("shake");
                    this.selectedEquationCard = null;
                    this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
                }, 500);
            }
        }
    }

    onPuzzleDrop(e) {
        e.preventDefault();
        
        const expectedResult = e.dataTransfer.getData("text/plain");
        const eqCode = e.dataTransfer.getData("eq-selector");

        const slotNode = this.getPuzzleSlotFromElement(e.target);
        if (!slotNode) return;
        slotNode.classList.remove("drag-over");
        
        const actualResult = slotNode.getAttribute("data-result");
        const sourcePiece = document.querySelector(`[data-equation="${eqCode}"].puzzle-piece`);
        
        if (!sourcePiece) return;

        if (expectedResult === actualResult) {
            sourcePiece.classList.add("placed");
            slotNode.classList.add("revealed");
            AudioPlayer.playSuccess();
            this.checkStage2Complete();
        } else {
            this.recordMistake();
            sourcePiece.classList.add("shake");
            slotNode.classList.add("shake");
            AudioPlayer.playError();
            
            const terms = eqCode.split("x");
            setTimeout(() => {
                sourcePiece.classList.remove("shake");
                slotNode.classList.remove("shake");
                this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
            }, 500);
        }
    }

    onPuzzleTouchEnd(e) {
        if (!this.activeTouchElement) return;
        const target = this.activeTouchElement;
        this.activeTouchElement = null;
        target.classList.remove("dragging");
        
        const touch = e.changedTouches[0];
        target.style.display = 'none';
        let dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        target.style.display = '';
        
        // Reset positioning
        target.style.position = '';
        target.style.zIndex = '';
        target.style.width = '';
        target.style.left = '';
        target.style.top = '';

        if (dropTarget) {
            dropTarget = this.getPuzzleSlotFromElement(dropTarget);

            if (dropTarget && !dropTarget.classList.contains("revealed")) {
                const expectedResult = target.getAttribute("data-result");
                const actualResult = dropTarget.getAttribute("data-result");
                const eqCode = target.getAttribute("data-equation");
                
                if (expectedResult === actualResult) {
                    target.classList.add("placed");
                    dropTarget.classList.add("revealed");
                    AudioPlayer.playSuccess();
                    this.checkStage2Complete();
                } else {
                    this.recordMistake();
                    target.classList.add("shake");
                    dropTarget.classList.add("shake");
                    AudioPlayer.playError();
                    
                    const terms = eqCode.split("x");
                    setTimeout(() => {
                        target.classList.remove("shake");
                        dropTarget.classList.remove("shake");
                        this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
                    }, 500);
                }
            }
        }
    }

    checkStage2Complete() {
        const totalPieces = 10;
        const placedPieces = document.querySelectorAll("#puzzle-board .puzzle-slot.revealed").length;
        this.updateStageProgress(2, placedPieces, totalPieces);
        
        if (placedPieces === totalPieces) {
            // Puzzle Complete! Reveal celebration overlay banner
            setTimeout(() => {
                const banner = document.getElementById("puzzle-complete-banner");
                const kName = KINGDOMS[this.currentLevel].puzzleTitle;
                banner.querySelector(".congrats-text").innerHTML = `Você restaurou o monumento:<br><strong>${kName}</strong>! 🎉`;
                banner.classList.add("active");
                AudioPlayer.playVictoryMelody();
            }, 600);
        }
    }

    // ==========================================
    // ETAPA 3: DESAFIO DO CHEFE
    // ==========================================
    loadStage3() {
        document.getElementById("game-stage-1").classList.remove("active");
        document.getElementById("game-stage-2").classList.remove("active");
        document.getElementById("game-stage-3").classList.add("active");
        this.saveActiveRun(3);
        
        // Reset RPG state
        this.bossMaxHealth = 100;
        this.bossHealth = 100;
        this.playerHearts = 3;
        
        // Render hero avatar inside battle arena
        renderHeroIdentity("battle-hero-avatar");
        document.getElementById("battle-player-name").innerText = State.data.playerName;
        this.updateHeartsDisplay();

        // Render boss avatar
        const k = KINGDOMS[this.currentLevel];
        document.getElementById("battle-boss-name").innerText = k.bossName;
        generateBossSVG(this.currentLevel, "battle-boss-avatar");
        this.updateBossHealthDisplay();

        // Trigger boss quote
        const bubble = document.getElementById("boss-dialogue-bubble");
        bubble.innerText = `"Olá, ${State.data.playerName}! Duvido você responder às minhas perguntas!"`;

        // Start battle loop
        this.nextBossQuestion();
    }

    updateHeartsDisplay() {
        const container = document.getElementById("player-hearts");
        container.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            container.innerHTML += i < this.playerHearts ? "❤️" : "🖤";
        }
    }

    updateBossHealthDisplay() {
        const fill = document.getElementById("boss-health-fill");
        const pct = (this.bossHealth / this.bossMaxHealth) * 100;
        fill.style.width = `${pct}%`;
        const defeatedPct = Math.round(100 - pct);
        setGameMissionStrip(
            "Etapa 3 de 3",
            `Derrote ${KINGDOMS[this.currentLevel].bossName} com respostas certeiras.`,
            `${defeatedPct}% do guardião derrotado`,
            defeatedPct
        );
    }

    nextBossQuestion() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        
        const levelNum = this.currentLevel;
        const db = LITERACY_DATABASE[levelNum] || LITERACY_DATABASE[2];
        
        // Pick random question from current level
        const qIdx = Math.floor(Math.random() * db.stage3.length);
        const item = db.stage3[qIdx];
        
        this.battleCurrentEquation = { term1: levelNum, term2: qIdx, result: item.a };
        
        // Display equation/question text
        document.getElementById("boss-equation").innerText = item.q;
        speakText(item.q);

        // Display multiple choice options
        const answersGrid = document.getElementById("boss-answers-grid");
        answersGrid.innerHTML = "";

        // Shuffle the options
        let options = [...item.options];
        options.sort(() => Math.random() - 0.5);

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "btn btn-answer";
            btn.innerText = opt;
            btn.addEventListener("click", () => this.submitBossAnswer(opt));
            answersGrid.appendChild(btn);
        });

        // Initialize timer countdown
        this.battleTimerVal = 100;
        const timerFill = document.getElementById("boss-timer-fill");
        timerFill.className = "boss-timer-bar";
        timerFill.style.width = "100%";

        const duration = 12000; // 12 seconds
        const step = 100; // updates every 100ms
        let elapsed = 0;

        this.battleTimerInterval = setInterval(() => {
            elapsed += step;
            this.battleTimerVal = 100 - (elapsed / duration) * 100;
            timerFill.style.width = `${this.battleTimerVal}%`;

            if (this.battleTimerVal < 30) {
                timerFill.classList.add("critical");
            }

            if (elapsed >= duration) {
                clearInterval(this.battleTimerInterval);
                this.onBossTimerExpired();
            }
        }, step);
    }

    submitBossAnswer(selectedVal) {
        clearInterval(this.battleTimerInterval);
        speakText(selectedVal);
        
        const correctVal = this.battleCurrentEquation.result;
        
        // Turn off answer buttons to prevent double clicks
        const btns = document.querySelectorAll("#boss-answers-grid .btn-answer");
        btns.forEach(b => b.disabled = true);

        if (selectedVal === correctVal) {
            // SUCCESSFUL ATTACK ON BOSS
            this.bossHealth -= 34; // 3 hits defeat the boss
            if (this.bossHealth < 0) this.bossHealth = 0;
            
            this.updateBossHealthDisplay();
            AudioPlayer.playHit();
            
            // Attack animation (hero slide right, boss hit flash)
            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            heroWrapper.classList.add("attacking");
            
            document.getElementById("boss-dialogue-bubble").innerText = `"Aaaaargh! Isso doeu!"`;

            setTimeout(() => {
                bossWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                heroWrapper.classList.remove("attacking");
                bossWrapper.classList.remove("hit");
                
                if (this.bossHealth <= 0) {
                    this.onBossDefeated();
                } else {
                    this.nextBossQuestion();
                }
            }, 800);
        } else {
            // INCORRECT ANSWER - BOSS ATTACKS
            this.recordMistake();
            this.playerHearts--;
            this.updateHeartsDisplay();
            AudioPlayer.playError();

            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            bossWrapper.classList.add("attacking");
            
            document.getElementById("boss-dialogue-bubble").innerText = `"Ha! Errou! Receba meu ataque!"`;

            setTimeout(() => {
                heroWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                bossWrapper.classList.remove("attacking");
                heroWrapper.classList.remove("hit");
                
                if (this.playerHearts <= 0) {
                    this.onPlayerDefeated();
                } else {
                    // Show educational tip overlay modal, then continue
                    this.showDicaPedagogica(this.battleCurrentEquation.term1, this.battleCurrentEquation.term2, () => {
                        this.nextBossQuestion();
                    });
                }
            }, 800);
        }
    }

    onBossTimerExpired() {
        this.recordMistake();
        this.playerHearts--;
        this.updateHeartsDisplay();
        AudioPlayer.playError();

        const heroWrapper = document.getElementById("battle-hero-avatar");
        const bossWrapper = document.getElementById("battle-boss-avatar");
        
        bossWrapper.classList.add("attacking");
        document.getElementById("boss-dialogue-bubble").innerText = `"Tempo esgotado! Muito lento!"`;

        setTimeout(() => {
            heroWrapper.classList.add("hit");
        }, 200);

        setTimeout(() => {
            bossWrapper.classList.remove("attacking");
            heroWrapper.classList.remove("hit");
            
            if (this.playerHearts <= 0) {
                this.onPlayerDefeated();
            } else {
                this.showDicaPedagogica(this.battleCurrentEquation.term1, this.battleCurrentEquation.term2, () => {
                    this.nextBossQuestion();
                });
            }
        }, 800);
    }

    onBossDefeated() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        
        // Save level progress
        const completedLevel = this.currentLevel;
        
        // Compute Stars awarded
        let starsAwarded = 1;
        if (this.errorsMade === 0) starsAwarded = 3;
        else if (this.errorsMade <= 2) starsAwarded = 2;
        
        // Save star counts and unlock next levels
        if (!State.data.stars[completedLevel] || State.data.stars[completedLevel] < starsAwarded) {
            State.data.stars[completedLevel] = starsAwarded;
        }
        State.data.errors[completedLevel] = Math.min(State.data.errors[completedLevel] ?? this.errorsMade, this.errorsMade);

        // Add level rewards
        const k = KINGDOMS[completedLevel];
        if (!State.data.unlockedGear.includes(k.gearId)) {
            State.data.unlockedGear.push(k.gearId);
        }

        // Unlock next stage index
        const nextLvl = completedLevel + 1;
        if (nextLvl <= 9 && !State.data.unlockedLevels.includes(nextLvl)) {
            State.data.unlockedLevels.push(nextLvl);
        }

        // Reward coins
        const coinAward = starsAwarded * 30 + 10;
        State.data.coins += coinAward;
        State.data.activeRun = null;
        
        State.save();

        // Trigger level victory screen
        this.showVictoryScreen(completedLevel, starsAwarded, coinAward);
    }

    onPlayerDefeated() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        // Display friendly retry modal without penalizing progress
        const retryModal = document.getElementById("retry-modal");
        retryModal.classList.add("active");
    }

    restartBossChallenge() {
        document.getElementById("retry-modal").classList.remove("active");
        this.loadStage3();
    }

    // ==========================================
    // TELA DE VITÓRIA DA FASE
    // ==========================================
    showVictoryScreen(levelNum, starsCount, coinsCount) {
        const k = KINGDOMS[levelNum];
        document.getElementById("victory-kingdom-text").innerHTML = `Você completou os desafios e libertou o <strong>${k.name}</strong>!`;
        document.getElementById("victory-recompensa-name").innerText = k.rewardName;
        document.getElementById("victory-recompensa-icon").innerText = k.rewardIcon;
        
        document.getElementById("victory-item-name").innerText = k.gearName;
        document.getElementById("victory-item-icon").innerText = k.gearIcon;

        document.getElementById("victory-coins-added").innerText = coinsCount;
        document.getElementById("victory-errors-count").innerText = this.errorsMade;

        // Render stars dynamically
        const starsSpan = document.querySelectorAll("#victory-stars .star");
        starsSpan.forEach((s, idx) => {
            s.className = "star";
            if (idx < starsCount) {
                setTimeout(() => { s.classList.add("active"); }, idx * 300);
            }
        });

        // Trigger Confetti fall
        this.triggerConfetti();
        AudioPlayer.playVictoryMelody();
        
        // Hide next button if it's Castelo Final (level 9)
        const nextBtn = document.getElementById("btn-victory-next");
        if (levelNum === 9) {
            nextBtn.innerText = "Arena dos Mestres 👑";
        } else {
            nextBtn.innerText = "Próxima Fase! ➡️";
        }

        Screens.show("screen-victory");
    }

    triggerConfetti() {
        const canvas = document.getElementById("victory-confetti");
        canvas.innerHTML = "";
        const colors = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];
        
        for (let i = 0; i < 40; i++) {
            const piece = document.createElement("div");
            piece.className = "confetti-piece";
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.left = Math.random() * 100 + "%";
            piece.style.animationDelay = Math.random() * 2 + "s";
            piece.style.width = Math.random() * 8 + 6 + "px";
            piece.style.height = Math.random() * 14 + 6 + "px";
            piece.style.borderRadius = Math.random() < 0.5 ? "50%" : "0";
            canvas.appendChild(piece);
        }
    }

    // ==========================================
    // DICA PEDAGÓGICA POPUP MODAL
    // ==========================================
    showDicaPedagogica(a, b, onCloseCallback = null) {
        const modal = document.getElementById("hint-modal");
        const text = document.getElementById("hint-text");
        const hintHTML = getPedagogicalHint(a, b, this.currentStage);
        text.innerHTML = hintHTML;
        modal.classList.add("active");

        // Clean HTML tags and speak the hint aloud
        const cleanHint = hintHTML.replace(/<[^>]*>/g, "");
        speakText(cleanHint);

        const closeBtn = document.getElementById("btn-close-hint");
        const handler = () => {
            modal.classList.remove("active");
            closeBtn.removeEventListener("click", handler);
            AudioPlayer.playClick();
            if (onCloseCallback) onCloseCallback();
        };
        closeBtn.addEventListener("click", handler);
    }

    // ==========================================
    // INTERFACES GENERAL EVENTS BINDING
    // ==========================================
    setupGeneralEvents() {
        // Stage 2 completion navigation
        document.getElementById("btn-puzzle-next").addEventListener("click", () => {
            this.setStageIndicator(3);
            this.loadStage3();
        });

        // Game HUD exiting back to Map
        document.getElementById("btn-game-exit").addEventListener("click", () => {
            if (confirm("Quer mesmo sair da fase atual e voltar ao mapa? Todo o progresso desta fase será perdido.")) {
                if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
                Screens.show("screen-map");
            }
        });

        // Toggle Sound on Game HUD
        document.getElementById("btn-toggle-sound").addEventListener("click", (e) => {
            const state = AudioPlayer.toggle();
            BackgroundMusic.setEnabled(state);
            e.target.innerText = state ? "🔊 Som On" : "🔇 Som Off";
            State.data.soundEnabled = state;
            State.save();
        });

        // Boss retry buttons
        document.getElementById("btn-restart-boss").addEventListener("click", () => this.restartBossChallenge());
        document.getElementById("btn-retry-exit").addEventListener("click", () => {
            document.getElementById("retry-modal").classList.remove("active");
            Screens.show("screen-map");
        });
    }
}

let GameController = null;

// ==========================================================================
// 9. ARENA DOS MESTRES (FINAL SPECIAL BOSS MODE)
// ==========================================================================
class ArenaController {
    constructor() {
        this.errorsMade = 0;
        this.bossHealth = 150; // Bigger health bar
        this.bossMaxHealth = 150;
        this.playerHearts = 3;
        this.battleTimerInterval = null;
        this.battleCurrentEquation = null;
    }

    saveActiveRun() {
        State.data.activeRun = {
            type: "arena",
            errorsMade: this.errorsMade
        };
        State.save();
    }

    recordMistake() {
        this.errorsMade++;
        this.saveActiveRun();
    }

    startArena(options = {}) {
        const savedArenaRun = options.resume && State.data.activeRun?.type === "arena" ? State.data.activeRun : null;
        this.errorsMade = savedArenaRun?.errorsMade || 0;
        this.bossHealth = 150;
        this.playerHearts = 3;

        // Set visual root properties for custom final color glow (Ruby red/pink)
        document.documentElement.style.setProperty('--color-primary', 'hsl(340, 80%, 55%)');

        document.getElementById("game-reino-name").innerText = "Arena dos Mestres";
        document.getElementById("game-reino-icon").innerText = "⚔️";
        document.getElementById("game-coins").innerText = State.data.coins;
        this.saveActiveRun();
        setGameMissionStrip(
            "Arena final",
            "Misture tudo que aprendeu e derrube o Guardião Supremo.",
            "0/5 golpes",
            0
        );

        // Setup HUD active stage
        document.getElementById("game-stage-1").classList.remove("active");
        document.getElementById("game-stage-2").classList.remove("active");
        document.getElementById("game-stage-3").classList.add("active");

        // Hide dot markers for Arena
        document.querySelector(".stage-indicator").style.visibility = "hidden";

        // Setup Hero HUD
        renderHeroIdentity("battle-hero-avatar");
        document.getElementById("battle-player-name").innerText = State.data.playerName;
        this.updateHeartsDisplay();

        // Setup Boss HUD
        document.getElementById("battle-boss-name").innerText = "Mestre Supremo da Alfabetização";
        generateBossSVG("arena", "battle-boss-avatar");
        this.updateBossHealthDisplay();

        document.getElementById("boss-dialogue-bubble").innerText = `"Bem-vindo ao desafio supremo! Prove que você domina todas as letras e sílabas!"`;

        this.nextQuestion();
        Screens.show("screen-game");
    }

    updateHeartsDisplay() {
        const container = document.getElementById("player-hearts");
        container.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            container.innerHTML += i < this.playerHearts ? "❤️" : "🖤";
        }
    }

    updateBossHealthDisplay() {
        const fill = document.getElementById("boss-health-fill");
        const pct = (this.bossHealth / this.bossMaxHealth) * 100;
        fill.style.width = `${pct}%`;
        const hitsDone = Math.min(5, Math.round(((this.bossMaxHealth - this.bossHealth) / this.bossMaxHealth) * 5));
        setGameMissionStrip(
            "Arena final",
            "Misture tudo que aprendeu e derrube o Guardião Supremo.",
            `${hitsDone}/5 golpes`,
            100 - pct
        );
    }

    nextQuestion() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);

        // Pick a random level from 2 to 9
        const randomLevel = Math.floor(Math.random() * 8) + 2; // 2 to 9
        const db = LITERACY_DATABASE[randomLevel];
        
        // Pick a random stage 3 question
        const qIdx = Math.floor(Math.random() * db.stage3.length);
        const item = db.stage3[qIdx];
        
        this.battleCurrentEquation = {
            term1: randomLevel,
            term2: qIdx,
            result: item.a
        };
        
        document.getElementById("boss-equation").innerText = item.q;

        // Generate answers
        const answersGrid = document.getElementById("boss-answers-grid");
        answersGrid.innerHTML = "";

        let options = [...item.options];
        options.sort(() => Math.random() - 0.5);

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "btn btn-answer";
            btn.innerText = opt;
            btn.addEventListener("click", () => this.submitAnswer(opt));
            answersGrid.appendChild(btn);
        });

        // Initialize Timer
        this.battleTimerVal = 100;
        const timerFill = document.getElementById("boss-timer-fill");
        timerFill.className = "boss-timer-bar";
        timerFill.style.width = "100%";

        const duration = 10000; // 10 seconds (faster than normal reinos!)
        const step = 100;
        let elapsed = 0;

        this.battleTimerInterval = setInterval(() => {
            elapsed += step;
            this.battleTimerVal = 100 - (elapsed / duration) * 100;
            timerFill.style.width = `${this.battleTimerVal}%`;

            if (this.battleTimerVal < 30) {
                timerFill.classList.add("critical");
            }

            if (elapsed >= duration) {
                clearInterval(this.battleTimerInterval);
                this.onTimerExpired();
            }
        }, step);
    }

    submitAnswer(selectedVal) {
        clearInterval(this.battleTimerInterval);
        speakText(selectedVal);
        const correctVal = this.battleCurrentEquation.result;
        
        const btns = document.querySelectorAll("#boss-answers-grid .btn-answer");
        btns.forEach(b => b.disabled = true);

        if (selectedVal === correctVal) {
            this.bossHealth -= 30; // 5 hits to win
            if (this.bossHealth < 0) this.bossHealth = 0;
            
            this.updateBossHealthDisplay();
            AudioPlayer.playHit();
            
            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            heroWrapper.classList.add("attacking");
            
            document.getElementById("boss-dialogue-bubble").innerText = `"Incrível! Você acertou!"`;

            setTimeout(() => {
                bossWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                heroWrapper.classList.remove("attacking");
                bossWrapper.classList.remove("hit");
                
                if (this.bossHealth <= 0) {
                    this.onVictory();
                } else {
                    this.nextQuestion();
                }
            }, 800);
        } else {
            this.recordMistake();
            this.playerHearts--;
            this.updateHeartsDisplay();
            AudioPlayer.playError();

            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            bossWrapper.classList.add("attacking");

            document.getElementById("boss-dialogue-bubble").innerText = `"Erro! Cuidado com as perguntas do ${KINGDOMS[this.battleCurrentEquation.term1].name}!"`;

            setTimeout(() => {
                heroWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                bossWrapper.classList.remove("attacking");
                heroWrapper.classList.remove("hit");
                
                if (this.playerHearts <= 0) {
                    this.onDefeat();
                } else {
                    this.showTip(() => {
                        this.nextQuestion();
                    });
                }
            }, 800);
        }
    }

    onTimerExpired() {
        this.recordMistake();
        this.playerHearts--;
        this.updateHeartsDisplay();
        AudioPlayer.playError();

        const heroWrapper = document.getElementById("battle-hero-avatar");
        const bossWrapper = document.getElementById("battle-boss-avatar");
        
        bossWrapper.classList.add("attacking");
        document.getElementById("boss-dialogue-bubble").innerText = `"O tempo corre contra você!"`;

        setTimeout(() => {
            heroWrapper.classList.add("hit");
        }, 200);

        setTimeout(() => {
            bossWrapper.classList.remove("attacking");
            heroWrapper.classList.remove("hit");
            
            if (this.playerHearts <= 0) {
                this.onDefeat();
            } else {
                this.showTip(() => {
                    this.nextQuestion();
                });
            }
        }, 800);
    }

    showTip(onClose) {
        const modal = document.getElementById("hint-modal");
        const text = document.getElementById("hint-text");
        const hintHTML = getPedagogicalHint(this.battleCurrentEquation.term1, this.battleCurrentEquation.term2, 3);
        text.innerHTML = hintHTML;
        modal.classList.add("active");

        // Clean HTML tags and speak the hint aloud
        const cleanHint = hintHTML.replace(/<[^>]*>/g, "");
        speakText(cleanHint);

        const closeBtn = document.getElementById("btn-close-hint");
        const handler = () => {
            modal.classList.remove("active");
            closeBtn.removeEventListener("click", handler);
            AudioPlayer.playClick();
            if (onClose) onClose();
        };
        closeBtn.addEventListener("click", handler);
    }

    onVictory() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        
        // Restore indicators
        document.querySelector(".stage-indicator").style.visibility = "visible";
        
        // Mark game completely finished
        State.data.completedAll = true;
        State.data.activeRun = null;
        State.save();

        AudioPlayer.playVictoryMelody();
        
        // Direct to final certificate screen
        document.getElementById("cert-display-name").innerText = State.data.playerName.toUpperCase();
        renderWatermark();
        renderHeroIdentity("cert-hero-portrait");
        Screens.show("screen-certificate");
    }

    onDefeat() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        document.querySelector(".stage-indicator").style.visibility = "visible";
        
        // Show retry modal
        const retryModal = document.getElementById("retry-modal");
        retryModal.classList.add("active");

        // Bind special restart for Arena
        const restartBtn = document.getElementById("btn-restart-boss");
        const exitBtn = document.getElementById("btn-retry-exit");

        const removeListeners = () => {
            restartBtn.removeEventListener("click", restartHandler);
            exitBtn.removeEventListener("click", exitHandler);
        };

        const restartHandler = () => {
            removeListeners();
            retryModal.classList.remove("active");
            this.startArena();
        };

        const exitHandler = () => {
            removeListeners();
            retryModal.classList.remove("active");
            Screens.show("screen-map");
        };

        restartBtn.addEventListener("click", restartHandler);
        exitBtn.addEventListener("click", exitHandler);
    }
}

const finalArena = new ArenaController();

// ==========================================================================
// 10. ENTRY POINT - INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Instantiate Gameplay controller
    GameController = new GameplayController();

    // 10.1 Check LocalStorage values and show Start screen
    Screens.show("screen-start");
    
    // Sync sound setting toggle on start screen configurations
    AudioPlayer.enabled = State.data.soundEnabled;
    BackgroundMusic.setEnabled(State.data.soundEnabled);
    const btnHUDsound = document.getElementById("btn-toggle-sound");
    btnHUDsound.innerText = AudioPlayer.enabled ? "🔊 Som On" : "🔇 Som Off";

    const startBackgroundMusic = () => {
        BackgroundMusic.play();
    };
    document.addEventListener("pointerdown", startBackgroundMusic, { once: true });
    document.addEventListener("keydown", startBackgroundMusic, { once: true });

    // Initialize character selector visual cards
    const cards = document.querySelectorAll(".char-card");
    cards.forEach(card => {
        const charType = card.getAttribute("data-char");
        // Inject characters SVG on selection cards
        renderCharacterAvatar(charType, `avatar-${charType}-svg`, false);

        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            State.data.characterSelected = charType;
            document.getElementById("btn-char-confirm").disabled = false;
            AudioPlayer.playClick();
        });
    });

    // 10.2 Navigation Button Listeners
    document.getElementById("btn-play").addEventListener("click", () => {
        if (State.data.characterSelected) {
            Screens.show("screen-map");
        } else {
            Screens.show("screen-character");
        }
    });

    document.getElementById("btn-continue").addEventListener("click", () => {
        if (State.data.activeRun) {
            GameController.resumeSavedRun();
        } else {
            Screens.show("screen-map");
        }
    });

    document.getElementById("btn-achievements").addEventListener("click", () => {
        if (State.data.characterSelected) {
            Screens.show("screen-achievements");
        } else {
            showQuestToast("Escolha um herói para abrir o álbum.");
            Screens.show("screen-character");
        }
    });

    document.getElementById("btn-settings").addEventListener("click", () => {
        Screens.show("screen-settings");
    });

    document.getElementById("start-char-preview").addEventListener("click", () => {
        Screens.show("screen-character");
    });

    document.getElementById("btn-char-back").addEventListener("click", () => {
        Screens.show("screen-start");
    });

    document.getElementById("btn-char-confirm").addEventListener("click", () => {
        const inputName = document.getElementById("player-name").value.trim();
        State.data.playerName = inputName ? inputName : "Aventureiro";
        State.save();
        Screens.show("screen-map");
    });

    const childPhotoInput = document.getElementById("child-photo-input");
    document.getElementById("btn-child-photo").addEventListener("click", () => {
        childPhotoInput.click();
    });

    childPhotoInput.addEventListener("change", async (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        try {
            State.data.childPhoto = await resizePhotoForStorage(file);
            State.save();
            updateChildPhotoPreview();
            showQuestToast("Foto do herói salva neste navegador.");
        } catch (error) {
            showQuestToast("Não consegui carregar essa foto. Tente outra imagem.");
        } finally {
            childPhotoInput.value = "";
        }
    });

    document.getElementById("btn-remove-child-photo").addEventListener("click", () => {
        State.data.childPhoto = "";
        State.save();
        updateChildPhotoPreview();
        showQuestToast("Foto removida.");
    });

    // HUD settings & achievements triggers from map
    document.getElementById("btn-map-achievements").addEventListener("click", () => {
        Screens.show("screen-achievements");
    });
    
    document.getElementById("btn-map-settings").addEventListener("click", () => {
        Screens.show("screen-settings");
    });

    document.getElementById("btn-map-back").addEventListener("click", () => {
        Screens.show("screen-start");
    });

    document.getElementById("btn-map-to-char").addEventListener("click", () => {
        Screens.show("screen-character");
    });

    // Victory Screen Navigations
    document.getElementById("btn-victory-map").addEventListener("click", () => {
        Screens.show("screen-map");
    });

    document.getElementById("btn-victory-next").addEventListener("click", () => {
        const currentLvl = GameController.currentLevel;
        if (currentLvl === 9) {
            // Trigger Arena Dos Mestres Mode
            finalArena.startArena();
        } else {
            // Start next reino tabuada
            GameController.startLevel(currentLvl + 1);
        }
    });

    // Achievements Back to Map
    document.getElementById("btn-achievements-back").addEventListener("click", () => {
        Screens.show("screen-map");
    });

    // Settings listeners
    const btnSettingSound = document.getElementById("btn-settings-sound-toggle");
    btnSettingSound.innerText = State.data.soundEnabled ? "Som: Ativado 🔊" : "Som: Desativado 🔇";
    
    btnSettingSound.addEventListener("click", () => {
        const act = AudioPlayer.toggle();
        BackgroundMusic.setEnabled(act);
        State.data.soundEnabled = act;
        State.save();
        btnSettingSound.innerText = act ? "Som: Ativado 🔊" : "Som: Desativado 🔇";
        btnHUDsound.innerText = act ? "🔊 Som On" : "🔇 Som Off";
        AudioPlayer.playClick();
    });

    document.getElementById("btn-settings-reset").addEventListener("click", () => {
        if (confirm("Você quer mesmo ZERAR o seu progresso? Isso apagará todas as suas conquistas, moedas e medalhas!")) {
            State.reset();
            Screens.show("screen-start");
            showQuestToast("Progresso reiniciado com sucesso.");
        }
    });

    const DEV_CERTIFICATE_PASSWORD = "415263";
    const devPasswordModal = document.getElementById("dev-password-modal");
    const devPasswordInput = document.getElementById("dev-cert-password");
    const devPasswordError = document.getElementById("dev-password-error");
    const btnDevPasswordConfirm = document.getElementById("btn-dev-password-confirm");
    const btnDevPasswordCancel = document.getElementById("btn-dev-password-cancel");

    const showDevPasswordModal = () => {
        if (!devPasswordModal || !devPasswordInput || !devPasswordError) return;

        devPasswordInput.value = "";
        devPasswordError.textContent = "";
        devPasswordModal.classList.add("active");
        devPasswordModal.setAttribute("aria-hidden", "false");

        window.setTimeout(() => {
            devPasswordInput.focus();
        }, 50);
    };

    const hideDevPasswordModal = () => {
        if (!devPasswordModal || !devPasswordInput || !devPasswordError) return;

        devPasswordModal.classList.remove("active");
        devPasswordModal.setAttribute("aria-hidden", "true");
        devPasswordInput.value = "";
        devPasswordError.textContent = "";
    };

    const unlockCertificatePreview = () => {
        // Unlock completion state
        State.data.completedAll = true;
        State.data.playerName = State.data.playerName || "Aventureiro";
        State.data.characterSelected = State.data.characterSelected || "astronauta";
        [2,3,4,5,6,7,8,9].forEach(l => {
            if (!State.data.unlockedLevels.includes(l)) {
                State.data.unlockedLevels.push(l);
            }
            State.data.stars[l] = State.data.stars[l] || 3;
        });
        State.save();
        
        // Refresh screens
        Screens.renderStartScreen();
        Screens.renderMapScreen();
        
        // Render and show certificate
        document.getElementById("cert-display-name").innerText = State.data.playerName.toUpperCase();
        renderWatermark();
        renderHeroIdentity("cert-hero-portrait");
        Screens.show("screen-certificate");
    };

    const confirmDevPassword = () => {
        if (!devPasswordInput || !devPasswordError) return;

        if (devPasswordInput.value.trim() !== DEV_CERTIFICATE_PASSWORD) {
            devPasswordInput.value = "";
            devPasswordError.textContent = "Senha incorreta. Digite a senha correta para liberar o certificado.";
            devPasswordInput.focus();
            AudioPlayer.playError();
            return;
        }

        hideDevPasswordModal();
        unlockCertificatePreview();
    };

    document.getElementById("btn-settings-cheat-cert").addEventListener("click", () => {
        AudioPlayer.playClick();
        showDevPasswordModal();
    });

    if (btnDevPasswordConfirm) {
        btnDevPasswordConfirm.addEventListener("click", confirmDevPassword);
    }

    if (btnDevPasswordCancel) {
        btnDevPasswordCancel.addEventListener("click", hideDevPasswordModal);
    }

    if (devPasswordModal) {
        devPasswordModal.addEventListener("click", (event) => {
            if (event.target === devPasswordModal) {
                hideDevPasswordModal();
            }
        });
    }

    if (devPasswordInput) {
        devPasswordInput.addEventListener("input", () => {
            if (devPasswordError) {
                devPasswordError.textContent = "";
            }
        });

        devPasswordInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                confirmDevPassword();
            } else if (event.key === "Escape") {
                hideDevPasswordModal();
            }
        });
    }

    document.getElementById("btn-settings-close").addEventListener("click", () => {
        Screens.show(State.data.characterSelected ? "screen-map" : "screen-start");
    });

    // Click map nodes to initiate levels
    const mapNodes = document.querySelectorAll(".map-node");
    mapNodes.forEach(node => {
        node.addEventListener("click", () => {
            if (node.classList.contains("locked")) {
                AudioPlayer.playError();
                showQuestToast("Libere o reino anterior para abrir este portal.");
                return;
            }

            const levelVal = node.getAttribute("data-level");
            if (levelVal) {
                GameController.startLevel(parseInt(levelVal));
            } else if (node.id === "node-arena") {
                // Final Boss Mixed level
                finalArena.startArena();
            }
        });
    });

    // Customizer tabs controls
    const tabMedals = document.getElementById("tab-btn-medals");
    const tabItems = document.getElementById("tab-btn-items");
    const contentMedals = document.getElementById("tab-content-medals");
    const contentItems = document.getElementById("tab-content-items");

    tabMedals.addEventListener("click", () => {
        tabMedals.classList.add("active");
        tabItems.classList.remove("active");
        contentMedals.classList.add("active");
        contentItems.classList.remove("active");
        AudioPlayer.playClick();
    });

    tabItems.addEventListener("click", () => {
        tabItems.classList.add("active");
        tabMedals.classList.remove("active");
        contentItems.classList.add("active");
        contentMedals.classList.remove("active");
        AudioPlayer.playClick();
    });

    const openCertificateScreen = () => {
        AudioPlayer.playClick();
        document.getElementById("cert-display-name").innerText = State.data.playerName.toUpperCase();
        renderWatermark();
        renderHeroIdentity("cert-hero-portrait");
        Screens.show("screen-certificate");
    };


    const btnMapCert = document.getElementById("btn-map-certificate");
    if (btnMapCert) {
        btnMapCert.addEventListener("click", openCertificateScreen);
    }

    document.getElementById("btn-cert-print").addEventListener("click", () => {
        AudioPlayer.playClick();
        window.print();
    });

    document.getElementById("btn-cert-restart").addEventListener("click", () => {
        if (confirm("Quer iniciar uma nova jornada e apagar o progresso antigo para jogar novamente?")) {
            State.reset();
            Screens.show("screen-character");
        }
    });

    document.getElementById("btn-cert-map").addEventListener("click", () => {
        Screens.show("screen-achievements");
    });
});
