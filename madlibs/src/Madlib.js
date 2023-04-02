import React, { useState } from 'react';
import PromptForm from './PromptForm';
import Story from './Story';

const Madlib = () => {
    const [formComplete, setFormComplete] = useState(false)
    const [story, makeStory] = useState()

    const makeMadlib = (formData) => {
        const {noun, noun2, adjective, color} = formData
        makeStory(`Why did ${adjective} ${noun} cross the road? To see the ${color} ${noun2}!`)

        setFormComplete(formComplete => (
            !formComplete
        ))
    }

    return (
        <>
        <h1>Madlibs!</h1>
       
        {formComplete === false ?
        <PromptForm makeMadlib={makeMadlib} /> : <Story story={story} />
        }
        </>

    )
}

export default Madlib

