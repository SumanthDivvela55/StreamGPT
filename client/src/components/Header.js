import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGpt } from '../utils/gptSlice.js'
import { SUPPORTED_LANGUAGES } from '../utils/constants.js'
import { changeLanguage } from '../utils/configSlice.js'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const page = useSelector(store => store.gpt.toggleGptBool)
  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });

  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsub();
  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGpt())
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      {user && <div className='flex p-2'>
        {
          page &&
          <>
            <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handleLangChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          </>
        }

        <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>{!page ? "GPT Search" :"HomePage"}</button>
        <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header
