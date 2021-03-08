import "twin.macro"
import { RiSave3Fill } from "react-icons/ri"
import Masonry from "react-responsive-masonry"
import { useEffect, useState } from "react"

interface props {
  Data: Array<Object>
}

export const MemeRender: React.FC<props> = ({ Data }) => {
  let memeData = []
  Data.map(e => {
    memeData.push(e)
  })
  const [active, setActive] = useState(false)
  const [save, setSave] = useState([])

  useEffect(() => {
    let s = []
    setActive(!active)
    if (localStorage.getItem("id") !== null) {
      s = localStorage.getItem("id").split(",")
    }
    s.map(e => {
      save.push(e)
    })
  }, [])

  const addId = id => {
    if (localStorage.getItem("id") !== null) {
      let idInLocal = localStorage.getItem("id")
      let dataId = idInLocal.split(",")
      let stringId = id.toString()
      if (dataId.includes(stringId) !== true) {
        dataId.push(stringId)
        localStorage.setItem("id", dataId.toString())
        setActive(!active)
      }
    } else {
      localStorage.setItem("id", id.toString())
    }
    setActive(!active)
  }

  return (
    <>
      <div tw="flex justify-center items-center flex-wrap w-4/5">
        <Masonry columnsCount={3} gutter="50px">
          {memeData.map(meme => {
            return (
              <div
                className="group"
                tw="rounded-xl relative hover:bg-opacity-25"
                css={{ height: "fit-content" }}
              >
                <div
                  style={{
                    background:
                      "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/9287a986128681.5d909dad50570.jpg')",
                  }}
                  className="group"
                  tw="absolute bottom-0 h-20 w-full rounded-md text-red-700 invisible group-hover:visible bg-opacity-25 font-poppins z-10 flex items-center"
                >
                  <h1 tw="text-white text-xl pl-3 w-4/5">{meme.description}</h1>
                  <span
                    onClick={() => {
                      save.push(meme.id.toString())
                      if (save.includes(meme.id.toString())) {
                        addId(meme.id)
                      }
                    }}
                    tw="mt-1 text-white hover:text-blue-400 cursor-pointer flex"
                    style={
                      save.includes(meme.id.toString())
                        ? { color: "#78c4d4", cursor: "default" }
                        : {}
                    }
                  >
                    <RiSave3Fill size={24} />
                  </span>
                </div>
                <img
                  tw="w-full group-hover:blur rounded-md z-0 hover:blur"
                  src={meme.image_url}
                />
              </div>
            )
          })}
        </Masonry>
      </div>
    </>
  )
}
