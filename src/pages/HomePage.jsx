import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import Bar from '../Landing/Bar'
import Features from '../Landing/Features'
import Findout from '../Landing/Findout'
import Footer from '../Landing/Footer'
import Intro from '../Landing/Intro'


export default function HomePage() {
  return (
    <>
    <header>
      <Bar />
      <Intro />
    </header>
    <main>
      <Features />
      <Findout />
    </main>
    <Footer />
  </>
  )
}
