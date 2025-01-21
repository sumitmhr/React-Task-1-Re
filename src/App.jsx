import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './components/RootLayout';

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ]);


  return <RouterProvider router={router} />
}

export default App