import React, { useEffect, useRef, useState } from "react"
import { RiFileSearchFill, RiSave3Fill } from "react-icons/ri"
import { FaRegLaughSquint } from "react-icons/fa"
import Link from "next/link"
import "twin.macro"

export const Navbar: React.FC = () => {
    // let prevScroll = window.pageYOffset
    // window.onscroll = () => {
    //   let currentScroll = window.pageYOffset
    //   if (prevScroll > currentScroll) {
    //     document.getElementById("nav").style.top = "0"
    //   } else {
    //     document.getElementById("nav").style.top = "-50px"
    //   }
    //   prevScroll = currentScroll
    // }
  return (
    <>
      <div
        id="nav"
        css={{ transition: "top 0.3s" }}
        tw="fixed block flex justify-evenly left-0 shadow-md w-screen h-16 text-lg font-poppins font-medium z-10 bg-white "
      >
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
