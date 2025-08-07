'use client'
import React from 'react'
import {
  Award,
  Users,
  Target,
  Heart,
  ArrowRight,
  Quote,
  Star,
  CheckCircle,
} from 'lucide-react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = React.useState('story')

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion-Driven',
      description:
        'We pour our hearts into every project, treating your success as our own.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Focused',
      description:
        'Every decision we make is guided by measurable outcomes and client goals.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative',
      description:
        'We believe the best solutions come from working closely with our clients.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description:
        'We never settle for good enough. Quality is at the core of everything we do.',
    },
  ]

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in digital innovation',
      image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    },
    {
      name: 'David Chen',
      role: 'Creative Director',
      bio: 'Award-winning designer with a passion for user experience',
      image: 'bg-gradient-to-br from-green-400 to-blue-500',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack wizard who turns ideas into digital reality',
      image: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
  ]

  const testimonial = {
    quote:
      "Working with this team has been transformational for our business. They don't just deliver projects - they deliver results that matter.",
    author: 'Jennifer Park',
    title: 'CEO, TechStart Inc.',
    rating: 5,
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              We Build Digital
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Experiences That Matter
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over five years, we&apos;ve been helping businesses transform
              their ideas into powerful digital solutions that drive growth and
              create meaningful connections.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'values', label: 'Our Values' },
              { id: 'team', label: 'Our Team' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Our Story */}
          {activeTab === 'story' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  It all started with a simple belief: technology should make
                  life better, not more complicated. In 2019, our founder Sarah
                  Mitchell left her corporate job to create a different kind of
                  digital agency—one that truly understood both the technical
                  and human sides of digital transformation.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <Quote className="w-12 h-12 text-blue-600 mb-4" />
                  <p className="text-lg text-gray-700 italic">
                    &quot;We saw too many businesses struggling with digital
                    solutions that looked good on paper but failed in the real
                    world. We knew there had to be a better way.&quot;
                  </p>
                  <p className="text-blue-600 font-semibold mt-4">
                    - Sarah Mitchell, Founder
                  </p>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  What started as a one-person consultancy has grown into a
                  passionate team of designers, developers, and strategists. But
                  our core mission remains the same: creating digital
                  experiences that solve real problems and deliver measurable
                  results.
                </p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Today, we&apos;ve helped over 500 businesses transform their
                  digital presence, from startups launching their first product
                  to established companies modernizing their operations. Every
                  project teaches us something new, and we bring those learnings
                  to every client we serve.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-600">
                      To bridge the gap between innovative technology and real
                      business needs, creating digital solutions that drive
                      meaningful growth.
                    </p>
                  </div>
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-gray-600">
                      A world where every business, regardless of size, has
                      access to world-class digital experiences that help them
                      thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Our Values */}
          {activeTab === 'values' && (
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Our values aren&apos;t just words on a wall—they guide every
                decision we make and every solution we create.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-blue-600 mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  How We Work
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Listen',
                      description:
                        'We start by understanding your unique challenges and goals',
                    },
                    {
                      step: '02',
                      title: 'Strategize',
                      description:
                        'We develop a tailored approach that aligns with your vision',
                    },
                    {
                      step: '03',
                      title: 'Create',
                      description:
                        'We build solutions with precision, creativity, and attention to detail',
                    },
                    {
                      step: '04',
                      title: 'Optimize',
                      description:
                        'We continuously improve based on data and feedback',
                    },
                  ].map((process, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {process.step}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {process.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {process.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Our Team */}
          {activeTab === 'team' && (
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Meet the Team
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Behind every great project is a team of passionate individuals
                who care about your success as much as you do.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-48 h-48 ${member.image} rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white`}
                    >
                      {member.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                ))}
              </div>

              {/* Team Culture */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Culture
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: 'Continuous learning and growth',
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: 'Work-life balance that actually works',
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: 'Diverse perspectives and inclusive environment',
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: 'Remote-first with flexible schedules',
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: 'Innovation encouraged at every level',
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6" />,
                      text: 'Community involvement and giving back',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-green-600">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl text-white mb-8 leading-relaxed">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <div className="text-gray-300">
            <p className="font-semibold text-lg">{testimonial.author}</p>
            <p>{testimonial.title}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help transform your digital presence
            and drive real results.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  )
}
