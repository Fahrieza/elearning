import React from 'react';
import Link from 'next/link'
const LoginForm = () => {
  return (
    // <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      
    // </div>
    <div className="relative h-auto w-80 bg-white rounded-xl shadow-2xl sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="p-10">
        <form className="space-y-6" action="#">
          <img className="static bg-center w-1/2 h-auto mx-8" src="logo-.png" alt="logo"/>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            E-Learning PKSS
          </h5>
          <div>
              <label
              htmlFor="nik"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              NIK
            </label>
            <input
              type="text"
              name="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <Link href = '/imagepick' type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Log in
          </Link>
          <p className='text-xs text-center'>{new Date().getFullYear()}  PT Prima Karya Sarana Sejahtera</p>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
