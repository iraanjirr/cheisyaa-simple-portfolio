"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [textIndex, setTextIndex] = useState(0)

  // Array berisi 3 teks yang akan diketik secara bergantian
  const texts = ["Selamat Datang di Portofolio Saya", "Content Creator & Gamer", "Let's Connect & Collaborate!"]

  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseDelay = 1500
  const textRef = useRef(0)
  const currentText = texts[textIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentFullText = texts[textIndex]

    // Fungsi untuk menangani animasi mengetik dan menghapus
    const handleTyping = () => {
      // Jika sedang dalam mode menghapus
      if (isDeleting) {
        if (text.length > 0) {
          setText((prev) => prev.substring(0, prev.length - 1))
          timeout = setTimeout(handleTyping, deletingSpeed)
        } else {
          // Teks sudah terhapus semua
          setIsDeleting(false)
          // Pindah ke teks berikutnya
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
          // Beri jeda sebelum mulai mengetik lagi
          timeout = setTimeout(handleTyping, 500)
        }
        return
      }

      // Jika sedang dalam mode mengetik
      if (text.length < currentFullText.length) {
        setText(currentFullText.substring(0, text.length + 1))
        timeout = setTimeout(handleTyping, typingSpeed)
      } else {
        // Setelah selesai mengetik, beri jeda sebelum mulai menghapus
        timeout = setTimeout(() => {
          setIsDeleting(true)
          handleTyping()
        }, pauseDelay)
      }
    }

    // Mulai animasi dengan jeda awal jika baru dimulai
    timeout = setTimeout(handleTyping, text === "" && !isDeleting ? 1000 : 0)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, textIndex, texts])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("tentang")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-dark rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
              <span className="block mb-2">Hai, Saya</span>
              <span className="text-primary text-glow">Airaa Cheisyaa</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8 min-h-[2rem]">
              {text}
              {showCursor && <span className="typing-cursor"></span>}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Selamat datang di portofolio digital saya. Mari terhubung dan berkolaborasi untuk menciptakan sesuatu yang
              luar biasa bersama!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Lapisan animasi luar */}
              <div className="profile-spin"></div>
              <div className="profile-spin-2"></div>

              {/* Background gradient dan blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-dark rounded-full opacity-20 blur-md animate-pulse"></div>

              {/* Container foto dengan border animasi */}
              <div className="relative w-full h-full profile-border">
                <div className="profile-image-container w-full h-full border-4 border-white shadow-xl profile-glow">
                  <Image
                    src="https://files.catbox.moe/k2vcgb.jpg"
                    alt="Airaa Cheisyaa"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Efek partikel berputar (opsional) */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-pink-light"
                  initial={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: 0.7,
                  }}
                  animate={{
                    x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                    opacity: [0.7, 0.3, 0.7],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <ChevronDown size={32} className="text-primary scroll-indicator" />
        </motion.div>
      </div>
    </section>
  )
}
