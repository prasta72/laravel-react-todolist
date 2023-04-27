import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../actions/authAction';
import { GuestLayouts } from '..';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState('');
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    dispatch(userLogin({ email: email, password: password }))
    
  };
  if(loading){
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  
  return (
    <>
      <Toaster />
      <GuestLayouts />
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Login
          </h1>

          <form className="mt-6" onSubmit={(event) => handleSubmit(event)}>
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
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link to='/register'>
              <a
                href="#"
                className="font-medium text-purple-600 hover:underline"
              >
                Register
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
