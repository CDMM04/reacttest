import React, { forwardRef } from 'react';
import classes from './myInput.module.css';

const MyInput = forwardRef((props, ref) => {
    return(
        <input ref={ref} className={classes.MyInput} {...props}/>
    );
});

export default MyInput;