'use client'
import WebApp from '@twa-dev/sdk'
import { useEffect } from 'react'

export default function TelegramProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      WebApp.ready()      
      WebApp.expand()  
    } catch (err) {
      console.error('Telegram WebApp error:', err)
    }
  }, [])

  return null
}
