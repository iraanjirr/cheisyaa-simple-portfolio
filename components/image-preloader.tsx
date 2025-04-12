"use client"

import { useEffect, useState } from "react"

// Daftar semua gambar yang perlu di-preload dengan link online
const imagesToPreload = [
  "https://files.catbox.moe/k2vcgb.jpg", // Foto profil
  "https://i.ibb.co/kXZWLpN/about-1.jpg", // Foto about 1
  "https://i.ibb.co/TwYFN6M/about-2.jpg", // Foto about 2
  "https://i.ibb.co/Lk6ZyGK/about-3.jpg", // Foto about 3
  "https://i.ibb.co/Jq0DWLF/portfolio-1.jpg", // Portofolio 1
  "https://i.ibb.co/YQnQVxS/portfolio-2.jpg", // Portofolio 2
  "https://i.ibb.co/Hn4vHYS/portfolio-3.jpg", // Portofolio 3
  "https://i.ibb.co/Jq0DWLF/portfolio-4.jpg", // Portofolio 4
  "https://i.ibb.co/YQnQVxS/portfolio-5.jpg", // Portofolio 5
  "https://i.ibb.co/Hn4vHYS/portfolio-6.jpg", // Portofolio 6
  "https://i.ibb.co/Lk6ZyGK/ml-avatar.jpg", // ML Avatar
  "https://i.ibb.co/kXZWLpN/benedetta.jpg", // Benedetta
  "https://i.ibb.co/TwYFN6M/map.jpg", // Peta
]

// Fallback image jika gambar utama gagal dimuat
const fallbackImage = "https://via.placeholder.com/400x600?text=Image+Not+Found"

export default function ImagePreloader({ onComplete }: { onComplete: () => void }) {
  const [loadedCount, setLoadedCount] = useState(0)
  const [failedImages, setFailedImages] = useState<string[]>([])

  useEffect(() => {
    let mounted = true
    let successCount = 0
    let failCount = 0
    const totalImages = imagesToPreload.length

    const preloadImages = async () => {
      const promises = imagesToPreload.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image()

          img.onload = () => {
            if (mounted) {
              successCount++
              setLoadedCount((prev) => prev + 1)
            }
            resolve()
          }

          img.onerror = () => {
            console.error(`Failed to load image: ${src}`)
            if (mounted) {
              failCount++
              setFailedImages((prev) => [...prev, src])

              // Try loading fallback
              const fallbackImg = new Image()
              fallbackImg.src = fallbackImage
              fallbackImg.onload = () => {
                if (mounted) {
                  setLoadedCount((prev) => prev + 1)
                }
                resolve()
              }
              fallbackImg.onerror = () => {
                console.error("Even fallback image failed to load")
                resolve()
              }
            } else {
              resolve()
            }
          }

          img.src = src
        })
      })

      await Promise.all(promises)

      if (mounted) {
        console.log(
          `Image preloading complete. Success: ${successCount}/${totalImages}, Failed: ${failCount}/${totalImages}`,
        )
        onComplete()
      }
    }

    preloadImages()

    return () => {
      mounted = false
    }
  }, [onComplete])

  return null
}
