import React, { useEffect, useState } from "react"
import { useSearchQuery } from "../generated/graphql"
import tw from "twin.macro"

import { RiSave3Fill } from "react-icons/ri"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Search } from "./Search"
import { MemeRender } from "./RenderMeme"

interface MemesProps {
  searchData: Object
}

export const Memes: React.FC<MemesProps> = ({ searchData }) => {
  const [change, setChange] = useState(true)
  const memeData = []
  let data = JSON.parse(JSON.stringify(searchData))
  data.memes.map(meme => {
    memeData.push({
      title: meme.title,
      image_url: meme.image_url,
      description: meme.description,
      id: meme.id,
    })
  })


  return <>
      <Navbar color={true} />
      <div tw="w-screen flex justify-center items-center flex-col z-10 mt-28 mb-36 md:px-10 py-5">
        <div tw="mb-10">
          <Search />
        </div>
        {memeData.length !== 0 ? <MemeRender Data={memeData} />:<h1 tw="text-gray-600 text-2xl">No Results :(</h1>}
      </div>
      <Footer absolute={memeData.length!==0?false:true} />
    </>
  
}


