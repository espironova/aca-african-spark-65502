import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Providers } from './providers'
import '../index.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://aca-insurance.co.ke"),
  title: {
    default: "ACA Insurance Agency - The Future is Safe | Trusted Insurance in Kenya",
    template: '%s | ACA Insurance Agency',
  },
  description: "ACA Insurance Agency offers affordable, reliable insurance for Kenyan families and businesses. Motor, Home, Medical, Life, Business, Agriculture & Travel insurance. Licensed by IRA.",
  openGraph: {
    type: "website",
    url: "https://aca-insurance.co.ke",
    locale: "en_KE",
    siteName: "ACA Insurance Agency",
    title: "ACA Insurance Agency - The Future is Safe | Trusted Insurance in Kenya",
    description: "ACA Insurance Agency offers affordable, reliable insurance for Kenyan families and businesses. Motor, Home, Medical, Life, Business, Agriculture & Travel insurance. Licensed by IRA.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ACAInsuranceKE",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://aca-insurance.co.ke" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en_KE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"InsuranceAgency\",\"name\":\"ACA Insurance Agency\",\"description\":\"ACA Insurance Agency offers affordable, reliable insurance for Kenyan families and businesses. Motor, Home, Medical, Life, Business, Agriculture & Travel insurance. Licensed by IRA.\",\"url\":\"https://aca-insurance.co.ke\",\"telephone\":\"+254722906974\",\"areaServed\":\"Kenya\",\"priceRange\":\"$$\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"CBD\",\"addressLocality\":\"Nairobi\",\"addressCountry\":\"KE\"}}" }}
        />
        <div id="root">
          <Providers>
            <Toaster />
            <Sonner />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
