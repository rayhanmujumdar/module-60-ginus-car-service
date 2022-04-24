import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';

const EmailVerify = () => {
    const [sendEmailVerification, sending, error]  = useSendEmailVerification(auth)
    const handleEmailVerify = async () => {
        await sendEmailVerification()
        .then(() => {
            if(error){
                toast.error(error.code)
            }else{
                toast.success('Email send')
            }
        })
    }
    return (
        <div className='my-20 flex justify-center items-center flex-col'>
            <h1 className='text-3xl'>please verify your email</h1>
            <button onClick={handleEmailVerify} className='my-2 px-3 py-2 bg-red-400 text-white rounded-md'>click to verify</button>
        </div>
    );
};

export default EmailVerify;