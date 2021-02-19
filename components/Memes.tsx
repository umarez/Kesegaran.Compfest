import React from "react"
import { useMemesQuery } from "../generated/graphql"
import tw from "twin.macro"
interface MemesProps {}

export const Memes: React.FC<MemesProps> = ({}) => {
  const { data, loading: memesLoading } = useMemesQuery()
  console.log(data)
  return (
    <div tw="w-screen h-screen flex justify-center items-center">
      <h1 tw="uppercase font-bold text-xl">halo ini boilerplate</h1>
      {memesLoading
        ? "loading.."
        : data?.memes.map(meme => (
            <div>
              <h1>{meme.title}</h1>
              {/* <Image src={meme.image_url} /> */}
            </div>
          ))}
    </div>
  )
}
