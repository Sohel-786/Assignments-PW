
const Button = ({text, onClick}) => {
    return(
        <>
            <button className={"button-64"} onClick={onClick}><span>{text}</span></button>
        </>
    )
}

export default Button;