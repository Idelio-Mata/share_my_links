import './home.css'

import { Social } from '../../components/Social'

import {FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'

export default function Home(){
  return(
    <div className='home-container'>
      <h1>Idélio Mata</h1>
      <span> See my links 👇🏾</span>

      <main className='links'>
        
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'> My Linkedin Profile</p>
          </a>
        </section>

        <section className='link-area'>
          <a href='#'>
            <p className='link-text'> My Facebook Profile</p>
          </a>
        </section>

        <section className='link-area'>
          <a href='#'>
            <p className='link-text'> My GitHub Profile</p>
          </a>
        </section>

        
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'> My Telegram Profile</p>
          </a>
        </section>

        <footer>

          <Social url="https://github.com/Idelio-Mata">
            <FaGithub size={35} color="#fff"/>
          </Social>

          <Social url="https://whatsa.me/25825845701361/?t=Message%20to%20Id%C3%A9lio_Mata">
            <FaWhatsapp size={35} color="#fff"/>
          </Social>

          <Social url=" https://www.linkedin.com/in/id%C3%A9liote%C3%B3filomata/">
            <FaLinkedinIn size={34} color="#fff"/>
          </Social>
         
        </footer>
      </main>
      
    </div>
  )
}