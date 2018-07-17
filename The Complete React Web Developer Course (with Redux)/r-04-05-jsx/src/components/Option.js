import React from 'react';

const Option = (props) => {
    return (
        <div>
        {/* Option component here */}
        Option: {props.optionText}
        {/* <button 
            onClick={props.handleDeleteOption}
        > */}
        <button 
            onClick={() =>{
            props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
        </div>
    );
}

export default Option;