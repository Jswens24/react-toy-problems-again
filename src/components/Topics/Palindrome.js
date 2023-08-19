import React, { useState } from 'react'

const Palindrome = () => {
    const [userInput, setUserInput] = useState('');
    const [palindrome, setPalindrome] = useState('');

    const onClickHandler = () => {
        if (userInput.split('').reverse().join('') === userInput) {
            setPalindrome('True')
        } else {
            setPalindrome("False")
        }
        return palindrome
    }

    return (
        <div className='puzzleBox filterStringPB'>
            <h4>Palindrome</h4>
            <input onChange={e => setUserInput(e.target.value)} className='inputLine' />
            <button onClick={onClickHandler} className='confirmationButton'>Check</button>
            <span className='resultsBox'>Palindrome: {palindrome}</span>
        </div>
    )
}

export default Palindrome