import React, { useState,useEffect } from 'react'
import Dropdowns from './Dropdowns'

export default function ChooseColor() {
    const options = [
        {
            label:"The Blue Color",
            value:"blue"
        },
        {
            label:"The Red Color",
            value:"red"
        },        {
            label:"The Green Color",
            value:"green"
        },
    ]
    const [selectedColor, setSelectedColor] = useState(options[0])


    useEffect(() => {
        console.log(selectedColor);
    }, [selectedColor])

    return (
        <div>
            <Dropdowns
            label="Choose a color"
            options={options}
            changeOption={setSelectedColor}
            selected={selectedColor}
            />
        </div>
    )
}
