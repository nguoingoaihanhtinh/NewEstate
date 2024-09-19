import Category from '@/components/Category'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import { Button } from '@/components/ui/button'
import House from '@/shared/House'
import { SignInButton } from '@clerk/clerk-react'

import React from 'react'


function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <House />
      <Info />
      <Footer />
    </div>
  )
}

export default Home