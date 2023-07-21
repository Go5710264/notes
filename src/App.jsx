import './App.css'
import reset from '../public/reset.svg'
import send from '../public/send.svg'
import { useEffect, useState } from 'react'
import ListNotes from './components/ListNotes'
import { nanoid } from 'nanoid'

function App() {
  const [loading, setLoading] = useState(true);
  let [notes, setNotes] = useState([
    {
      id: 1,
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati veritatis vitae dolores consectetur, error magnam facilis. Facere, similique aliquid non nisi perferendis doloremque, pariatur consequatur ex fuga, animi numquam suscipit."
    },
  ]);
  let [newNotes, setNewNotes] = useState();

  const loadData = () => {
    if(loading){
      (async() => {
        let response = await fetch ('http://localhost:7070/notes');
        let json = await response.json();
        setLoading(false)
        setNotes(json);
      })()
    }
  }

  useEffect(loadData);
  useEffect(() => {
    if(newNotes){
      (async() => {
        const request = await fetch ('http://localhost:7070/notes', {
          method: 'POST',
          body: JSON.stringify(newNotes)
        });
        const result = await request;
        const json = await result.json();
        const status = json.status 
      })();

      fetch('http://localhost:7070/notes')
        .then(response => response.json())
        .then(result => setNotes(result))
    }
  }, [newNotes])

  const sendNote = (event) => {
    event.preventDefault();

    const newNote = {
      id: nanoid(),
      content: event.target.text.value
    };
    
     setNewNotes(newNote)

    event.target.text.value = '';
  }

  const removeElement = (id, event) => {
    event.stopPropagation();
    
    fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE'
    })
      .then(request => {

        if(!request.ok){
            console.error('Ошибка!')
            return;
        }
    
        fetch('http://localhost:7070/notes')
          .then(response => response.json())
          .then(result => setNotes(result))
      })      
  }

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

      <ListNotes notes={notes} removeElement={removeElement}/>

      <footer className='footer-notes'>

        <form 
          className='footer-form-notes'
          onSubmit={(e) => sendNote(e)}
        >

          <input 
            type="text"
            className='input-text'
            name='text'
          />

          <button 
            className='button-icon'
          >
            <img 
              src={send} 
              className='icon' 
            />
          </button>

        </form>

      </footer>
    </>
  )
}

export default App
