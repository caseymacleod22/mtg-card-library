import React from 'react';
import DataFetching from './DataFetching';
import RandomCard from './RandomCard';
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

export default function Container() {
    return (
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Click to See Your New Favorite Card!
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <RandomCard />
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}