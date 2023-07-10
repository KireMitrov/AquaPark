import React, { useState } from "react";
import wave from "./wave.wav"

function AquaPark() {
    const [number, SetNumber] = useState(null);
    const waveSound = new Audio(wave);


    const setNotification = (num, time) => {
        
        setTimeout(() => {
            waveSound.play();
            alert(`${num} has finished`);
        }, time);

        setTimeout(() => {
            waveSound.play();
        }, time - 1000);
        
    }


    return (
        <div className="main-container">
            <h1>Aqua Park Monitoring</h1>
            <div className="inputs">
                <label>Enter bracelet number</label>
                <input type="number" value={number} onChange={(e) => SetNumber(e.target.value)} />
            </div>
            <div className="btns">
                <button onClick={() => setNotification(number, 15000)}>15s</button>
                <button onClick={() => setNotification(number, 30000)}>30s</button>
                <button onClick={() => setNotification(number, 45000)}>45s</button>
                <button onClick={() => setNotification(number, 60000)}>1min</button>
            </div>
            {/* <button onClick={}>wave</button> */}
        </div>
    )
}

export default AquaPark