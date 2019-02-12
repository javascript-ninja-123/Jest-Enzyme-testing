import React from 'react';
import PropTypes from 'prop-types';
/**
 * @function
 * @param {object} props
 * @return {JSX.Element}
 */
const GuessWord = ({words = []}) => {
 

     /**
     * @function
     * @param {array} words
     * @return {JSX.Element}
     */
    const renderWords = words => (
        <ul data-test="list">
            {
                words.reduce((acc,val) => {
                    const newVal = (
                        <li key={val.id}>
                            <p>{val.name}</p>
                            <p>{val.email}</p>
                        </li>
                    )
                    acc.push(newVal)
                    return acc
                },[])
            }
        </ul>
    )
    return (
        <div>
            what is up this is Guessword
            <div>
                {
                  Array.isArray(words) && words.length > 0 ? renderWords(words) : <p data-test="loading">..loading</p>
                }  
            </div>
        </div>
    )
}

GuessWord.propTypes = {
    words:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            name:PropTypes.string,
            email:PropTypes.string
        })
    )
}

export default GuessWord