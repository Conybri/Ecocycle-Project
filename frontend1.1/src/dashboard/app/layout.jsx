import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
})

export const metadata = {
  title: "ECommerce Dashboard",
  description: "Dashboard administrativo para ecommerce",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${sourceSansPro.variable}`}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
