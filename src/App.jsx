import React from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import './App.css';
import useAuth from './Hooks/useAuth';

export default function App() {
  const { googleProvider, facebookProvider, githubProvider, createUser, userSignOut, user } = useAuth();

  return (
    <div className="min-h-screen bg-base-200 flex flex-col space-y-4 p-10 items-center justify-center p-4">
      <h1 className='text-4xl'>{user?.email}</h1>
      <button className='btn btn-accent'>Sign out</button>
      <div className="hero w-full max-w-3xl rounded-lg shadow-lg bg-base-100">
        <div className="hero-content flex-col w-full p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold">Create User!</h1>
          </div>

          {/* Card / Form */}
          <div className="card w-full shadow-2xl rounded-lg">
            <div className="card-body w-full">
              <form className="flex flex-col gap-4">
                {/* name*/}
                <div>
                  <label className="label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label" htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                  />
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <a className="link link-hover text-sm">Forgot password?</a>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-4">
                  <button className="btn btn-neutral w-full">Login</button>

                  {/* Social Login with Icons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      type="button"
                      onClick={() => socialProvider(googleProvider)}
                      className="btn btn-outline btn-sm flex items-center gap-2"
                    >
                      <FaGoogle className="text-red-500" />
                      Google
                    </button>

                    <button
                      type="button"
                      onClick={() => socialProvider(facebookProvider)}
                      className="btn btn-outline btn-sm flex items-center gap-2"
                    >
                      <FaFacebook className="text-blue-600" />
                      Facebook
                    </button>

                    <button
                      type="button"
                      onClick={() => socialProvider(githubProvider)}
                      className="btn btn-outline btn-sm flex items-center gap-2"
                    >
                      <FaGithub className="text-gray-800" />
                      GitHub
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
