type ContactPayload = {
  name?: unknown
  company?: unknown
  challenge?: unknown
  website?: unknown
}

const phone = '5598989198319'

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export default function handler(request: { method?: string; body?: ContactPayload }, response: {
  status: (code: number) => { json: (payload: unknown) => void }
  setHeader: (name: string, value: string) => void
}) {
  response.setHeader('Cache-Control', 'no-store')

  if (request.method === 'GET') {
    return response.status(200).json({ status: 'ok', service: 'hgc-contact' })
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método não permitido.' })
  }

  const body = request.body ?? {}
  if (clean(body.website, 200)) return response.status(200).json({ ok: true })

  const name = clean(body.name, 80)
  const company = clean(body.company, 100)
  const challenge = clean(body.challenge, 800)

  if (name.length < 2 || challenge.length < 12) {
    return response.status(400).json({ error: 'Informe seu nome e descreva brevemente o desafio.' })
  }

  const lines = [
    `Olá, Hilson. Sou ${name}${company ? `, da empresa ${company}` : ''}.`,
    '',
    'Quero conversar sobre este desafio:',
    challenge,
  ]
  const redirect = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`
  return response.status(200).json({ ok: true, redirect })
}
