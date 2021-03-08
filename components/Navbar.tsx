import React, { useEffect, useRef, useState } from "react"
import { RiFileSearchFill, RiSave3Fill } from "react-icons/ri"
import { FaBeer } from "react-icons/fa"
import Link from "next/link"
import "twin.macro"

interface props {
  color: boolean
}

export const Navbar: React.FC<props> = ({ color }) => {
  if (typeof window !== "undefined") {
    let prevScroll = window.pageYOffset
    window.onscroll = () => {
      let currentScroll = window.pageYOffset
      if (document.getElementById("nav") !== null) {
        if (prevScroll > currentScroll) {
          document.getElementById("nav").style.top = "0"
        } else {
          document.getElementById("nav").style.top = "-50px"
        }
      }
      prevScroll = currentScroll
    }
  }

  return (
    <>
      <div
        id="nav"
        css={{ transition: "top 0.3s" }}
        tw="fixed block flex justify-evenly top-0 left-0 shadow-md w-screen h-16 text-lg font-poppins  z-10 bg-white "
      >
        <div tw="w-3/6 flex justify-center items-center ">
          <h1 tw="mr-64 cursor-default text-xl flex items-center">
            <span tw="mr-2">
              <FaBeer />
            </span>
            KESEGARAN.COMPFEST
          </h1>
        </div>
        <div tw="w-5/12 flex justify-evenly items-center px-28 ">
          <Link href="/">
            <span
              style={color ? { color: "rgba(59, 130, 246)" } : {}}
              tw="cursor-pointer hover:text-blue-500 flex items-center"
            >
              <RiFileSearchFill /> Explore
            </span>
          </Link>
          <Link href="/Saved">
            <span
              style={color ? {} : { color: "rgba(59, 130, 246)" }}
              tw="cursor-pointer hover:text-blue-500 flex items-center"
            >
              <RiSave3Fill />
              Saved
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
