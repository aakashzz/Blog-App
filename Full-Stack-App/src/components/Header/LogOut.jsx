import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/authServices'
import {logout} from '../../feature/authSlice'
function LogOut() {
  const dispatch = useDispatch();
  const logoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
   <button onClick={logoutHandler} className='inline-block text-white text-lg font-semibold bg-red-500 px-6 py-2 duration-200 hover:bg-red-400 rounded-full'>
    Logout
   </button>
  )
}

export default LogOut
