'use client'

import { ReactNode, useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  children: ReactNode
  className?: string
  animationType?: 'gradient' | 'glow' | 'shimmer' | 'words' | 'bounce' | 'float'
}

export function AnimatedHeading({
  children,
  className = '',
  animationType = 'gradient',
}: AnimatedHeadingProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <span className={className}>{children}</span>
  }

  const getAnimationClass = () => {
    switch (animationType) {
      case 'glow':
        return 'text-glow'
      case 'shimmer':
        return 'shimmer-text'
      case 'words':
        return 'animate-word'
      case 'bounce':
        return 'bounce-in'
      case 'float':
        return 'float-text'
      case 'gradient':
      default:
        return 'gradient-text-animated'
    }
  }

  return (
    <span className={`${getAnimationClass()} ${className}`}>
      {children}
    </span>
  )
}

interface WordSplitProps {
  children: string
  className?: string
}

export function WordSplit({ children, className = '' }: WordSplitProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <span className={className}>{children}</span>
  }

  const words = children.split(' ')

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block animate-word"
              style={{
                animationDelay: `${(wordIndex * word.length + charIndex) * 0.05}s`,
              }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}

interface TypewriterProps {
  text: string
  className?: string
  speed?: number
}

export function Typewriter({ text, className = '', speed = 100 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isClient])

  return (
    <span className={`${className} border-r-2 border-primary pr-1`}>
      {displayedText}
    </span>
  )
}
