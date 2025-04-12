"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ImagePreloader from "@/components/image-preloader"
import ErrorBoundary from "@/components/error-boundary"

// Lazy load components that are below the fold
const AboutSection = lazy(() => import("@/components/about-section"))
const PortfolioSection = lazy(() => import("@/components/portfolio-section"))
const GameProfileSection = lazy(() => import("@/components/game-profile-section"))
const ContactSection = lazy(() => import("@/components/contact-section"))

// Loading fallback untuk lazy-loaded components
const SectionLoading = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>
)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Fungsi untuk menandai bahwa gambar sudah dimuat
  const handleImagesLoaded = () => {
    setImagesLoaded(true)
  }

  // Fungsi untuk menandai bahwa loading selesai
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Cek apakah semua resource sudah dimuat
  useEffect(() => {
    if (imagesLoaded) {
      // Tambahkan delay sedikit untuk memastikan animasi loading berjalan dengan baik
      const timer = setTimeout(() => {
        // Setelah semua resource dimuat, beri tahu loading screen untuk menyelesaikan animasinya
        handleLoadingComplete()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  return (
    <ErrorBoundary>
      {/* Preload gambar di background */}
      <ImagePreloader onComplete={handleImagesLoaded} />

      {/* Loading screen dengan animasi */}
      <AnimatePresence>{isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}</AnimatePresence>

      {/* Konten utama */}
      <main className={isLoading ? "hidden" : "block"}>
        <Navbar />
        <HeroSection />

        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <PortfolioSection />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <GameProfileSection />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ContactSection />
        </Suspense>

        <Footer />
      </main>
    </ErrorBoundary>
  )
}
