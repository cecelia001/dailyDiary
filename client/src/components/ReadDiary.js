import React from 'react';
import "./ReadDiary.css"


function ReadDiary(props) {
    return (
        <div className="ReadDiary">
            <h2> Past Entries </h2>

            <ol>
                {props.days.map(e => 
                    <li  key={e.id} >

                    
                    <li> {e.date} </li>
                    <li> {e.entry} </li>

                    </li>
                )}
            </ol>
        </div>
    );
}

export default ReadDiary;