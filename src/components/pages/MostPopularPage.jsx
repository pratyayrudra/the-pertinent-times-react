import React, { useState, useEffect, useRef, useContext } from 'react'
import { useParams } from "react-router-dom"
import useNumber from "@hooks/useNumber"

function MostPopularPage() {
    const {token} = useParams()
    const [flag, setFlag] = useState(false)
    const [myNum, setMyNum] = useNumber()

    return (
        <div>
            Most Popular
        </div>
    )
}

export default MostPopularPage
