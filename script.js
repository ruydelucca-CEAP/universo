document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------------------------
    // ** DADOS E LÓGICA PARA PÁGINA DE PLANETAS **
    // ------------------------------------------------------------------------

    const planetButtons = document.querySelectorAll('.planeta-btn');
    const infoPlanetaDiv = document.getElementById('info-planeta');

    const planetasData = {
        'mercurio': {
            nome: "MERCÚRIO",
            texto: "MERCÚRIO é o planeta mais próximo do Sol... (Texto omitido para brevidade)",
            corDestaque: '#e5e5e5' 
        },
        'venus': {
            nome: "VÊNUS",
            texto: "VÊNUS é o planeta que rege o Amor, a Beleza... (Texto omitido para brevidade)",
            corDestaque: '#ffcc00' 
        },
        'marte': {
            nome: "MARTE",
            texto: "Marte é o quarto planeta do Sistema Solar... (Texto omitido para brevidade)",
            corDestaque: '#ff4000ff' 
        },
        'jupiter': {
            nome: "JÚPITER",
            texto: "Júpiter é o maior planeta do Sistema Solar... (Texto omitido para brevidade)",
            corDestaque: '#ff9728ff' 
        },
        'saturno': {
            nome: "SATURNO",
            texto: "Saturno é o sexto planeta do sistema solar... (Texto omitido para brevidade)",
            corDestaque: '#ffb668ff' 
        },
        'urano': {
            nome: "URANO",
            texto: "Urano é o sétimo planeta a partir do Sol... (Texto omitido para brevidade)",
            corDestaque: '#68e8ffff' 
        },
        'netuno': {
            nome: "NETUNO",
            texto: "Netuno é o oitavo e último planeta do Sistema Solar... (Texto omitido para brevidade)",
            corDestaque: '#005effff' 
        },
        'terra': {
            nome: "TERRA",
            texto: "A Terra é o terceiro planeta do Sistema Solar... (Texto omitido para brevidade)",
            corDestaque: '#005effff' 
        },
    };

    if (planetButtons.length > 0) {
        applyEventListeners(planetButtons, infoPlanetaDiv, planetasData, false);
    }

    // ------------------------------------------------------------------------
    // ** DADOS E LÓGICA PARA NOVA PÁGINA DE CONSTELAÇÕES **
    // ------------------------------------------------------------------------

    const constelacaoButtons = document.querySelectorAll('.constelacao-btn');
    const infoConstelacaoDiv = document.getElementById('info-constelacao');

    // ** DADOS VISUAIS PARA A ANIMAÇÃO DAS CONSTELAÇÕES **
    // positions: [x, y] coordenadas em porcentagem (0-100) dentro da caixa de animação.
    // lines: [starIndexInicial, starIndexFinal] para traçar as linhas.
    const constelacoesData = {
        'ursamaior': {
            nome: "URSA MAIOR (Ursa Major)",
            texto: "Famosa no Hemisfério Norte, seu asterismo 'Grande Carro' é usado para navegação. É uma das 88 constelações modernas.",
            positions: [[10, 80], [30, 80], [50, 70], [70, 70], [90, 60], [80, 40], [60, 50]],
            lines: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6]],
        },
        'cruzeirodosul': {
            nome: "CRUZEIRO DO SUL (Crux)",
            texto: "A menor, mas uma das mais famosas constelações. Vital para a navegação austral. Tem a forma de uma cruz.",
            positions: [[50, 10], [50, 90], [20, 50], [80, 50], [40, 60]],
            lines: [[0, 1], [2, 3], [1, 4]],
        },
        'orion': {
            nome: "ÓRION",
            texto: "O 'Caçador'. Famosa pelas 'Três Marias' (Cinturão de Órion) e pela Nebulosa de Órion. Visível em quase todo o mundo.",
            positions: [[30, 10], [70, 10], [10, 50], [90, 50], [30, 80], [70, 80], [50, 50], [40, 60], [60, 60]],
            lines: [[0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [7, 8]], // Cinturão: 7, 8 (as de baixo)
        },
        'virgem': {
            nome: "VIRGEM (Virgo)",
            texto: "Uma constelação do Zodíaco e uma das maiores. Sua estrela mais brilhante é Spica.",
            positions: [[20, 20], [80, 30], [50, 50], [90, 80], [10, 60]],
            lines: [[0, 1], [1, 2], [2, 3], [2, 4]],
        },
        'hidra': {
            nome: "HIDRA (Hydra)",
            texto: "A maior constelação em área no céu, representa a serpente marinha. Possui apenas uma estrela brilhante, Alphard.",
            positions: [[10, 10], [30, 20], [50, 30], [70, 40], [90, 50], [70, 60], [50, 70], [30, 80], [10, 90]],
            lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]],
        },
        'aries': {
            nome: "ÁRIES (Aries)",
            texto: "O 'Carneiro'. Uma das constelações do Zodíaco que marca o início do equinócio da primavera no passado.",
            positions: [[20, 40], [80, 20], [50, 60], [70, 80]],
            lines: [[0, 1], [0, 2], [2, 3]],
        },
        'gemeos': {
            nome: "GÊMEOS (Gemini)",
            texto: "Representa os irmãos Castor e Pólux (suas estrelas mais brilhantes). Uma constelação zodiacal.",
            positions: [[20, 10], [30, 40], [40, 60], [50, 90], [80, 10], [70, 40], [60, 60], [50, 90]],
            lines: [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [6, 7]],
        },
        'escorpiao': {
            nome: "ESCORPIÃO (Scorpio)",
            texto: "Notável por Antares (sua estrela mais brilhante), tem uma forma de anzol muito reconhecível.",
            positions: [[50, 10], [30, 20], [10, 40], [30, 60], [50, 80], [70, 90], [90, 70]],
            lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
        },
        'aquario': {
            nome: "AQUÁRIO (Aquarius)",
            texto: "O 'Portador de Água'. Uma constelação zodiacal de grande extensão e rica em chuvas de meteoros.",
            positions: [[20, 20], [40, 40], [60, 60], [80, 80], [50, 20], [70, 40]],
            lines: [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5]],
        },
        'andromeda': {
            nome: "ANDRÔMEDA",
            texto: "Famosa por abrigar a Galáxia de Andrômeda (M31), o objeto mais distante visível a olho nu.",
            positions: [[10, 10], [30, 30], [50, 50], [70, 30], [90, 10], [50, 70]],
            lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5]],
        },
        'centauro': {
            nome: "CENTAURO (Centaurus)",
            texto: "Grande constelação do sul que contém a estrela mais próxima do Sol, Proxima Centauri, e Omega Centauri.",
            positions: [[20, 20], [80, 20], [90, 50], [50, 80], [10, 50], [40, 40]],
            lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [5, 3]],
        },
        'lyra': {
            nome: "LYRA",
            texto: "A 'Lira'. Uma constelação pequena, mas famosa por sua estrela principal, Vega, que faz parte do Triângulo de Verão.",
            positions: [[50, 10], [30, 50], [70, 50], [40, 80], [60, 80]],
            lines: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4]],
        }
    };

    if (constelacaoButtons.length > 0) {
        applyEventListeners(constelacaoButtons, infoConstelacaoDiv, constelacoesData, true);
    }
});


/**
 * Função para calcular a distância e o ângulo entre dois pontos (estrelas)
 */
function getLineProperties(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy); // Distância (em pixels, mas funciona com %)
    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Ângulo em graus
    return { length, angle };
}

/**
 * Função genérica para aplicar listeners de clique
 * @param {NodeList} buttons - Os botões (planetas ou constelações)
 * @param {HTMLElement} infoDiv - A div de informação (info-planeta ou info-constelacao)
 * @param {Object} dataMap - O dicionário de dados (planetasData ou constelacoesData)
 * @param {boolean} isConstellation - Define se deve aplicar a lógica de animação de constelação
 */
function applyEventListeners(buttons, infoDiv, dataMap, isConstellation) {
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const itemClicado = this.getAttribute('data-planeta') || this.getAttribute('data-constelacao');
            const data = dataMap[itemClicado];

            if (data) {
                // 1. Remove a classe de animação para resetar
                infoDiv.classList.remove('aparecer');

                // Adiciona um pequeno atraso antes de atualizar e re-aplicar a animação
                setTimeout(() => {
                    let content = `
                        <h3>${data.nome}</h3>
                        <div class="constelacao-detalhes">
                            <div class="texto-info">
                                <p>${data.texto.replace(/\n/g, '<br>')}</p>
                            </div>
                    `;

                    if (isConstellation) {
                        // 2. Cria a área da animação para constelações
                        content += `
                            <div class="animacao-area">
                                <div id="constellation-animation-container"></div>
                            </div>
                        </div> `;
                    } else {
                        content += `</div>`; // Fechar a div se for planeta
                    }
                    
                    // 3. Atualiza o conteúdo da div
                    infoDiv.innerHTML = content;
                    
                    // 4. Se for constelação, dispara a função de animação
                    if (isConstellation) {
                        drawConstellation(itemClicado, data.positions, data.lines);
                    }
                    
                    // 5. Adiciona a classe para fazer o texto aparecer suavemente
                    infoDiv.classList.add('aparecer');
                    
                }, 10);
            }
        });

        // 6. Adiciona a animação de clique
        button.addEventListener('mousedown', function() {
            this.style.transform = isConstellation ? 'scale(0.98)' : 'scale(0.95)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = isConstellation ? 'scale(1.05)' : 'scale(1.1) rotate(0deg)'; 
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = ''; 
        });
    });
}

/**
 * Função que desenha a constelação e a animação de laser
 * @param {string} id - ID da constelação
 * @param {Array<Array<number>>} positions - Lista de [x, y] de cada estrela (0-100)
 * @param {Array<Array<number>>} lines - Lista de [indexInicial, indexFinal] das linhas
 */
function drawConstellation(id, positions, lines) {
    const container = document.getElementById('constellation-animation-container');
    if (!container) return;

    const stars = [];

    // 1. Cria as estrelas (pontos)
    positions.forEach((pos, index) => {
        const star = document.createElement('div');
        star.className = 'star';
        // Posicionamento absoluto dentro da área de animação
        star.style.left = `${pos[0]}%`;
        star.style.top = `${pos[1]}%`;
        // Ajuste para centralizar o ponto na posição
        star.style.transform = 'translate(-50%, -50%)'; 
        star.style.animationDelay = `${index * 0.1}s`; // Faz as estrelas aparecerem em sequência
        container.appendChild(star);
        stars.push(star);
    });

    // 2. Cria as linhas (o "laser")
    lines.forEach((lineIndices, lineIndex) => {
        const startStarIndex = lineIndices[0];
        const endStarIndex = lineIndices[1];

        const startPos = positions[startStarIndex];
        const endPos = positions[endStarIndex];

        // 3. Obtém as propriedades de geometria
        const { length, angle } = getLineProperties(startPos[0], startPos[1], endPos[0], endPos[1]);
        
        const line = document.createElement('div');
        line.className = 'constelacao-linha';

        // 4. Posiciona e Rotaciona a linha
        line.style.left = `${startPos[0]}%`;
        line.style.top = `${startPos[1]}%`;
        line.style.width = `${length}%`;
        line.style.transform = `rotate(${angle}deg)`;
        
        // 5. Define o atraso da animação (espera as estrelas aparecerem)
        const starDelay = Math.max(startStarIndex, endStarIndex) * 0.1;
        line.style.animationDelay = `${starDelay + (lineIndex * 0.3)}s`;
        
        container.appendChild(line);
    });
}