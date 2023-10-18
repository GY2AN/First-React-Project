import React from "react"

function Card({buttoncolor}){
    return(
        <button onClick={colorchange}>{buttoncolor}</button>
    )

}

export default Card