import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact } from '../data/portfolio'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [state, setState] = useState<FormState>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setState('sending')

    const fallbackMessage = `Olá, Hilson. Sou ${data.name}. Quero conversar sobre: ${data.challenge}`
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
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="section-index" aria-hidden="true">06 / CONTATO</div>
      <div className="contact__grid">
        <div data-reveal>
          <p className="eyebrow">Tem um problema para organizar?</p>
          <h2 id="contact-title">Vamos entender o processo antes de escolher a tecnologia.</h2>
          <p className="contact__intro">
            Conte brevemente o que hoje consome tempo, gera retrabalho ou dificulta o atendimento. A primeira conversa
            serve para descobrir se existe uma solução viável — e qual é o menor caminho para construí-la.
          </p>

          <div className="contact__links">
            <a href={`mailto:${contact.email}`}>{contact.email} <span aria-hidden="true">↗</span></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="/documents/hilson-gabriel-portfolio.pdf" download>Baixar portfólio em PDF <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} data-reveal>
          <label>
            <span>Seu nome</span>
            <input name="name" autoComplete="name" minLength={2} maxLength={80} required placeholder="Como posso chamar você?" />
          </label>
          <label>
            <span>Empresa <small>(opcional)</small></span>
            <input name="company" autoComplete="organization" maxLength={100} placeholder="Nome da empresa" />
          </label>
          <label>
            <span>O que precisa ser resolvido?</span>
            <textarea name="challenge" minLength={12} maxLength={800} required rows={5} placeholder="Descreva o processo, dificuldade ou ideia em poucas linhas." />
          </label>
          <label className="contact-form__trap" aria-hidden="true">
            <span>Website</span><input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button button--primary" type="submit" disabled={state === 'sending'}>
            {state === 'sending' ? 'Preparando conversa…' : 'Continuar pelo WhatsApp'} <span aria-hidden="true">↗</span>
          </button>
          <p className="form-status" aria-live="polite">
            {state === 'success' && 'Conversa preparada. O WhatsApp foi aberto em uma nova aba.'}
            {state === 'error' && 'O formulário local não respondeu, mas o WhatsApp foi aberto com sua mensagem.'}
          </p>
        </form>
      </div>
    </section>
  )
}
