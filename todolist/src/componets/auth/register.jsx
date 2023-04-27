import React, { useEffect, useState } from 'react'
import { GuestLayouts } from '..';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistrations } from '../../actions/authAction';
import { Toaster } from 'react-hot-toast';


export default function register() {
  const { getAuthUserResult } = useSelector((state) => state.AuthReducer);
  const [email ,setEmail] = useState('')
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegistrations({name:name, email:email, password:password}))
  }



  return (
    <>
      <GuestLayouts />
      <Toaster />
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Register
          </h1>
          <form className="mt-6" onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Have account?{" "}
            <Link to='/login'>
              <a
                href="#"
                className="font-medium text-purple-600 hover:underline"
              >
                Login
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
