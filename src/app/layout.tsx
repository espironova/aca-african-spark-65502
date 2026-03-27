// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACA Insurance Agency - The Future is Safe | Trusted Insurance in Kenya',
  description: 'ACA Insurance Agency offers affordable, reliable insurance for Kenyan families and businesses. Motor, Home, Medical, Life, Business, Agriculture & Travel insurance. Licensed by IRA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
