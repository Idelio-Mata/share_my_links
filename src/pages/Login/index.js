import { useState } from 'react'
import './login.css'
import { Logo} from '../../components/Logo'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login(){
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleLogin(e){
    e.preventDefault();
    
    if( email === '' || password === ''){
      alert("Fill the required fields!")
      return;
    }

    signInWithEmailAndPassword( auth, email, password)
    .then(() => {
      console.log("User logged in successfully")
    })
    .catch(() => {
      console.log("Error during login")
    });
  }


  return(
    <div className='login-container'>
      <Logo/>

      <form className='form' onSubmit={handleLogin}>
        
        <input 
          type='email' 
          placeholder='Type your email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type='password'
          placeholder='********' autocomplete='on'
          value={password}
          onChange ={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}