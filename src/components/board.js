import Box from "./box";
import React from "react";

export default function Board(props) {
    const boxes = props.board.map((box, index) => {
        return <Box className="box" value={box} toogle={() => props.onClick(index)} />
    });
    return(
        <div className="game">
            {boxes}
        </div>
    )
}