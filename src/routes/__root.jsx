import React from 'react';
import {Link, Outlet, createRootRoute} from '@tanstack/react-router';

export const Route = createRootRoute({
    component: RootComponent
})

function RootComponent(){
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </nav>
        <hr />
        <Outlet />
        </>
    )
}