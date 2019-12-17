import React from 'react';

const Button = ({classStyle, onclick, value}) => (
    <div>
        <button class={classStyle + " btn-border-none text-center"} style={{
            width: '100px',
            padding: '10px'
        }} onClick={() => onclick()}> 
            {value}
        </button>
    </div>
);

export default Button;