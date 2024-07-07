import Image from "next/image"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const inter = Inter({ subsets: ["latin"] })

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
