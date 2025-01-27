import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptBar from './GptBar'
import { BACKGROUND_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div className=''>
            <div className='absolute -z-10'>
                <img src={BACKGROUND_URL} alt="background-img" />
            </div>
            <GptBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch
