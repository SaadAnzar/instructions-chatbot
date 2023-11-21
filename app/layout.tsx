import "@/styles/globals.css"
import { Metadata } from "next"
import { Toaster } from "sonner"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: "Polymath AI",
    template: "%s - Polymath AI",
  },
  description: "Polymath AI",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Toaster richColors />
          <div>{children}</div>
        </body>
      </html>
    </>
  )
}
