import Head from "next/head"
import tw from "twin.macro"
import { Memes } from "../components/Memes"

export default function Home() {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <title>Memepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Memes />
      </main>
    </div>
  )
}
