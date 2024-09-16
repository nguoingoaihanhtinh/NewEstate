import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import React from 'react'


function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default Home