const Note = ({ textNote }) => {
    return (
        <section className="note-wrapper">
            {/* {textNote} */}
            <p className="note-text">{textNote}</p>
        </section>
    )
}

export default Note;