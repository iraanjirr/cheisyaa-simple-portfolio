"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Heart, Star, Sparkles } from "lucide-react"

// Array gambar untuk bagian About
const aboutImages = [
  "https://i.ibb.co/kXZWLpN/about-1.jpg",
  "https://i.ibb.co/TwYFN6M/about-2.jpg",
  "https://i.ibb.co/Lk6ZyGK/about-3.jpg",
]

export default function AboutSection() {
  const ref = useRef(null)
  // Menghapus once: true agar animasi muncul kembali saat scroll
  const isInView = useInView(ref, { amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  }

  return (
    <section id="tentang" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins inline-flex items-center justify-center"
          >
            <Sparkles className="mr-2 text-primary" size={28} />
            Tentang Saya
            <Sparkles className="ml-2 text-primary" size={28} />
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutImages.map((image, index) => (
            <motion.div
              key={index}
              variants={photoVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="photo-container"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Foto Airaa Cheisyaa ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="photo-overlay flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Airaa Cheisyaa</h3>
                  <p className="text-sm">Foto {index + 1}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="text-lg mb-6 leading-relaxed">
            Halo! Saya Airaa Cheisyaa, senang bisa berbagi cerita dan karya dengan Anda melalui portofolio digital ini.
            Saya selalu bersemangat untuk terhubung dengan orang-orang baru dan berbagi pengalaman.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg mb-6 leading-relaxed">
            Saya percaya bahwa setiap interaksi adalah kesempatan untuk belajar dan tumbuh bersama. Mari terhubung dan
            ciptakan momen berharga!
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-light text-primary">
              <Heart size={24} className="animate-pulse" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-light text-primary">
              <Star size={24} className="animate-wave" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-light text-primary">
              <Sparkles size={24} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
