import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice.js'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlaying();
    }, [])
}

export default useNowPlayingMovies
