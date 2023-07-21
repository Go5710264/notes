import Note from "./Note"

const ListNotes = ({notes , removeElement}) => {
    return (
        <main className="block-notes">
            {notes.map(item => <Note key={item.id} item={item} removeElement={removeElement}/>)}
        </main>
    )
}

export default ListNotes;