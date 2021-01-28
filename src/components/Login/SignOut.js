import React from 'react'

const SignOut = ({setloginToken}) => {

    const onClick = () => {
        setloginToken(null);
    }

    return (
        <button onClick={onClick}>Sign Out</button>
    )
}

export default SignOut
