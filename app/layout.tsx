import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Airaa Cheisyaa | Portofolio",
  description: "Website portofolio personal Airaa Cheisyaa, content creator dan gamer",
  keywords: ["portofolio", "content creator", "gamer", "Airaa Cheisyaa"],
  authors: [{ name: "Airaa Cheisyaa" }],
  openGraph: {
    title: "Airaa Cheisyaa | Portofolio",
    description: "Website portofolio personal Airaa Cheisyaa, content creator dan gamer",
    url: "https://airaa-portofolio.vercel.app",
    siteName: "Airaa Cheisyaa Portofolio",
    images: [
      {
        url: "https://files.catbox.moe/k2vcgb.jpg",
        width: 800,
        height: 600,
        alt: "Airaa Cheisyaa",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airaa Cheisyaa | Portofolio",
    description: "Website portofolio personal Airaa Cheisyaa, content creator dan gamer",
    images: ["https://files.catbox.moe/k2vcgb.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'