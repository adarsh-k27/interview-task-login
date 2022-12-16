import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {app} from './firebase.config'
import { useNavigate } from "react-router-dom";
import { LoginUser } from "./apiHelper";
import UserContext from './Context/index'
import { useContext } from 'react';
function Login({setAuth}) {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const Navigate = useNavigate();
  const {UserLogin}=useContext(UserContext)
  const LoginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      
      setAuth(true);
      window.localStorage.setItem("auth", true);
      firebaseAuth.onAuthStateChanged((userCred) => {
        //console.log(userCred);
        if (userCred) {
          userCred.getIdToken().then((token) => {
            LoginUser(`Bearer ${token}`, UserLogin);
          });
          Navigate("/home", { replace: true });
        } else {
           setAuth(false);
           UserLogin(null);
           Navigate("/");
        }
      });
    });
  }

  return (
    <div className='relative w-screen h-screen flex items-center justify-center bg-black/50'>
      <div className='absolute w-full h-full flex items-center justify-center'>
        <div
          onClick={()=>{
            LoginWithGoogle()
          }}
          className='w-full md:w-[375px] mx-2 md:mx-0 bg-gray-500 p-4 rounded-md shadow-2xl  text-white hover:bg-gray-400 hover:text-black/50 cursor-pointer'
        >
          <div className='py-2 px-4 flex flex-col items-center'>
            <div className='flex gap-4 text-lg items-center font-serif font-semibold'>
              <FcGoogle className='text-2xl' />
              Login with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login