import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router';

import {routeTree} from './routeTree.gen.ts';

const router = createRouter({routeTree})

const rootElement = document.getElementById('root');

if (!rootElement.innerHTML){
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <RouterProvider router={router}/>
  )
}