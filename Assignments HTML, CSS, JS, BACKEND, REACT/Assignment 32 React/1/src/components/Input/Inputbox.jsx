function Inputbox({arr}) {  // array of object containing attributes with value
    return (
           <input type={arr.type} name={arr.name} placeholder={arr.placeholder} />
    )
}

export default Inputbox;