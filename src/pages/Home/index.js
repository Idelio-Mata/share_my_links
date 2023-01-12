import {useState, useEffect} from 'react'
import './home.css'

import { Social } from '../../components/Social'

import { FaInstagram, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'

import { getDocs, collection, orderBy, query, doc, getDoc} from 'firebase/firestore'
import {db} from '../../services/firebaseConnection'

export default function Home(){

  const[ links, setLinks ] =useState([]);
  const[ socialLinks, setSocialLinks ] =useState({});

  useEffect(() => {

    function loadLinks(){
      const linkRef = collection( db, 'links')
      const queryRef = query(linkRef, orderBy('created', 'asc'))

      getDocs(queryRef)
      .then((snapshot) => {
        let lista =[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })

        setLinks(lista);

      })
      
    }
    loadLinks();
  },[])


  useEffect (()=> {
    function loadSocialLinks(){
      const docRef = doc( db, 'SocialMedia','link')

      getDoc(docRef)
      .then((snapshot) => {
        if(snapshot.data() !== undefined){
          setSocialLinks({
            instagram: snapshot.data().instagram,
            whatsapp: snapshot.data().whatsapp,
            linkedin: snapshot.data().linkedin
          })
        }
      })

    }
    loadSocialLinks();

  },[])


  return(
    <div className='home-container'>
      <h1>Idélio Mata</h1>
      <span> See my links 👇🏾</span>

      <main className='links'>
        
        {links.map((item)=>(
          <section key={item.id} className='link-area' style={{ backgroundColor: item.bg}}>
            <a href={item.url} target='blank'>
              <p className='link-text' style={{color: item.color}}>
                {item.name}
              </p>
            </a>
          </section>
        ))}
        
        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
          <Social url={socialLinks?.instagram}>
            <FaInstagram size={35} color="#fff"/>
          </Social>

          <Social url={socialLinks?.whatsapp}>
            <FaWhatsapp size={35} color="#fff"/>
          </Social>

          <Social url={socialLinks?.linkedin}>
            <FaLinkedinIn size={34} color="#fff"/>
          </Social>
        </footer> 
        )}
        
      </main>
      
    </div>
  )
}