import Head from "next/head"
import tw from "twin.macro"
import LoginForm from "../components/LoginForm"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div tw="w-screen h-screen flex justify-center items-center">
          <h1 tw="uppercase font-bold text-xl">halo ini boilerplate</h1>
        </div>
      </main>
    </div>
  )
}
