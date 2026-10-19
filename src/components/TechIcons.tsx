import React from 'react'

export interface TechIconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 24,
  className = '',
  color,
}) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '')

  switch (normalized) {
    // ----------------------------------------------------
    // FRONTEND
    // ----------------------------------------------------
    case 'javascript':
    case 'js':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 18.2c.4.7 1 1.2 2 1.2 1.1 0 1.8-.6 1.8-1.9v-6.3h-1.7v6.2c0 .5-.2.7-.6.7-.4 0-.6-.2-.8-.6l-.7.7zm7-7.4c-1.8 0-3 1.1-3 2.8 0 1.8 1.1 2.5 2.4 3 .8.3 1.3.6 1.3 1.2 0 .6-.5 1-1.3 1-.9 0-1.5-.5-1.9-1.2l-.8.7c.6 1.1 1.5 1.7 2.7 1.7 1.7 0 2.8-1 2.8-2.6 0-1.6-1-2.4-2.3-2.9-.8-.3-1.4-.6-1.4-1.2 0-.5.4-.9 1.1-.9.7 0 1.2.4 1.6.9l.8-.7c-.6-.9-1.3-1.3-2.3-1.3z"
            fill="#000000"
          />
        </svg>
      )

    case 'typescript':
    case 'ts':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M4.5 9h6v1.5H8.25v8H6.75v-8H4.5V9zm7.25 4.8c.4-.3.9-.5 1.5-.5.9 0 1.5.5 1.5 1.3 0 .4-.2.8-.7 1.1l-1 .6c-1.1.7-1.6 1.4-1.6 2.4 0 1.5 1.1 2.5 2.7 2.5 1 0 1.7-.3 2.2-.8l-.7-1.1c-.4.4-.9.6-1.5.6-.8 0-1.3-.5-1.3-1.2 0-.4.2-.8.8-1.2l1-.6c1.1-.7 1.6-1.5 1.6-2.5 0-1.6-1.1-2.6-2.8-2.6-.9 0-1.8.3-2.3.9l.6 1.2z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'react':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="2.2" fill={color || '#61DAFB'} />
          <g stroke={color || '#61DAFB'} strokeWidth="1.2" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.2"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.2"
              transform="rotate(120 12 12)"
            />
          </g>
        </svg>
      )

    case 'nextjs':
    case 'next':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M8 7.5v9m0-9l9.5 10.5M16 7.5v5.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 13.5C6 11.25 7.5 9 10.5 9c3 0 3.75 2.25 5.25 2.25s2.25-.75 3-2.25c-.75 2.25-2.25 4.5-5.25 4.5s-3.75-2.25-5.25-2.25-2.25.75-3 2.25zm-3 4.5c0-2.25 1.5-4.5 4.5-4.5 3 0 3.75 2.25 5.25 2.25s2.25-.75 3-2.25c-.75 2.25-2.25 4.5-5.25 4.5s-3.75-2.25-5.25-2.25-2.25.75-3 2.25z"
            fill={color || '#06B6D4'}
          />
        </svg>
      )

    // ----------------------------------------------------
    // BACKEND
    // ----------------------------------------------------
    case 'nodejs':
    case 'node':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z"
            stroke={color || '#5FA04E'}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.5v11M7.5 9.2l4.5 2.6 4.5-2.6"
            stroke={color || '#5FA04E'}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'expressjs':
    case 'express':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fontFamily="var(--font-mono, monospace)"
            fontWeight="bold"
            letterSpacing="-0.5px"
            fill="currentColor"
          >
            ex
          </text>
        </svg>
      )

    case 'nestjs':
    case 'nest':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.5l7 3.5v7c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-7l7-3.5z"
            fill="#E0234E"
            fillOpacity="0.15"
            stroke="#E0234E"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 9l2.5 3 2.5-3M12 12v5"
            stroke="#E0234E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'supabase':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8 2.5c.3-.5 1-.6 1.4-.2.2.2.3.4.3.7l-.8 7.5h6.8c.7 0 1.1.8.7 1.4l-9.5 10.6c-.4.5-1.1.5-1.5.1-.2-.2-.3-.5-.3-.7l.8-7.9H3.5c-.7 0-1.1-.7-.8-1.3L12.8 2.5z"
            fill={color || '#3ECF8E'}
          />
        </svg>
      )

    case 'postgresql':
    case 'postgres':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C7.5 3 4 6.5 4 11c0 3.8 2.5 7 6 7.8v2.2c0 .5.4 1 1 1h2c.5 0 1-.5 1-1v-2.2c3.5-.8 6-4 6-7.8 0-4.5-3.5-8-8-8zm-3 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
            stroke={color || '#336791'}
            strokeWidth="1.4"
            fill={color || '#336791'}
            fillOpacity="0.18"
          />
        </svg>
      )

    case 'mongodb':
    case 'mongo':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C12 2 6 7.5 6 13.5c0 3.5 2.5 6.5 6 8.5 3.5-2 6-5 6-8.5C18 7.5 12 2 12 2z"
            fill="#47A248"
            fillOpacity="0.2"
            stroke="#47A248"
            strokeWidth="1.4"
          />
          <path d="M12 2.5v19" stroke="#47A248" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      )

    case 'redis':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.5L3.5 6.8 12 11l8.5-4.2L12 2.5zm-8.5 7.8L12 14.5l8.5-4.2M3.5 14.7L12 19l8.5-4.3"
            stroke="#DC382D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="6.8" r="1.5" fill="#DC382D" />
        </svg>
      )

    case 'graphql':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3z"
            stroke="#E10098"
            strokeWidth="1.3"
          />
          <path
            d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"
            stroke="#E10098"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <circle cx="12" cy="3" r="1.5" fill="#E10098" />
          <circle cx="19.8" cy="7.5" r="1.5" fill="#E10098" />
          <circle cx="19.8" cy="16.5" r="1.5" fill="#E10098" />
          <circle cx="12" cy="21" r="1.5" fill="#E10098" />
          <circle cx="4.2" cy="16.5" r="1.5" fill="#E10098" />
          <circle cx="4.2" cy="7.5" r="1.5" fill="#E10098" />
        </svg>
      )

    case 'prisma':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2 2.4a1.2 1.2 0 00-2 0L2.4 17.5a1.2 1.2 0 00.9 1.9h17.4a1.2 1.2 0 00.9-1.9L13.2 2.4z"
            stroke={color || '#2D3748'}
            strokeWidth="1.4"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M12.2 2.6L8 19.4m4.2-16.8l5.8 16.8"
            stroke={color || '#2D3748'}
            strokeWidth="1.2"
          />
        </svg>
      )

    // ----------------------------------------------------
    // DEVOPS / DEPLOYMENT
    // ----------------------------------------------------
    case 'docker':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 13.5c-.8 0-1.6.3-2.2.8-.7-.4-1.6-.6-2.5-.5-1.5.2-2.7 1.2-3.2 2.6-1.5-.2-3.1.2-4.3 1.1-.8.6-1.4 1.4-1.8 2.3H5c-1.5 0-2.8-.8-3.5-2 .5 3.5 3.3 6.2 6.8 6.2 6.5 0 11.2-4.5 12.5-9 .4-.7.8-1 1.2-1.5z"
            fill="#2496ED"
            fillOpacity="0.25"
          />
          <rect x="5" y="10" width="2.5" height="2" rx=".3" fill="#2496ED" />
          <rect x="8.5" y="10" width="2.5" height="2" rx=".3" fill="#2496ED" />
          <rect x="12" y="10" width="2.5" height="2" rx=".3" fill="#2496ED" />
          <rect x="8.5" y="7.5" width="2.5" height="2" rx=".3" fill="#2496ED" />
          <rect x="12" y="7.5" width="2.5" height="2" rx=".3" fill="#2496ED" />
          <rect x="12" y="5" width="2.5" height="2" rx=".3" fill="#2496ED" />
          <path
            d="M1.5 15.5c1 4 4.5 7 9 7 7 0 12-5 13-10-1 0-2.5.5-3.5 1.5-.5-2.5-2.5-4-5-4"
            stroke="#2496ED"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'kubernetes':
    case 'k8s':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" stroke="#326CE5" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="3" fill="#326CE5" />
          <path
            d="M12 3v6M12 15v6M4 8l5 2.5M15 13.5l5 2.5M4 16l5-2.5M15 10.5l5-2.5"
            stroke="#326CE5"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'vercel':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3L22 20.5H2L12 3z" fill="currentColor" />
        </svg>
      )

    case 'githubactions':
    case 'actions':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9.5" stroke="#2088FF" strokeWidth="1.4" />
          <path
            d="M10 8.5l6 3.5-6 3.5v-7z"
            fill="#2088FF"
          />
          <path
            d="M5 12a7 7 0 0111.9-4.9"
            stroke="#2088FF"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      )

    // ----------------------------------------------------
    // VERSION CONTROL / COLLABORATION
    // ----------------------------------------------------
    case 'git':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6 10.8L13.2 2.4a1.7 1.7 0 00-2.4 0L8.5 4.7l3 3a1.8 1.8 0 012.3 2.3l2.9 2.9a1.8 1.8 0 11-1.2 1.2l-2.8-2.8v4.2a1.8 1.8 0 11-1.7 0V11a1.8 1.8 0 01-1-2.4L7.1 5.7 2.4 10.4a1.7 1.7 0 000 2.4l8.4 8.4a1.7 1.7 0 002.4 0l8.4-8.4a1.7 1.7 0 000-2.4z"
            fill="#F05032"
          />
        </svg>
      )

    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      )

    // ----------------------------------------------------
    // TOOLS / UTILITIES
    // ----------------------------------------------------
    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 2.5L7 11.5l10.5 9 4-2V4.5l-4-2z"
            fill="#007ACC"
          />
          <path
            d="M17.5 2.5l-9.8 8.8L3 8.3 1.8 9.5l4.7 3.9-4.7 3.9 1.2 1.2 4.7-3 9.8 8.7V2.5z"
            fill="#007ACC"
            fillOpacity="0.8"
          />
        </svg>
      )

    case 'postman':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M7 13.5l3-2.5 3 2.5 4-5.5-8.5 2.5-1.5 3z"
            fill="#FFFFFF"
          />
          <circle cx="14.5" cy="8.5" r="1.2" fill="#FFFFFF" />
        </svg>
      )

    case 'figma':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 2h4v5H8a2.5 2.5 0 010-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 010-5z" fill="#A259FF" />
          <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
          <path d="M8 12h4v5a2.5 2.5 0 01-5 0 2.5 2.5 0 011-5z" fill="#0ACF83" />
        </svg>
      )

    case 'chromedevtools':
    case 'chrome':
    case 'devtools':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx="12" cy="12" r="4" fill="#4285F4" />
          <path d="M12 2.5h8L16 9.5" stroke="#EA4335" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M20 12l-4 7-4.5-2.5" stroke="#FBBC05" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 19l-4-7 4.5-2.5" stroke="#34A853" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )

    case 'slack':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10a2 2 0 110-4 2 2 0 010 4zm0 1.5a2 2 0 012 2v4a2 2 0 11-2-2v-4z"
            fill="#E01E5A"
          />
          <path
            d="M10 6a2 2 0 114 0 2 2 0 01-4 0zm1.5 0a2 2 0 012-2h4a2 2 0 11-2 2h-4z"
            fill="#36C5F0"
          />
          <path
            d="M18 14a2 2 0 110 4 2 2 0 010-4zm0-1.5a2 2 0 01-2-2v-4a2 2 0 112 2v4z"
            fill="#2EB67D"
          />
          <path
            d="M14 18a2 2 0 11-4 0 2 2 0 014 0zm-1.5 0a2 2 0 01-2 2h-4a2 2 0 112-2h4z"
            fill="#ECB22E"
          />
        </svg>
      )

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
      )
  }
}
