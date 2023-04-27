import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function guestLayouts() {
    const { isLoggedIn } = useSelector((state) => state.AuthReducer);
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
  return (
    <>
      <div className="flex justify-center p-4 bg-purple-500 text-white font-semibold">
        Aplikasi Kontak
      </div>
    </>
  );
}
