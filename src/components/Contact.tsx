import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact } from '../data/portfolio'

type FormState = 'idle' | 'sending' | 'success' | 'error'
type FieldErrors = { name?: string; challenge?: string }

export function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const directWhatsapp = `https://wa.me/${contact.phone}?text=${encodeURIComponent('Olá, Hilson. Quero conversar sobre um projeto.')}`

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const name = String(data.name ?? '').trim()
    const challenge = String(data.challenge ?? '').trim()
    const nextErrors: FieldErrors = {}

    if (name.length < 2) nextErrors.name = 'Digite seu nome com pelo menos 2 caracteres.'
    if (challenge.length < 12) nextErrors.challenge = 'Conte um pouco mais sobre o problema, usando pelo menos 12 caracteres.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setState('sending')
    const fallbackMessage = `Olá, Hilson. Sou ${name}. Quero conversar sobre: ${challenge}`
    const fallback = `https://wa.me/${contact.phone}?text=${encodeURIComponent(fallbackMessage)}`

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Falha ao preparar contato')
      const result = await response.json() as { redirect: string }
      setState('success')
      window.open(result.redirect, '_blank', 'noopener,noreferrer')
      form.reset()
    } catch {
      setState('error')
      window.open(fallback, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="section-kicker" data-reveal><span>05</span><p>CONTATO / PRÓXIMO PASSO</p></div>
      <div className="contact__grid">
        <div data-reveal>
          <p className="eyebrow">TEM UM PROCESSO PARA ORGANIZAR?</p>
          <h2 id="contact-title">Vamos entender o problema antes de escolher a tecnologia.</h2>
          <p className="contact__intro">
            Conte o que hoje consome tempo, gera retrabalho ou dificulta o atendimento. A primeira conversa serve para descobrir se existe uma solução viável — e qual é o menor caminho para construí-la.
          </p>

          <a className="direct-whatsapp" href={directWhatsapp} target="_blank" rel="noreferrer">
            Prefere ir direto ao WhatsApp? <span aria-hidden="true">↗</span>
          </a>

          <div className="contact__links">
            <a href={`mailto:${contact.email}`}>E-mail <span aria-hidden="true">↗</span></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="/documents/hilson-gabriel-portfolio.pdf" download>Baixar portfólio em PDF <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} data-reveal noValidate>
          <label>
            <span>Seu nome</span>
            <input
              name="name"
              autoComplete="name"
              maxLength={80}
              required
              placeholder="Como posso chamar você?"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              onInput={() => setErrors((current) => ({ ...current, name: undefined }))}
            />
            {errors.name && <small className="field-error" id="name-error">{errors.name}</small>}
          </label>
          <label>
            <span>Empresa <small>(opcional)</small></span>
            <input name="company" autoComplete="organization" maxLength={100} placeholder="Nome da empresa" />
          </label>
          <label>
            <span>O que precisa ser resolvido?</span>
            <textarea
              name="challenge"
              maxLength={800}
              required
              rows={5}
              placeholder="Descreva o processo, dificuldade ou ideia em poucas linhas."
              aria-invalid={Boolean(errors.challenge)}
              aria-describedby={errors.challenge ? 'challenge-error' : undefined}
              onInput={() => setErrors((current) => ({ ...current, challenge: undefined }))}
            />
            {errors.challenge && <small className="field-error" id="challenge-error">{errors.challenge}</small>}
          </label>
          <label className="contact-form__trap" aria-hidden="true">
            <span>Website</span><input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <p className="contact-form__privacy">Os dados são usados apenas para montar sua mensagem no WhatsApp. Nada é armazenado neste formulário.</p>
          <button className="button button--primary" type="submit" disabled={state === 'sending'}>
            {state === 'sending' ? 'Preparando conversa…' : 'Continuar pelo WhatsApp'} <span aria-hidden="true">↗</span>
          </button>
          <p className="form-status" aria-live="polite">
            {state === 'success' && 'Conversa preparada. O WhatsApp foi aberto em uma nova aba.'}
            {state === 'error' && 'O formulário não respondeu, mas o WhatsApp foi aberto com sua mensagem.'}
          </p>
        </form>
      </div>
    </section>
  )
}
