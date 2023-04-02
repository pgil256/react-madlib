import React, {useState} from "react";

const PromptForm = ({ makeMadlib}) => {
    const empty_form = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }
    const [formData, getFormData] = useState(empty_form)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        getFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        makeMadlib(formData)
    }


    return (
    
        <form class = 'form' onSubmit={handleSubmit}>
            
            <input id="noun" name="noun" placeholder="Noun" type="text"
            value={formData.noun} onChange={handleChange}/>
            <input id="noun2" name="noun2" placeholder="Noun" type="text"
            value={formData.noun2} onChange={handleChange}/>
            <input id="adjective" name="adjective" placeholder="Adjective" type="text"
            value={formData.adjective} onChange={handleChange}/>
            <input id="color" name="color" placeholder="Color" type="text"
            value={formData.color} onChange={handleChange}/>
            <button>Make Madlib</button>

        </form>
    )
}

export default PromptForm