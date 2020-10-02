import React from 'react'

import AddNote from '../../components/add-note/add-note.component'

function HomePage() {
    return (
        <div className="container">
            <div className="row center-align">
                <div className="col m7">
                    <AddNote />
                </div>
                <div className="col m5">
                    List Note
                </div>
            </div>
        </div>
    )
}

export default HomePage