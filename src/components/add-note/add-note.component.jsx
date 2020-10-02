import React from 'react'
import useInput from '../../custom-hooks/use-input'
import { addNote } from '../../redux/actions/note.action'
import { useDispatch } from 'react-redux'

const AddNote = () => {

    const [ title, bindTitle, resetTitle ] = useInput()
    const [ content, bindContent, resetContent ] = useInput()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addNote({ title, content }))
        resetTitle()
        resetContent()
    }

    return (
        <div>
            <div className="section">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Note</h5>
                    <div className="input-field">
                        <input id="note_title" type="text" required className="validate" {...bindTitle}/>
                        <label htmlFor="note_title" className="active">Note Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="note_content" rows="4" required className="materialize-textarea" {...bindContent}></textarea>
                        <label htmlFor="note_content">Note Content</label>
                    </div>
                    <button className="btn green">Add<i className="material-icons right">add</i></button>
                </form>
            </div>
        </div>
    )
}

export default AddNote