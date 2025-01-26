import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import useNowPopularMovies from '../hooks/useNowPopularMovies.js';
import useUpComingMovies from '../hooks/useUpComingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useUpComingMovies();
  useTopRatedMovies();


  return (
    <div className='bg-black'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
