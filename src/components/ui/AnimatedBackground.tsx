'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
    const [stars, setStars] = useState<{ id: number; left: number; top: number; size: number; delay: number }[]>([])

    useEffect(() => {
        const starCount = 50
        const newStars = Array.from({ length: starCount }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
        }))
        setStars(newStars)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-[#0a0a1f]">
            {/* Deep Gradient Mesh */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/50 via-gray-900/0 to-gray-900/80" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1 }} />

            {/* Floating Stars/Particles */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: star.size,
                        height: star.size,
                        opacity: 0.3,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 4,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}
