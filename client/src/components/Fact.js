import FactForm from "./FactForm"

const Fact = (props) => {

    const {text, username, stars, source} = props

    return (
        <>
            <h1>{text}</h1>
            <p>User: {username} stars:{stars} source:{source}</p>
            <FactForm {...props}/>
            <hr />
        </>
    )
}

export default Fact