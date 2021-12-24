import "./App.css";
import { useState } from "react";

function App() {
	const boxes = ["yellow", "blue", "red", "green"];
	const [computerOrder, setComputerOrder] = useState([3]);
	// const [playerOrder, setPlayerOrder] = useState([]);

	const handleAddRandomBox = () => {
		// generating random index from 0 to 3
		let randomIndex = Math.floor(Math.random() * 4);
		// creating a new array with the added random numbers
		// then setting them to the computerOrder array .
		setComputerOrder([...computerOrder, randomIndex]);
	};

	const handleBlink = (event) => {
		event.target.styple.opacity = 1;
		setTimeout(() => {
			event.target.style.opacity = 0.5;
		}, 333);
	};

	const handleClickBox = (boxIndex, e) => {
		handleBlink(e);
		handleAddRandomBox();
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
