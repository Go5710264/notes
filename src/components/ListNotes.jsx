import Note from "./Note"

const ListNotes = ({ notes }) => {
    console.log(notes)
    return (
        <main>
            {/* <ul> */}
                {notes.map(item => <Note key={item.id} textNote={item.textNote}/>)}
            {/* </ul> */}
        </main>
    )
}

export default ListNotes;