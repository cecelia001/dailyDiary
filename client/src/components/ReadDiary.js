import React from 'react';
import "./ReadDiary.css"


function ReadDiary(props) {
    return (
        <div className="ReadDiary">
            <h2> Past Entries </h2>

        <div>
            <table className="head">
                <thead>
                    <td className="date"> Date </td>
                    <td> Entry </td>
                </thead>
            </table>
        </div>
    
        <div> {props.days.map(e => (
            <div key={e.id} >
                
            <table className ="list">
                <tbody>
                    <td className="date">{e.date} </td>
                    <td>{e.entry}</td>
                </tbody>                 
            </table>

            </div>
            ))}
        </div>

    </div>
    );
}

export default ReadDiary;