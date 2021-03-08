import "twin.macro"
import { Footer } from "../../components/Footer"
import { Memes } from "../../components/Memes"
import { Navbar } from "../../components/Navbar"
import { Search } from "../../components/Search"

const Explore: React.FC = () => {
  return (
    <div>
      <Navbar color={true} />
      <div tw="w-full h-screen flex flex-col justify-center items-center">
        <Search />
      </div>
      <Footer absolute={true} />
    </div>
  )
}

export default Explore
