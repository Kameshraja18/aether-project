import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Star, Download, Shield, Clock, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectById } from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Project Details | Aether Projects`,
    description: 'View detailed project information, pricing, and seller details on Aether Projects marketplace.',
  }
}

// Get project data from the projects database
const getProjectData = (id: string) => {
  const project = getProjectById(id)

  if (!project) {
    return null
  }

  // Convert our project format to the page format with seller info
  return {
    id: project.id,
    title: project.project_title,
    category: project.category,
    price: 5699, // Price for blockchain project in INR
    originalPrice: 6999,
    rating: 4.9,
    reviews: 45,
    seller: {
      name: 'Kameshraja K',
      avatar: '/logo.png', // Use the logo as avatar
      level: 'Expert Developer',
      completedProjects: 127,
      responseTime: '< 4 hours',
      upiId: '9585459935@superyes' // UPI ID for payments
    },
    images: project.project_images.length > 0 ? project.project_images : ['/source/b1.png'],
    description: project.project_description,
    features: [
      'Ethereum smart contracts for immutable voting',
      'MySQL database for user authentication',
      'Real-time polling and results verification',
      'Voter registration system',
      'Tamper-proof audit trails',
      'Web3 wallet integration',
      'Cryptographic vote verification',
      'Admin dashboard for election management',
      'Multi-signature security features',
      'Comprehensive documentation and deployment guide'
    ],
    deliveryTime: '14-21 days',
    revisions: 'Unlimited revisions included'
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectData(id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Marketplace</Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-primary">Projects</Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Images */}
            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                {project.images[0].includes('youtube.com') || project.images[0].includes('youtu.be') ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <a
                      href={project.images[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-center hover:text-red-400 transition-colors"
                    >
                      <div className="text-6xl mb-4">▶️</div>
                      <div className="text-xl font-semibold">Watch Demo Video</div>
                      <div className="text-sm opacity-75">YouTube Channel</div>
                    </a>
                  </div>
                ) : (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {project.images.slice(1).map((media, index) => (
                  <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                    {media.includes('youtube.com') || media.includes('youtu.be') ? (
                      <div className="w-full h-full bg-black flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors">
                        <a
                          href={media}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-center hover:text-red-400 transition-colors"
                        >
                          <div className="text-4xl mb-2">▶️</div>
                          <div className="text-sm font-semibold">YouTube</div>
                        </a>
                      </div>
                    ) : (
                      <Image
                        src={media}
                        alt={`${project.title} ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(project.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-2xl font-bold">₹{project.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{project.originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{project.rating}</span>
                      <span className="text-sm text-muted-foreground">({project.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <Separator className="my-4" />

                <div>
                  <h3 className="font-semibold mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Delivery Time</p>
                      <p className="text-sm text-muted-foreground">{project.deliveryTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Revisions</p>
                      <p className="text-sm text-muted-foreground">{project.revisions}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">₹{project.price}</div>
                  <div className="text-sm text-muted-foreground line-through">₹{project.originalPrice}</div>
                </div>
                <Button className="w-full mb-4" size="lg" asChild>
                  <Link href={`upi://pay?pa=${project.seller.upiId}&pn=${project.seller.name}&am=${project.price}&cu=INR&tn=Purchase%20${encodeURIComponent(project.title)}`}>
                    Purchase Now
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center mb-4">
                  Pay securely via UPI
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:+919585459935">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Seller
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`mailto:aetherprojects@outlook.com?subject=Project%20Inquiry:%20${project.title}&body=Hi%20kameshraja,%0A%0AI%20am%20interested%20in%20your%20${project.title}%20project.%0A%0ACan%20you%20provide%20more%20details%20about%20this%20project?`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email Seller
                    </Link>
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center mt-4">
                  Secure payment • Money-back guarantee
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={project.seller.avatar} alt={project.seller.name} />
                    <AvatarFallback>{project.seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{project.seller.name}</h3>
                    <Badge variant="outline" className="text-xs">{project.seller.level}</Badge>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-medium">{project.seller.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">{project.seller.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{project.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">2 weeks ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Delivered exactly what was promised and on time.</p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4" size="sm">
                  View All {project.reviews} Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}