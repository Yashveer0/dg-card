import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {  RouterProvider , createBrowserRouter} from 'react-router-dom'
import { Main } from './components/Main.jsx'
import { HinduCards } from './components/Hindu_Cards.jsx'
import { MuslimCards } from './components/Muslim_Cards.jsx'
import { BuddhistCards } from './components/Buddhist_Cards.jsx'
import { BrithdayCards } from './components/Brithday_Cards.jsx'
import { Service } from './components/Service.jsx'
import { ContactUs } from './components/Contact_Us.jsx'
import { Pay } from './components/Pay.jsx'
import { Engagement } from './components/Engagement.jsx'

const router = createBrowserRouter([
  {
     path:'/',
  element: <App />,
  children: [
   {
     path: "/",
     element: <Main /> ,
   },
   {
    path: '/hinduCard',
    element: <HinduCards />
   },
    {
      path: '/buddhist',
      element: <BuddhistCards/>
    },
    {
      path: '/muslim',
      element: <MuslimCards />
    },
    {
      path: '/birthday',
      element: <BrithdayCards/>
    },
    {
      path: '/home',
      element: <Main />
    },
    {
      path: '/service',
      element: <Service/>
    },
    {
      path: '/contact',
      element: <ContactUs />
    },{
      path: '/pay',
      element: <Pay/>
    },
    {
      path: '/engagement',
      element: <Engagement />
    }

  
  ],

     },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
