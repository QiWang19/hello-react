import React from 'react';

const Option = (props) => (
    <div className="option">
        {/* Option component here */}
        <p className="option__text">{props.count}.{props.optionText}</p>
        {/* <button 
            onClick={props.handleDeleteOption}
        > */}
        <button 
            className="button button--link"
            onClick={() =>{
            props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
        </div>
);

export default Option;