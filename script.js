/* --- DADOS COMPLETOS (SEED DATA) --- */
const seedData = [
    // 1. CLÍNICA MÉDICA
    {
        id: 'area_clin', name: 'Clínica Médica', color: '#36B37E',
        categories: [
            { 
                name: 'Cardiologia', 
                topics: [
                    'Cardiomiopatias', 'Dislipidemia', 'Distúrbios do Ritmo', 'Doença Arterial Coronariana', 
                    'Doenças do Pericárdio', 'Hipertensão Arterial Sistêmica', 'Insuficiência Cardíaca', 
                    { name: 'Síndromes Coronarianas', children: ['Síndrome Coronariana Aguda', 'Síndrome Coronariana Crônica'] },
                    'Valvopatias'
                ] 
            },
            { 
                name: 'Hepatologia', 
                topics: [
                    'Aspectos Anatômicos e Fisiológicos', 'Cirrose', 'Hepatites Virais', 'Insuficiência Hepática',
                    { name: 'Outras Hepatopatias', children: ['Colangite Biliar Primária', 'Doença de Wilson', 'Hemocromatose', 'Hepatite Autoimune', 'Hepatite Alcoólica'] },
                    { name: 'Tumores Hepáticos', children: ['Abscesso Hepático', 'Carcinoma Hepatocelular', 'Tumores Benignos'] }
                ] 
            },
            { 
                name: 'Infectologia', 
                topics: [
                    'Antibioticoterapia', 'Arboviroses', 'Hanseníase', 'Herpes', 'HIV e Aids', 'Infecção do Trato Urinário',
                    'Infecções de Pele e Partes Moles', 'Infecções de Vias Aéreas Superiores', 'Infecções do Sistema Nervoso Central',
                    'Infecções Fúngicas', 'Infecções Respiratórias', 'Parasitoses', 
                    { name: 'Sepse', children: ['Sepse', 'Choque Séptico'] },
                    'Síndromes Febris', 'Tuberculose', 'Úlceras Genitais'
                ] 
            },
            { 
                name: 'Nefrologia', 
                topics: [
                    'Distúrbios Hidroeletrolíticos', 'Distúrbios Ácido-Base', 'Doença Renal Crônica', 'Doenças Tubulointersticiais',
                    { name: 'Glomerulopatias', children: ['Síndrome Nefrítica', 'Síndrome Nefrótica', 'GNPE', 'Nefrite Lúpica', 'Nefropatia por IgA', 'GESF', 'Membranosa'] },
                    'Hematúria', 'Insuficiência Renal (IRA)', 'Nefroesclerose Hipertensiva', 'Transplante Renal', 'Urinálise'
                ] 
            },
            { 
                name: 'Neurologia', 
                topics: [
                    'AVC', 
                    { name: 'Cefaleias', children: ['Migrânea', 'Cefaleias Trigêmino-Autonômicas'] },
                    { name: 'Doenças Neuromusculares', children: ['Miastenia Gravis', 'Guillain-Barré'] },
                    'Epilepsia e Crises Epilépticas',
                    { name: 'Síndromes Demenciais', children: ['Alzheimer', 'Demência Vascular', 'Lewy'] },
                    { name: 'Transtornos do Movimento', children: ['Parkinson', 'Tremor Essencial', 'Distonia'] }
                ] 
            },
            { 
                name: 'Pneumologia', 
                topics: [
                    'Apneia Obstrutiva do Sono', 'Asma', 'Derrame Pleural', 'DPOC', 'Doenças Pulmonares Intersticiais',
                    'Hipertensão Pulmonar', 'Hipoxemia', 'SDRA', 'Tabagismo', 'Tosse Crônica', 'Tromboembolismo Pulmonar', 'Ventilação Mecânica'
                ] 
            },
            { 
                name: 'Psiquiatria', 
                topics: [
                    'Esquizofrenia', 
                    { name: 'Psicofarmacologia', children: ['Antidepressivos', 'Ansiolíticos', 'Antipsicóticos', 'Estabilizadores de Humor'] },
                    'Transtorno por Abuso de Substâncias', 'Transtornos Alimentares', 'Transtornos de Personalidade',
                    { name: 'Transtornos do Humor', children: ['Depressão', 'Transtorno Afetivo Bipolar'] },
                    'Transtornos de Ansiedade'
                ] 
            },
            { 
                name: 'Reumatologia', 
                topics: [
                    { name: 'Artropatias', children: ['Artrite Reumatoide', 'Artrite Psoriásica', 'Espondiloartrites', 'Gota', 'Osteoartrite'] },
                    'Doença de Sjögren', 'Esclerose Sistêmica', 'Fibromialgia', 'Lúpus Eritematoso Sistêmico', 'Miopatias',
                    { name: 'Vasculites', children: ['Poliarterite Nodosa', 'Wegener', 'Behçet', 'Arterite de Takayasu'] }
                ] 
            },
            { name: 'Endocrinologia', topics: ['Diabetes Mellitus', 'Adrenal', 'Tireoide', 'Obesidade', 'Paratireoide'] },
            { name: 'Gastroenterologia', topics: ['Disfagia', 'Dispepsia', 'DII', 'Síndrome do Intestino Irritável'] },
            { name: 'Hematologia', topics: ['Anemias', 'Hemostasia', 'Oncohematologia', 'Reações Transfusionais'] }
        ]
    },

    // 2. CLÍNICA CIRÚRGICA
    {
        id: 'area_cir', name: 'Clínica Cirúrgica', color: '#00B8D9',
        categories: [
            { 
                name: 'Abdome Agudo', 
                topics: [
                    { name: 'Inflamatório', children: ['Apendicite', 'Diverticulite', 'Pancreatite Aguda', 'Colecistite'] },
                    'Abdome Agudo Obstrutivo', 'Abdome Agudo Perfurativo', 'Abdome Agudo Vascular'
                ] 
            },
            { 
                name: 'Cirurgia do Aparelho Digestivo', 
                topics: [
                    'Cirurgia Bariátrica', 
                    { name: 'Cólon', children: ['Câncer Colorretal'] },
                    { name: 'Vias Biliares', children: ['Colelitíase', 'Coledocolitíase', 'Colangite', 'Tumores de Via Biliar'] },
                    { name: 'Estômago', children: ['Câncer Gástrico', 'Úlcera Péptica', 'H. pylori'] },
                    { name: 'Esôfago', children: ['DRGE', 'Câncer de Esôfago', 'Acalasia', 'Barrett'] },
                    'Hemorragia Digestiva', 
                    { name: 'Pâncreas', children: ['Tumores de Pâncreas'] }
                ] 
            },
            { 
                name: 'Trauma', 
                topics: [
                    'ATLS (Avaliação Inicial)', 'Queimaduras', 'Trauma Abdominal e Pélvico', 'Trauma Cervical', 
                    'Trauma Torácico', 'Trauma Cranioencefálico (TCE)', 'Trauma na Criança'
                ] 
            },
            { name: 'Cirurgia Geral', topics: [{ name: 'Hérnias', children: ['Inguinais', 'Crurais', 'Incisionais', 'Umbilicais'] }] },
            { name: 'Anestesiologia', topics: ['Anestesia Geral', 'Neuroaxial', 'Avaliação Pré-Operatória', 'Via Aérea'] },
            { 
                name: 'Urologia', 
                topics: [
                    'Nefrolitíase', 'HPB', 
                    { name: 'Neoplasias Urológicas', children: ['Câncer de Próstata', 'Câncer de Bexiga', 'Câncer Renal', 'Câncer de Testículo'] },
                    'Urgências Urológicas'
                ] 
            },
            { name: 'Cirurgia Vascular', topics: ['Aneurismas de Aorta', 'Dissecção de Aorta', 'DAOP', 'Insuficiência Venosa', 'Oclusão Arterial Aguda'] },
            { 
                name: 'Ortopedia', 
                topics: [
                    'Fraturas e Luxações', 'Coluna Vertebral', 'Infecções Osteoarticulares', 
                    { name: 'Ortopedia Pediátrica', children: ['Displasia de Quadril', 'Epifisiólise'] },
                    'Tumores Ósseos'
                ] 
            },
            { 
                name: 'Cirurgia Pediátrica', 
                topics: [
                    'Estenose Hipertrófica do Piloro', 'Invaginação Intestinal', 'Megacólon Congênito', 
                    'Gastrosquise e Onfalocele', 'Malformações Anorretais'
                ] 
            },
            { name: 'Coloproctologia', topics: ['Câncer Anal', 'Hemorroidas', 'Fissura Anal', 'Abscesso e Fístula'] }
        ]
    },

    // 3. GINECOLOGIA E OBSTETRÍCIA
    {
        id: 'area_go', name: 'Ginecologia e Obstetrícia', color: '#FF5630',
        categories: [
            { 
                name: 'Ginecologia', 
                topics: [
                    'Amenorreia', 'Câncer de Colo de Útero', 'Disfunção Sexual Feminina', 'Doença Inflamatória Pélvica (DIP)',
                    'Ginecologia Endócrina', 'Câncer de Endométrio', 'Mastologia (Benigna e Maligna)', 
                    'Patologias Anexiais (Ovário)', 'Sangramento Uterino Anormal', 'Incontinência Urinária', 'Vulvovaginites'
                ] 
            },
            { 
                name: 'Obstetrícia', 
                topics: [
                    'Modificações Fisiológicas da Gestação', 'Assistência Pré-Natal', 'Diabetes Gestacional', 'DHEG (Pré-Eclâmpsia)',
                    'Gestação Gemelar', 'Infecções na Gestação', 'Trabalho de Parto Prematuro', 'Parto (Mecanismo e Assistência)',
                    'Puerpério', 'Ruptura Prematura de Membranas', 'Sofrimento Fetal e RCIU',
                    { name: 'Sangramentos', children: ['1ª Metade (Aborto, Mola)', '2ª Metade (DPP, Placenta Prévia)'] }
                ] 
            }
        ]
    },

    // 4. PEDIATRIA
    {
        id: 'area_ped', name: 'Pediatria', color: '#FFAB00',
        categories: [
            { 
                name: 'Neonatologia', 
                topics: [
                    'Reanimação Neonatal', 'Exame Físico do RN', 'Icterícia Neonatal', 'Distúrbios Respiratórios', 
                    'Sepse Neonatal', 'Triagem Neonatal (Testes)', 'Distúrbios Metabólicos'
                ] 
            },
            { 
                name: 'Infectologia', 
                topics: [
                    { name: 'Doenças Exantemáticas', children: ['Sarampo', 'Varicela', 'Rubéola', 'Eritema Infeccioso', 'Exantema Súbito', 'Escarlatina'] },
                    'IVAS (Otite, Sinusite)', 'Infecções Respiratórias (Pneumonia, Bronquiolite)', 
                    'Coqueluche', 'Meningites', 'Tuberculose na Criança'
                ] 
            },
            { 
                name: 'Gastroenterologia', 
                topics: ['Diarreia Aguda e Desidratação', 'Constipação', 'DRGE', 'Alergia Alimentar'] 
            },
            { name: 'Nefrologia', topics: ['Infecção Urinária (ITU)', 'Síndrome Nefrótica', 'Síndrome Nefrítica'] },
            { name: 'Puericultura', topics: ['Crescimento', 'Desenvolvimento Neuropsicomotor', 'Aleitamento Materno', 'Vacinação (PNI)'] },
            { name: 'Emergências', topics: ['PALS', 'Anafilaxia', 'Convulsão Febril', 'Cetoacidose Diabética'] },
            { name: 'Reumatologia', topics: ['Febre Reumática', 'Kawasaki', 'Artrite Idiopática Juvenil'] },
            { name: 'Cardiologia', topics: ['Cardiopatias Congênitas (Cianóticas e Acianóticas)', 'HAS na Criança'] }
        ]
    },

    // 5. PREVENTIVA E SOCIAL
    {
        id: 'area_prev', name: 'Preventiva & Social', color: '#6C5DD3',
        categories: [
            { 
                name: 'Atenção Primária', 
                topics: [
                    'Abordagem Familiar e Comunitária', 'Atributos da APS', 'Método Clínico Centrado na Pessoa', 
                    'PNAB (Política Nacional)', 'Prevenção (Níveis)', 'Projeto Terapêutico Singular'
                ] 
            },
            { 
                name: 'Epidemiologia', 
                topics: [
                    'Bioestatística Básica', 'Tipos de Estudos Epidemiológicos', 'Medidas de Associação (RR, OR)', 
                    'Testes Diagnósticos (S, E, VPP, VPN)', 'Vigilância Epidemiológica', 'Transição Demográfica', 'Endemia/Epidemia'
                ] 
            },
            { 
                name: 'Saúde Coletiva e SUS', 
                topics: [
                    'História das Políticas de Saúde', 'Princípios e Diretrizes do SUS', 'Leis Orgânicas (8080/8142)',
                    'Financiamento do SUS', 'Saúde do Trabalhador'
                ] 
            },
            { 
                name: 'Ética e Legal', 
                topics: ['Código de Ética Médica', 'Declaração de Óbito', 'Sigilo Profissional'] 
            }
        ]
    }
];

/* --- SISTEMA (CORE) --- */

function generateId() { return Math.random().toString(36).substr(2, 9); }

// Inicialização Recursiva (Lê Tópicos e Subtópicos)
function initializeDB() {
    return seedData.map(area => ({
        ...area,
        categories: area.categories.map(cat => ({
            ...cat,
            topics: cat.topics.map(tData => {
                // Se o item for um Objeto com 'children', é um Pai com Subtópicos
                if (typeof tData === 'object' && tData.children) {
                    return {
                        id: generateId(),
                        name: tData.name,
                        isGroup: true, // Indica que é um grupo
                        status: 'pending', // Status do grupo (opcional)
                        subtopics: tData.children.map(subName => ({
                            id: generateId(),
                            name: subName,
                            status: 'pending',
                            studyDate: null,
                            reviews: []
                        }))
                    };
                }
                // Se for String, é um Tópico normal
                return {
                    id: generateId(),
                    name: tData.name || tData, // fallback para string
                    status: 'pending',
                    studyDate: null,
                    reviews: []
                };
            })
        }))
    }));
}

// *** NOME DO BANCO ALTERADO PARA CARREGAR A NOVA LISTA ***
const DB_NAME = 'fluidmed_v6_FINAL_RESTORE'; 
let appData = JSON.parse(localStorage.getItem(DB_NAME));

if (!appData) {
    console.log("Restaurando base de dados completa...");
    appData = initializeDB();
    saveData();
    setTimeout(() => alert("✅ Base de Dados Restaurada com Sucesso!"), 500);
}

function saveData() {
    localStorage.setItem(DB_NAME, JSON.stringify(appData));
    updateDashboard();
}

function resetData() {
    if(confirm("Isso vai apagar seu progresso e restaurar a lista original completa. Continuar?")) {
        localStorage.removeItem(DB_NAME);
        location.reload();
    }
}

function addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
}

/* --- LÓGICA DE ESTUDO --- */

function startStudy(id, dateStr) {
    const startDate = dateStr || new Date().toISOString().split('T')[0];
    let found = false;
    
    appData.forEach(area => {
        area.categories.forEach(cat => {
            cat.topics.forEach(t => {
                // Se for tópico simples
                if (t.id === id) {
                    updateItemStudy(t, startDate);
                    found = true;
                }
                // Se tiver subtópicos
                if (t.subtopics) {
                    t.subtopics.forEach(sub => {
                        if (sub.id === id) {
                            updateItemStudy(sub, startDate);
                            found = true;
                        }
                    });
                }
            });
        });
    });
    
    if(found) {
        saveData();
        renderSyllabus();
    }
}

function updateItemStudy(item, date) {
    item.status = 'active';
    item.studyDate = date;
    item.reviews = [
        { date: addDays(date, 1), status: 'pending', label: 'R1' },
        { date: addDays(date, 7), status: 'pending', label: 'R2' },
        { date: addDays(date, 30), status: 'pending', label: 'R3' }
    ];
}

function checkReview(id, reviewIdx) {
    appData.forEach(area => {
        area.categories.forEach(cat => {
            cat.topics.forEach(t => {
                if(t.id === id && t.reviews[reviewIdx]) t.reviews[reviewIdx].status = 'done';
                if(t.subtopics) {
                    t.subtopics.forEach(sub => {
                        if(sub.id === id && sub.reviews[reviewIdx]) sub.reviews[reviewIdx].status = 'done';
                    });
                }
            });
        });
    });
    saveData();
}

/* --- MODAIS --- */
let currentTargetId = null;
let isAddingSubtopic = false;

function openStudyModal(id) {
    currentTargetId = id;
    document.getElementById('study-date-input').value = new Date().toISOString().split('T')[0];
    document.getElementById('modal-study').classList.add('active');
}

function confirmStudy() {
    const dateInput = document.getElementById('study-date-input').value;
    if (!dateInput) return alert("Selecione uma data");
    startStudy(currentTargetId, dateInput);
    closeModals();
}

// Modal de Subtópico
function openAddSubtopicModal(parentId) {
    currentTargetId = parentId;
    isAddingSubtopic = true;
    document.getElementById('new-topic-name').value = '';
    document.getElementById('modal-add-topic').classList.add('active');
}

function saveNewTopic() {
    const name = document.getElementById('new-topic-name').value;
    if(!name) return alert("Digite um nome!");

    if (isAddingSubtopic) {
        let added = false;
        appData.forEach(area => {
            area.categories.forEach(cat => {
                const parent = cat.topics.find(t => t.id === currentTargetId);
                if (parent) {
                    if (!parent.subtopics) {
                        parent.subtopics = [];
                        parent.isGroup = true;
                    }
                    parent.subtopics.push({
                        id: generateId(),
                        name: name,
                        status: 'pending',
                        studyDate: null,
                        reviews: []
                    });
                    added = true;
                }
            });
        });
        if(added) alert("Subtópico adicionado!");
    }
    
    saveData();
    renderSyllabus();
    closeModals();
}

function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(el => el.classList.remove('active'));
}

/* --- RENDERIZAÇÃO --- */

function updateDashboard() {
    let total = 0, done = 0, late = 0, todayCount = 0;
    const today = new Date().toISOString().split('T')[0];
    let agendaItems = [];

    const progressContainer = document.getElementById('progress-bars-container');
    const sidebarList = document.getElementById('sidebar-areas-list');
    if(progressContainer) progressContainer.innerHTML = '';
    if(sidebarList) sidebarList.innerHTML = '';

    appData.forEach(area => {
        if(sidebarList) {
            sidebarList.innerHTML += `<a href="#" class="nav-item" onclick="toggleSidebar(); navigate('syllabus')"><span style="width:10px; height:10px; border-radius:50%; background:${area.color}"></span> ${area.name}</a>`;
        }

        let areaTotal = 0;
        let areaDone = 0;

        const countItem = (item) => {
            if (item.isGroup && item.subtopics) {
                item.subtopics.forEach(sub => countItem(sub));
                return; // Grupos não contam como "feito", só seus filhos
            }
            total++; areaTotal++;
            if(item.status !== 'pending') {
                done++; areaDone++;
                item.reviews.forEach((rev, idx) => {
                    if(rev.status === 'pending') {
                        if(rev.date === today) todayCount++;
                        if(rev.date < today) late++;
                        if(rev.date <= today) {
                            agendaItems.push({ ...rev, topicName: item.name, areaName: area.name, areaColor: area.color, topicId: item.id, revIdx: idx });
                        }
                    }
                });
            }
        };

        area.categories.forEach(cat => cat.topics.forEach(countItem));

        const percent = areaTotal ? Math.round((areaDone/areaTotal)*100) : 0;
        if(progressContainer) {
            progressContainer.innerHTML += `
                <div style="margin-bottom:15px">
                    <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; margin-bottom:5px; color:#A3AED0">
                        <span style="color:#2B3674">${area.name}</span><span>${percent}%</span>
                    </div>
                    <div style="width:100%; height:6px; background:#EFF4FB; border-radius:3px; overflow:hidden">
                        <div style="width:${percent}%; height:100%; background:${area.color}; border-radius:3px"></div>
                    </div>
                </div>
            `;
        }
    });

    document.getElementById('kpi-total').innerText = total;
    document.getElementById('kpi-done').innerText = done;
    document.getElementById('kpi-late').innerText = late;
    document.getElementById('kpi-today').innerText = todayCount;
    document.getElementById('badge-total').innerText = todayCount + late;

    renderAgenda(agendaItems);
}

function renderAgenda(items) {
    const listContainer = document.getElementById('dashboard-full-list');
    const agendaView = document.getElementById('agenda-view-list');
    items.sort((a, b) => new Date(a.date) - new Date(b.date));

    const htmlContent = items.length ? items.map(item => `
        <div class="task-row">
            <div class="task-info">
                <div class="check-circle" onclick="checkReview('${item.topicId}', ${item.revIdx})" style="border-color:${item.areaColor}"></div>
                <div>
                    <div class="task-title">${item.topicName}</div>
                    <div class="task-meta" style="color:${item.date < new Date().toISOString().split('T')[0] ? '#FF5630' : '#A3AED0'}">
                        ${item.date.split('-').reverse().join('/')} • ${item.label}
                    </div>
                </div>
            </div>
            <span class="badge" style="background:${item.areaColor}20; color:${item.areaColor}">${item.areaName.split(' ')[0]}</span>
        </div>
    `).join('') : '<div style="padding:20px; color:#A3AED0; text-align:center">Tudo em dia!</div>';

    if(listContainer) listContainer.innerHTML = htmlContent;
    if(agendaView) agendaView.innerHTML = htmlContent;
}

function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    if(!container) return;
    container.innerHTML = '';
    
    appData.forEach((area, index) => {
        container.innerHTML += `
            <div class="area-block" style="margin-bottom:12px; border:1px solid #F4F7FE; border-radius:12px; overflow:hidden">
                <div style="padding:15px; background:#FAFCFE; cursor:pointer; display:flex; justify-content:space-between; align-items:center; font-weight:700" onclick="toggleAccordion(this)">
                    <div style="display:flex; align-items:center; gap:8px">
                        <div style="width:10px; height:10px; border-radius:50%; background:${area.color}"></div>${area.name}
                    </div>
                    <i class="ph-bold ph-caret-down"></i>
                </div>
                <div class="area-content" style="display:${index === 0 ? 'block' : 'none'}; padding:15px; background:white">
                    ${area.categories.map(cat => `
                        <div style="margin-bottom:20px">
                            <div style="color:#A3AED0; font-size:11px; font-weight:800; margin-bottom:10px; letter-spacing:0.5px; text-transform:uppercase">${cat.name}</div>
                            ${cat.topics.map(t => renderTopicRow(t, area.color)).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
}

function renderTopicRow(t, color) {
    if (t.isGroup) {
        return `
            <div class="topic-container">
                <div class="topic-header" onclick="this.nextElementSibling.classList.toggle('active')">
                    <span style="font-weight:600; color:#2B3674; font-size:14px">${t.name}</span>
                    <div style="display:flex; align-items:center; gap:10px">
                        <button class="btn-add-sub" onclick="event.stopPropagation(); openAddSubtopicModal('${t.id}')" title="Adicionar Subtópico">
                            <i class="ph-bold ph-plus-circle"></i>
                        </button>
                        <i class="ph-bold ph-caret-down" style="font-size:12px; color:#A3AED0"></i>
                    </div>
                </div>
                <div class="subtopics-list">
                    ${t.subtopics.map(sub => `
                        <div class="subtopic-item">
                            <span style="flex:1">${sub.name}</span>
                            ${renderStudyButton(sub, color)}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        return `
            <div class="topic-container" style="border:none; margin-bottom:5px">
                <div class="topic-header" style="background:white; padding:8px 0; border-bottom:1px solid #F8F9FC">
                    <span style="font-weight:500; font-size:14px">${t.name}</span>
                    <div style="display:flex; align-items:center; gap:10px">
                        <button class="btn-add-sub" onclick="openAddSubtopicModal('${t.id}')" title="Criar Subtópicos">
                            <i class="ph-bold ph-plus-circle"></i>
                        </button>
                        ${renderStudyButton(t, color)}
                    </div>
                </div>
            </div>
        `;
    }
}

function renderStudyButton(item, color) {
    if (item.status === 'pending') {
        return `<button onclick="openStudyModal('${item.id}')" style="background:${color}; color:white; border:none; padding:4px 12px; border-radius:6px; font-size:11px; font-weight:bold; cursor:pointer">Estudar</button>`;
    } else {
        return `<div style="display:flex; gap:4px">
            ${item.reviews.map(r => `
                <div style="width:8px; height:8px; border-radius:50%; background:${r.status==='done'?'#36B37E':(r.date < new Date().toISOString().split('T')[0]?'#FF5630':'#E0E5F2')}" title="${r.label}"></div>
            `).join('')}
        </div>`;
    }
}

function toggleAccordion(el) {
    const content = el.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    el.querySelector('i').style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
}

function filterSyllabus(query) {
    if(!query) { renderSyllabus(); return; }
    const term = query.toLowerCase();
    document.querySelectorAll('.topic-container, .subtopic-item').forEach(el => {
        if(el.innerText.toLowerCase().includes(term)) {
            el.style.display = 'block';
            if(el.classList.contains('subtopic-item')) el.parentElement.classList.add('active');
        } else {
            el.style.display = 'none';
        }
    });
}

function toggleSidebar() {
    document.getElementById('app-sidebar').classList.toggle('active');
    document.getElementById('sidebar-overlay').classList.toggle('active');
}

function navigate(viewId, element) {
    document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
    document.getElementById(`view-${viewId}`).style.display = 'block';
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if(element) element.classList.add('active');
    if(window.innerWidth < 1024) toggleSidebar();
    
    const titles = { 'dashboard': 'Dashboard', 'syllabus': 'Edital & Estudo', 'agenda': 'Agenda de Revisão', 'stats': 'Estatísticas' };
    const pageTitle = document.getElementById('page-title');
    if(pageTitle) pageTitle.innerText = titles[viewId] || 'Planner';
}

window.onload = function() {
    updateDashboard();
    renderSyllabus();
};