import GptMoviesSuggesion from "./GptMoviesSuggesion"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"


const GptSearch = () => {
    return (

        <>
            <div className="absolute -z-10">
                <img className="h-screen object-cover w-screen" src={BG_URL} alt="bg-img" />
            </div>
            <div className="">
                <GptSearchBar />
                <GptMoviesSuggesion />
            </div>
        </>
    )
}

export default GptSearch
