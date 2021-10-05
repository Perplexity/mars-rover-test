const directions = ["N", "W", "S", "E"]

function execute(command) {
	const commandArray = command ? [...command] : [];
	let [x, y, dirIndex] = [0, 0, 0]
	commandArray.forEach((command, i) => {
		const direction = directions[dirIndex];
		if (command === "M") {
			// move()

			if (direction === "N") y += 1;
			if (direction === "E") x += 1;
			if (direction === "S") y -= 1;
			if (direction === "W") x -= 1;
			if (y === 10) y = 0;
			if (x === 10) x = 0;
			if (y < 0) y = 9;
			if (x < 0) x = 9;
		}

		if (command === "L") {
			// rotateLeft()
			dirIndex += 1;
			if (dirIndex > directions.length - 1) dirIndex = 0;
		}

		if (command === "R") {
			// rotateRight()
			dirIndex -= 1;
			if (dirIndex < 0) dirIndex = 3;
		}
	});
	return `${x}:${y}:${directions[dirIndex]}`;
}

module.exports = { execute };