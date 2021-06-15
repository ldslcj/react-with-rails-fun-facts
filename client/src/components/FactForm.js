import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const FactForm = (props) => {
    // not destructoring form fields so I can names  in useState
    const { id, addFact, updateFacts  } = props
    const [text, setText] = useState(props.text ? props.text : '')
    const [username, setUsername] = useState(props.username ? props.username: '')
    const [source, setSource] = useState(props.source ? props.source: '')
    const [stars, setStars] = useState(props.stars ? props.stars: '')
    const getFormName = () =>{
      return id ? 'EditFORM' : 'NEW Form'
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let fact = {text, username, source, stars} 
        console.log(fact)
        if(id){
            let res = await axios.put(`/api/facts/${id}`, fact)
            console.log(res) // works need to update UI
            updateFacts(res.data)
        } else {
            let res = await axios.post('/api/facts', fact)
            console.log(res) // works need to update UI
            addFact(res.data)
        }
    }
    return(
        <>
          <h1>{getFormName()}</h1>
          <form onSubmit={handleSubmit}>
              <p>text</p>
              <input value={text} onChange={(e)=> setText(e.target.value) } /> 
              <p>username</p>
              <input value={username} onChange={(e)=> setUsername(e.target.value) } /> 
              <p>text</p>
              <input value={source} onChange={(e)=> setSource(e.target.value) } /> 
              <p>stars</p>
              <input value={stars} onChange={(e)=> setStars(e.target.value) } /> 
              <br /> 
              <button type={'submit'}>{id ? 'update': 'add'}</button>
          </form>
          <Link to='/'>Home</Link>
        </>
    )
}
export default FactForm