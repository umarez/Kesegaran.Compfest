import Link from "next/link"
import { useEffect, useState } from "react"
import "twin.macro"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { MemeRender } from "../../components/RenderMeme"
import { useMemesQuery } from "../../generated/graphql"

const Saved: React.FC = () => {
  const [change, setChange] = useState(true)
  const { data, loading: loading } = useMemesQuery()
  let saved = null
  let ids = []
  let apakek = null
  if (typeof window !== "undefined") {
    saved = localStorage.getItem("id") == null
    if (!saved) {
      ids = localStorage.getItem("id").split(",")
    }
  }
  if (data !== undefined) {
    if (ids.length > 0) {
      apakek = data.memes.filter(e => {
        return ids.includes(e.id.toString())
      })
    }
  }

  return (
    <>
      {data !== undefined && (
        <div>
          <head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
              rel="stylesheet"
            />
          </head>

          <div tw="w-full h-screen ">
            <Navbar color={false} />
            <div tw="flex flex-col justify-center items-center mt-24">
              <h1 tw="mb-20 text-3xl font-bold ">Your Saved memes.</h1>
              {saved ? (
                <div tw="bg-blue-50 w-2/3 h-52 flex flex-col justify-center items-center rounded">
                  <h1 tw="text-gray-400 m-2 ">
                    You have no saved memes. Explore now!
                  </h1>
                  <Link href="/">
                    <button tw="py-3 px-4 bg-blue-700 hover:bg-blue-900 text-sm text-white font-bold rounded">
                      Explore
                    </button>
                  </Link>
                </div>
              ) : (
                apakek !== null && (
                  <div tw="w-full flex justify-center">
                    <MemeRender Data={apakek} />
                  </div>
                )
              )}
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}
export default Saved
