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
import { Hero } from './components/Hero.jsx'
import { Main2 } from './components/Main2.jsx'
import {V_Brithday} from './components/V_Brithday.jsx'
import { VEngagement } from './components/VEngagement.jsx'
import { Vhindu } from './components/Vhindu.jsx'
import { Vbuddhist } from './components/Vbuddhist.jsx'
import { Vmuslim } from './components/Vmuslim.jsx'

const router = createBrowserRouter([
  {
     path:'/',
  element: <App />,
  children: [
   {
     path: "/",
     element: <Hero /> ,
   }, 
   {
    path: "/main",
    element: <Main />
   },
   {
    path: "/main2",
    element: <Main2 />
   },
   {
    path: '/hinduCard',
    element: <HinduCards />
   },
   {
    path: '/v-hinduCard',
    element: <Vhindu/>
   },
    {
      path: '/buddhist',
      element: <BuddhistCards/>
    },
    {
      path: '/v-buddhist',
      element: <Vbuddhist />
    },
    {
      path: '/muslim',
      element: <MuslimCards />
    },
    {
      path: '/v-muslim',
      element: <Vmuslim />
    },
    {
      path: '/birthday',
      element: <BrithdayCards/>
    },
    {
      path: '/v-birthday',
      element: <V_Brithday />
    },
   
    {
      path: '/home',
      element: <Hero />
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
    },
    {
      path: '/v-engagement',
      element: <VEngagement />
    }

  
  ],

     },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
