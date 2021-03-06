import Head from "next/head"
import tw from "twin.macro"
import { Footer } from "../components/Footer"
import { Memes } from "../components/Memes"
import { Navbar } from "../components/Navbar"
import { Search } from "../components/Search"
import Explore  from "./Explore"

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>KESEGARAN.COMPFEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Explore />
      </main>
    </div>
  )
}
