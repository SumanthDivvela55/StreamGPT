import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer'



const VideoBackground = ({ movieId }) => {
    const trailerVideo=useSelector(store=> store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    return (
        <div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XslI8h7cGDs?si=WLMSscaozV54p-Cr&amp;controls=0&amp;start=62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=HQuwAPZG7PmOyiCr&amp;controls=0&autoplay=1&mute=1`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground
