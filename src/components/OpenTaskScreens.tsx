/* oxlint-disable react/only-export-components */
import type { ReactNode } from 'react'

/* Telas-modelo do OpenTask reconstruídas com dados fictícios.
   O sistema real contém dados privados de colaboradores, por isso nada aqui vem de produção. */

export const STAGE = { width: 1280, height: 800 }

type Tone = 'ok' | 'warn' | 'danger' | 'info' | 'neutral'

const icons: Record<string, ReactNode> = {
  home: <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  ticket: <path d="M3 8a2 2 0 0 0 0 8v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a2 2 0 0 1 0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zM14 5v14" />,
  box: <path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" />,
  monitor: <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 21h8M12 17v4" />,
  apps: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  head: <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z" />,
  link: <path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1" />,
  users: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a2.5 2.5 0 1 0 0-5M17 14a5 5 0 0 1 4 6" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  log: <path d="M6 3h12v18H6zM9 8h6M9 12h6M9 16h4" />,
  down: <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4" />,
  search: <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5" />,
  check: <path d="M5 12l5 5 9-10" />,
}

function Ico({ name, size = 16 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const nav: Array<{ group: string; items: Array<[string, string, number?]> }> = [
  { group: 'Operação', items: [['Início', 'home'], ['Chamados', 'ticket', 12]] },
  { group: 'Patrimônio', items: [['Inventário', 'box'], ['Computadores', 'monitor'], ['Programas', 'apps'], ['Acessórios', 'head'], ['Vínculos', 'link']] },
  { group: 'Pessoas', items: [['Funcionários', 'users']] },
  { group: 'Gestão', items: [['Indicadores', 'chart'], ['Logs', 'log']] },
  { group: 'Aplicativo', items: [['Para Windows', 'down']] },
]

function Pill({ tone, children }: { tone: Tone; children: ReactNode }) {
  return <span className={`ot-pill ot-pill--${tone}`}>{children}</span>
}

function Logo() {
  return (
    <div className="ot-logo">
      <span className="ot-logo__mark"><i /><i /></span>
      <b>Open<em>Task</em></b>
    </div>
  )
}

function Shell({ active, title, subtitle, url, dark, children }: { active: string; title: string; subtitle: string; url: string; dark?: boolean; children: ReactNode }) {
  return (
    <div className={`ot ot-window${dark ? ' ot--dark' : ''}`}>
      <div className="ot-chrome">
        <span><i /><i /><i /></span>
        <em>{url}</em>
        <span />
      </div>
      <div className="ot-app">
        <aside className="ot-side">
          <Logo />
          <span className="ot-side__tag">Workspace TI</span>
          {nav.map((section) => (
            <div className="ot-side__group" key={section.group}>
              <small>{section.group}</small>
              {section.items.map(([label, icon, count]) => (
                <span className={`ot-side__link${label === active ? ' is-active' : ''}`} key={label}>
                  <Ico name={icon} />
                  {label}
                  {count ? <b>{count}</b> : null}
                </span>
              ))}
            </div>
          ))}
          <div className="ot-side__user">
            <span className="ot-avatar">GC</span>
            <span><b>Gabriel C.</b><small>Administrador · TI</small></span>
          </div>
        </aside>
        <section className="ot-main">
          <header className="ot-top">
            <div><h4>{title}</h4><p>{subtitle}</p></div>
            <span className="ot-search"><Ico name="search" size={14} />Buscar chamado, pessoa ou equipamento</span>
          </header>
          {children}
        </section>
      </div>
    </div>
  )
}

function Kpi({ label, value, hint, tone }: { label: string; value: string; hint: string; tone?: Tone }) {
  return (
    <div className={`ot-kpi${tone ? ` ot-kpi--${tone}` : ''}`}>
      <small>{label}</small>
      <strong>{value}</strong>
      <span>{hint}</span>
    </div>
  )
}

function Sla({ tone, label, percent }: { tone: Tone; label: string; percent: number }) {
  return (
    <span className={`ot-sla ot-sla--${tone}`}>
      <span className="ot-sla__bar"><i style={{ width: `${percent}%` }} /></span>
      <small>{label}</small>
    </span>
  )
}

const priorityTone: Record<string, Tone> = { Crítica: 'danger', Alta: 'warn', Média: 'info', Baixa: 'neutral' }

const queue: Array<[string, string, string, string, Tone, string, number]> = [
  ['OT-2045', 'Impressora da expedição offline', 'Paulo Nery · Expedição', 'Crítica', 'danger', 'Atrasado 40min', 100],
  ['OT-2047', 'Notebook sem acesso ao Wi-Fi', 'Marina Costa · Comercial', 'Alta', 'warn', 'Resta 1h 20min', 82],
  ['OT-2046', 'Instalar Office em novo computador', 'Rafael Lima · Financeiro', 'Média', 'ok', 'Resta 5h', 34],
  ['OT-2044', 'Solicitar acesso ao sistema ERP', 'Helena Rocha · RH', 'Média', 'ok', 'Resta 2d 1h', 18],
  ['OT-2043', 'Fone com microfone sem áudio', 'Carlos Mota · Atendimento', 'Baixa', 'ok', 'Resta 1d 4h', 22],
  ['OT-2042', 'Criar e-mail para novo colaborador', 'Júlia Braga · PCP', 'Média', 'ok', 'Resta 2d 6h', 12],
  ['OT-2041', 'Trocar mouse e teclado', 'Pedro Salles · Compras', 'Baixa', 'ok', 'Resta 3d', 8],
]

/* 1 · Início */
function HomeScreen() {
  return (
    <Shell active="Início" title="Início" subtitle="Fila, prazos e patrimônio da operação" url="opentask-ev.vercel.app/workspace">
      <div className="ot-kpis">
        <Kpi label="Na fila" value="12" hint="3 sem responsável" tone="info" />
        <Kpi label="Em atendimento" value="5" hint="sessões de trabalho abertas" />
        <Kpi label="Atrasados" value="2" hint="exigem priorização" tone="danger" />
        <Kpi label="Concluídos na semana" value="38" hint="94% dentro do prazo" tone="ok" />
      </div>
      <div className="ot-grid ot-grid--2-1">
        <div className="ot-card">
          <div className="ot-card__head"><div><small>Fila atual</small><h5>Atendimentos prioritários</h5></div><a>Ver todos →</a></div>
          <table className="ot-table">
            <thead><tr><th>Chamado</th><th>Solicitante</th><th>Prioridade</th><th>Prazo (SLA)</th></tr></thead>
            <tbody>
              {queue.map(([id, subject, who, priority, tone, label, percent]) => (
                <tr key={id}>
                  <td><b>{id}</b><small>{subject}</small></td>
                  <td>{who}</td>
                  <td><Pill tone={priorityTone[priority]}>{priority}</Pill></td>
                  <td><Sla tone={tone} label={label} percent={percent} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ot-stack">
          <div className="ot-card">
            <div className="ot-card__head"><div><small>Patrimônio</small><h5>Situação dos ativos</h5></div></div>
            <div className="ot-bar"><i style={{ width: '62%' }} /><i style={{ width: '16%' }} /><i style={{ width: '22%' }} /></div>
            <ul className="ot-legend">
              <li><i />Em uso<b>20</b></li>
              <li><i />Em estoque<b>5</b></li>
              <li><i />Substituir<b>7</b></li>
            </ul>
          </div>
          <div className="ot-card ot-ring-card">
            <div className="ot-ring" style={{ ['--p' as string]: 94 }}><b>94%</b></div>
            <div><small>Meta mensal</small><h5>Resolvidos no prazo</h5><p>1ª resposta média: 18 min</p></div>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 2 · Chamados */
function TicketsScreen() {
  const rows: Array<[string, string, string, string, Tone, string]> = [
    ['OT-2045', 'Impressora da expedição offline', 'Paulo Nery', 'Crítica', 'danger', 'Em atendimento'],
    ['OT-2047', 'Notebook sem acesso ao Wi-Fi', 'Marina Costa', 'Alta', 'warn', 'Aberto'],
    ['OT-2046', 'Instalar Office em novo computador', 'Rafael Lima', 'Média', 'info', 'Aguardando usuário'],
    ['OT-2044', 'Solicitar acesso ao sistema ERP', 'Helena Rocha', 'Média', 'info', 'Aberto'],
    ['OT-2043', 'Fone com microfone sem áudio', 'Carlos Mota', 'Baixa', 'neutral', 'Aberto'],
    ['OT-2042', 'Criar e-mail para novo colaborador', 'Júlia Braga', 'Média', 'info', 'Em atendimento'],
    ['OT-2041', 'Trocar mouse e teclado', 'Pedro Salles', 'Baixa', 'neutral', 'Aberto'],
  ]
  return (
    <Shell active="Chamados" title="Chamados" subtitle="Fila completa com prazo, responsável e histórico" url="opentask-ev.vercel.app/workspace/chamados">
      <div className="ot-chips">
        <span className="is-on">Todos <b>12</b></span><span>Abertos <b>4</b></span><span>Em atendimento <b>5</b></span><span>Aguardando <b>1</b></span><span className="is-danger">Atrasados <b>2</b></span>
      </div>
      <div className="ot-grid ot-grid--1-1">
        <div className="ot-card ot-list">
          {rows.map(([id, subject, who, priority, , status], index) => (
            <div className={`ot-list__row${index === 0 ? ' is-selected' : ''}`} key={id}>
              <div><b>{id}</b><span>{subject}</span><small>{who}</small></div>
              <div><Pill tone={priorityTone[priority]}>{priority}</Pill><small>{status}</small></div>
            </div>
          ))}
        </div>
        <div className="ot-card ot-detail">
          <div className="ot-detail__head">
            <small>OT-2045 · Impressão</small>
            <h5>Impressora da expedição offline</h5>
            <div className="ot-tags"><span>rede</span><span>impressora</span><span>expedição</span></div>
          </div>
          <Sla tone="danger" label="Atrasado 40min · meta 4h" percent={100} />
          <ol className="ot-timeline">
            <li><time>09:12</time><span>Aberto por <b>Paulo Nery</b></span></li>
            <li><time>09:18</time><span>Atribuído a <b>Gabriel C.</b></span></li>
            <li><time>09:25</time><span>Atendimento iniciado · sessão de trabalho</span></li>
            <li className="is-pause"><time>10:02</time><span>Aguardando terceiro · <b>SLA pausado</b></span></li>
            <li><time>13:10</time><span>Retomado · SLA volta a contar</span></li>
          </ol>
          <div className="ot-note"><Ico name="shield" size={15} />Para resolver, o veredito da TI é obrigatório. A linha do tempo só é escrita pelo banco.</div>
        </div>
      </div>
    </Shell>
  )
}

/* 3 · Inventário */
function InventoryScreen() {
  const assets: Array<[string, string, string, string, Tone, string[]]> = [
    ['NB-0142', 'Dell Latitude 5440', 'Marina Costa · Comercial', 'Em uso', 'ok', ['Mouse', 'Carregador']],
    ['PC-0087', 'Dell OptiPlex 3000', 'Rafael Lima · Financeiro', 'Em uso', 'ok', ['Monitor', 'Teclado', 'Headset']],
    ['NB-0150', 'Lenovo ThinkPad E14', 'Sem responsável', 'Em estoque', 'info', ['Carregador']],
    ['PC-0061', 'HP ProDesk 400', 'Helena Rocha · RH', 'Substituir', 'warn', ['Monitor']],
    ['TB-0009', 'Samsung Galaxy Tab A9', 'Carlos Mota · Atendimento', 'Em uso', 'ok', ['Capa', 'Película']],
    ['PC-0072', 'Dell OptiPlex 3000', 'Júlia Braga · PCP', 'Em uso', 'ok', ['Monitor', 'Mouse']],
    ['NB-0118', 'Acer Aspire 5', 'Sem responsável', 'Substituir', 'warn', ['Carregador']],
    ['SV-0002', 'Servidor de arquivos', 'TI · infraestrutura', 'Em uso', 'ok', ['Nobreak']],
  ]
  return (
    <Shell active="Inventário" title="Inventário" subtitle="Computadores, notebooks, tablets e servidores" url="opentask-ev.vercel.app/workspace/inventario">
      <div className="ot-chips">
        <span className="is-on">Computadores <b>18</b></span><span>Notebooks <b>9</b></span><span>Tablets <b>3</b></span><span>Servidores <b>2</b></span>
      </div>
      <div className="ot-grid ot-grid--2-1">
        <div className="ot-card">
          <table className="ot-table">
            <thead><tr><th>Patrimônio</th><th>Responsável atual</th><th>Situação</th><th>Acessórios</th></tr></thead>
            <tbody>
              {assets.map(([tag, model, owner, status, tone, items]) => (
                <tr key={tag}>
                  <td><b>{tag}</b><small>{model}</small></td>
                  <td>{owner}</td>
                  <td><Pill tone={tone}>{status}</Pill></td>
                  <td><div className="ot-mini-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ot-card">
          <div className="ot-card__head"><div><small>NB-0142</small><h5>Histórico de responsáveis</h5></div></div>
          <ol className="ot-timeline ot-timeline--solid">
            <li><time>2026</time><span><b>Marina Costa</b> · vínculo ativo</span></li>
            <li><time>2025</time><span>Estoque da TI · formatação e revisão</span></li>
            <li><time>2024</time><span><b>Pedro Salles</b> · encerrado ao deixar o setor</span></li>
          </ol>
          <div className="ot-note"><Ico name="link" size={15} />O responsável é derivado dos vínculos. Equipamento com histórico recebe baixa e nunca é excluído.</div>
        </div>
      </div>
    </Shell>
  )
}

/* 4 · Computadores */
function ComputersScreen() {
  const rows: Array<[string, string, string, number, Tone, string, string]> = [
    ['NB-0142', 'Marina Costa', '16 GB · SSD 512 GB', 48, 'ok', '84', 'há 12 min'],
    ['PC-0087', 'Rafael Lima', '8 GB · SSD 256 GB', 71, 'warn', '61', 'há 1 h'],
    ['PC-0061', 'Helena Rocha', '8 GB · HDD 500 GB', 88, 'danger', '47', 'há 3 h'],
    ['NB-0133', 'Júlia Braga', '16 GB · SSD 512 GB', 39, 'ok', '92', 'há 25 min'],
    ['NB-0120', 'Carlos Mota', '8 GB · SSD 256 GB', 57, 'ok', '70', 'há 4 dias'],
    ['PC-0072', 'Júlia Braga', '16 GB · SSD 512 GB', 33, 'ok', '88', 'há 40 min'],
    ['NB-0155', 'Pedro Salles', '8 GB · SSD 256 GB', 64, 'warn', '66', 'há 2 h'],
    ['PC-0049', 'Ana Prado', '16 GB · SSD 1 TB', 27, 'ok', '95', 'há 8 min'],
  ]
  return (
    <Shell active="Computadores" title="Computadores" subtitle="Enviado pelo aplicativo Windows, sem digitação manual" url="opentask-ev.vercel.app/workspace/computadores">
      <div className="ot-kpis">
        <Kpi label="Computadores" value="32" hint="cadastrados" />
        <Kpi label="Reportaram hoje" value="27" hint="pelo aplicativo" tone="ok" />
        <Kpi label="Antivírus com problema" value="2" hint="ausente, desligado ou desatualizado" tone="warn" />
        <Kpi label="Programas pendentes" value="3" hint="obrigatórios não instalados" tone="danger" />
      </div>
      <div className="ot-card">
        <table className="ot-table">
          <thead><tr><th>Equipamento</th><th>Usuário</th><th>Memória · Disco</th><th>Uso do disco</th><th>Programas</th><th>Última sincronização</th></tr></thead>
          <tbody>
            {rows.map(([tag, who, spec, disk, tone, apps, last]) => (
              <tr key={tag}>
                <td><b>{tag}</b><small>Windows 11 Pro</small></td>
                <td>{who}</td>
                <td>{spec}</td>
                <td><Sla tone={tone} label={`${disk}%`} percent={disk} /></td>
                <td>{apps}</td>
                <td><Pill tone={last.includes('dias') ? 'danger' : 'neutral'}>{last}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  )
}

/* 5 · Programas */
function SoftwareScreen() {
  const rows: Array<[string, string, number, string, Tone]> = [
    ['Microsoft 365 Apps', 'Produtividade', 29, 'Obrigatório', 'ok'],
    ['Antivírus corporativo', 'Antivírus', 30, 'Obrigatório', 'ok'],
    ['Sistema da empresa (ERP)', 'Sistema da empresa', 26, 'Obrigatório', 'ok'],
    ['Google Chrome', 'Geral', 31, 'Permitido', 'neutral'],
    ['Adobe Acrobat Reader', 'Geral', 27, 'Permitido', 'neutral'],
    ['7-Zip', 'Geral', 18, 'Permitido', 'neutral'],
    ['Leitor de relatórios', 'Sistema da empresa', 12, 'Permitido', 'neutral'],
    ['VPN corporativa', 'Segurança', 21, 'Obrigatório', 'ok'],
    ['Acesso remoto não autorizado', 'Segurança', 2, 'Proibido', 'danger'],
    ['Cliente de torrent', 'Geral', 1, 'Proibido', 'danger'],
  ]
  return (
    <Shell active="Programas" title="Programas" subtitle="Catálogo de exigências e onde cada programa está instalado" url="opentask-ev.vercel.app/workspace/programas">
      <div className="ot-grid ot-grid--2-1">
        <div className="ot-card">
          <table className="ot-table">
            <thead><tr><th>Programa</th><th>Categoria</th><th>Instalado em</th><th>Situação</th></tr></thead>
            <tbody>
              {rows.map(([name, category, count, status, tone]) => (
                <tr key={name}>
                  <td><b>{name}</b></td>
                  <td>{category}</td>
                  <td><Sla tone="info" label={`${count} PCs`} percent={(count / 32) * 100} /></td>
                  <td><Pill tone={tone}>{status}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ot-stack">
          <div className="ot-card ot-alert">
            <small>Atenção</small>
            <h5>2 computadores com programa proibido</h5>
            <p>Detectado automaticamente na última sincronização. O alerta fica no computador e a remoção, no log de auditoria.</p>
          </div>
          <div className="ot-card">
            <div className="ot-card__head"><div><small>Conformidade</small><h5>Programas obrigatórios</h5></div></div>
            <div className="ot-bar"><i style={{ width: '84%' }} /><i style={{ width: '10%' }} /><i style={{ width: '6%' }} /></div>
            <ul className="ot-legend">
              <li><i />Completos<b>27</b></li>
              <li><i />Pendentes<b>3</b></li>
              <li><i />Sem dados<b>2</b></li>
            </ul>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 6 · Indicadores (tema escuro) */
function IndicatorsScreen() {
  const priority: Array<[string, string, number, string]> = [
    ['Crítica', 'meta 4 h · 1ª resp. 15 min', 88, 'danger'],
    ['Alta', 'meta 8 h · 1ª resp. 30 min', 93, 'warn'],
    ['Média', 'meta 2 d · 1ª resp. 2 h', 97, 'info'],
    ['Baixa', 'meta 4 d · 1ª resp. 4 h', 99, 'neutral'],
  ]
  const techs: Array<[string, number]> = [['Gabriel C.', 21], ['Ana Prado', 12], ['Sem responsável', 3]]
  const cats: Array<[string, number]> = [['Equipamentos', 14], ['Acessos', 11], ['Rede', 8], ['Impressão', 5]]
  return (
    <Shell dark active="Indicadores" title="Indicadores" subtitle="Calculados dos chamados reais, em horário comercial" url="opentask-ev.vercel.app/workspace/indicadores">
      <div className="ot-kpis">
        <Kpi label="Resolvidos no prazo" value="94%" hint="meta 90%" tone="ok" />
        <Kpi label="1ª resposta" value="18 min" hint="média do mês" />
        <Kpi label="Tempo de resolução" value="3 h 12" hint="horário comercial" />
        <Kpi label="Reaberturas" value="2%" hint="sem veredito aceito" tone="warn" />
      </div>
      <div className="ot-grid ot-grid--2-1">
        <div className="ot-card">
          <div className="ot-card__head"><div><small>Por prioridade</small><h5>Cumprimento das metas</h5></div></div>
          <ul className="ot-hbars">
            {priority.map(([name, goal, value]) => (
              <li key={name}><span><b>{name}</b><small>{goal}</small></span><span className="ot-hbars__track"><i style={{ width: `${value}%` }} /></span><strong>{value}%</strong></li>
            ))}
          </ul>
          <div className="ot-card__head ot-card__head--spaced"><div><small>Tendência</small><h5>Chamados por semana</h5></div></div>
          <ul className="ot-columns" aria-hidden="true">
            {[14, 18, 12, 21, 17, 24, 19, 16].map((value, index) => (
              <li key={index}><i style={{ height: `${(value / 24) * 100}%` }} /><small>S{index + 1}</small></li>
            ))}
          </ul>
        </div>
        <div className="ot-stack">
          <div className="ot-card">
            <div className="ot-card__head"><div><small>Por técnico</small><h5>Chamados do mês</h5></div></div>
            <ul className="ot-hbars ot-hbars--compact">
              {techs.map(([name, value]) => <li key={name}><span><b>{name}</b></span><span className="ot-hbars__track"><i style={{ width: `${(value / 21) * 100}%` }} /></span><strong>{value}</strong></li>)}
            </ul>
          </div>
          <div className="ot-card">
            <div className="ot-card__head"><div><small>Por categoria</small><h5>Onde estão os pedidos</h5></div></div>
            <ul className="ot-hbars ot-hbars--compact">
              {cats.map(([name, value]) => <li key={name}><span><b>{name}</b></span><span className="ot-hbars__track"><i style={{ width: `${(value / 14) * 100}%` }} /></span><strong>{value}</strong></li>)}
            </ul>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* 7 · Portal do colaborador (celular) */
function PortalScreen() {
  return (
    <div className="ot ot-stage-bg">
      <div className="ot-stage-copy">
        <span>Portal do colaborador</span>
        <h4>Pedir ajuda em menos de um minuto.</h4>
        <p>O chamado já nasce com o setor, o equipamento e o histórico de quem abriu.</p>
      </div>
      <div className="ot-phone">
        <div className="ot-phone__bar"><Logo /><span className="ot-avatar">MC</span></div>
        <div className="ot-phone__body">
          <h5>Abrir chamado</h5>
          <label>Assunto<span>Notebook sem acesso ao Wi-Fi</span></label>
          <div className="ot-phone__two"><label>Categoria<span>Rede</span></label><label>Impacto<span>Só eu</span></label></div>
          <label>Item afetado<span className="has-icon"><Ico name="monitor" size={14} />NB-0142 · Dell Latitude 5440</span></label>
          <label>Descrição<span className="is-area">Desde cedo não conecto na rede da empresa. Outros aparelhos conectam normalmente.</span></label>
          <button type="button" tabIndex={-1}>Enviar chamado</button>
        </div>
      </div>
      <div className="ot-phone ot-phone--back">
        <div className="ot-phone__bar"><Logo /><span className="ot-avatar">MC</span></div>
        <div className="ot-phone__body">
          <h5>Meus chamados</h5>
          <div className="ot-ticket-card">
            <small>OT-2047 · Rede</small>
            <b>Notebook sem acesso ao Wi-Fi</b>
            <ol className="ot-steps"><li className="is-done">Aberto</li><li className="is-now">Em atendimento</li><li>Resolvido</li></ol>
            <Sla tone="warn" label="Resta 1h 20min" percent={82} />
          </div>
          <div className="ot-ticket-card is-done">
            <small>OT-2031 · Equipamento</small>
            <b>Trocar mouse</b>
            <span className="ot-pill ot-pill--ok">Resolvido no prazo</span>
          </div>
          <h5>Meu equipamento</h5>
          <div className="ot-ticket-card"><b>NB-0142</b><small>Dell Latitude 5440 · Mouse, carregador</small></div>
        </div>
      </div>
    </div>
  )
}

/* 8 · Aplicativo Windows */
function DesktopAppScreen() {
  return (
    <div className="ot ot-stage-bg ot-stage-bg--desk">
      <div className="ot-stage-copy">
        <span>OpenTask para Windows</span>
        <h4>Login sem senha no aplicativo.</h4>
        <p>O código aparece no app e é confirmado no navegador. O computador passa a reportar o próprio inventário.</p>
      </div>
      <div className="ot-winapp ot-winapp--login">
        <div className="ot-winapp__title"><Logo /><span>—  ▢  ✕</span></div>
        <div className="ot-winapp__body">
          <small>Entrar no OpenTask</small>
          <h5>Confirme este código no navegador</h5>
          <div className="ot-code"><span>K7QM</span><i>-</i><span>42XD</span></div>
          <p className="ot-winapp__wait"><i />Aguardando confirmação…</p>
          <p className="ot-winapp__fine">A senha nunca passa pelo aplicativo. Só funciona na rede da empresa.</p>
        </div>
      </div>
      <div className="ot-winapp ot-winapp--settings">
        <div className="ot-winapp__title"><Logo /><span>—  ▢  ✕</span></div>
        <div className="ot-winapp__body">
          <small>Configurações</small>
          <h5>Este computador e o TI</h5>
          <ul className="ot-checks">
            <li><Ico name="check" size={14} />Configuração sincronizada</li>
            <li><Ico name="check" size={14} />Antivírus ativo</li>
            <li><Ico name="check" size={14} />84 programas enviados</li>
            <li className="is-soft">Próximo envio em 5 h 48 min</li>
          </ul>
          <div className="ot-switch"><span>Abrir junto com o Windows</span><i /></div>
        </div>
      </div>
    </div>
  )
}

/* 9 · Logs e segurança */
function LogsScreen() {
  const rows: Array<[string, string, string, string, Tone]> = [
    ['10:41', 'Gabriel C.', 'Status alterado · OT-2045', 'aguardando_terceiro → em_atendimento', 'info'],
    ['10:02', 'Sistema', 'SLA pausado · OT-2045', 'aguardando terceiro', 'warn'],
    ['09:58', 'Gabriel C.', 'Vínculo criado · NB-0142', 'Marina Costa', 'ok'],
    ['09:30', 'Sistema', 'Sincronização do computador', 'NB-0142 · configuração atualizada', 'neutral'],
    ['09:02', 'Gabriel C.', 'Login com verificação em duas etapas', 'acesso liberado', 'ok'],
    ['08:47', 'Helena Rocha', 'Chamado criado · OT-2044', 'Acessos · ERP', 'info'],
    ['08:31', 'Sistema', 'Programa proibido detectado', 'PC-0049 · acesso remoto', 'danger'],
    ['08:12', 'Ana Prado', 'Chamado resolvido · OT-2038', 'veredito registrado', 'ok'],
    ['07:55', 'Gabriel C.', 'Catálogo de programas alterado', 'VPN corporativa · obrigatório', 'info'],
  ]
  return (
    <Shell active="Logs" title="Logs" subtitle="Quem fez o quê, e quando" url="opentask-ev.vercel.app/workspace/logs">
      <div className="ot-grid ot-grid--2-1">
        <div className="ot-card">
          <table className="ot-table">
            <thead><tr><th>Hora</th><th>Quem</th><th>Ação</th><th>Detalhe</th></tr></thead>
            <tbody>
              {rows.map(([time, who, action, detail, tone]) => (
                <tr key={time + action}>
                  <td><Pill tone={tone}>{time}</Pill></td>
                  <td>{who}</td>
                  <td><b>{action}</b></td>
                  <td><small className="ot-mono">{detail}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ot-stack">
          <div className="ot-card ot-security">
            <Ico name="shield" size={22} />
            <h5>Segurança em camadas</h5>
            <ul>
              <li>RLS em todas as tabelas, por papel</li>
              <li>Verificação em duas etapas para a TI</li>
              <li>Contas só por convite confirmado</li>
              <li>Cabeçalhos de segurança e CSP</li>
              <li>Anonimização de perfil (LGPD)</li>
            </ul>
          </div>
        </div>
      </div>
    </Shell>
  )
}

export type ShowcaseScreen = {
  id: string
  group: 'Workspace TI' | 'Portal do colaborador' | 'App Windows'
  title: string
  description: string
  how: string[]
  render: () => ReactNode
}

export const screens: ShowcaseScreen[] = [
  {
    id: 'inicio',
    group: 'Workspace TI',
    title: 'Início: a operação em uma tela',
    description: 'KPIs da fila, atendimentos prioritários com prazo visível, situação do patrimônio e cumprimento da meta mensal.',
    how: ['Prazo e atraso vêm de uma view do banco (ticket_sla_due), não do navegador.', 'A fila é priorizada por impacto e tempo de espera.', 'Fila, patrimônio e metas lado a lado, sem trocar de tela.'],
    render: () => <HomeScreen />,
  },
  {
    id: 'chamados',
    group: 'Workspace TI',
    title: 'Chamados com linha do tempo',
    description: 'Fila filtrável, detalhe do chamado com sessões de trabalho, pausas do SLA e a regra do veredito para resolver.',
    how: ['SLA em horário comercial, pausado só em "aguardando usuário/terceiro".', 'Linha do tempo escrita só pelo banco: ninguém edita o histórico.', 'Etiquetas e categorias editáveis pelo administrador.'],
    render: () => <TicketsScreen />,
  },
  {
    id: 'inventario',
    group: 'Workspace TI',
    title: 'Inventário ligado às pessoas',
    description: 'Computadores, notebooks, tablets e servidores com responsável atual, situação, acessórios e histórico de vínculos.',
    how: ['Responsável derivado dos vínculos: uma única fonte de verdade.', 'Baixa em vez de exclusão quando o equipamento já teve dono.', 'Acessórios com responsável próprio e movimentação entre pessoas.'],
    render: () => <InventoryScreen />,
  },
  {
    id: 'computadores',
    group: 'Workspace TI',
    title: 'Computadores que se reportam sozinhos',
    description: 'Memória, disco, antivírus, programas e última sincronização de cada máquina, enviados pelo aplicativo Windows.',
    how: ['A Edge Function device-sync valida e grava o inventário enviado.', 'O cadastro do equipamento é atualizado quando diverge do que o app encontra.', 'Filtros por pendência de programas, antivírus e computador sem equipamento.'],
    render: () => <ComputersScreen />,
  },
  {
    id: 'programas',
    group: 'Workspace TI',
    title: 'Catálogo de programas',
    description: 'O que é obrigatório, permitido ou proibido, e em quantos computadores cada programa está instalado.',
    how: ['A lista de programas vem do próprio computador, a cada 6 horas.', 'Catálogo editável pela TI, com a alteração registrada na auditoria.', 'Computadores sem programa obrigatório ou com programa proibido aparecem como pendência.'],
    render: () => <SoftwareScreen />,
  },
  {
    id: 'indicadores',
    group: 'Workspace TI',
    title: 'Indicadores de SLA (tema escuro)',
    description: 'Cumprimento por prioridade, primeira resposta, tempo de resolução e carga por técnico e por categoria.',
    how: ['Indicadores calculados dos chamados reais, em horário comercial.', 'Tema claro e escuro com troca em um clique.', 'Metas por prioridade guardadas no banco, sem alterar código.'],
    render: () => <IndicatorsScreen />,
  },
  {
    id: 'portal',
    group: 'Portal do colaborador',
    title: 'Portal no celular',
    description: 'O colaborador abre o chamado já com o equipamento selecionado e acompanha cada etapa até a solução.',
    how: ['Layout compacto para mobile, com detalhes ao toque.', 'O item afetado vem dos equipamentos vinculados à pessoa.', 'Perfil provisionado só por convite com e-mail confirmado.'],
    render: () => <PortalScreen />,
  },
  {
    id: 'app-windows',
    group: 'App Windows',
    title: 'OpenTask para Windows',
    description: 'Aplicativo .NET com login pelo navegador e o cartão "Este computador e o TI", que mostra o que é enviado.',
    how: ['Pareamento por código: a senha não passa pelo aplicativo.', 'Instalação por usuário, sem administrador, com SHA-256 por versão.', 'Edge Function desktop-auth com lógica testada.'],
    render: () => <DesktopAppScreen />,
  },
  {
    id: 'logs',
    group: 'Workspace TI',
    title: 'Logs e segurança',
    description: 'Auditoria de escrita, verificação em duas etapas para a TI e as camadas de proteção por trás do sistema.',
    how: ['Auditoria de escrita no banco, com registro de quem alterou.', 'RLS em todas as tabelas e testes SQL de integridade.', 'Função de anonimização de perfil para pedidos de exclusão (LGPD).'],
    render: () => <LogsScreen />,
  },
]
