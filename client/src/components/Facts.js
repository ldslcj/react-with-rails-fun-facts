import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Fact from './Fact'
import FactForm from './FactForm'
import {Link} from 'react-router-dom'

const Facts = (props) => {
    const [facts, setFacts] = useState([])

    useEffect (() => {
        getFacts()
    }, [])

    const renderFacts = () => {
        if(facts.length === 0) {
            return <p>no facts</p>
        }

        return facts.map(fact => {
            return <Fact key={fact.id} {...fact} updateFacts={updateFacts} deleteFact={deleteFact} />
        })
    }

    const addFact = (fact) => {
        let updatedFacts = [fact, ...facts]
        setFacts(updatedFacts)
    }

    const updateFacts = (fact) => {
        let updatedFacts = facts.map(f => f.id === fact.id ? fact : f)
        setFacts(updatedFacts)
    }

    // lets handle all delete here different with waht with update
    // and create

    const deleteFact = async (id) => {
        try {
            // delete from database step
            let res = await axios.delete(`/api/facts/${id}`)
            // delete from UI step
            let updatedFacts = facts.filter(f=> f.id !== res.data.id)
            setFacts(updatedFacts)
        } catch(err) {
            console.log(err)
            alert('err occurred')
        }
    }

    const getFacts = async () => {
        try {
            let res = await axios.get('/api/facts')
            setFacts(res.data)

        } catch(err){
            alert('err occurred check console')
            console.log(err)
        }
    }
    return(
        <>
            <h1>Facts!</h1>
            {/* <FactForm addFact={addFact} /> */}
            <Link to ='/newFact'>New</Link>
            
            {renderFacts()}
        </>
    )
}

export default Facts