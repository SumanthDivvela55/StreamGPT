import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptBar = () => {
  const userSelectedLanguauge = useSelector(store => store.config.lang);
  
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[userSelectedLanguauge].gptSearchPlaceholder}/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
          {lang[userSelectedLanguauge].search}
        </button>
      </form>
    </div>
  )
}

export default GptBar
