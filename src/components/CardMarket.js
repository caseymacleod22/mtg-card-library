import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css'
import CardMarketPrice from "./CardMarketPrice";

export default function CardMarket() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/cards/cardmarket/379041')
        .then(res => {
            let cardImage = res.data.image_uris.small
            console.log(cardImage)
            setCard(cardImage)
            // setCard(price)
            })
        }, [])
    return (
        <div className="card-market">
            <h1>Trending Cards</h1>
            <img src={card} alt="" />
            <CardMarketPrice />
        </div>
    )
}