import React, { useState } from "react";
import Heading from "./Heading";



function Header() {


    const [word,setWord] = React.useState('eat')
    //

    function handleClick() {
        setWord('Drink')
    }

    return (
        <>
        <Heading message={word + " at the cycy Restaurant"}/>
        <button onClick={handleClick}>Click to Drink</button>
        </>
    )
}
export default Header
