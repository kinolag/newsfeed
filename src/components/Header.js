import React from 'react';
// import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <div className='pad-20 '>
            <h2 className='is-main-red'>
                The NewsFeed 
                {/* <NavLink to='/' className='a2'>Home</NavLink> */}
            </h2>
            <p className='pad-10 is-white'>A test application made with React</p>
        </div>
    );
}