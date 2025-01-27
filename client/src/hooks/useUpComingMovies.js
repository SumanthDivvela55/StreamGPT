import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../utils/movieSlice.js'

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const getpopular = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1`, API_OPTIONS)
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        getpopular();
    }, [])
}

export default useUpComingMovies
