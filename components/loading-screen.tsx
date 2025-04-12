"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart, Sparkles, Star } from "lucide-react"

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    // Deteksi ukuran window hanya di client
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  useEffect(() => {
    // Simulasi loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 500)
          }, 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%`, transition: { duration: 0.5 } },
  }

  const floatingIcons = [
    { icon: <Heart className="text-primary/40" size={24} />, delay: 0 },
    { icon: <Sparkles className="text-pink-light/40" size={20} />, delay: 0.2 },
    { icon: <Star className="text-pink-dark/40" size={16} />, delay: 0.4 },
    { icon: <Heart className="text-pink-light/40" size={16} />, delay: 0.6 },
    { icon: <Sparkles className="text-primary/40" size={24} />, delay: 0.8 },
    { icon: <Star className="text-pink-dark/40" size={20} />, delay: 1 },
  ]

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-light/10 to-pink-dark/10" />

        {/* Floating icons only if windowSize is available (client-side) */}
        {windowSize &&
          floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                x: [
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                ],
                y: [
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                ],
                transition: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: item.delay,
                  ease: "easeInOut",
                },
              }}
            >
              {item.icon}
            </motion.div>
          ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md px-8">
        <motion.div variants={iconVariants} className="mb-8">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white px-6 py-4 rounded-lg shadow-sm border border-pink-light/20"
            >
              <div className="text-4xl font-bold font-poppins text-pink-dark">
                Airaa<span className="text-primary">Cheisyaa</span>
              </div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-0.5 bg-gradient-to-r from-pink-light to-pink-dark mt-2"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-2 font-poppins text-center">
          Memuat Portofolio
        </motion.h1>

        <motion.p variants={itemVariants} className="text-muted-foreground mb-6 text-center">
          Menyiapkan pengalaman yang menarik untuk Anda...
        </motion.p>

        <motion.div variants={itemVariants} className="w-full h-1 bg-secondary rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-light to-pink-dark"
            variants={progressVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}
