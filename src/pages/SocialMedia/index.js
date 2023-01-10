import { useState } from 'react'
import './social.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink} from 'react-icons/md'
import { async } from '@firebase/util'

export default function SocialMedia(){
  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
 
  async function handleSave(e){
    e.preventDefault();
    alert('teste')
  }

  
  return(
    <div className=' admin-container'>
     <Header/>
     
     <h1 className='title-social'> Your social media</h1>

     <form className='form' onSubmit={handleSave}>
      <label className='label'>Facebook link</label>
      <Input
        placeholder=" Type facebook url here..."
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
      />

      <label className='label'>Whatapp Link</label>
      <Input
        placeholder=" Type whatsapp url here..."
        
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />

      <label className='label'>Instagram Link</label>
      <Input
        placeholder=" Type Instagram url here..."
        
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />

      <button type='submit' className='btn-register'>
        Save Links <MdAddLink size={24} color='#fff'/>
      </button>

     </form>
    </div>
  )
}