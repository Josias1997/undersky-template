import React from 'react';
import './Arrow.css';

const Arrow = ({direction, color, onclick}) => {
    const style = {
        color: color,
        marginTop: 0,
        marginBottom: direction === 'up' ? '30px' : 'auto',
        fontSize: '60px',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'absolute',
        left:'49%',
        zIndex: 4
    };
    return (
        <div className="d-flex arrow" style={style} onClick={onclick}>
            {
              direction === 'down' ? '↓' : '↑'
            }
        </div> 
    )
}

export default Arrow;