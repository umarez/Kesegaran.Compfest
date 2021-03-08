import "twin.macro"
import { useRouter } from "next/router"
import { useSearchQuery } from "../../generated/graphql"
import { useMemesQuery } from "../../generated/graphql"
import { Memes } from "../../components/Memes"
import { useEffect } from "react"


const Searched: React.FC = ()=>{

    const router = useRouter()
    const searchString = router.query.search
    let data = useSearchQuery({ variables: {search:`%${searchString}%`}})
    let object = data?.data  
    return <div tw="overflow-x-hidden">
        {object!==undefined && <Memes searchData={object} />}
    </div>
}

export default Searched
