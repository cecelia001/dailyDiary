import React, { useState } from "react";
import "./AddEntry.css"

let BLANK_FORM= {
    date: "",
    entry: "",
    accomplish: ""
}

function AddEntry(props) {

    const [ formData, setFormData ] = useState(BLANK_FORM)

    function handleChange(event){
        let { name, value }= event.target;
        setFormData((data) => ({...data, [name]: value}));
    };

    function handleSubmit(event){
        event.preventDefault();
        props.addEntryCb(formData);
        setFormData(BLANK_FORM)
    };

    return (
        <div className="AddEntry">
            <form onSubmit={handleSubmit}>
            <div className="gridRow">
            <label>
                Date mm-dd-yyyy
                <input 
                    type="text" 
                    name="date"
                    value={formData.date}
                    onChange= {handleChange}
                />
            </label>
            <div className="spacing"> </div>
            <label>
                What do you want to or did you accomplish?
                <textarea className="textareaShort"
                    type="text" 
                    name="accomplish"
                    value={formData.accomplish}
                    onChange={handleChange}
                ></textarea>
            </label>
            </div>

            <label>
                Diary Entry
                <textarea
                    type="text" 
                    name="entry"
                    value={formData.entry}
                    onChange= {handleChange}
                >
                </textarea>
            </label>


            <button className="formButton" type="submit" >Submit</button>
            </form>
        </div>
    );
}
export default AddEntry;