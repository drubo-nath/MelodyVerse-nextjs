import { Advantage } from '@/components/Advantage'
import { Courses } from '@/components/Courses'
import Footer from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { InstructorSection } from '@/components/InstructionSection'
import { Testimonials } from '@/components/Testimonials'
import { Webinars } from '@/components/Webinars'
import React from 'react'

export default function page() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.05'>
      <HeroSection />
      <Advantage />
      <Webinars />
      <Testimonials />
      <InstructorSection />
      <Footer />
    </main>
  )
}
