import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Adminn from './pages/Admin'
import SocialMedia from './pages/SocialMedia'
import Error from './pages/Error'

import Private from './routes/Private'

const router = createBrowserRouter([

  { path: '/', element: <Home/>},
  { path: '/login', element: <Login/>},
  { path: '/admin', element: <Private> <Adminn/> </Private>},
  { path: '/admin/social', element: <Private> <SocialMedia/> </Private>},
  
  { path: '/*', element: <Error/>}
])

export {router};
