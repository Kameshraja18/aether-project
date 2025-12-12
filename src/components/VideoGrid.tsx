'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, Eye, Star, Clock, Code } from 'lucide-react'
import { cseProjectsData, getAllProjects, searchProjects, getProjectsByCategory, type Project } from '@/data/projects'

const ITEMS_PER_PAGE = 9

export default function VideoGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [allProjects] = useState(getAllProjects())
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([])

  useEffect(() => {
    let filtered = allProjects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = getProjectsByCategory(selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = searchProjects(searchQuery)
    }

    // Apply pagination
    setDisplayedProjects(filtered.slice(0, currentPage * ITEMS_PER_PAGE))
  }, [selectedCategory, searchQuery, currentPage, allProjects])

  const loadMore = () => {
    let filtered = allProjects

    if (selectedCategory !== 'all') {
      filtered = getProjectsByCategory(selectedCategory)
    }

    if (searchQuery.trim()) {
      filtered = searchProjects(searchQuery)
    }

    const nextProjects = filtered.slice(displayedProjects.length, displayedProjects.length + ITEMS_PER_PAGE)
    setDisplayedProjects([...displayedProjects, ...nextProjects])
  }

  const hasMore = () => {
    let filtered = allProjects

    if (selectedCategory !== 'all') {
      filtered = getProjectsByCategory(selectedCategory)
    }

    if (searchQuery.trim()) {
      filtered = searchProjects(searchQuery)
    }

    return displayedProjects.length < filtered.length
  }

  const categories = Object.keys(cseProjectsData)

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the Lead: Own Next-Gen Computer Science Creations! Discover advanced computer science projects ready for purchase. Specializing in web apps, artificial intelligence, and customized software to meet unique industry needs.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64 h-12">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <SpotlightCard className="h-full bg-[#0f0f2a]/80 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-colors duration-500">
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.cover_image}
                      alt={project.project_title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent opacity-90" />

                  <motion.div
                    className="absolute top-3 left-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Badge variant="secondary" className="glass bg-black/60 text-white border border-white/10 backdrop-blur-md">
                      {project.category}
                    </Badge>
                  </motion.div>

                  <motion.div
                    className="absolute top-3 right-3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {project.featured && (
                      <Badge variant="destructive" className="bg-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.6)] border-0 animate-pulse">
                        <Star className="h-3 w-3 mr-1 fill-black" />
                        Featured
                      </Badge>
                    )}
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-md border-t border-white/10">
                    <Button size="sm" className="w-full bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300" asChild>
                      <Link href={`/projects/${project.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col relative h-full">
                  {/* Subtle glow effect behind content */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="flex items-start justify-between mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <h3 className="font-bold text-xl line-clamp-2 text-white group-hover:text-primary transition-colors duration-300 flex-1 drop-shadow-lg">
                      {project.project_title}
                    </h3>
                  </motion.div>

                  <motion.p
                    className="text-sm text-gray-300 mb-6 line-clamp-3 flex-1 leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {project.project_description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    {project.tech_stack.slice(0, 3).map((tech, tagIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-white/10 text-gray-300 bg-white/5 hover:bg-white/20 hover:text-white transition-all duration-300 hover:border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1.0 }}
                  >
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {project.development_time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {project.year}
                    </div>
                  </motion.div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore() && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={loadMore}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
              >
                Load More Projects
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* No Results Message */}
        {displayedProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-muted-foreground">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}