import React, { useState } from 'react'

const FilterString = () => {
    const [filteredArray, setFilteredArray] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [unfilteredArray, setUnfilteredArray] = useState(['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy']);

    const clickHandler = () => {
        const filter = []
        unfilteredArray.map(el => {
            if (el.includes(userInput)) {
                filter.push(el)
            }
        })
        setFilteredArray(filter)
    }


    return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>Names: {JSON.stringify(unfilteredArray)}</span>
            <input onChange={e => setUserInput(e.target.value)} className='inputLine' />
            <button onClick={clickHandler} className='confirmationButton'>Filter</button>
            <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(filteredArray)}</span>
        </div>
    )
}

export default FilterString