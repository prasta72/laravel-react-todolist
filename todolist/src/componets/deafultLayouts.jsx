import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userLogout } from '../actions/authAction';
import { Toaster, toast } from 'react-hot-toast';

export default function deafultLayouts() {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state) => state.AuthReducer);
  // console.log(user.name);
  console.log(isLoggedIn);

  const logout = () => {
    dispatch(userLogout())
  }

 
  if (isLoggedIn == false) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Toaster />

      <div className="flex justify-center p-4 bg-purple-500 text-white font-semibold relative">
        <div>Aplikasi Kontak</div>
        <button onClick={logout} className="bg-white text-black rounded p-1 absolute right-8">
          LogOut
        </button>
      </div>
    </>
  );
}
