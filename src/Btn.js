function Btn(props) {
    const clickHandler=()=> console.log('clicked')
    return (
        <button onClick={clickHandler}>Click Me</button>
    )
}

export default Btn;
