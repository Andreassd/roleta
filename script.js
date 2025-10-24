// =============================
// DADOS DO JOGO
// =============================
const PRIZES = [
  "Chaveiro da Qualidade",
  "Caneta Brinde",
  "Bombom 🍫",
  "Vale Café ☕",
  "Adesivo 9 Regras",
  "Crachá Temático",
  "Badge: Pense Diferente",
  "Surpresa 🎁"
];

const TOPICS = [
  {
    id: "qualidade",
    title: "Qualidade",
    desc: "Conceitos e cultura",
    questions: [
// 🏆 QUIZ – TEMA: QUALIDADE

{ q: "Qual é o principal objetivo da qualidade?", choices: ["Aumentar o volume de produção", "Garantir que o cliente receba um produto conforme e confiável", "Reduzir o tempo de montagem", "Evitar auditorias"], a: 1, explain: "O objetivo da qualidade é entregar produtos conformes, confiáveis e que satisfaçam o cliente." },
{ q: "A qualidade começa apenas na inspeção final.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — a qualidade começa em cada etapa do processo, não só na inspeção final." },

{ q: "O que significa 'fazer certo da primeira vez'?", choices: ["Corrigir o erro depois", "Fazer rápido", "Produzir conforme o padrão e evitar retrabalho", "Trabalhar sem verificar"], a: 2, explain: "Fazer certo da primeira vez é seguir o padrão e evitar retrabalho." },
{ q: "Qual ferramenta é usada para identificar as causas de um problema?", choices: ["PDCA", "Diagrama de Ishikawa (espinha de peixe)", "Poka Yoke", "5S"], a: 1, explain: "O diagrama de Ishikawa ajuda a visualizar causas e efeitos de um problema." },

{ q: "A palavra 'Qualidade' está mais ligada a:", choices: ["Aparência", "Conformidade com o padrão e satisfação do cliente", "Velocidade", "Sorte"], a: 1, explain: "Qualidade é atender padrões e satisfazer o cliente, não apenas aparência." },
{ q: "‘Não passar defeitos adiante’ é um princípio de qualidade.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — cada colaborador é responsável pelo que entrega." },

{ q: "O ciclo PDCA é usado para:", choices: ["Planejar, Fazer, Verificar e Agir na melhoria contínua", "Cortar custos", "Medir produtividade", "Criar produtos novos"], a: 0, explain: "O PDCA é usado para planejar, executar, verificar e agir na melhoria contínua." },
{ q: "O termo 'cliente interno' se refere a:", choices: ["O próximo posto ou colaborador que recebe o seu trabalho", "O cliente que compra o trator", "O fornecedor externo", "O gestor da área"], a: 0, explain: "Cliente interno é quem recebe o resultado do seu trabalho dentro da empresa." },

{ q: "Retrabalho é considerado sinal de qualidade.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — retrabalho é desperdício e deve ser evitado." },
{ q: "Qual dessas opções está relacionada à melhoria contínua?", choices: ["Fazer o mínimo possível", "Esperar o problema acontecer", "Buscar pequenas melhorias todos os dias", "Fazer tudo igual sempre"], a: 2, explain: "Melhoria contínua é fazer pequenas melhorias todos os dias." },

{ q: "‘Poka Yoke’ significa:", choices: ["Dispositivo à prova de erro", "Checklist de auditoria", "Plano de ação", "Tipo de retrabalho"], a: 0, explain: "Poka Yoke é um dispositivo ou método que evita erros durante o processo." },
{ q: "Padronização serve para deixar o trabalho engessado.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — a padronização garante consistência e qualidade nos processos." },

{ q: "Qual é o foco principal da ISO 9001?", choices: ["Reduzir custos", "Garantir qualidade nos processos e satisfação do cliente", "Melhorar a imagem da empresa", "Treinar auditores"], a: 1, explain: "A ISO 9001 foca na qualidade dos processos e na satisfação do cliente." },
{ q: "A inspeção de qualidade é responsabilidade apenas do setor de qualidade.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — todos os colaboradores são responsáveis pela qualidade." },

{ q: "O que significa o termo 'não conformidade'?", choices: ["Falta de peças", "Algo que está fora do padrão estabelecido", "Falta de tempo", "Atraso no processo"], a: 1, explain: "Não conformidade é quando algo está fora do padrão definido." },
{ q: "Qual dessas frases representa o espírito da qualidade?", choices: ["Tá bom assim mesmo", "Fazer certo da primeira vez", "Produzir mais e ver depois", "A culpa é do outro posto"], a: 1, explain: "‘Fazer certo da primeira vez’ resume o espírito da qualidade." },

{ q: "A qualidade é responsabilidade de todos dentro da empresa.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — todos devem contribuir para manter a qualidade." },
{ q: "Qual dessas ferramentas serve para organizar dados de defeitos em ordem de prioridade?", choices: ["Diagrama de Pareto", "5 Porquês", "Histograma", "Fluxograma"], a: 0, explain: "O diagrama de Pareto mostra os principais problemas e ajuda a priorizar ações." },

{ q: "Qualidade e segurança têm relação direta?", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — um ambiente seguro reduz erros e melhora a qualidade." },
{ q: "Qual é o maior inimigo da qualidade?", choices: ["Trabalho em equipe", "Treinamento", "Falta de atenção e padronização", "Comunicação"], a: 2, explain: "A falta de atenção e de padronização é um dos maiores inimigos da qualidade." }

    ]
  },
  {
    id: "ferramentas",
    title: "Sistemas de gestão da qualidade",
    desc: "Estruturas e métodos para garantir melhoria contínua e conformidade",
    questions: [
// Perguntas de múltipla escolha
{ q: "O que significa SGQ?", choices: ["Sistema de Gestão da Qualidade", "Serviço Geral de Quantidade", "Sistema Global de Quotas"], a: 0, explain: "SGQ quer dizer Sistema de Gestão da Qualidade." },
{ q: "Qual é o objetivo do SGQ?", choices: ["Melhorar os processos e a satisfação dos clientes", "Gerar mais papéis", "Deixar tudo mais difícil"], a: 0, explain: "O SGQ busca melhorar os processos e a satisfação dos clientes." },
{ q: "A ISO 9001 é uma norma sobre:", choices: ["Qualidade", "Segurança no trabalho", "Meio ambiente"], a: 0, explain: "A ISO 9001 é a norma internacional mais usada em gestão da qualidade." },
{ q: "O que representa o ciclo PDCA?", choices: ["Planejar, Fazer, Checar e Agir", "Pensar, Dizer, Calcular e Agir", "Planejar, Dormir, Comer e Acordar"], a: 0, explain: "PDCA significa Planejar, Fazer, Checar e Agir." },
{ q: "Quem é responsável pela qualidade?", choices: ["Somente o setor da qualidade", "Todos os colaboradores", "A diretoria apenas"], a: 1, explain: "A qualidade é responsabilidade de todos na empresa." },
{ q: "O foco principal do SGQ é:", choices: ["O cliente", "As máquinas", "As auditorias"], a: 0, explain: "O cliente é o foco principal do Sistema de Gestão da Qualidade." },
{ q: "O que é uma auditoria de qualidade?", choices: ["Uma verificação para ver se tudo está conforme o padrão", "Uma reunião com o chefe", "Uma festa para comemorar"], a: 0, explain: "A auditoria verifica se os processos estão sendo seguidos corretamente." },
{ q: "Quando acontece a melhoria contínua?", choices: ["Apenas uma vez por ano", "De forma constante", "Quando algo dá errado"], a: 1, explain: "A melhoria contínua é um processo constante." },
{ q: "A política da qualidade deve ser:", choices: ["Conhecida por todos", "Secreta", "Escrita em código"], a: 0, explain: "A política da qualidade deve ser conhecida e entendida por todos." },
{ q: "O que é uma não conformidade?", choices: ["Algo fora do padrão esperado", "Um elogio", "Um novo processo"], a: 0, explain: "Não conformidade é quando algo não segue o padrão definido." },
{ q: "O que o SGQ ajuda a evitar?", choices: ["Erros e retrabalhos", "Boas práticas", "Melhorias"], a: 0, explain: "O SGQ ajuda a evitar erros e retrabalhos nos processos." },
{ q: "Para que servem os indicadores de qualidade?", choices: ["Medir resultados e desempenho", "Enfeitar relatórios", "Substituir pessoas"], a: 0, explain: "Indicadores ajudam a medir o desempenho dos processos." },
{ q: "Qual desses é um exemplo de melhoria?", choices: ["Encontrar uma forma mais fácil de fazer uma tarefa", "Ignorar um problema", "Esperar o chefe resolver"], a: 0, explain: "Melhorar é buscar formas mais simples e eficientes de fazer as atividades." },

// Perguntas de verdadeiro ou falso
{ q: "A qualidade é responsabilidade de todos na empresa.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Todos colaboram para garantir a qualidade." },
{ q: "O cliente deve ser o foco principal do sistema de qualidade.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "O foco do SGQ é sempre o cliente." },
{ q: "Melhorar continuamente faz parte da qualidade.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "A melhoria contínua é um dos pilares do SGQ." },
{ q: "Auditoria é uma forma de verificar se o sistema está funcionando bem.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "A auditoria serve para avaliar e melhorar o sistema." },
{ q: "A ISO 9001 é uma norma sobre segurança do trabalho.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "A ISO 9001 é sobre gestão da qualidade, não segurança." },
{ q: "O SGQ ajuda a empresa a organizar melhor seus processos.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Organização e padronização são parte do SGQ." },
{ q: "A melhoria contínua acontece apenas quando há erros.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "A melhoria deve acontecer sempre, não só quando há erros." }
    ]
  },
  {
    id: "seguranca",
    title: "9 Regras de Ouro",
    desc: "Princípios essenciais de segurança e comportamento seguro",
    questions: [
// 🏆 QUIZ – AS 9 REGRAS DE OURO CNH INDUSTRIAL

{ q: "Antes de iniciar a produção, o que deve ser verificado?", choices: ["Se o café está pronto ☕", "Se ferramentas, material e SOP estão corretos", "Se a máquina está bonita", "Se o turno terminou"], a: 1, explain: "Antes de iniciar, é essencial garantir que ferramentas, material e instruções (SOP) estão corretos." },
{ q: "A frase 'Eu faço certo da primeira vez' fala sobre fazer com atenção e assertividade na primeira peça.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — significa realizar o trabalho com atenção e qualidade desde a primeira execução." },

{ q: "O que ajuda a evitar erros durante o processo?", choices: ["Deixar para revisar depois", "Usar Poka Yoke e validar o teste no início do turno", "Trabalhar mais rápido", "Ignorar as luzes de sinalização"], a: 1, explain: "Usar Poka Yoke e validar os testes evita erros e garante segurança no processo." },
{ q: "O objetivo do Poka Yoke é impedir que erros cheguem ao cliente.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — o Poka Yoke é um sistema à prova de erros para evitar falhas no produto." },

{ q: "Antes de assumir uma nova função temporária, o operador deve:", choices: ["Aprender na hora", "Ter treinamento e estar habilitado", "Fazer o que achar melhor", "Copiar o colega"], a: 1, explain: "O operador deve estar devidamente treinado e autorizado antes de assumir qualquer função." },
{ q: "Pessoas não autorizadas podem operar equipamentos simples.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — apenas pessoas com autorização e registro MTA podem operar equipamentos." },

{ q: "Quando o operador encontra uma peça com defeito, ele deve:", choices: ["Parar e verificar com a liderança imediata", "Passar para o próximo posto", "Guardar e fingir que não viu", "Colocar no fim da linha"], a: 0, explain: "Ao identificar um defeito, o operador deve parar e avisar a liderança imediatamente." },
{ q: "‘Não passar defeitos adiante’ significa praticar autocontrole.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — significa garantir que nenhum defeito siga para o próximo processo." },

{ q: "Ao encontrar uma não conformidade, o que o colaborador deve fazer?", choices: ["Comunicar à liderança imediatamente", "Tentar consertar sozinho", "Anotar em um papel e esquecer", "Esperar alguém descobrir"], a: 0, explain: "Toda não conformidade deve ser comunicada imediatamente à liderança." },
{ q: "Todo defeito encontrado deve ser comunicado ao cliente diretamente.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — a comunicação é feita à liderança e à gestão, não diretamente ao cliente." },

{ q: "O que fazer ao identificar um produto fora do padrão?", choices: ["Bloquear e identificar como não conforme (NC)", "Continuar o processo", "Deixar no canto para outro ver", "Vender no desconto 😂"], a: 0, explain: "Produtos fora do padrão devem ser bloqueados e identificados como não conformes." },
{ q: "Produtos NOK devem ser identificados com etiquetas vermelhas ou amarelas.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — a cor da etiqueta indica o status do produto não conforme." },

{ q: "Retrabalhos podem ser feitos sem aprovação se forem rápidos.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — todo retrabalho precisa de aprovação e rastreabilidade." },
{ q: "O retrabalho deve ser feito conforme:", choices: ["Ideia do operador", "SOP e instruções de retrabalho aprovadas", "Ordem do colega", "Palpite da liderança"], a: 1, explain: "Retrabalhos só podem ser realizados conforme instruções e procedimentos aprovados (SOP)." },

{ q: "O que significa ser o 'último posto'?", choices: ["Que acabou o turno", "Que é a última chance de garantir que a peça está 100%", "Que o produto será trocado", "Que pode liberar tudo sem olhar"], a: 1, explain: "Ser o último posto é garantir que a peça está 100% antes de seguir ao próximo cliente." },
{ q: "O 'Quality Gate' serve para inspecionar 100% das peças antes do embarque.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — o Quality Gate garante que somente produtos conformes sejam enviados." },

{ q: "A 9ª regra fala sobre:", choices: ["Melhoria contínua e eliminação das causas raiz", "Entregar rápido", "Fazer o mínimo possível", "Repetir sempre o mesmo processo"], a: 0, explain: "A 9ª regra incentiva a melhoria contínua e a busca das causas raiz dos problemas." },
{ q: "O método Kaizen é usado para buscar a causa raiz e evitar recorrência de problemas.", choices: ["Verdadeiro", "Falso"], a: 0, explain: "Verdadeiro — Kaizen é uma filosofia de melhoria contínua." },

{ q: "Qual dessas frases representa o espírito das 9 Regras de Ouro?", choices: ["Depois a gente vê", "Faz do seu jeito", "Qualidade começa comigo", "Quanto mais rápido, melhor"], a: 2, explain: "‘Qualidade começa comigo’ reflete o compromisso individual com as 9 Regras." },
{ q: "Seguir as 9 Regras de Ouro é responsabilidade apenas da liderança.", choices: ["Verdadeiro", "Falso"], a: 1, explain: "Falso — as 9 Regras de Ouro são dever de todos os colaboradores." }

    ]
  }
];

// =============================
// ESTADO
// =============================
let state = {
  screen: "start",
  spinning: false,
  angle: 0,
  startAngle: 0,
  targetAngle: 0,
  startTime: 0,
  duration: 4500,
  landedIndex: null,
  topicId: null,
  raf: 0,
  lastTickIndex: null // NOVO
};

// =============================
// ÁUDIO
// =============================
const sfxRoleta = () => document.getElementById("sfxRoleta");
const sfxCerto  = () => document.getElementById("sfxCerto");
const sfxErrado = () => document.getElementById("sfxErrado");

function playRoleta(){
  const a = sfxRoleta();
  try{
    a.currentTime = 0;
    a.loop = false;
    a.play();
  }catch(e){}
}
function stopRoleta(){
  const a = sfxRoleta();
  a.pause();
  a.currentTime = 0;
}

function playTick(){
  const a = sfxRoleta();
  if (!a) return;
  try { a.currentTime = 0; a.play(); } catch(e){}
}

// =============================
// HELPERS
// =============================
function byId(id){ return document.getElementById(id); }

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = byId(id);
  if (el) el.classList.add("active");
  state.screen = id.replace("screen-","");
}

function normAngle(rad){
  return ((rad % (2*Math.PI)) + 2*Math.PI) % (2*Math.PI);
}
function getPointerSegment(angleRad){
  const n = PRIZES.length;
  const arc = (2*Math.PI)/n;
  const pointerAngle = Math.PI * 1.5;
  const norm = ((angleRad % (2*Math.PI)) + 2*Math.PI) % (2*Math.PI);
  const rel = (pointerAngle - norm + 2*Math.PI) % (2*Math.PI);
  return Math.floor(rel / arc);
}

// =============================
// CANVAS / ROLETA
// =============================
const colors = ["#1b3b5a","#c7511e","#214b73","#d7662a","#265a8c","#e77a38","#2c69a5","#f58b45","#3279be","#bc2b0c","#ffb066"];
function drawWheel(angle=0){
  const c = byId("wheelCanvas");
  if (!c) return;
  const ctx = c.getContext("2d");
  const w = c.width, h = c.height;
  const cx = w/2, cy = h/2;
  const r = Math.min(w,h)/2 - 8;

  ctx.clearRect(0,0,w,h);
  const n = PRIZES.length;
  const arc = (2*Math.PI) / n;

  for(let i=0;i<n;i++){
    const start = angle + i*arc;
    const end = start + arc;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,start,end,false);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(start + arc/2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "16px Inter, Arial";
    ctx.fillText(PRIZES[i], r-12, 6);
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(cx,cy,36,0,Math.PI*2);
  ctx.fillStyle = "#0b1e2e";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx,cy,8,0,Math.PI*2);
  ctx.fillStyle = "#E99F26";
  ctx.fill();
}

function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

function updatePrizeList(){
  const ul = byId("prizeList");
  ul.innerHTML = "";
  PRIZES.forEach((p,i)=>{
    const li = document.createElement("li");
    li.textContent = p;
    li.dataset.index = i;
    ul.appendChild(li);
  });
}

function highlightWin(){
  document.querySelectorAll("#prizeList li").forEach(li=>li.classList.remove("win"));
  if (state.landedIndex != null){
    const li = document.querySelector(`#prizeList li[data-index='${state.landedIndex}']`);
    if (li) li.classList.add("win");
  }
}

function spinWheel(){
  if (state.spinning) return;
  state.spinning = true;
  state.landedIndex = null;
  byId("btnAnswer").disabled = true;
  byId("btnSpin").disabled = true; // Desabilita o botão girar após o primeiro giro

  const n = PRIZES.length;
  const arc = (2*Math.PI)/n;
  const prizeIndex = Math.floor(Math.random()*n);

  state.startAngle = (state.angle % (2*Math.PI) + 2*Math.PI) % (2*Math.PI);
  const fullTurns = 6 + Math.floor(Math.random()*4);
  const pointerAngle = Math.PI * 1.5;
  const segmentCenter = prizeIndex * arc + arc/2;
  state.targetAngle = state.startAngle + fullTurns*2*Math.PI + (pointerAngle - segmentCenter);

  state.lastTickIndex = getPointerSegment(state.startAngle);

  const start = performance.now();
  state.startTime = start;

  cancelAnimationFrame(state.raf);
  const step = (now)=>{
    const t = Math.min(1, (now - start)/state.duration);
    const eased = easeOutCubic(t);
    state.angle = state.startAngle + (state.targetAngle - state.startAngle) * eased;
    drawWheel(state.angle);

    const currIdx = getPointerSegment(state.angle);
    if (currIdx !== state.lastTickIndex){
      // Removido playTick() para evitar som durante a animação
      state.lastTickIndex = currIdx;
    }

    if (t < 1){
      state.raf = requestAnimationFrame(step);
    } else {
      playRoleta(); // Toca o som apenas quando a roleta parar
      state.spinning = false;
      // Usar o índice real da seta ao invés do prizeIndex calculado
      state.landedIndex = getPointerSegment(state.angle);
      byId("btnAnswer").disabled = false;
      highlightWin();
    }
  };
  state.raf = requestAnimationFrame(step);
}

function resetRound(){
  cancelAnimationFrame(state.raf);
  state.spinning = false;
  state.landedIndex = null;
  state.lastTickIndex = null;
  byId("btnAnswer").disabled = true;
  byId("btnSpin").disabled = false; // Reabilita o botão girar ao resetar
  state.angle = 0;
  drawWheel(0);
  highlightWin();
  stopRoleta();
}

let currentQuestionObj = null;
let selectedAnswerIndex = null;

function openQuestionModal(){
  if (state.spinning){ alert("Aguarde terminar o giro."); return; }
  if (state.landedIndex===null){ alert("Gire a roleta primeiro."); return; }
  const topic = TOPICS.find(t=>t.id===state.topicId);
  if (!topic || !topic.questions.length){ alert("Sem perguntas neste tema."); return; }

  currentQuestionObj = topic.questions[Math.floor(Math.random()*topic.questions.length)];
  byId("modalTopic").textContent = "Tema: " + topic.title;
  byId("modalQuestionText").textContent = currentQuestionObj.q;
  const box = byId("choicesContainer");
  box.innerHTML = "";
  selectedAnswerIndex = null;
  byId("btnSubmitAnswer").disabled = true;

  currentQuestionObj.choices.forEach((c,i)=>{
    const d = document.createElement("div");
    d.className = "choice";
    d.textContent = `${String.fromCharCode(65+i)}. ${c}`;
    d.onclick = ()=>{
      document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));
      d.classList.add("selected");
      selectedAnswerIndex = i;
      byId("btnSubmitAnswer").disabled = false;
    };
    box.appendChild(d);
  });

  byId("modalQuestion").setAttribute("aria-hidden","false");
}

function closeQuestionModal(){
  byId("modalQuestion").setAttribute("aria-hidden","true");
  resetRound(); // Reset da roleta quando cancelar pergunta
}

function showResult(correct, explain){
  const prize = (state.landedIndex!=null) ? PRIZES[state.landedIndex] : "—";
  const el = byId("resultBox");
  el.className = "result " + (correct? "correct":"wrong");

  if (correct){
    el.innerHTML = `<h3>✅ Resposta certa</h3>
      <p class="muted">${explain || ""}</p>
      <p style="margin-top:8px"><strong>Prêmio sorteado:</strong> ${prize}</p>`;
  } else {
    el.innerHTML = `<h3>❌ Resposta errada</h3>
      <p class="muted">${explain || ""}</p>
      <p style="margin-top:8px"><strong>Não foi dessa vez.</strong></p>`;
  }

  byId("modalResult").setAttribute("aria-hidden","false");
}

function onConfirmAnswer(){
  if (selectedAnswerIndex==null || !currentQuestionObj) return;
  
  // Preservar o landedIndex antes de fechar o modal
  const savedLandedIndex = state.landedIndex;
  
  closeQuestionModal();
  const correct = selectedAnswerIndex === currentQuestionObj.a;

  try{
    if (correct) sfxCerto().play();
    else sfxErrado().play();
  }catch(e){}

  // Restaurar o landedIndex para mostrar o prêmio correto
  state.landedIndex = savedLandedIndex;
  showResult(correct, currentQuestionObj.explain);
}

function closeResult(){
  byId("modalResult").setAttribute("aria-hidden","true");
  resetRound();
  byId("btnSpin").disabled = false; // Reabilita o botão girar após responder pergunta
}

function buildTopics(){
  const grid = byId("topicsList");
  grid.innerHTML = "";
  TOPICS.forEach(t=>{
    const card = document.createElement("div");
    card.className = "topic-card";
    card.innerHTML = `<h4>${t.title}</h4><p>${t.desc}</p>`;
    card.onclick = ()=>{
      state.topicId = t.id;
      byId("currentTopic").textContent = t.title;
      showScreen("screen-wheel");
      resetRound();
    };
    grid.appendChild(card);
  });
}

function initBindings(){
  const goPlay = ()=> showScreen("screen-topics");
  const btnJogar = byId("btnJogar");
  if (btnJogar) btnJogar.addEventListener("click", goPlay);

  byId("btnBackToStart").addEventListener("click", ()=> showScreen("screen-start"));
  byId("btnSpin").addEventListener("click", spinWheel);
  byId("btnReset").addEventListener("click", resetRound);
  byId("btnAnswer").addEventListener("click", openQuestionModal);
  byId("btnCancelModal").addEventListener("click", closeQuestionModal);
  byId("btnSubmitAnswer").addEventListener("click", onConfirmAnswer);
  byId("btnBackToWheel").addEventListener("click", closeResult);
  byId("btnBackToHome").addEventListener("click", ()=> showScreen("screen-start"));
}

function init(){
  buildTopics();
  updatePrizeList();
  drawWheel(0);
  initBindings();
}

document.addEventListener("DOMContentLoaded", init);
