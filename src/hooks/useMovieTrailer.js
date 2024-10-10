import { useEffect, useState } from 'react'
import { API_Options } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fethc trailer video && updating the store with trailer video data
    const getMoviesVideo = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_Options)
        const json = await data.json()
        console.log(json)

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMoviesVideo();
    }, [])
}

export default useMovieTrailer
