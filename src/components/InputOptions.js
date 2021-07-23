import React from 'react'

function InputOptions({Icon, title, color}) {
    return (
        <div className="input_options">
            <Icon style = {{color:color}} />
            <h3>{title}</h3>
            
        </div>
    )
}

export default InputOptions;
