import "twin.macro"
import { FaBeer } from "react-icons/fa"
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai"
import { RiLineFill } from "react-icons/ri"
import { IconContext } from "react-icons"

export const Footer: React.FC = () => {
  return (
    <>
      <div tw="flex justify-evenly items-center left-0 bottom-0 w-full bg-gray-100 h-24 z-10 ">
        <div tw="flex items-center">
          <span tw="mr-2 text-gray-500">
            <FaBeer size={20} />
          </span>
          <h1 tw="cursor-default text-lg mt-1 font-bold text-gray-500">KESEGARAN.COMPFEST</h1>
        </div>
        <div tw="mr-32 ml-20 flex items-center justify-evenly text-gray-600 ">
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <span tw="px-3 cursor-pointer hover:text-gray-800">
              <AiFillFacebook />
            </span>
            <span tw="px-3 cursor-pointer hover:text-gray-800">
              <AiOutlineTwitter />
            </span>
            <span tw="px-3 cursor-pointer hover:text-gray-800">
              <AiFillYoutube />
            </span>
            <span tw="px-3 cursor-pointer hover:text-gray-800">
              <AiFillInstagram />
            </span>
            <span tw="px-3 cursor-pointer hover:text-gray-800">
              <AiFillLinkedin />
            </span>
            <span tw="px-3 cursor-pointer hover:text-gray-800">
              <RiLineFill />
            </span>
          </IconContext.Provider>
        </div>
        <div>
          <h1>&copy; UmarEz</h1>
        </div>
      </div>
    </>
  )
}
