import './login.css'

import { Logo} from '../../components/Logo'

export default function Login(){
  return(
    <div className='login-container'>
      <Logo/>

      <form className='form'>
        
        <input 
          type='email' 
          placeholder='Type your email...'
        />
        
        <input
          type='password'
          placeholder='********' autocomplete='on'
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}