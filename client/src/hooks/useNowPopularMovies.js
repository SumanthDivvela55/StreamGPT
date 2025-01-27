import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice.js'


const useNowPopularMovies = () => {
    const dispatch = useDispatch();
    const getpopular = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=2`, API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getpopular();
    }, [])

}

export default useNowPopularMovies
