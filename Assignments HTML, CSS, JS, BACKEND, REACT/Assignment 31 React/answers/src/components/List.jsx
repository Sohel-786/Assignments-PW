const List = ({items}) => {
    return(
        <>
            <ul> {items.map( (el) => (
                <li>{el}</li>
            ))} </ul>
        </>
    )
}

export default List;