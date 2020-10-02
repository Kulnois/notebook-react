import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import AddNote from '../../components/add-note/add-note.component'
import NoteList from '../../components/note-list/note-list.component'

function HomePage() {

    useFirestoreConnect({collection: 'notes', orderBy: ['createdAt', 'desc']})

    const notes = useSelector((state) => state.firestore.ordered.notes)
    
    return (
        <div className="container">
            <div className="row center-align">
                <div className="col m7">
                    <AddNote />
                </div>
                <div className="col m5">
                    <NoteList notes={notes} />
                </div>
            </div>
        </div>
    )
}

export default HomePage