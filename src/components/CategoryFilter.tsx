'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const categories = [
  { id: 'all', label: 'All Projects', count: 11 },
  { id: 'web', label: 'Web Development', count: 1 },
  { id: 'software', label: 'Software Development', count: 1 },
  { id: 'blockchain', label: 'Blockchain', count: 1 },
  { id: 'iot', label: 'IoT Development', count: 1 },
  { id: 'data', label: 'Data Science', count: 1 },
  { id: 'security', label: 'Cybersecurity', count: 1 },
  { id: 'cloud', label: 'Cloud Computing', count: 1 },
  { id: 'mobile', label: 'Mobile Development', count: 1 },
  { id: 'backend', label: 'Backend Development', count: 1 },
  { id: 'ai', label: 'Artificial Intelligence', count: 1 },
  { id: 'ml', label: 'Machine Learning', count: 1 },
]

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover cutting-edge computer science projects across different technologies. Find the perfect solution for your development needs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'shadow-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70'
                    : 'hover:bg-primary/5 hover:border-primary/50'
                }`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {category.label}
                </motion.span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  <Badge
                    variant="secondary"
                    className={`ml-2 text-xs transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {category.count}
                  </Badge>
                </motion.div>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            Showing {selectedCategory === 'all' ? 'all' : categories.find(c => c.id === selectedCategory)?.label} projects
          </p>
        </motion.div>
      </div>
    </section>
  )
}