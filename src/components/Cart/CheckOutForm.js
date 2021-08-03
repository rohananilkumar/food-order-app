import useInput from "../../hooks/use-input";

const CheckOutForm = (props) =>{
    const {isTouched:nameIsTouched, enteredValue:enteredName, enteredValueIsValid:enteredNameIsValid, setEnteredValue:setEnteredName, setIsTouched:setNameTouched} = useInput((value)=>value.trim().length>0,'');
    const {isTouched:emailIsTouched, enteredValue:enteredEmail, enteredValueIsValid:enteredEmailIsValid, setEnteredValue:setEnteredEmail, setIsTouched:setEmailTouched} = useInput((value)=>value.trim().length>0,'');

    const nameChangedHandler = (event) =>{
        props.onNameChange(event.target.value);
        setEnteredName(event.target.value);
    }
    const emailChangedHandler = (event) =>{
        props.onEmailChange(event.target.value);
        setEnteredEmail(event.target.value);
    }

    const nameBlurHandler = (event) =>{
        setNameTouched(true);
    }

    const emailBlurHandler =(event) =>{
        setEmailTouched(true);
    }
    return <div>
        <div>
            <label htmlFor="name">Name</label>
            <input type='text' id='name' value={enteredName} onChange={nameChangedHandler} onBlur={nameBlurHandler}/>
            {!enteredNameIsValid && <p>Invalid Input</p>}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type='text' id='email' value={enteredEmail} onChange={emailChangedHandler} onBlur={emailBlurHandler}/>
            {!enteredEmailIsValid && <p>Invalid Input</p>}

        </div>
    </div>
}

export default CheckOutForm;