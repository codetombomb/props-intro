import React from 'react';
import './css/ball.css'
import ball from "../images/ball.png"

function Ball(props) {
    

    const startingPosition = {
        bottom: "20%",
        right: "30%"
    }

    const holeInOne = {
        bottom: "38%",
        left: "17%"
    }

    return (
        <img
            id="ball"
            style={props.perfectPutt ? holeInOne : startingPosition}
            src={ball}
            alt="golf ball"
        />
    );
}

export default Ball;