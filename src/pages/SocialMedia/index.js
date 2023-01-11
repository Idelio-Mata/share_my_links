import { useState } from 'react'
import { useEffect } from 'react'
import './social.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink} from 'react-icons/md'

import { db } from '../../services/firebaseConnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'


export default function SocialMedia(){
  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {

    function loadLinks(){
      const docRef = doc(db, 'SocialMedia', 'link')
      getDoc(docRef)
      .then((snapshot) => {

        if (snapshot.data()!== undefined) {
          setFacebook(snapshot.data().facebook)
          setInstagram(snapshot.data().instagram)
          setWhatsapp(snapshot.data().whatsapp)
         
        }
      })
    }
    loadLinks();
  },[])


 function handleSave(e){
    e.preventDefault();
   
    setDoc(doc(db, 'SocialMedia','link'),{
      facebook: facebook,
      whatsapp: whatsapp,
      instagram: instagram
    })
    .then(() => {
      console.log ("Urls saved successfully!")
      toast.success('Saved successfully!')
    })
    .catch((error)=>{
      console.log("Something went wrong trying to save " + error)
      toast.error('Sorry something went wrong trying to save!')
    })
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