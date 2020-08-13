import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return(
        <>
            <h3 className='is-almost-black pad-20'>The page does not exist.</h3>
            <NavLink className='is-main-red pad-20' to='/'>Back to home page</NavLink>
        </>
    );
}

