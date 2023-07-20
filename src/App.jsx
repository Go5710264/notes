import './App.css'
import reset from '../public/reset.svg'
import send from '../public/send.svg'
import { useState } from 'react'
import ListNotes from './components/ListNotes'

function App() {

  let [notes, setNotes] = useState([
    {
      id: 1,
      textNote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati veritatis vitae dolores consectetur, error magnam facilis. Facere, similique aliquid non nisi perferendis doloremque, pariatur consequatur ex fuga, animi numquam suscipit."
    }
  ])
  return (
    <>
      <header className='header-notes'>
        <h1 className='header-heading'>Notes</h1>
        <button className='button-icon'>
          <img 
            src={reset}
            className='icon'
          />
        </button>
      </header>

      <ListNotes notes={notes}/>

      <footer>
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <input 
          type="text"
          className='input-text' 
        />
        <button 
          className='button-icon'
          onClick={() => sendNote()}  
        >
          <img 
            src={send} 
            className='icon' />
        </button>
      </footer>
    </>
  )
}

export default App
