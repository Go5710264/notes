const sendRequest = (send, setNotes) => {
    switch(send){
        case 'GET':
            console.log(send)

            fetch('http://localhost:7070/notes', {
                method: send,
            })
                .then(response => console.log(response.json()))
                .then(data => console.log(data))

                // .then(data => setNotes(data))
                .catch(error => console.log(error))
            break;
    }
}

export default sendRequest;