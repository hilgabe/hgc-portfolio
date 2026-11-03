export type Service = {
  number: string
  title: string
  problem: string
  delivery: string
  tags: string[]
}

export type Highlight = {
  title: string
  text: string
}

export type Metric = {
  value: string
  label: string
}

export type Project = {
  slug: string
  featured?: boolean
  highlights: Highlight[]
  metrics?: Metric[]
  stack?: string[]
  label: string
  title: string
  summary: string
  context: string
  audience: string
  before: string
  constraints: string[]
  solution: string
  decisions: string[]
  role: string
  outcomes: string[]
  nextSteps: string[]
  status: string
  image: string
  mobileImage?: string
  liveUrl?: string
  availabilityLabel?: string
  repositoryUrl?: string
  repositoryLabel?: string
}

export const contact = {
  email: 'hilsongabrielcarvalho@gmail.com',
  phoneLabel: '+55 98 98919-8319',
  phone: '5598989198319',
  linkedin: 'https://www.linkedin.com/in/hgcba/',
  github: 'https://github.com/hilgabe',
  instagram: 'https://www.instagram.com/gabe.carv/',
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Sites e experiências web',
    problem: 'Sua empresa precisa explicar melhor o que faz, gerar confiança e transformar visitas em conversas.',
    delivery: 'Sites institucionais, landing pages e experiências responsivas com conteúdo organizado, boa performance e caminhos claros para contato.',
    tags: ['React', 'TypeScript', 'SEO técnico'],
  },
  {
    number: '02',
    title: 'Sistemas internos',
    problem: 'Informações espalhadas e controles manuais tornam a rotina lenta, repetitiva e difícil de acompanhar.',
    delivery: 'Portais, formulários, dashboards e ferramentas sob medida para centralizar dados e apoiar a operação.',
    tags: ['Interfaces', 'Firebase', 'Dados'],
  },
  {
    number: '03',
    title: 'Integrações e automações',
    problem: 'A equipe repete tarefas ou transfere dados manualmente entre ferramentas que não conversam.',
    delivery: 'Integrações entre formulários, planilhas, APIs e sistemas. Bots entram apenas quando canal, infraestrutura e custos estão definidos.',
    tags: ['APIs', 'Webhooks', 'Fluxos'],
  },
]

export const projects: Project[] = [
  {
    slug: 'invest-corretora',
    highlights: [
      { title: 'Seletor na primeira dobra', text: 'O visitante escolhe o que procura e chega ao produto certo em um clique.' },
      { title: 'Planos de saúde em foco', text: 'A especialidade da corretora ganha prioridade sem esconder os demais seguros.' },
      { title: 'WhatsApp com contexto', text: 'Cada chamada para cotação já leva o produto escolhido na mensagem.' },
      { title: 'Pensado para o celular', text: 'Jornada responsiva, com leitura confortável e CTAs ao alcance do polegar.' },
      { title: 'Transparência comercial', text: 'Avisos e condições variáveis permanecem visíveis, sem promessas absolutas.' },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Vercel'],
    label: 'Website comercial',
    title: 'Invest Corretora',
    summary: 'Uma jornada comercial responsiva para apresentar seguros, priorizar planos de saúde e conduzir cada interesse ao atendimento certo.',
    context: 'A Invest precisava organizar um portfólio amplo de seguros e benefícios em uma presença digital coerente com sua atuação consultiva.',
    audience: 'Pessoas, famílias e empresas que precisam comparar planos, coberturas e soluções de proteção.',
    before: 'As informações comerciais existiam, mas faltava uma jornada única para explicar a oferta, destacar a especialidade e transformar interesse em contato.',
    constraints: [
      'Apresentar um catálogo amplo sem perder a prioridade dos planos de saúde.',
      'Manter linguagem comercial clara sem criar promessas absolutas.',
      'Funcionar bem no celular e levar o visitante ao WhatsApp com contexto.',
    ],
    solution: 'Arquitetura de conteúdo, seletor de soluções na primeira dobra, componentes reutilizáveis e CTAs contextualizados para cotação.',
    decisions: [
      'Planos de saúde aparecem como especialidade principal sem esconder as demais soluções.',
      'Cada produto possui uma entrada própria e uma chamada direta para atendimento.',
      'Avisos comerciais e condições variáveis permanecem visíveis na jornada.',
    ],
    role: 'Estratégia de conteúdo, arquitetura da informação, desenvolvimento front-end, responsividade e publicação.',
    outcomes: [
      'Website responsivo publicado e navegável.',
      'Soluções organizadas por necessidade de proteção.',
      'Contato via WhatsApp preparado a partir de diferentes pontos da jornada.',
    ],
    nextSteps: [
      'Acompanhar os caminhos mais utilizados pelos visitantes.',
      'Aprimorar conteúdo e conversão com base em dúvidas reais do atendimento.',
    ],
    status: 'Publicado',
    image: '/projects/invest-corretora.webp',
    mobileImage: '/projects/invest-corretora-mobile.webp',
    liveUrl: 'https://investcorretoraportfolio.vercel.app',
    repositoryUrl: 'https://github.com/hgcstudio-hub/investcorretoraportfolio',
    repositoryLabel: 'Repositório público',
  },
  {
    slug: 'tatica-fc',
    highlights: [
      { title: 'Três modalidades', text: 'Campo, society e futsal com quantidades de jogadores e formações próprias.' },
      { title: 'Arrastar e soltar', text: 'Reposicionamento livre dos jogadores, no mouse ou no toque.' },
      { title: 'Exporta em PNG', text: 'A escalação vira imagem pronta para o grupo do time.' },
      { title: 'Compartilha por link', text: 'Quem recebe abre a mesma formação, sem instalar nada.' },
      { title: 'Funciona sem nuvem', text: 'Se a nuvem não estiver configurada, o uso básico continua local.' },
    ],
    metrics: [
      { value: '3', label: 'modalidades suportadas' },
      { value: 'PNG', label: 'exportação da escalação' },
      { value: 'Link', label: 'compartilhamento direto' },
    ],
    stack: ['TypeScript', 'Drag & drop', 'Exportação PNG', 'Vercel'],
    label: 'Produto web interativo',
    title: 'Tática FC',
    summary: 'Uma prancheta digital responsiva para montar, personalizar, salvar e compartilhar escalações de campo, society e futsal.',
    context: 'O produto transforma a montagem de uma escalação em uma experiência visual direta, utilizável no navegador e adaptada a diferentes modalidades.',
    audience: 'Treinadores, jogadores e equipes que precisam organizar e compartilhar uma formação de maneira visual.',
    before: 'A escalação dependia de ferramentas genéricas ou montagens manuais que não combinavam formação, identidade do time e compartilhamento em um único fluxo.',
    constraints: [
      'Suportar campo, society e futsal com quantidades e formações diferentes.',
      'Permitir reposicionamento por arrastar e soltar em diferentes telas.',
      'Continuar utilizável localmente quando a nuvem não estiver configurada.',
    ],
    solution: 'Editor visual com presets táticos, personalização de jogadores e campo, banco de reservas, exportação em PNG e compartilhamento.',
    decisions: [
      'Modalidade, formação e identidade ficam reunidas em uma sequência de configuração.',
      'A prancheta oferece uma base pronta, mas mantém liberdade para reposicionar jogadores.',
      'Persistência em nuvem possui fallback local para preservar o uso básico.',
    ],
    role: 'Concepção do produto, arquitetura de interface, implementação das interações, persistência e publicação.',
    outcomes: [
      'Editor funcional publicado para três modalidades.',
      'Escalações exportáveis em PNG e compartilháveis por link.',
      'Salvamento privado em nuvem com alternativa local.',
    ],
    nextSteps: [
      'Ampliar modelos táticos e opções de personalização.',
      'Validar a experiência com usuários em dispositivos móveis.',
    ],
    status: 'Publicado · em evolução',
    image: '/projects/tatica-fc.webp',
    mobileImage: '/projects/tatica-fc-mobile.webp',
    liveUrl: 'https://tatica-fc-six.vercel.app',
    repositoryLabel: 'Repositório privado',
  },
  {
    slug: 'opentask',
    featured: true,
    label: 'Plataforma de TI · web + aplicativo Windows',
    title: 'OpenTask',
    summary: 'Central de atendimento e inventário de TI da Elétrica Visão: chamados com SLA em horário comercial, patrimônio ligado às pessoas, portal do colaborador e um aplicativo Windows que reporta o estado de cada computador.',
    context: 'A TI da Elétrica Visão atendia por Teams, WhatsApp, Planner e conversas presenciais. Faltava um lugar único para registrar pedidos, medir prazos e saber quem usa qual equipamento.',
    audience: 'Equipe de TI (workspace), colaboradores de todos os setores (portal e aplicativo Windows) e gestores que acompanham indicadores.',
    before: 'Pedidos se perdiam entre canais, o inventário vivia em planilhas e ninguém conseguia responder com segurança quanto tempo um atendimento levou nem qual equipamento estava com quem.',
    constraints: [
      'Dados pessoais reais de colaboradores: acesso por perfil, auditoria e nada de dados reais no código.',
      'Prazo de atendimento precisa seguir o expediente da empresa, não o relógio de 24 horas.',
      'Inventário confiável sem depender de digitação manual em cada computador.',
      'Separar o que a TI faz do que o colaborador vê, sem duplicar a fonte de verdade dos vínculos.',
    ],
    solution: 'Três frentes sobre o mesmo banco: o Workspace da TI (chamados, inventário, pessoas, indicadores e logs), o Portal do colaborador (abrir e acompanhar pedidos e ver o próprio equipamento) e o aplicativo OpenTask para Windows, que faz login pelo navegador e envia o inventário do computador.',
    decisions: [
      'Regras críticas moram no banco: número, datas, prazo de SLA e linha do tempo são decididos pelo servidor e não podem ser alterados pelo navegador.',
      'O SLA conta em horário comercial e só pausa em "aguardando usuário" ou "aguardando terceiro"; a pausa interna do técnico não para o relógio.',
      'Chamado não se exclui e só se resolve com o veredito da TI registrado, o que preserva um histórico confiável.',
      'O responsável por um equipamento é derivado dos vínculos, nunca de um segundo cadastro paralelo.',
      'No aplicativo, a senha nunca passa pelo programa: o login é confirmado no navegador por um código de pareamento.',
    ],
    role: 'Concepção do produto, levantamento do processo com a TI, modelagem de dados, desenvolvimento front-end e back-end, aplicativo Windows, testes e publicação, com IA generativa como apoio e validação humana em cada decisão.',
    outcomes: [
      'Workspace, portal e aplicativo Windows em uso interno, com autenticação por convite e verificação em duas etapas para a equipe de TI.',
      'Chamados com prazo em horário comercial, sessões de trabalho, veredito de resolução e linha do tempo imutável.',
      'Inventário de computadores, acessórios, vínculos e programas, atualizado automaticamente pelo aplicativo.',
      'Indicadores de SLA calculados a partir dos chamados reais.',
    ],
    nextSteps: [
      'Abrir e acompanhar chamados direto pelo aplicativo Windows.',
      'Assinar digitalmente o instalador e ampliar as notificações do atendimento.',
      'Considerar feriados no cálculo do SLA.',
    ],
    status: 'Em uso interno · em evolução',
    image: '/projects/opentask-workspace.png',
    availabilityLabel: 'Sistema interno · acesso restrito',
    repositoryLabel: 'Repositório privado',
    metrics: [
      { value: '11', label: 'áreas no workspace da TI' },
      { value: '22', label: 'migrações SQL versionadas' },
      { value: '3', label: 'Edge Functions de servidor' },
      { value: '0.3', label: 'versão atual do app Windows' },
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL + RLS', '.NET 10 · WPF', 'Vercel'],
    highlights: [
      { title: 'Três produtos, um banco', text: 'Workspace da TI, portal do colaborador e aplicativo Windows compartilham a mesma base e as mesmas regras.' },
      { title: 'SLA em horário comercial', text: 'Prazo calculado no banco (seg–sex, 07–12h e 13–17h), com pausa só quando o chamado aguarda usuário ou terceiro.' },
      { title: 'Linha do tempo imutável', text: 'Chamados não se apagam. Eventos, sessões de trabalho e o veredito da TI ficam registrados e só o banco escreve o histórico.' },
      { title: 'Inventário ligado às pessoas', text: 'Computadores, acessórios e responsáveis conectados, com o histórico de cada troca e baixa em vez de exclusão.' },
      { title: 'App Windows com login seguro', text: 'Pareamento por código confirmado no navegador, instalação sem administrador e SHA-256 publicado para cada versão.' },
      { title: 'Inventário automático', text: 'O aplicativo envia configuração, antivírus e programas instalados após o login e a cada 6 horas, e corrige o cadastro quando diverge.' },
      { title: 'Segurança em camadas', text: 'RLS em todas as tabelas, verificação em duas etapas para a TI, cabeçalhos de segurança, auditoria e contas só por convite.' },
      { title: 'LGPD na arquitetura', text: 'Função de anonimização de perfil, fotos em bucket privado e dados reais fora do código-fonte.' },
      { title: 'Testado no banco e nas funções', text: 'Testes SQL de RLS, integridade, 2FA e login do app, além de testes de lógica nas Edge Functions.' },
    ],
  },
  {
    slug: 'vision-all',
    highlights: [
      { title: 'Leitura em segundos', text: 'Os números da operação aparecem em cartões de leitura imediata.' },
      { title: 'Busca e filtros', text: 'Localiza ordens por número, cliente ou status sem abrir relatório.' },
      { title: 'Alertas de prazo', text: 'Prazos críticos e pendências ficam em destaque para direcionar a equipe.' },
      { title: 'Visão por atividade', text: 'A distribuição por etapa mostra onde o trabalho está acumulando.' },
      { title: 'Campo e gestão', text: 'Layout responsivo, útil tanto no celular quanto no computador.' },
      { title: 'Em operação real', text: 'Construído para a rotina industrial da Elétrica Visão.' },
    ],
    label: 'Sistema de acompanhamento de O.S.',
    title: 'Vision All',
    summary: 'Sistema responsivo para acompanhar ordens de serviço industriais, prioridades, status, prazos e indicadores da operação em tempo real.',
    context: 'A Elétrica Visão precisava de uma leitura centralizada das ordens de serviço executadas para clientes da indústria.',
    audience: 'Gestores, produção e equipes responsáveis pelo acompanhamento e pela execução das ordens de serviço.',
    before: 'O acompanhamento fragmentado dificultava enxergar rapidamente volume, andamento, prioridades, prazos críticos e pontos de retrabalho.',
    constraints: [
      'Organizar um volume elevado de ordens de serviço sem perder a leitura rápida da operação.',
      'Manter a consulta utilizável tanto no computador quanto no celular.',
      'Diferenciar prioridades, etapas de produção, pendências e prazos críticos.',
    ],
    solution: 'Dashboard operacional e consulta de ordens de serviço com indicadores, busca, filtros, alertas e visão de status em tempo real.',
    decisions: [
      'Os principais números da operação aparecem em cartões de leitura imediata.',
      'Busca e filtros permitem localizar ordens por número, cliente ou status.',
      'Alertas de prazo e distribuição por atividade ajudam a direcionar a atenção da equipe.',
    ],
    role: 'Concepção e desenvolvimento do sistema, estruturação das telas, organização dos indicadores e construção da experiência responsiva.',
    outcomes: [
      'Dashboard com visão consolidada das ordens e de seus principais estados.',
      'Consulta operacional com busca, filtros, prioridade, status e acompanhamento de prazo.',
      'Experiência responsiva preparada para acompanhamento em campo e na gestão.',
    ],
    nextSteps: [
      'Evoluir relatórios e filtros conforme o uso das equipes.',
      'Aprimorar níveis de acesso e rastreabilidade do histórico das ordens.',
    ],
    status: 'Sistema interno',
    image: '/projects/vision-all-desktop.png',
    mobileImage: '/projects/vision-all-mobile.jpeg',
    availabilityLabel: 'Sistema interno · acesso restrito',
    repositoryLabel: 'Projeto interno',
  },
]

export const experience = [
  {
    period: 'Experiência atual',
    role: 'Atuação em TI, desenvolvimento e IA aplicada',
    organization: 'Elétrica Visão',
    description: 'Suporte à operação, desenvolvimento de sistemas internos e uso de IA generativa para pesquisa, prototipação, documentação e validação de soluções.',
  },
  {
    period: 'Estágio',
    role: 'Tecnologia e automação',
    organization: 'Legacy Jurídico',
    description: 'Apoio à operação de atendimento digital, configuração e validação de automações, agentes e fluxos para organizar processos comerciais e aprimorar a qualidade do atendimento.',
  },
  {
    period: 'Experiência anterior',
    role: 'Jovem Aprendiz — TI e Help Desk',
    organization: 'SET — Sindicato das Empresas de Transporte de São Luís',
    description: 'Atendimento a usuários, suporte técnico, organização de chamados e resolução de ocorrências de tecnologia.',
  },
  {
    period: 'Em formação',
    role: 'Bacharelado em Sistemas de Informação',
    organization: 'CEST — Centro Universitário Santa Terezinha',
    description: 'Formação conectada a desenvolvimento de software, sistemas, dados, infraestrutura e gestão de tecnologia.',
  },
]

export const skillGroups = [
  { title: 'Desenvolvimento', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { title: 'Dados e integrações', items: ['Firebase', 'APIs REST', 'Webhooks', 'Formulários', 'Dashboards'] },
  { title: 'Operação e qualidade', items: ['Suporte de TI', 'QA de fluxos', 'Documentação', 'Git', 'Vercel'] },
  { title: 'IA aplicada', items: ['IA generativa', 'Engenharia de prompts', 'Agentes e fluxos', 'Prototipação assistida', 'Validação humana'] },
]

export const process = [
  {
    title: 'Diagnóstico',
    description: 'Entendo a rotina, separo sintomas de causas e identifico a prioridade real.',
    deliverable: 'Mapa do problema e prioridades',
  },
  {
    title: 'Escopo e proposta',
    description: 'Transformo o diagnóstico em uma solução viável, com limites e próximos passos claros.',
    deliverable: 'Escopo, solução e proposta',
  },
  {
    title: 'Construção e validação',
    description: 'Desenvolvo em ciclos curtos e valido comportamento, conteúdo e decisões ao longo do caminho.',
    deliverable: 'Versões testáveis e decisões registradas',
  },
  {
    title: 'Entrega e evolução',
    description: 'Organizo a entrega, documento o necessário e priorizo melhorias com base no uso.',
    deliverable: 'Entrega, documentação e próximos passos',
  },
]
