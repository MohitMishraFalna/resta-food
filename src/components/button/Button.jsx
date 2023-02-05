import React from 'react';
import './Button.css';

const Button = ({ title, pTB, pLR }) => {
    const paddingDynamic = {
        paddingTop: `${pTB}`,
        paddingLeft: `${pLR}`,
        paddingBottom: `${pTB}`,
        paddingRight: `${pLR}`,
    }

    return (
        <div>
            <button className="btnClass" style={paddingDynamic}>{title}</button>
        </div>
    )
}

export default Button
