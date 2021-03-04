import Head from "next/head"
import tw from "twin.macro"
import { Footer } from "../components/Footer"
import { Memes } from "../components/Memes"
import { Navbar } from "../components/Navbar"


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>Memepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="overflow-hidden">
        <Navbar />
          <Memes />
        <Footer />
      </main>
    </div>
  )
}
