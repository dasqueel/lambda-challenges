// find max x width
// find max y height

// instantiate rectangles to a matrix with 0s and 1s, 1s marking the area

// loop through matrics and count overlaps

// return the overlapped markings

function findOverlap(rect1, rect2) {
	let overlapRect = { leftX: null, bottomY: null, width: null, height: null };
	const nullRect = { leftX: null, bottomY: null, width: null, height: null };

	const smallestX = [rect1, rect2].reduce((l, e) => e.leftX < l.leftX ? e : l );

	if (rect1 === smallestX) {
		const xDif = rect1.leftX + rect1.width - rect2.leftX;
		if (xDif < 0) return nullRect;
		else {
			overlapRect.leftX = rect2.leftX;
			overlapRect.width = xDif;
		}
	}
	else {
		const xDif = rect2.leftX + rect2.width - rect1.leftX;
		if (xDif < 0) return nullRect;
		else {
			overlapRect.leftX = rect1.leftX;
			overlapRect.width = xDif;
		}
	}

	// y part
	const smallestY = [rect1, rect2].reduce((l, e) => e.bottomY < l.bottomY ? e : l );

	if (rect1 === smallestY) {
		const yDif = rect1.bottomY + rect1.height - rect2.bottomY;
		if (yDif < 0) return nullRect;
		else {
			overlapRect.bottomY = rect2.bottomY;
			overlapRect.height = yDif;
		}
	}
	else {
		const yDif = rect2.bottomY + rect2.height - rect1.bottomY;
		if (yDif < 0) return nullRect;
		else {
			overlapRect.bottomY = rect1.bottomY;
			overlapRect.height = yDif;
		}
	}

	return overlapRect;
}

const rectangle1 = {
  leftX: 2,
  bottomY: 1,
  width: 3,
  height: 2,
};

const rectangle2 = {
  leftX: 4,
  bottomY: 2,
  width: 3,
  height: 4,
};

const rectangle3 = {
  leftX: 8,
  bottomY: 2,
  width: 3,
  height: 4,
};

console.log(findOverlap(rectangle2, rectangle2))

