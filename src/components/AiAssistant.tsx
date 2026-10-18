import React, { useState } from 'react'
import { Icon } from './Icons'

interface AiAssistantProps {
  name: string
  defaultMessage: string
  responses: Record<string, string>
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  name,
  defaultMessage,
  responses,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(defaultMessage)
  const [isThinking, setIsThinking] = useState(false)

  const handleAsk = (query: string) => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return

    setIsThinking(true)
    setInput('')

    window.setTimeout(() => {
      // Direct or keyword-based match
      let reply = responses[trimmed]

      if (!reply) {
        if (trimmed.includes('contact') || trimmed.includes('email') || trimmed.includes('hire') || trimmed.includes('reach')) {
          reply = `You can reach me directly at hello@yared.design or via Telegram/LinkedIn down below.`
        } else if (trimmed.includes('stack') || trimmed.includes('tech') || trimmed.includes('tool') || trimmed.includes('language')) {
          reply = `My core toolkit comprises TypeScript, React, Next.js, Docker, Python, Node.js, and generative AI APIs.`
        } else if (trimmed.includes('project') || trimmed.includes('work') || trimmed.includes('case')) {
          reply = `Check out Neura (adaptive learning AI), FORM / 01 (generative live identity), and Synapse (collaborative agent workspace) in the Work section!`
        } else if (trimmed.includes('who') || trimmed.includes('about')) {
          reply = `I'm ${name} — a creative technologist focused on turning emerging AI and systems into tactile, unforgettable digital experiences.`
        } else {
          // Dynamic conversational response
          const pool = Object.values(responses)
          reply = pool[trimmed.length % pool.length]
        }
      }

      setMessage(reply)
      setIsThinking(false)
    }, 600)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleAsk(input)
  }

  const suggestions = [
    'What do you do?',
    'Are you available?',
    'What is your tech stack?',
    'Why AI?',
  ]

  return (
    <>
      <button
        className={`ai-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
      >
        <Icon name={isOpen ? 'close' : 'spark'} size={20} />
        {!isOpen && <span>ASK MY AI</span>}
      </button>

      <aside className={`assistant ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="assistant-head">
          <div>
            <span className="assistant-status" />
            <span>{name.toUpperCase()} / AI</span>
          </div>
          <span>PORTFOLIO INTELLIGENCE</span>
        </div>

        <div className="assistant-message">
          <Icon name="spark" size={16} />
          <p>{isThinking ? 'Thinking in strange loops...' : message}</p>
        </div>

        <div className="suggestions">
          {suggestions.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handleAsk(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            aria-label="Ask a question"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button aria-label="Send question" type="submit">
            <Icon name="send" size={17} />
          </button>
        </form>
      </aside>
    </>
  )
}
