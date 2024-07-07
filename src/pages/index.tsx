import Image from "next/image"
import { Inter } from "next/font/google"
import { FormEvent } from "react"
import { Container } from "react-bootstrap"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
  }
  return (
    <Container className="min-h-screen flex items-center align-middle justify-center">Home is getting ready...</Container>
  )
}
