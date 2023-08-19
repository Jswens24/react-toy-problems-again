import React, { useState } from 'react'

const Sum = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(null);

    const onClickHandler = () => {
        setSum(+num1 + +num2)
    }

    return (
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input onChange={e => setNum1(e.target.value)} className='inputLine' />
            <input onChange={e => setNum2(e.target.value)} className='inputLine' />
            <button onClick={onClickHandler} className='confirmationButton'>Add</button>
            <span className='resultsBox'>Sum: {sum}</span>
        </div>
    )
}

export default Sum