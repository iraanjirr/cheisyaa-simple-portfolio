"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, MessageSquare, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-pink-light/30 to-pink-dark/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 font-poppins"
            >
              Airaa<span className="text-primary">Cheisyaa</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Terima kasih telah mengunjungi website portofolio saya. Mari terhubung dan berkolaborasi untuk menciptakan
              sesuatu yang luar biasa!
            </motion.p>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-4"
            >
              Navigasi Cepat
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#tentang" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-bold mb-4"
            >
              Hubungi Saya
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link
                href="https://instagram.com/syaaikoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} />
                <span>@syaaikoo</span>
              </Link>
              <Link
                href="https://wa.me/6281553362795"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare size={18} />
                <span>0815-5336-2795</span>
              </Link>
              <Link
                href="https://chat.whatsapp.com/EnHeWbOaHHE1ADdkYZq40v"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare size={18} />
                <span>Grup Komunitas</span>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029Vb06ernIN9ifOddCsI39"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare size={18} />
                <span>Channel WhatsApp</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-6 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            &copy; {currentYear} Airaa Cheisyaa. Dibuat dengan <Heart size={16} className="text-primary" /> menggunakan
            Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
