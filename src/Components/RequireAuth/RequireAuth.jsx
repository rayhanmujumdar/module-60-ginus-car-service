import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init'
const RequireAuth = ({children}) => {
    console.log(children)
    const [user,loading,error] = useAuthState(auth)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <p>loading...</p>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children
};

export default RequireAuth;