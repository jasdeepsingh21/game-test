import React from 'react'

function index({startGame}) {
    return (
        <div className="popup">
            <h3>Enter details to start game</h3>
                <div><input type="number" id="matrix" placeholder="Matrix size"/></div>
                <div><input type="number" id="time" placeholder="time"/></div>
                <div><button onClick={startGame}>Start</button></div>
        </div>
    )
}

export default index
