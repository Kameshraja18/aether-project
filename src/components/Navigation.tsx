'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'Showcase', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/skills' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Aether Projects Logo"
                width={40}
                height={40}
                className="rounded-md object-contain"
                unoptimized
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Aether Projects
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-black ${pathname === item.path ? 'text-black bg-gray-100 font-semibold' : 'text-gray-600'
                    }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="md:hidden border-t border-gray-200 overflow-hidden bg-white"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20
                }}
                transition={{
                  delay: isOpen ? index * 0.1 : 0,
                  duration: 0.3
                }}
              >
                <Link
                  href={item.path}
                  className={`block px-3 py-2 transition-all duration-300 hover:text-black hover:bg-gray-100 rounded-md ${pathname === item.path ? 'text-black bg-gray-100' : 'text-gray-600'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}