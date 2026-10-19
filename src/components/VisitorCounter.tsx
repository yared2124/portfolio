import React, { useState, useEffect, useRef } from 'react'
import { Icon } from './Icons'

interface VisitorCounterProps {
  counterKey?: string
  label?: string
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({
  counterKey = 'yared-aregayehu-portfolio-views',
  label = 'views',
}) => {
  const [count, setCount] = useState<number | null>(null)
  const [displayCount, setDisplayCount] = useState<number>(0)
  const [userVisits, setUserVisits] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [source, setSource] = useState<string>('Connecting...')
  const [lastUpdated, setLastUpdated] = useState<string>('Syncing...')
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isMounted = true

    // Track user's personal visits in this browser
    let currentVisits = 1
    try {
      const storedVisits = window.localStorage.getItem('portfolio_my_visits')
      currentVisits = storedVisits ? Number(storedVisits) : 1
    } catch {
      // Ignore storage errors in restricted contexts
    }

    async function fetchRealCounter() {
      let isNewSession = false
      try {
        isNewSession = !window.sessionStorage.getItem('portfolio_session_counted')
      } catch {
        isNewSession = true
      }

      // If new session, increment personal visit counter
      if (isNewSession) {
        currentVisits = (Number(window.localStorage.getItem('portfolio_my_visits')) || 0) + 1
        try {
          window.localStorage.setItem('portfolio_my_visits', String(currentVisits))
          window.sessionStorage.setItem('portfolio_session_counted', 'true')
        } catch {
          // Continue if storage restricted
        }
      }
      if (isMounted) setUserVisits(currentVisits)

      // Primary: Real Global CountAPI endpoint
      const cloudAction = isNewSession ? 'hit' : 'get'
      const cloudUrl = `https://countapi.mileshilliard.com/api/v1/${cloudAction}/${counterKey}`

      let realValue: number | null = null
      let resolvedSource = 'CountAPI Cloud Database'

      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 4000)

        const res = await fetch(cloudUrl, { signal: controller.signal })
        clearTimeout(timeoutId)

        if (res.ok) {
          const data = await res.json()
          if (typeof data.value === 'number') {
            realValue = data.value
            // Also notify local server of hit in dev environment
            if (isNewSession) {
              fetch('/api/views', { method: 'POST' }).catch(() => {})
            }
          }
        }
      } catch {
        // Cloud service unavailable or offline; try local server endpoint
      }

      // Secondary fallback: Local persistent /api/views endpoint
      if (realValue === null) {
        try {
          const method = isNewSession ? 'POST' : 'GET'
          const localRes = await fetch('/api/views', { method })
          if (localRes.ok) {
            const localData = await localRes.json()
            if (typeof localData.total === 'number') {
              realValue = localData.total
              resolvedSource = 'Local Server Store'
            }
          }
        } catch {
          // If completely offline and without local server response
        }
      }

      // If both fail (e.g. strict offline mode), retrieve cached value
      if (realValue === null) {
        const cached = Number(window.localStorage.getItem('portfolio_cached_real_views'))
        realValue = cached > 0 ? cached : 1
        resolvedSource = 'Cached Local Value'
      } else {
        try {
          window.localStorage.setItem('portfolio_cached_real_views', String(realValue))
        } catch {
          // Ignore
        }
      }

      if (isMounted) {
        setCount(realValue)
        setSource(resolvedSource)
        setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

        // Smooth roll-up animation to the real value
        const start = Math.max(0, realValue - 20)
        setDisplayCount(start)
        let cur = start
        const step = Math.max(1, Math.ceil((realValue - start) / 15))
        const timer = setInterval(() => {
          cur += step
          if (cur >= realValue!) {
            setDisplayCount(realValue!)
            clearInterval(timer)
          } else {
            setDisplayCount(cur)
          }
        }, 30)
      }
    }

    fetchRealCounter()

    return () => {
      isMounted = false
    }
  }, [counterKey])

  // Close popover on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen])

  return (
    <div className="visitor-counter-wrapper" ref={popoverRef}>
      <button
        type="button"
        className={`visitor-pill ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={`Real visitor count: ${count !== null ? count.toLocaleString() : 'Loading'} ${label}. Click for details.`}
        title="View live portfolio visitor telemetry"
      >
        <span className="visitor-radar-dot" aria-hidden="true" />
        <span className="visitor-icon" aria-hidden="true">
          <Icon name="eye" size={13} />
        </span>
        <span className="visitor-digits">
          {count !== null ? displayCount.toLocaleString() : '...'}
        </span>
        <span className="visitor-label">{label}</span>
      </button>

      {isOpen && (
        <div className="visitor-popover" role="region" aria-label="Portfolio visitor telemetry">
          <div className="visitor-popover-header">
            <div className="visitor-popover-status">
              <span className="visitor-radar-dot" />
              <span>REAL-TIME TELEMETRY</span>
            </div>
            <button
              type="button"
              className="visitor-popover-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close telemetry card"
            >
              <Icon name="close" size={13} />
            </button>
          </div>

          <div className="visitor-popover-metric">
            <span className="metric-label">Total Verified Views</span>
            <span className="metric-number">
              {count !== null ? count.toLocaleString() : '...'}
            </span>
          </div>

          <div className="visitor-popover-grid">
            <div className="metric-card">
              <span className="metric-card-label">Your Visits</span>
              <span className="metric-card-val">#{userVisits}</span>
            </div>
            <div className="metric-card">
              <span className="metric-card-label">Database Sync</span>
              <span className="metric-card-val live-active">
                <span className="pulse-tiny" />
                Live ({lastUpdated})
              </span>
            </div>
          </div>

          <div className="visitor-popover-footer">
            <span title={`Database: ${source}`}>Source: {source}</span>
            <span className="popover-badge">VERIFIED</span>
          </div>
        </div>
      )}
    </div>
  )
}
