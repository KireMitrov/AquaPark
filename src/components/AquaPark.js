import React, { useState } from "react";
// import wave from "./wave.wav"

function AquaPark () {
    const [number,SetNumber] = useState(null);
    // const waveSound = new Audio(wave);
   

    const setNotification = (num, time) => {
        setTimeout( () => {
            // waveSound.play()
            alert(`${num} has finished`);
        },time)
    }
    

    return (
        <div>
            <h1>Aqua Park Monitoring</h1>
            <label>Enter bracelet number</label><br/>
            <input type="number" value={number} onChange={ (e) => SetNumber(e.target.value)}/><br></br>
            <button onClick={() => setNotification(number, 15000)}>15s</button>
            <button onClick={() => setNotification(number, 30000)}>30s</button>
            <button onClick={() => setNotification(number, 45000)}>45s</button>
            <button onClick={() => setNotification(number, 60000)}>1min</button>
            {/* <button onClick={}>wave</button> */}
        </div>
    )
}

export default AquaPark