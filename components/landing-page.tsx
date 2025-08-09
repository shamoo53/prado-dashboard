"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Target,
  Brain,
  Award,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Globe,
  Zap,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { label: "Total Raised", value: "$2.8M+", icon: DollarSign },
  { label: "Active Campaigns", value: "150+", icon: Target },
  { label: "Global Backers", value: "12K+", icon: Users },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
]

const features = [
  {
    icon: Shield,
    title: "Stellar Blockchain Security",
    description: "Transparent and secure transactions powered by Stellar's proven blockchain technology.",
  },
  {
    icon: Target,
    title: "Trustless Work Model",
    description: "Funds are released only when verified milestones are achieved, ensuring accountability.",
  },
  {
    icon: Brain,
    title: "AI Fraud Detection",
    description: "Advanced AI algorithms protect against fraud and optimize campaign performance.",
  },
  {
    icon: Award,
    title: "NFT Rewards System",
    description: "Earn unique NFT badges for contributions and achievements in the community.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Support humanitarian causes worldwide with transparent fund management.",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Track campaign progress and impact with comprehensive analytics dashboard.",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "NGO Director",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Prado-dash transformed how we manage donations. The milestone system ensures every dollar reaches its intended purpose.",
  },
  {
    name: "Michael Rodriguez",
    role: "Campaign Creator",
    image: "/placeholder.svg?height=60&width=60",
    content: "The AI insights helped optimize our campaign strategy, resulting in 40% more funding than expected.",
  },
  {
    name: "Emma Thompson",
    role: "Regular Donor",
    image: "/placeholder.svg?height=60&width=60",
    content: "I love the transparency and the NFT rewards. It makes giving feel more engaging and trustworthy.",
  },
]

const campaigns = [
  {
    title: "Clean Water for Rural Kenya",
    raised: 45000,
    goal: 75000,
    backers: 234,
    image: "/placeholder.svg?height=200&width=300",
    category: "Water & Sanitation",
  },
  {
    title: "Education Initiative Bangladesh",
    raised: 28000,
    goal: 50000,
    backers: 156,
    image: "/placeholder.svg?height=200&width=300",
    category: "Education",
  },
  {
    title: "Medical Aid Syria Relief",
    raised: 67000,
    goal: 80000,
    backers: 445,
    image: "/placeholder.svg?height=200&width=300",
    category: "Healthcare",
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigationnn*/}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl">Prado-dash</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#campaigns" className="text-gray-600 hover:text-gray-900 transition-colors">
                Campaigns
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                  <Zap className="h-3 w-3 mr-1" />
                  Powered by Stellar Blockchain
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transparent
                  <span className="text-blue-600"> Crowdfunding</span> for Humanitarian Causes
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Support social and humanitarian causes with confidence. Our Stellar blockchain-powered platform
                  ensures transparent fund management with AI-driven fraud protection and milestone-based releases.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Campaign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Prado-dash Dashboard"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Prado-dash?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology to ensure transparency, security, and maximum impact for your
              humanitarian efforts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section id="campaigns" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
            <p className="text-xl text-gray-600">See how our platform is making a real difference around the world</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">{campaign.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">${campaign.raised.toLocaleString()}</span>
                      <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {campaign.backers} backers
                      </div>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Changemakers</h2>
            <p className="text-xl text-gray-600">Hear from our community of donors, campaigners, and organizations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of changemakers using Prado-dash to create transparent, impactful campaigns for humanitarian
            causes worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/signin">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
              >
                Sign In to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-8">
            Get the latest updates on campaigns, platform features, and impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="font-bold text-xl text-white">Prado-dash</span>
              </div>
              <p className="text-gray-400">
                Transparent crowdfunding for humanitarian causes, powered by Stellar blockchain.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Prado-dash. All rights reserved. Built with ❤️ for humanitarian causes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
