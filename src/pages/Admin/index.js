import { useState } from 'react'

import './admin.css'
import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { MdAddLink }  from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'


export default function Admin(){
  const [ nameInput, setNameInput] = useState("");
  const [ urlInput, setUrlInput] = useState("");
  const [ backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [ textColorInput, setTextColorInput] = useState("#121212");


  return(
    <div className='admin-container'>
      <Header/>

      <Logo/>

      <form className='form'>

        <label className='label'>Link name</label>
        <Input 
          placeholder="Type the link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className='label'>Link url</label>
        <Input
          type='url'
          placeholder="Type the url..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className='container-colors'>
          
          <div>
            <label className='laber right'>Background link</label>
            <input 
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />          
          </div>

          <div>
            <label className='laber right'>Link color</label>
            <input 
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />          
          </div>
 
        </section>

        
        {nameInput !== "" && (
          <div className='preview'>
            <label className='label'>See how its look 👇🏾</label>
            <article className='list' style={{marginTop:8,marginBottom:8, backgroundColor:backgroundColorInput}}>
              <p style={{color:textColorInput}}>{nameInput}</p>
            </article>    
          </div>
        )}

        <button className='btn-register' type='submit'>
          Register <MdAddLink size={24} color="#fff"/>
        </button>

      </form>

      <h2 className='title'>
        My links
      </h2>

      <article 
      className='list animate-pop'
      style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <p>Vip group in Telegram</p>
        <div>
          <button className='btn-delete'>
            <FiTrash2 size={18} color="#fff"/>
          </button>
        </div>
      </article>

    </div>
  )
}