import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Só em desenvolvimento: ?capture=N renderiza uma tela-modelo do OpenTask isolada, usada para gerar as imagens do portfólio.
async function mount() {
  const root = createRoot(document.getElementById('root')!)
  const capture = import.meta.env.DEV ? new URLSearchParams(window.location.search).get('capture') : null
  if (capture !== null) {
    const [{ OpenTaskCapture }] = await Promise.all([import('./components/OpenTaskShowcase'), import('./components/showcase.css')])
    root.render(<OpenTaskCapture index={Number(capture)} />)
    return
  }
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

void mount()
