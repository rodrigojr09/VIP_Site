import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/home/Header'
import Services from '@/components/home/Services'
import Contacts from '@/components/home/Contacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
        <Navbar/>
        <Header/>
        <Services/>
        <Contacts/>
      </>
  )
}
