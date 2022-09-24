import React from "react";
import BlackEdhRec from "./BlackEdhRec";
import BlueEdhRec from "./BlueEdhRec";
import CardMarket from "./CardMarket";
import Container from "./Container";
import GreenEdhRec from "./GreenEdhRec";
import RandomAccordion from "./RandomAccordion";
import RedEdhRec from "./RedEdhRec";
import WhiteEdhRec from "./WhiteEdhRec";

export default function Home () {
    return (
        <div>
            <Container />
            <RandomAccordion />
            <CardMarket />
            <WhiteEdhRec />
            <BlueEdhRec />
            <BlackEdhRec />
            <RedEdhRec />
            <GreenEdhRec />
        </div>
    )
}