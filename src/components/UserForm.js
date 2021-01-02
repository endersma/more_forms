import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passMatchError, setPassMatchError] = useState("");

    const containerStyle = {
        marginTop: '100px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    };

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        background: 'gray',
        border: '2px solid black',
        padding: '5px',
        marginBottom: '10px',
    };

    const labelStyle = {
        order: '1',
        paddingRight:'.5em',
        width: '9em',
    };

    const inputStyle = {
        order: '2',
        flex: '1 1 auto',
        height: '25px',
    };

    const errorStyle = {
        color: 'red',
    };

    const {firstName, lastName, email, password, confirmPass, setFirstName, setLastName, setEmail, setPassword, setConfirmPass } = props;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPass };
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length == 0) {
            return(null);
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least two characters");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length == 0) {
            return(null);
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least two characters");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length == 0) {
            return(null);
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least five characters");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length == 0) {
            return(null);
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least eight characters");
        }
    }
    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if(e.target.value.length == 0) {
            return(null);
        } else if(confirmPass != password) {
            setPassMatchError("Passwords don't match");
        } else if(confirmPass == password) {
            setPassMatchError("Passwords match");
        }
    }

    return (
        <div style={containerStyle}>
            <form onSubmit={createUser}>
                <div style={errorStyle}>
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    } 
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor='setFirstName'>First Name: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setFirstName" 
                        onChange={ handleFirstName } />
                </div>
                <div style={errorStyle}>   
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                         ''
                    }
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setLastName">Last Name: </label>
                    <input 
                        style={inputStyle}
                        type="text" 
                        name="setLastName" 
                        onChange={ handleLastName } />
                </div>
                <div style={errorStyle}>
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setEmail">Email Address: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setEmail" 
                        onChange={ handleEmail } /> 
                </div>
                <div style={errorStyle}>
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setPassword">Password: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setPassword" 
                        onChange={ handlePassword } />
                </div>
                <div style={errorStyle}>
                    {
                        passMatchError ?
                        <p>{ passMatchError }</p> :
                        ''
                    }
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setConfirmPass">Confirm Password: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setConfirmPass" 
                        onChange={ handleConfirmPass } />
                </div>
            </form>
        </div>
    );
}

export default UserForm;
