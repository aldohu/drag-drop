// Get the draggable element
var dragElement = document.querySelector('img');

// Get the target elements
var targets = document.getElementsByClassName('target');

// Variables to track mouse position and element offset
var offsetX = 0;
var offsetY = 0;
var dragActive = false;

// Event listener for mouse down event
dragElement.addEventListener('mousedown', function (event) {
	// Store the initial mouse position and element offset
	offsetX = event.clientX - dragElement.offsetLeft;
	offsetY = event.clientY - dragElement.offsetTop;
	dragActive = true;
});

// Event listener for mouse up event
document.addEventListener('mouseup', function () {
	dragActive = false;
	// Declare a variable to store the target element
	var dropTarget = null;
	// Check if the draggable element is inside any target element
	for (var i = 0; i < targets.length; i++) {
		var target = targets[i];
		var targetRect = target.getBoundingClientRect();
		var dragRect = dragElement.getBoundingClientRect();
		if (
			dragRect.left >= targetRect.left &&
			dragRect.right <= targetRect.right &&
			dragRect.top >= targetRect.top &&
			dragRect.bottom <= targetRect.bottom
		) {
			// Set the dropTarget variable to the target element
			dropTarget = target;
			// Break out of the loop
			break;
		}
	}
	// If there is a dropTarget, append the image to it and reset its position
	if (dropTarget) {
		dropTarget.appendChild(dragElement);
		dragElement.style.left = '0px';
		dragElement.style.top = '0px';
	}
});
// Event listener for mouse move event
document.addEventListener('mousemove', function (event) {
	if (dragActive) {
		// Calculate the new position of the element
		var newX = event.clientX - offsetX;
		var newY = event.clientY - offsetY;

		// Update the position of the element
		dragElement.style.left = newX + 'px';
		dragElement.style.top = newY + 'px';
	}
});
