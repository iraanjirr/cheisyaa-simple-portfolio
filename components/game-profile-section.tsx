"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Sparkles, Trophy, Star, Sword, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function GameProfileSection() {
  const ref = useRef(null)
  // Tidak menggunakan once: true agar animasi muncul kembali saat scroll
  const isInView = useInView(ref, { amount: 0.2 })

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

  const skills = [
    {
      name: "Skill 1: Phantom Slash",
      description: "Benedetta melakukan dash ke arah yang ditentukan, memberikan damage pada musuh yang dilewati.",
      icon: <Sword className="text-primary" />,
    },
    {
      name: "Skill 2: An Eye for An Eye",
      description:
        "Benedetta masuk ke stance defensif, memblokir serangan berikutnya dan melakukan counter attack yang memberikan damage dan efek silence.",
      icon: <Shield className="text-primary" />,
    },
    {
      name: "Ultimate: Alecto - Final Blow",
      description:
        "Benedetta melepaskan serangan area yang kuat, memberikan damage besar pada musuh di sekitarnya dan memperlambat mereka.",
      icon: <Zap className="text-primary" />,
    },
    {
      name: "Passive: Swordout",
      description:
        "Setelah menggunakan skill, basic attack Benedetta berikutnya akan melakukan slash tambahan yang memberikan damage ekstra.",
      icon: <Star className="text-primary" />,
    },
  ]

  return (
    <section id="game-profile" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-light rounded-full opacity-20 blur-3xl"></div>
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
            Profil Game
            <Sparkles className="ml-2 text-primary" size={28} />
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saya juga seorang gamer! Berikut adalah profil Mobile Legends saya dengan hero favorit Benedetta.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-r from-pink-light/50 to-pink-dark/50">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy size={24} className="text-primary" />
                    Profil Mobile Legends
                  </CardTitle>
                  <CardDescription>ID Game: 792189301 | Nickname: syaaikoo</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary">
                      <Image
                        src="https://i.ibb.co/Lk6ZyGK/ml-avatar.jpg"
                        alt="Mobile Legends Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">syaaikoo</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Tier: Mythical Glory</span>
                            <span className="text-sm font-medium">850 Points</span>
                          </div>
                          <Progress value={85} className="h-2 bg-secondary" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Win Rate Overall</span>
                            <span className="text-sm font-medium">68%</span>
                          </div>
                          <Progress value={68} className="h-2 bg-secondary" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Total Matches</span>
                            <span className="text-sm font-medium">1,250</span>
                          </div>
                          <Progress value={75} className="h-2 bg-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-r from-pink-light/50 to-pink-dark/50">
                  <CardTitle className="flex items-center gap-2">
                    <Star size={24} className="text-primary" />
                    Statistik Hero Favorit
                  </CardTitle>
                  <CardDescription>Benedetta | Assassin</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Win Rate Benedetta</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2 bg-secondary" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Total Matches</span>
                        <span className="text-sm font-medium">350</span>
                      </div>
                      <Progress value={70} className="h-2 bg-secondary" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">MMR</span>
                        <span className="text-sm font-medium">3,250</span>
                      </div>
                      <Progress value={85} className="h-2 bg-secondary" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">KDA Ratio</span>
                        <span className="text-sm font-medium">8.5</span>
                      </div>
                      <Progress value={85} className="h-2 bg-secondary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="relative">
              <Card className="overflow-hidden border-2 border-primary/20 h-full">
                <div className="relative h-[300px]">
                  <Image
                    src="https://i.ibb.co/kXZWLpN/benedetta.jpg"
                    alt="Benedetta Hero"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Benedetta</h3>
                    <p className="text-white/80">The Blade of Vengeance</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4">Skill Benedetta</h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="mt-1">{skill.icon}</div>
                        <div>
                          <h5 className="font-medium">{skill.name}</h5>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
