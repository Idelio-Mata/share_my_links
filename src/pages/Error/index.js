import './error.css'

import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

export default function Error(){
  return(
    <div className='error'>
      <Logo/>
      <h1>Page not found!</h1>
      <p>The page you'are looking for is not available.</p>
      
      <Link to="/" className='link'>
        Back to Home page!
      </Link>

    </div>
  )
}