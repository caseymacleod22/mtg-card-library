import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css'

export default function EdhRec() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/cards/search?order=edhrec&q=c%3Agreen+pow%3D8')
        .then(res => {
            let rec = res.data.data.map(cardName => {
                return (
                    console.log(cardName.name)
                )
            })
            console.log(rec)
            setCard(rec)
            })
        }, [])
    return (
        <div className="sets">
            
        </div>
    )
}