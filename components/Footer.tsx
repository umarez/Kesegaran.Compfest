import "twin.macro"
import { FaRegLaughSquint } from "react-icons/fa"
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { RiLineFill } from "react-icons/ri"
import { IconContext } from "react-icons";

export const Footer: React.FC = () => {
  return (
    <>
      <div tw="fixed flex justify-evenly items-center left-0 bottom-0 w-screen bg-gray-100 h-24">
        <div>
          <h1 tw="cursor-default text-2xl flex items-center">
            <span tw="mr-2">
              <FaRegLaughSquint />
            </span>
            Memepedia
          </h1>
        </div>
        <div tw="mx-32 flex items-center justify-evenly text-gray-600 ">
            <IconContext.Provider value={{size:"1.5rem"}}>
            <span tw="px-3 cursor-pointer hover:text-gray-800"><AiFillFacebook /></span>
            <span tw="px-3 cursor-pointer hover:text-gray-800"><AiOutlineTwitter /></span>
            <span tw="px-3 cursor-pointer hover:text-gray-800"><AiFillYoutube /></span>
            <span tw="px-3 cursor-pointer hover:text-gray-800"><AiFillInstagram/></span>
            <span tw="px-3 cursor-pointer hover:text-gray-800"><AiFillLinkedin /></span>
            <span tw="px-3 cursor-pointer hover:text-gray-800"><RiLineFill /></span>
            </IconContext.Provider>
        </div>
        <div>
            <h1>&copy; UmarEz</h1>
        </div>
      </div>
    </>
  )
}
