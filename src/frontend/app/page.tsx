import { Faqs } from '@/components/landing/Faqs'
import { Footer } from '@/components/landing/Footer'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { Pricing } from '@/components/landing/Pricing'
import { PrimaryFeatures } from '@/components/landing/PrimaryFeatures'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
