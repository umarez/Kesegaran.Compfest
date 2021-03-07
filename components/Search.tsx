import React, { useState } from "react"
import "twin.macro"
import { GoSearch } from "react-icons/go"
import { useRouter } from "next/router"
import Link from "next/link"

interface SearchProps {}

export const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState("")
  const router = useRouter()
  const [route, setRoute] = useState(true)

  const log = e => {
    e.preventDefault()
    window.location.assign(`${window.location.origin}/Explore/${searchInput}`)
  }

  return (
    <div tw="font-poppins">
      <h1 tw="text-3xl font-bold font-poppins text-center ">Explore.</h1>
      <span tw="m-10 pb-16 ">
        <span tw="flex items-center ">
          <GoSearch size={20} />
          <form
            onSubmit={e => {
              log(e)
            }}
          >
            <input
              type="text"
              placeholder="Search for memes..."
              tw=" ml-2 border border-2 border-gray-300 w-64 pl-1"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
          </form>
        </span>
      </span>
    </div>
  )
}
