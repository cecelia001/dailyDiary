import React, {useState} from "react";
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
        props.addEntry(formData);
        setFormData(BLANK_FORM)
    };

    return (
        <div className="AddEntry">
            <form onSubmit={handleSubmit}>
            <label>
                date
                <input 
                    type="text" 
                    name="date"
                    value={formData.date}
                    onChange= {handleChange}
                />
            </label>

            <label>
                entry
                <textarea
                    type="text" 
                    name="entry"
                    value={formData.entry}
                    onChange= {handleChange}
                >
                </textarea>
            </label>

            <label>
                What did you do/Want to do today?
                <input 
                    type="text" 
                    name="accomplish"
                    value={formData.accomplish}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddEntry;