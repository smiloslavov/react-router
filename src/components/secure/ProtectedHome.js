import React from 'react';
import {Link, Route} from 'react-router-dom';


const ProtectedHome = ({match}) => {
    return (
        <div>
            <h1>Protected Page</h1>
            <Link className='btn btn-primary' to={'/logout'}>Sign out</Link>
        </div>)
}
export default ProtectedHome;