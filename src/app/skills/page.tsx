'use client'

import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  Search,
  MessageSquare,
  CreditCard,
  CheckCircle,
  Shield,
  Users,
  Star,
  Clock,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    step: 1,
    title: 'Custom Form Development',
    description: 'Build tailored forms and data collection systems for your specific CS domain requirements.',
    icon: Search,
    details: ['Dynamic form generation', 'Validation & error handling', 'Database integration', 'Responsive design']
  },
  {
    step: 2,
    title: 'API Integration',
    description: 'Connect your forms with external APIs, databases, and third-party services seamlessly.',
    icon: MessageSquare,
    details: ['RESTful API integration', 'Authentication systems', 'Data synchronization', 'Error handling']
  },
  {
    step: 3,
    title: 'Data Processing & Analytics',
    description: 'Implement data processing pipelines and analytics dashboards for form submissions.',
    icon: CreditCard,
    details: ['Data visualization', 'Real-time analytics', 'Export functionality', 'Automated reporting']
  },
  {
    step: 4,
    title: 'Deployment & Maintenance',
    description: 'Deploy your custom forms to production and provide ongoing maintenance and updates.',
    icon: CheckCircle,
    details: ['Cloud deployment', 'Performance optimization', 'Security updates', 'Technical support']
  }
]

const features = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'All forms are built with security best practices and reliable data handling.'
  },
  {
    icon: Users,
    title: 'CS Domain Expertise',
    description: 'Specialized in computer science applications including algorithms, data structures, and system design.'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'Rigorous testing and code review ensure high-quality, maintainable solutions.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Efficient development process with clear timelines and regular progress updates.'
  }
]

export default function HowItWorksPage() {
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
                Custom Form Building
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Specialized in creating custom forms and data collection solutions for computer science applications.
                From algorithm visualizations to data processing interfaces.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 4-Step Process</h2>
              <p className="text-lg text-muted-foreground">
                Getting your project done has never been easier.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <Card className="text-center h-full">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4 font-bold text-xl">
                          {service.step}
                        </div>
                        <service.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                        <div className="space-y-2">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-center text-xs text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ProjectHub?</h2>
              <p className="text-lg text-muted-foreground">
                We make sure every transaction is safe, successful, and satisfying.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <CheckCircle className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied clients who found their perfect creative solution on ProjectHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/projects">
                  Browse Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}