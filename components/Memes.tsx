import React, { useEffect, useState } from "react"
import { useMemesQuery } from "../generated/graphql"
import tw from "twin.macro"

interface MemesProps {}

export const Memes: React.FC<MemesProps> = ({}) => {
  const { data, loading: memesLoading } = useMemesQuery()
  const memeData = []
  useEffect(() => {
    data?.memes.map(meme => {
      memeData.push({
        title: meme.title,
        url: meme.image_url,
        description: meme.description,
      })
    })
    console.log(memeData)
  }, [data])

  return (
    <>
      <div tw="w-screen h-screen flex justify-center items-center flex-wrap">
        <div tw="flex justify-center items-center flex-wrap"></div>
      </div>
    </>
  )
}

{
  /* {memesLoading
          ? "loading.."
          : data?.memes.map(meme => (
              <div>
                <h1 tw="uppercase font-bold text-base">{meme.title}</h1>
                <img tw="w-40" src={meme.image_url} />
              </div>
            ))} */
}
