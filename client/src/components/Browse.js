import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import useNowPopularMovies from '../hooks/useNowPopularMovies.js';
import useUpComingMovies from '../hooks/useUpComingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch.js';

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector(store => store.gpt.toggleGptBool);


  return (
    <div className='bg-black'>
      <Header />
      {showGptSearch ?
        (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
    </div>
  )
}

export default Browse
