export type Service = {
  number: string
  title: string
  problem: string
  delivery: string
  tags: string[]
}

export type Project = {
  slug: string
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
    label: 'Sistema interno de gestão de TI',
    title: 'OpenTask',
    summary: 'Workspace e portal para organizar chamados, inventário de equipamentos, vínculos com funcionários e indicadores de SLA em uma única operação.',
    context: 'A operação de TI precisava reunir solicitações, ativos e responsáveis em uma visão rastreável, com prioridades e tempos de atendimento claros.',
    audience: 'Equipe de TI e funcionários que abrem e acompanham solicitações.',
    before: 'Chamados, inventário e metas de atendimento estavam separados em planilhas e controles dispersos, dificultando a leitura da fila e do patrimônio.',
    constraints: [
      'Separar a workspace da equipe técnica do portal utilizado pelos funcionários.',
      'Relacionar equipamentos, acessórios e responsáveis dentro da mesma jornada.',
      'Representar prioridades, estados, histórico e SLA sem antecipar uma implantação ainda em desenvolvimento.',
    ],
    solution: 'Protótipo funcional com workspace operacional, portal do funcionário, fila de chamados, inventário, vínculos de equipamentos e acompanhamento de indicadores.',
    decisions: [
      'A visão geral concentra fila ativa, atrasos, tempo de primeira resposta e ativos vinculados.',
      'Cada chamado possui prioridade, estado, histórico e ações coerentes com o andamento do atendimento.',
      'Inventário, funcionários e vínculos compartilham o mesmo contexto operacional.',
    ],
    role: 'Levantamento do processo, modelagem dos fluxos, arquitetura da informação, desenvolvimento do protótipo responsivo e validação das jornadas principais.',
    outcomes: [
      'Workspace técnico e portal do funcionário funcionando no protótipo.',
      'Cadastro e vínculo de funcionários, equipamentos e acessórios.',
      'Abertura e acompanhamento de chamados com prioridade, status e indicadores de SLA.',
    ],
    nextSteps: [
      'Conectar autenticação e persistência aos dados oficiais da operação.',
      'Validar permissões, regras de negócio e implantação com os usuários responsáveis.',
    ],
    status: 'Protótipo funcional · em desenvolvimento',
    image: '/projects/opentask.png',
    availabilityLabel: 'Protótipo local · sem link público',
    repositoryLabel: 'Repositório privado',
  },
  {
    slug: 'vision-all',
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
