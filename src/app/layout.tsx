// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACA Insurance Agency - The Future is Safe | Trusted Insurance in Kenya',
  description: 'ACA Insurance Agency offers affordable, reliable insurance for Kenyan families and businesses. Motor, Home, Medical, Life, Business, Agriculture and Travel insurance. Licensed by IRA. BNI 100% Kenyan owned. Get a quote today and secure your future with ACA Insurance Agency.',
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
