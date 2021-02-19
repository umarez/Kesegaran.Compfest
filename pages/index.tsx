import Head from "next/head"
import tw from "twin.macro"
import { useMemesQuery } from "../generated/graphql"
import Image from "next/image"
import { Memes } from "../components/Memes"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Memes />
      </main>
    </div>
  )
}
