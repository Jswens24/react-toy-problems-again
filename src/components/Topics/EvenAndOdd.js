import React, { useState } from 'react'

const EvenAndOdd = () => {
    const [evenArray, setEvenArray] = useState([]);
    const [oddArray, setOddArray] = useState([]);
    const [userInput, setUserInput] = useState('');

    const onClickHandler = () => {
        const odd = []
        const even = []
        userInput.split(',').map(el => +el % 2 === 0 ? even.push(+el) : odd.push(+el))

        setEvenArray(even)
        setOddArray(odd)
    }

    return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input onChange={(e) => setUserInput(e.target.value)} className='inputLine' />
            <button onClick={onClickHandler} className='confirmationButton'>Split</button>
            <span className='resultsBox'>Evens: {JSON.stringify(evenArray)}</span>
            <span className='resultsBox'>Odds: {JSON.stringify(oddArray)}</span>
        </div>
    )
}

export default EvenAndOdd