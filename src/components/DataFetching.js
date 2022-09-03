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
                    <div className="set-container">
                        <li key={setName.id}>{setName.name}</li>
                        <img className="set-symbol" src={setName.icon_svg_uri}/>
                    </div>
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
        <div className="sets">
            {sets}
        </div>
    )
}

export default DataFetching