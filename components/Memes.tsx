import React, { useEffect, useState } from "react"
import { useMemesQuery } from "../generated/graphql"
import tw from "twin.macro"
import Masonry from "react-responsive-masonry"

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
      <div tw="w-screen min-h-screen flex justify-center items-center flex-wrap z-10 mt-28 mb-36 md:p-20">
        <div tw="flex items-center flex-wrap w-4/5">
          <Masonry columnsCount={3} gutter="50px">
            {memesLoading
              ? "loading.."
              : data?.memes.map(meme => (
                  <div
                    className="group"
                    tw="rounded-xl relative"
                    css={{ height: "fit-content" }}
                  >
                    <div tw="absolute bottom-0 h-10 bg-red-600 w-full rounded-md text-red-700 invisible group-hover:visible">
                      <h1 tw="text-white text-xl">{meme.description}</h1>
                    </div>
                    <img tw="w-full rounded-md" src={meme.image_url} />
                  </div>
                ))}
          </Masonry>

        </div>
      </div>
    </>
  )
}

{
}
