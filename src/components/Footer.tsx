'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Code, Cpu, Database, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 border-t relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Aether Projects
            </h3>
            <p className="text-sm text-muted-foreground">
             Discover. Connect. Succeed. The Ultimate Platform for Computer Science Projects and Global Collaboration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5 px-2 py-1 rounded">
                  Marketplace
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5 px-2 py-1 rounded">
                  Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/skills" className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5 px-2 py-1 rounded">
                  How It Works
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5 px-2 py-1 rounded">
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold flex items-center gap-2">
              <Code className="h-4 w-4" />
              Technologies
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Database className="h-3 w-3" />
                Full-Stack Development
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Cpu className="h-3 w-3" />
                AI & Machine Learning
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="h-3 w-3" />
                Blockchain & Security
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Code className="h-3 w-3" />
                Cloud & DevOps
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link href="tel:+919585459935" className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10">
                  <Phone className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.google.com/maps/@11.668279,79.286226,15z" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10">
                  <MapPin className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <Link href="mailto:aetherprojects@outlook.com?subject=Project%20Inquiry&body=Hi%20Aether%20Projects%20Team,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you." className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10">
                  <Mail className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Aether Projects. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}