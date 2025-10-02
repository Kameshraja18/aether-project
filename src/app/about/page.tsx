'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { Camera, Award, Users, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const teamMembers = [
  {
    name: 'Kameshraja K',
    role: 'Lead Developer & AI Specialist',
    bio: 'Former Google AI researcher with 8+ years in machine learning and full-stack development. Specializes in AI-powered applications and scalable architectures.',
    skills: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS'],
    avatar: '/api/placeholder/120/120'
  },
  {
    name: 'Vignesh kumar V',
    role: 'Blockchain & Security Expert',
    bio: 'Cybersecurity veteran and blockchain architect with experience at major financial institutions. Expert in secure smart contracts and decentralized systems.',
    skills: ['Solidity', 'Web3', 'Cybersecurity', 'Ethereum', 'Rust'],
    avatar: '/api/placeholder/120/120'
  }
]

const technologies = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'Java', 'C#', '.NET', 'Ruby on Rails']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Elasticsearch']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
  },
  {
    category: 'AI & ML',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'LangChain']
  },
  {
    category: 'Blockchain',
    items: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Hyperledger', 'Polkadot']
  }
]

const testimonials = [
  {
    name: 'Vignesh S',
    company: 'TechCorp Inc',
    content: 'Found an amazing full-stack development team through Aether Projects. The code quality exceeded our expectations and the delivery was on time. Highly recommend!',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Dharani D',
    company: 'nano techz',
    content: 'As a freelance developer, Aether Projects has been incredible for finding new clients. The platform connects me with serious projects and fair pricing.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Karthick Raj S',
    company: 'final year project',
    content: 'Aether Projects connected me with expert developers who delivered outstanding AI and data science solutions. Best tech marketplace experience I\'ve had.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  }
]

const milestones = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'Aether Projects launched with a vision to democratize access to professional computer science solutions.'
  },
  {
    year: '2023',
    title: 'First AI Project',
    description: 'Delivered our first AI-powered application, establishing our expertise in machine learning solutions.'
  },
  {
    year: '2024',
    title: 'Blockchain Division',
    description: 'Expanded into blockchain development with successful smart contract deployments for enterprise clients.'
  },
  {
    year: '2024',
    title: '100 Projects Milestone',
    description: 'Reached 100 successful project deliveries, earning recognition as a trusted technology partner.'
  },
  {
    year: '2025',
    title: 'Team Expansion',
    description: 'Grew our expert team to 15+ specialists across multiple technology domains.'
  },
  
]

const achievements = [
  { icon: Users, title: '35+ Projects Delivered', year: '2024', description: 'Software projects successfully completed' },
  { icon: Star, title: '4.9/5 Code Quality', year: '2024', description: 'Client satisfaction and technical excellence' },
  { icon: Award, title: 'Tech Platform of the Year', year: '2024', description: 'Industry recognition for innovation' },
  { icon: Heart, title: '5+ Expert Developers', year: '2024', description: 'Skilled programmers on our platform' }
]

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const storyImages = [
    {
      src: "https://media.licdn.com/dms/image/v2/D5603AQEAOa9KhVb3iw/profile-displayphoto-crop_800_800/B56ZhvocNnHkAI-/0/1754219531553?e=1762387200&v=beta&t=ifsNMdec6S6MMzIURKAAcB31aOUJ3k15YOQ9mxJN7zM",
      alt: "Our Story - Aether Projects Founder"
    },
    {
      src: "https://dcassetcdn.com/design_img/4036093/67150/30400600/dyjzyywy8hpcpw0qvn8xx220q9_image.jpg",
      alt: "Our Story - Aether Projects Journey"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storyImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + storyImages.length) % storyImages.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connecting Code
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  With Innovation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Aether Projects is the premier marketplace where skilled developers meet clients who need
                cutting-edge software solutions. We&apos;ve facilitated over 300 successful projects and counting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Aether Projects was born from the vision of connecting skilled developers with businesses
                    that need innovative software solutions. We recognized that many talented programmers struggle to
                    find clients, while companies often need specialized technical expertise.
                  </p>
                  <p>
                    Since our launch, we&apos;ve built a thriving community of over 150 expert developers
                    across web development, AI/ML, blockchain, IoT, cybersecurity, and cloud computing.
                    Our platform has facilitated more than 300 successful software project deliveries.
                  </p>
                  <p>
                    Today, Aether Projects is the go-to marketplace for quality software development services,
                    where trust, transparency, and technical excellence drive every transaction.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                  <motion.img
                    key={currentSlide}
                    src={storyImages[currentSlide].src}
                    alt={storyImages[currentSlide].alt}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {storyImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognition that reflect my commitment to excellence in video production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of specialists brings decades of combined experience across cutting-edge technologies,
              ensuring your projects are delivered with the highest standards of quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From frontend frameworks to AI models, our team stays at the forefront of technology,
              delivering solutions built with the most advanced and reliable tools available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-primary">{tech.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <Badge key={item} variant="outline" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped Aether Projects into the leading computer science project marketplace.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                    <Card className="relative">
                      <div className={`absolute top-6 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 bg-primary rounded-full border-4 border-background`}></div>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className="mr-3">{milestone.year}</Badge>
                          <h3 className="font-semibold text-lg">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the clients who&apos;ve experienced
              the difference in software development quality and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to bring your software vision to life? Let&apos;s discuss your project needs
              and connect you with expert developers who can deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Browse Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}