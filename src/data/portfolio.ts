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
  technologies: string[]
  status: string
  image: string
  mobileImage: string
  liveUrl: string
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
    technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
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
    technologies: ['React', 'TypeScript', 'Firebase', 'Vercel'],
    status: 'Publicado · em evolução',
    image: '/projects/tatica-fc.webp',
    mobileImage: '/projects/tatica-fc-mobile.webp',
    liveUrl: 'https://tatica-fc-six.vercel.app',
    repositoryLabel: 'Repositório privado',
  },
  {
    slug: 'bolao-betel-2026',
    label: 'Aplicação com regras de negócio',
    title: 'Bolão Betel 2026',
    summary: 'Uma aplicação mobile-first com autenticação, palpites, ranking e administração das regras de pontuação da Copa do Mundo.',
    context: 'O grupo precisava centralizar participantes, palpites e resultados em uma aplicação que calculasse regras diferentes ao longo do torneio.',
    audience: 'Participantes de um grupo fechado e administradores responsáveis por jogos, resultados e pontuação.',
    before: 'Palpites, prazos, resultados e classificação exigiriam controle manual e atualização repetida a cada partida.',
    constraints: [
      'Liberar palpites conforme data e horário em America/Sao_Paulo.',
      'Aplicar regras distintas para placar, pênaltis, jogadores e rodadas especiais.',
      'Separar a experiência do participante das ações administrativas.',
    ],
    solution: 'PWA com autenticação por nome e senha, dados no Firestore, páginas de jogos e ranking, além de painel para resultados e pontuação.',
    decisions: [
      'A autenticação simplifica a entrada sem expor e-mail ao participante.',
      'Palpites e resultados usam estados persistentes e prazos por partida.',
      'A pontuação automática mantém exceções documentadas para ajustes administrativos.',
    ],
    role: 'Modelagem do produto e dos dados, regras de pontuação, desenvolvimento da aplicação, integração com Firebase e publicação.',
    outcomes: [
      'Aplicação publicada com acesso autenticado.',
      'Jogos, palpites, ranking e administração reunidos no mesmo sistema.',
      'Regras de pontuação implementadas e documentadas no repositório.',
    ],
    nextSteps: [
      'Endurecer as regras de segurança do Firestore antes de ampliar o público.',
      'Consolidar testes automatizados para as variações de pontuação.',
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'PWA'],
    status: 'Publicado · acesso do grupo',
    image: '/projects/bolao-betel-2026.webp',
    mobileImage: '/projects/bolao-betel-2026-mobile.webp',
    liveUrl: 'https://bolao-betel-2026.vercel.app',
    repositoryUrl: 'https://github.com/hilgabe/bolao-betel-2026',
    repositoryLabel: 'Repositório público',
  },
]

export const experience = [
  {
    period: 'Experiência atual',
    role: 'Atuação em suporte de TI e soluções tecnológicas',
    organization: 'Elétrica Visão',
    description: 'Suporte a usuários e equipamentos, diagnóstico de ocorrências e participação na organização de soluções ligadas à operação da empresa.',
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
