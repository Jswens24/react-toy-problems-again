import React, { useState } from 'react'

const FilterObject = () => {
    const [userInput, setUserInput] = useState('');
    const [filteredArray, setFilteredArray] = useState([])
    const [unFilteredArray, setUnfilteredArray] = useState([
        {
            "name": "Jimmy Joe",
            "title": "HackOr",
            "age": 12
        },
        {
            "name": "Jeremy Schmeremy",
            "age": 24,
            "hairColor": "brown"
        },
        {
            "name": "Carly Armstrong",
            "title": "CEO",
        }
    ]);

    const onClickHandler = () => {
        const filter = [];
        unFilteredArray.forEach(el => el.el.forEach(item => {
            console.log(item);
        }))
    }


    return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(unFilteredArray)}</span>
            <input onChange={(e) => setUserInput(e.target.value)} className='inputLine' />
            <button onClick={onClickHandler} className='confirmationButton'>Filter</button>
            <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(filteredArray)}</span>
        </div>
    )
}

export default FilterObject