import React, { useState } from 'react'
import { Icon } from './Icons'

interface AiAssistantProps {
  name: string
  defaultMessage?: string
  responses: Record<string, string>
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  name,
  responses,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [userQuery, setUserQuery] = useState('')
  const [message, setMessage] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  const handleReset = () => {
    setMessage('')
    setUserQuery('')
    setInput('')
    setIsThinking(false)
  }

  const handleToggle = () => {
    if (isOpen) {
      handleReset()
    }
    setIsOpen((prev) => !prev)
  }

  const handleAsk = async (query: string) => {
    const trimmed = query.trim()
    if (!trimmed) return

    setUserQuery(trimmed)
    setIsThinking(true)
    setMessage('')
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data?.reply) {
          setMessage(data.reply)
          setIsThinking(false)
          return
        }
      }
    } catch {
      // Offline or local development fallback
    }

    // Direct or keyword-based match fallback
    const lower = trimmed.toLowerCase()
    let reply = responses[lower]

    if (!reply) {
      if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach') || lower.includes('telegram')) {
        reply = `You can reach me directly at yaredbaby21@gmail.com or via Telegram @Arstatalis down below.`
      } else if (lower.includes('stack') || lower.includes('tech') || lower.includes('tool') || lower.includes('language')) {
        reply = `My core toolkit comprises Node.js, Express, NestJS, Java, PostgreSQL, Redis, React, Next.js, Docker, and Gemini AI.`
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('case')) {
        reply = `Check out VideoTrust AI, Backend Engineer Hub, Church Management ERP, promptHelper, and Channel Vigil Bot in the Work section!`
      } else if (lower.includes('who') || lower.includes('about')) {
        reply = `I'm ${name} — a software engineer building backend systems, applied AI tools, and full-stack applications.`
      } else {
        const pool = Object.values(responses)
        reply = pool[trimmed.length % pool.length]
      }
    }

    setMessage(reply)
    setIsThinking(false)
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
        onClick={handleToggle}
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
          <div className="assistant-head-actions">
            {(Boolean(message) || isThinking) && (
              <button
                type="button"
                className="assistant-reset-btn"
                onClick={handleReset}
                title="Clear conversation"
                aria-label="Clear conversation"
              >
                Clear
              </button>
            )}
            <span>PORTFOLIO INTELLIGENCE</span>
          </div>
        </div>

        {(isThinking || message) ? (
          <div className="assistant-message" tabIndex={0} role="region" aria-label="AI response">
            <Icon name="spark" size={16} className="assistant-spark-icon" />
            <div className="assistant-message-content">
              {userQuery && (
                <div className="assistant-query-tag">
                  <span>Q:</span> {userQuery}
                </div>
              )}
              <p>{isThinking ? 'Thinking in strange loops...' : message.replace(/\*/g, '').replace(/ {2,}/g, ' ')}</p>
            </div>
          </div>
        ) : (
          <div className="assistant-empty-space" aria-label="AI assistant ready">
            <div className="assistant-empty-prompt">
              <Icon name="spark" size={15} />
              <span>Ask a question or select a prompt below</span>
            </div>
          </div>
        )}

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
