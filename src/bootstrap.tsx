import "./globals.css";
import "betfinio_app/style";
import React from 'react';
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router';

import {routeTree} from './routeTree.gen';

const router = createRouter({routeTree})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(<RouterProvider router={router}/>)
}