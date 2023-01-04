import React from 'react';
import "./ReadDiary.css"


function ReadDiary(props) {
    return (
        <div className="ReadDiary">
            <h2> Past Entries </h2>

        <div>
            <table className="head">
            <thead>
                <tr>
                    <th> Date </th>
                    <th> Entry </th>
                </tr>
            </thead>
            </table>
        </div>
    
    <div> {props.days.map(e => (
        <li key={e.id} >
            
        <table className ="list">
                <tbody>
                        <td>{e.date} </td>
                        <td>{e.entry}</td>
                </tbody>                 
            </table>

        </li>
        ))}
    </div>
    
    </div>
    );
}

export default ReadDiary;