"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Send, Instagram, MessageSquare, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactSection() {
  const ref = useRef(null)
  // Menghapus once: true agar animasi muncul kembali saat scroll
  const isInView = useInView(ref, { amount: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const errors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      errors.name = "Nama tidak boleh kosong"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email tidak boleh kosong"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format email tidak valid"
      isValid = false
    }

    if (!formData.message.trim()) {
      errors.message = "Pesan tidak boleh kosong"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      const whatsappMessage = encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\nPesan: ${formData.message}`,
      )
      window.open(`https://wa.me/6281553362795?text=${whatsappMessage}`, "_blank", "noopener,noreferrer")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="kontak" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl"></div>
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
            Hubungi Saya
            <Sparkles className="ml-2 text-primary" size={28} />
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui formulir
            di bawah ini atau media sosial.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6 glassmorphism p-8 rounded-xl"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                  aria-required="true"
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? "name-error" : undefined}
                  className={`w-full ${formErrors.name ? "border-red-500" : ""}`}
                />
                {formErrors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {formErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan alamat email Anda"
                  required
                  aria-required="true"
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? "email-error" : undefined}
                  className={`w-full ${formErrors.email ? "border-red-500" : ""}`}
                />
                {formErrors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini"
                  required
                  aria-required="true"
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? "message-error" : undefined}
                  className={`w-full min-h-[120px] ${formErrors.message ? "border-red-500" : ""}`}
                />
                {formErrors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-pink-dark text-white rounded-full flex items-center justify-center gap-2 whatsapp-button"
              >
                <Send size={18} />
                Kirim Pesan via WhatsApp
              </Button>
            </motion.form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Temukan Saya Di</h3>

              <div className="space-y-6">
                <Link
                  href="https://instagram.com/syaaikoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center text-primary">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Instagram</h4>
                    <p className="text-muted-foreground">@syaaikoo</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/6281553362795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center text-primary">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">WhatsApp Pribadi</h4>
                    <p className="text-muted-foreground">0815-5336-2795</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Lokasi</h4>
                    <p className="text-muted-foreground">Chinatown, Surabaya</p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <Link
                    href="https://chat.whatsapp.com/EnHeWbOaHHE1ADdkYZq40v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Grup WhatsApp Komunitas</h4>
                      <p className="text-muted-foreground">Klik untuk bergabung</p>
                    </div>
                  </Link>

                  <Link
                    href="https://whatsapp.com/channel/0029Vb06ernIN9ifOddCsI39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Channel WhatsApp</h4>
                      <p className="text-muted-foreground">Klik untuk mengakses</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Lokasi Map */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 font-poppins text-center">
            Lokasi Saya
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="https://i.ibb.co/TwYFN6M/map.jpg"
                alt="Lokasi Chinatown Surabaya"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="font-bold">Chinatown Surabaya</h4>
                  <p className="text-sm text-muted-foreground">Kembang Jepun, Surabaya</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
