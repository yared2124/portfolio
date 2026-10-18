import React from 'react'

export interface IconProps {
  name:
    | 'arrow'
    | 'spark'
    | 'send'
    | 'mail'
    | 'plus'
    | 'close'
    | 'sun'
    | 'moon'
    | 'github'
    | 'linkedin'
    | 'upwork'
    | 'telegram'
    | 'external'
  size?: number
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 18, className }) => {
  switch (name) {
    case 'arrow':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )

    case 'spark':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" fill="currentColor" />
        </svg>
      )

    case 'send':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="m4 4 17 8-17 8 3-8-3-8Z" />
          <path d="M7 12h14" />
        </svg>
      )

    case 'mail':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      )

    case 'plus':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      )

    case 'close':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      )

    case 'sun':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </svg>
      )

    case 'moon':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
        </svg>
      )

    case 'github':
      return (
        <svg
          aria-hidden="true"
          fill="currentColor"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          className={className}
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      )

    case 'linkedin':
      return (
        <svg
          aria-hidden="true"
          fill="currentColor"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          className={className}
        >
          <path d="M5.2 8.1H1.8V22h3.4V8.1ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.8c0-4.2-2.2-6.1-5.2-6.1-2.4 0-3.5 1.3-4.1 2.2V8.1H9.3V22h3.4v-6.9c0-1.8.4-3.6 2.7-3.6 2.3 0 2.3 2.1 2.3 3.7V22H22v-8.2Z" />
        </svg>
      )

    case 'upwork':
      return (
        <svg
          aria-hidden="true"
          fill="currentColor"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          className={className}
        >
          <path d="M17.3 7.1c-2.4 0-4.1 1.6-4.9 3.1-1-1.5-1.7-3.4-2.1-5H6.9v7.2c0 1.4-1.1 2.5-2.5 2.5S2 13.8 2 12.4V5.2H0v7.2a4.5 4.5 0 0 0 8.9.9c.5 1 1.1 1.9 1.8 2.7L8.6 22h2.2l1.5-4.5c1.3.8 2.8 1.2 4.5 1.2 4 0 7.2-2.7 7.2-5.9 0-3.1-3-5.7-6.7-5.7Zm-.5 9.6c-1.4 0-2.7-.4-3.8-1.1l.5-1.5c.4-1.4 1.5-4.9 3.8-4.9 2.5 0 4.7 1.7 4.7 3.7 0 2-2.4 3.8-5.2 3.8Z" />
        </svg>
      )

    case 'telegram':
      return (
        <svg
          aria-hidden="true"
          fill="currentColor"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          className={className}
        >
          <path d="m21.5 3.2-3.1 17.1c-.2 1.2-.9 1.5-1.9.9l-4.7-3.6-2.3 2.2c-.2.3-.5.5-1 .5l.3-4.8 8.7-8c.4-.3-.1-.5-.6-.2L6.2 14.2l-4.6-1.5c-1-.3-1-1 .2-1.5l18-7.1c.8-.3 1.6.2 1.3 1.4l.4-2.3Z" />
        </svg>
      )

    case 'external':
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          className={className}
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )

    default:
      return null
  }
}
