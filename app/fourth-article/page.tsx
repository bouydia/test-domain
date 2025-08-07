'use client'
import React from 'react'
import { ArrowRight, Check, Star, Zap, Shield, Users } from 'lucide-react'

export default function LandingPage() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                FlowAI
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Sign In
            </button>
          </nav>

          {/* Hero Content */}
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Build Smarter
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent block">
                Work Faster
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Supercharge your workflow with AI-powered automation. Transform
              how your team collaborates and creates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Everything you need to succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description:
                  'Process data at incredible speeds with our optimized AI engine.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description:
                  'Bank-level encryption keeps your data safe and compliant.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Team Collaboration',
                description:
                  'Work together seamlessly with real-time sharing and editing.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-white ml-2 text-lg">
              4.9/5 from 10,000+ users
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-12">
            &quot;FlowAI transformed how we work. Our productivity increased by
            300% in just two months.&quot;
          </p>
          <div className="text-purple-300">
            <p className="font-semibold">Sarah Johnson</p>
            <p>CEO, TechStart Inc.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of teams already using FlowAI to work smarter.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}
