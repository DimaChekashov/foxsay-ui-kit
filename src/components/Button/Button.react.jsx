import React from 'react';
import cn from 'classnames';

function Button(props) {
    const {
        children,
        color,
        outline,
        className
    } = props;

    const classes = cn(
        {
            btn: true,
            [`btn-outline-${color}`]: outline && !!color,
            [`btn-${color}`]: !!color && !outline,
        },
        className
    );
    
    console.log(props);

    return (
        <button className={classes}>{children}</button>
    )
}

export default Button;