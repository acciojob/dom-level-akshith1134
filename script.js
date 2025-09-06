//your JS code here. If required.
// Select the target element
const elem = document.getElementById('level');

let level = 4;
let current = elem;

// Traverse up the DOM tree
while (current) {
    level++;
    current = current.parentElement;
}

// Display the DOM level
alert(`The level of the element is: ${level}`);
