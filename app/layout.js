import './globals.css'
import TelegramProvider from './TelegramProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <TelegramProvider />
        {children}
      </body>
    </html>
  )
}
