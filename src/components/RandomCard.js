import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css'

export default function RandomCard() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/cards/random')
        .then(res => {
            let results = res.data.image_uris.small
            console.log(results)
            setCard(results)
            })
        }, [])
    return (
        <div className="sets">
            <img src={card} alt="" />
        </div>
    )
}