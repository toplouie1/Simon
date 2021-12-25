import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const boxes = ["yellow", "blue", "red", "green"];
	const [computerOrder, setComputerOrder] = useState([3]);
	const [playerOrder, setPlayerOrder] = useState([]);
	const [selectedBox, setSelectedBox] = useState(null);
	const [isGameOver, setIsGameOver] = useState(false);

	const handleAddRandomBox = () => {
		// generating random index from 0 to 3
		let randomIndex = Math.floor(Math.random() * 4);
		// creating a new random # then setting them to the computerOrder array .
		setComputerOrder([...computerOrder, randomIndex]);
	};

	const showComputerOrder = () => {
		for (let i = 0; i < computerOrder.length; i++) {
			setTimeout(() => {
				handleBlink(computerOrder[i]);
			}, 400 * (i + 1));
		}
	};

	useEffect(() => {
		showComputerOrder();
	}, []);

	const handleBlink = (index) => {
		setSelectedBox(index);
		setTimeout(() => {
			setSelectedBox(null);
		}, 333);
	};

	const handleClickBox = (boxIndex) => {
		handleBlink(boxIndex);
		// giving it a condition
		let isCorrectOrder = true;
		for (let i = 0; i < playerOrder.length; i++) {
			if (playerOrder[i] !== computerOrder[i]) {
				isCorrectOrder = false;
			}
		}
		if (!isCorrectOrder) {
			setIsGameOver(true);
			return;
		}

		// setPlayerOrder([...playerOrder, boxIndex]);
	};

	let boxesElArr = boxes.map((color, index) => {
		return (
			<div
				key={index}
				onClick={() => handleClickBox(index)}
				style={{
					backgroundColor: color,
					opacity: selectedBox === index ? 1 : 0.5,
				}}
				className={"box"}
			></div>
		);
	});

	return (
		<div id="boxes-container">
			{!isGameOver && boxesElArr}
			{isGameOver && <h1> Game is over You LOSE !!!!!!!</h1>}
		</div>
	);
}

export default App;
