import React from 'react'
import { Link } from 'react-router-dom'

import useInput from '../../custom-hooks/use-input'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../redux/actions/note.action'
import { useHistory } from 'react-router-dom'

const NoteEdit = () => {
    const note = useSelector((state) => state.note)
    const history = useHistory()

    if (note.title == undefined) {        
        history.push('/')
    }
    const [ title, bindTitle, resetTitle ] = useInput(note.title)
    const [ content, bindContent, resetContent ] = useInput(note.content)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateNote({ id: note.id, title, content}))
        resetContent()
        resetTitle()
        history.push('/')
    }

    return (
        <div className="container">
            <div className="section">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Update Note</h5>
                    <div className="input-field">
                        <input id="note_title" type="text" required className="validate" {...bindTitle} />
                        <label className="active" htmlFor="note_title">Note Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="note_content" required className="materialize-textarea"  {...bindContent}></textarea>
                        <label className="active" htmlFor="note_content">Note Content</label>
                    </div>
                    <div className="right-align">
                        <button className="btn waves-effect waves-light green">Update<i class = "material-icons right">save</i></button>
                        <Link to="/" className="btn waves-effect waves-light grey">Cancel<i class = "material-icons right">cancel</i></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NoteEdit