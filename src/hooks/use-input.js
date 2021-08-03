import { useState } from "react";

const useInput = (validate, defaultValue)=>{
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [isTouched, setIsTouched] = useState(false);
    const enteredValueIsValid = validate(enteredValue) || !isTouched;
    
    const valueEnteredHandler = (value)=>{
        setEnteredValue(value);
    }

    const isTouchedHandler = (value)=>{
        setIsTouched(value);
    }

    const reset = () =>{
        setEnteredValue(defaultValue);
        setIsTouched(false);
    }

    return {
        enteredValue,
        isTouched,
        setEnteredValue:valueEnteredHandler,
        setIsTouched:isTouchedHandler,
        reset,
        enteredValueIsValid
    }
}

export default useInput;
