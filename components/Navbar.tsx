import React, { useEffect, useState } from "react"
import { RiFileSearchFill, RiSave3Fill } from "react-icons/ri"
import { FaRegLaughSquint } from "react-icons/fa"
import "twin.macro"

export const Navbar: React.FC = () => {
  return (
    <>
      <div tw="fixed flex justify-evenly shadow-md w-screen h-16 text-lg font-poppins font-medium">
        <div tw="w-3/6 flex justify-center items-center ">
          <h1 tw="mr-28 cursor-default text-2xl flex items-center">
            <span tw="mr-2">
              <FaRegLaughSquint />
            </span>
            Memepedia
          </h1>
        </div>
        <div tw="w-5/12 flex justify-evenly items-center px-28 ">
          <span tw="cursor-pointer hover:text-blue-500 flex items-center">
            <RiFileSearchFill /> Explore
          </span>
          <span tw="cursor-pointer hover:text-blue-500 flex items-center">
            <RiSave3Fill />
            Saved
          </span>
        </div>
      </div>
    </>
  )
}
