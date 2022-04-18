import React from 'react';
import googleIcon from '../../../../images/Socialicon/google.png'
import facebookIcon from '../../../../images/Socialicon/Facebook.png'
import gitHubIcon from '../../../../images/Socialicon/GitHub.png'
const SocialLogin = ({handleGoogleAuth}) => {
    
    return (
        <div>
            <div className='flex justify-center items-center mt-4'>
                <div className='w-40 bg-red-300 h-0.5'></div>
                <p className='mx-3'>or</p>
                <div className='w-40 bg-red-300 h-0.5'></div>
            </div>
            <div className='my-4'>
                <button onClick={handleGoogleAuth} className='flex justify-center w-full border border-gray-400 py-2 rounded-md     '>
                    <img src={googleIcon} alt="" className='w-6 mx-3'/>
                    <p className='font-semibold'>Google Sign in</p>
                </button>
            </div>
            <div className='my-4'>
                <button className='flex justify-center w-full border border-gray-400 py-2 rounded-md     '>
                    <img src={facebookIcon} alt="" className='w-10 mx-3'/>
                    <p className='font-semibold'>Facebook Sign in</p>
                </button>
            </div>
            <div className='my-4'>
                <button className='flex justify-center w-full border border-gray-400 py-2 rounded-md     '>
                    <img src={gitHubIcon} alt="" className='w-6 mx-3'/>
                    <p className='font-semibold'>gitHub Sign in</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;