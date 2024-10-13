import GptMoviesSuggesion from "./GptMoviesSuggesion"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"


const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BG_URL} alt="bg-img" />
            </div>
            <GptSearchBar />
            <GptMoviesSuggesion />
        </div>
    )
}

export default GptSearch
