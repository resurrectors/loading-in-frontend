import React, { useEffect, useState } from 'react'
import loading from '../loading.gif'
export default function List() {

    const [clicked, setclicked] = useState(true)
    const [ls, setls] = useState([])

    useEffect(() => {
        // api call may occur twice because strict mode triggers some events twice
        fetch("http://localhost:5000/list").then((data) => data.json()).then((data) => {
            console.log(data.message);
            setls(data.ls);
            setclicked(false);
        }).catch(() => console.error("api call failed")).finally(() => console.log("over with useEffect"))
    }, [])

    return (
        <div>
            {
                clicked
                    ?
                    <img src={loading} alt='Not' />
                    :
                    <div>
                        <br />
                        {ls.map( (e) =>
                            <div key={e}>{e}</div>
                        )}
                    </div>
            }
        </div>
    )
}
