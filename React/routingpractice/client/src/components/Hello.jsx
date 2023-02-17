import React from 'react'
import { useParams } from 'react-router'

const Hello = () => {
    const {theword, backcolor, frontcolor} = useParams();

    return (
        <h1 style={{backgroundColor:backcolor, color:frontcolor}}> The word is: {theword}</h1>
    )
}

export default Hello