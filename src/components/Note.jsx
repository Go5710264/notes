import close from '../../public/close.svg'

const Note = ({ item, removeElement }) => {
    return (
        <section className="note-wrapper">
            {/* {textNote} */}
            <img 
                src={close}
                className='icon close'
                onClick={()=>removeElement(item.id, event)}
            />
            <p className="note-text">{item.content}</p>
        </section>
    )
}

export default Note;