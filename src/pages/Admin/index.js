import './admin.css'
import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { MdAddLink }  from 'react-icons/md'


export default function Admin(){
  return(
    <div className='admin-container'>
      <Header/>

      <Logo/>

      <form className='form'>

        <label className='label'>Link name</label>
        <Input 
          placeholder="Type the link..."
        />

        <label className='label'>Link url</label>
        <Input
          type='url'
          placeholder="Type the url..."
        />

        <section className='container-colors'>
          
          <div>
            <label className='laber right'>Background link</label>
            <input type="color"/>          
          </div>

          <div>
            <label className='laber right'>Link color</label>
            <input type="color"/>          
          </div>

        </section>

        <button className='btn-register' type='submit'>
          Register <MdAddLink size={24} color="#fff"/>
        </button>


      </form>

    </div>
  )
}