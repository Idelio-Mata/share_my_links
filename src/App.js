import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Adminn from './pages/Admin'
import Error from './pages/Error'

const router = createBrowserRouter([

  { path: '/', element: <Home/>},
  { path: '/login', element: <Login/>},
  { path: '/admin', element: <Adminn/>},
  { path: '/*', element: <Error/>}
])

export {router};
