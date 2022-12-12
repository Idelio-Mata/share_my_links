import './home.css'
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
      </main>
      
    </div>
  )
}