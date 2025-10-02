'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'aetherprojects@outlook.com',
    description: 'Send us a detailed message',
    action: 'mailto:aetherprojects@outlook.com?subject=Project%20Inquiry&body=Hi%20Aether%20Projects%20Team,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9585459935',
    description: 'Mon-Fri 9AM-6PM IST',
    action: 'tel:+919585459935'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Main Road, Ulundurpet, Villupuram',
    description: 'Serving clients worldwide',
    action: 'https://www.google.com/maps/@11.668279,79.286226,15z'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 24 hours',
    description: 'Average response time',
    action: '#'
  }
]

const faqs = [
  {
    question: 'What types of computer science projects do you specialize in?',
    answer: 'We specialize in web development, AI/ML applications, blockchain solutions, IoT systems, data analytics, cybersecurity tools, cloud infrastructure, mobile apps, and backend APIs. Each project is tailored to your specific technical requirements.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity: small tools (1-2 weeks), web applications (2-4 weeks), complex systems (4-8 weeks), and enterprise solutions (8+ weeks). We provide detailed timelines during project planning.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer comprehensive post-launch support including bug fixes, feature enhancements, performance optimization, and maintenance. Support packages are available for 3, 6, or 12 months.'
  },
  {
    question: 'What technologies and frameworks do you work with?',
    answer: 'We work with modern technologies including React, Node.js, Python, Solidity, Docker, Kubernetes, AWS, TensorFlow, PostgreSQL, MongoDB, and many more. We stay current with the latest industry standards.'
  },
  {
    question: 'How do you handle project security and confidentiality?',
    answer: 'We implement enterprise-grade security measures including encrypted communications, secure code repositories, NDA agreements, and compliance with industry standards. Your project details remain completely confidential.'
  },
  {
    question: 'Can you work with existing development teams?',
    answer: 'Absolutely! We frequently collaborate with existing teams, providing additional expertise, code reviews, architecture consulting, or taking over specific components. We integrate seamlessly with your workflow.'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechFlow Solutions',
    content: 'Aether Projects delivered our AI-powered analytics platform ahead of schedule. The code quality is exceptional and the team was incredibly responsive throughout the project.',
    rating: 5,
    project: 'AI Analytics Dashboard'
  },
  {
    name: 'Marcus Rodriguez',
    company: 'BlockSecure Inc',
    content: 'The blockchain voting system they built for us exceeded all our security requirements. Professional, knowledgeable, and delivered exactly what we needed.',
    rating: 5,
    project: 'Blockchain Voting Platform'
  },
  {
    name: 'Emily Watson',
    company: 'DataDriven Co',
    content: 'Outstanding work on our IoT home automation system. The integration was seamless and the documentation was comprehensive. Highly recommend!',
    rating: 5,
    project: 'IoT Smart Home System'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budgetRange: '',
    projectDescription: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    if (!formData.budgetRange) newErrors.budgetRange = 'Please select a budget range'
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        project_type: formData.projectType,
        budget_range: formData.budgetRange,
        message: formData.projectDescription,
        to_email: 'aetherprojects@outlook.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        budgetRange: '',
        projectDescription: ''
      })
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
                Get In Touch
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Let&apos;s Build Something Amazing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to bring your computer science project to life? Let&apos;s discuss your vision
                and create something extraordinary together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onClick={() => window.open(method.action, '_blank')}>
                  <CardContent className="p-6">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <method.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{method.title}</h3>
                    <p className="text-primary font-medium mb-1 group-hover:text-primary/80 transition-colors duration-300">{method.value}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{method.description}</p>
                    <div className="mt-3 text-xs text-primary/60 group-hover:text-primary transition-colors duration-300">
                      Click to {method.title.toLowerCase() === 'email' ? 'compose email' : method.title.toLowerCase() === 'phone' ? 'call now' : 'view location'}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-2 text-green-800"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-800"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>Failed to send message. Please try again or contact us directly.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name *</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name *</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-md bg-background ${errors.projectType ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI/ML Application">AI/ML Application</option>
                        <option value="Blockchain Solution">Blockchain Solution</option>
                        <option value="IoT System">IoT System</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Backend API">Backend API</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range *</label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-md bg-background ${errors.budgetRange ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select budget range</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                      {errors.budgetRange && <p className="text-red-500 text-xs mt-1">{errors.budgetRange}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Description *</label>
                      <Textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        className={errors.projectDescription ? 'border-red-500' : ''}
                      />
                      {errors.projectDescription && <p className="text-red-500 text-xs mt-1">{errors.projectDescription}</p>}
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-border pb-4 last:border-b-0"
                    >
                      <h4 className="font-semibold mb-2 text-primary">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Aether Projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                      <Badge variant="outline">{testimonial.project}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
    </div>
  )
}