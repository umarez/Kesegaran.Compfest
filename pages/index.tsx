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
        <div>
          <LoginForm />
        </div>
      </main>
    </div>
  )
}
