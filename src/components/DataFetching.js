import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching() {
    const [sets, setSets] = useState([])

    useEffect(() => {
        axios
        .get('https://api.scryfall.com/sets')
        .then(res => {
            let results = res.data.data.map((setName => {
                return (
                    setName.name
                )
            }) 
        )
            console.log(results)
            setSets(results)
            }).catch(err => {
                console.log(err)
            })
        }, [])
    return (
        <div>
            <ul>
                <li>{sets}</li>
            </ul>
        </div>
    )
}

export default DataFetching