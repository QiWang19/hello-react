import React from 'react';

const Option = (props) => (
    <div>
        {/* Option component here */}
        Option: {props.optionText}
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