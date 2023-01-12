import { useState } from 'react'
import './login.css'
import { Logo} from '../../components/Logo'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { Input } from '../../components/Input'


export default function Login(){
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    
    if( email === '' || password === ''){
      alert("Fill the required fields!")
      return;
    }

    signInWithEmailAndPassword( auth, email, password)
    .then(() => {
      toast.success('Welcome back!')
      navigate( "/admin", { replace: true })
    })
    .catch(() => {
      toast.error ('Error during login')
      console.log("Error during login")
    })


  }


  return(
    <div className='login-container'>
      <Logo/>

      <form className='form' onSubmit={handleLogin}>
        
        <Input
          type='email' 
          placeholder='Type your email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        
        <Input
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