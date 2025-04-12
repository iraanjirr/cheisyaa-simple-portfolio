"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Uncaught error:", error)
      setHasError(true)
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md p-6">
          <h2 className="text-2xl font-bold mb-4">Oops, Terjadi Kesalahan</h2>
          <p className="mb-6 text-muted-foreground">
            Maaf, terjadi kesalahan saat memuat halaman. Silakan coba muat ulang halaman.
          </p>
          <Button onClick={() => window.location.reload()}>Muat Ulang Halaman</Button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
