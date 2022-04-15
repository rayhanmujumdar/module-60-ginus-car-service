import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const Profile = () => {
    const [user,loading,error] = useAuthState(auth);
    if(loading){
        return <p className='text-center'>Loading....</p>
    }
    return (
        !user ? <p className='text-center text-xl my-3 text-red-600'>No Profile Found</p> : <div className='flex justify-center items-center flex-col my-10'>
            <div>
                <h1 className='text-2xl my-2 text-center'>{user?.displayName}</h1>
                <p>Email: {user?.email} {user?.emailVerified ? '✔️' : '❌'}</p>
                {
                user?.emailVerified ? <p className='text-green-700 font-bold text-center my-3'>Verifiyed</p> : <p className='text-red-600 font-bold text-center my-3'>No Verfiy</p>}
                <div className='flex'>
                    {
                        user?.emailVerified || <Link to='/verify' className='bg-green-600 px-3 py-2 rounded-md text-white mx-auto'>please verify</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;