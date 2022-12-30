import React from 'react';
import "./ReadDiary.css"


function ReadDiary(props) {
    return (
        <div className="ReadDiary">
            <h2> Past Entries </h2>

            <table>
                <thead>
                    <tr>
                        <th> Date </th>
                        <th> Entry </th>
                    </tr>
                </thead>
            
                <tbody>
                    {props.days.map(e => 
                      <td key={e.id} >
                            <td>{e.date}</td>
                            <td>{e.entry}</td>
                    </td>
                    )}
                </tbody>        
            </table>
        </div>
    );
}

export default ReadDiary;