import "./App.css";
import { useState } from "react";

function App() {
	const boxes = ["yellow", "blue", "red", "green"];
	const [computerOrder, setComputerOrder] = useState([]);
	const [playerOrder, setPlayerOrder] = useState([]);

	const handleBlink = (event) => {
		event.target.styple.opacity = 1;
		setTimeout(() => {
			event.target.style.opacity = 0.5;
		}, 333);
	};

	const handleClickBox = (boxIndex, e) => {
		handleBlink(e);
	};
	let boxesElArr = boxes.map((color, index) => {
		return (
			<div
				key={index}
				onClick={(e) => handleClickBox(index, e)}
				style={{ backgroundColor: color }}
				className={"box"}
			></div>
		);
	});

	return <div id="boxes-container">{boxesElArr}</div>;
}

export default App;
