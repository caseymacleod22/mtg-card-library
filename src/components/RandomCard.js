import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css'

export default function RandomCard() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/cards/random')
        .then(res => {
            let results = res.data.name
            console.log(results)
            setCard(results)
            })
        }, [])
    return (
        <div className="sets">
            {card}
        </div>
    )
}