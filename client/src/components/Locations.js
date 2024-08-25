import React from 'react';
import "./Locations.css"


function ReadDiary(props) {
    return (
        <div className="Locations">

        <div>
            <table className="head">
                <thead>
                    <td className="date"> Location </td>
                    <td> Address </td>
                </thead>
            </table>
        </div>
    
        <div> 
            <table className ="list">
                <tbody>
                    <td> Location 1 </td>
                    <td> 123 Main Street</td>
                </tbody>  
                <tbody>
                    <td> Location 2 </td>
                    <td> 123 Main Street</td>
                </tbody>                
            </table>

            </div>
            


    </div>
    );
}

export default ReadDiary;