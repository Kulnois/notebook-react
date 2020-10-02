import React from 'react'

const AddNote = () => {
    return (
        <div>
            <div className="section">
                <form action="#" className="white">
                    <h5 className="grey-text text-darken-3">New Note</h5>
                    <div className="input-field">
                        <input id="note_title" type="text" className="validate"/>
                        <label htmlFor="note_title" className="active">Note Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="note_content" rows="4" className="materialize-textarea"></textarea>
                        <label htmlFor="note_content">Note Content</label>
                    </div>
                    <button className="btn green">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote