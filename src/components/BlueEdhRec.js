import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function BlueEdhRec() {
    const [card, setCard] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/cards/search?order=edhrec&q=c%3Ablue+pow%3D8')
        .then(res => {
            let rec = res.data.data.map(cardName => {
                return (
                    <div>
                        <li key={cardName.id}>{cardName.name} / ${cardName.prices.usd}</li>
                    </div>
                )
            })
            console.log(rec)
            setCard(rec)
            })
        }, [])
    return (
        <Accordion allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton className="blue-edh-cards">
                    Blue Edh Cards
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="sets">
                {/* <h1>Green Cards EDHRec Data</h1> */}
                {/* {card} */}
            </div>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
    )
}