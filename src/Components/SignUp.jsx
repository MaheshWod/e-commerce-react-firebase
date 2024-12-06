import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdCloseCircle } from 'react-icons/io';
import NavLayout from './NavLayout'; // Ensure NavLayout is correctly imported
import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'; // Corrected import
import firebaseAppConfig from '../util/firebase-config';

const auth = getAuth(firebaseAppConfig);

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    FullName: '',
    email: '',
    password: ''
  });

  const signup = async (e) => {
    e.preventDefault();
    setLoader(true);  // Start loader before async call
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
      const user = userCredential.user;
       await updateProfile(auth.currentUser, {displayName:formValue.FullName})
      console.log('User created:', user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);  // Stop loader after async call
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
    setError(null);
  };

  return (
    <NavLayout>
      <div className="grid md:grid-cols-2 md:h-screen overflow-hidden mb-20">
        <img src="/images/signup.jpg" className="md:w-full md:h-full mt-0" alt="Signup" />

        <div className="flex flex-col md:px-8 md:mt-[95px] mt-1">
          <h2 className="md:text-4xl text-2xl font-bold text-red-400">New Users</h2>
          <p className="md:text-lg text-grey-600">Create your account to start shopping</p>

          <form onSubmit={signup} className="md:mt-8 space-y-6">
            <div className="flex flex-col">
              <label className="md:font-semibold md:text-lg mb-1">Full Name</label>
              <input
                onChange={handleOnchange}
                required
                name="FullName"
                type="text"
                placeholder="Enter your name"
                className="p-3 border border-grey-600 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="md:font-semibold md:text-lg mb-1">Email</label>
              <input
                onChange={handleOnchange}
                required
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="p-3 border border-grey-600 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="md:font-semibold md:text-lg mb-1">Password</label>
              <input
                onChange={handleOnchange}
                required
                name="password"
                type="password"
                placeholder="**********************"
                className="p-3 border border-grey-600 rounded"
              />
            </div>

            {/* Show loading or button based on loader state */}
            {
              loader ? (
                <h1 className="text-semibold text-grey-500">Loading...</h1>
              ) : (
                <button type="submit" className="md:py-3 md:px-8 px-3 text-black py-1 rounded bg-red-400 mt-4 hover:bg-green-500 hover:text-white">
                  Sign Up
                </button>
              )
            }
          </form>

          <div className="mt-2">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold p-1 text-blue-500">
              Sign In...
            </Link>
          </div>

          {/* Show error if exists */}
          {error && (
            <div className='flex justify-between items-center mt-2 bg-rose-200 p-2'>
              <p>{error}</p>
              <button onClick={() => setError(null)}>
                <IoMdCloseCircle className="mr-2 text-[20px] text-black" />
              </button>
            </div>
          )}
        </div>
      </div>
    </NavLayout>
  );
};

export default SignUp;