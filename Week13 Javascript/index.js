counter = 0; //this is the variable to count how many users click the text

function countClicks(element) { // this is the function to show the text and counts how many users click
    counter = counter + 1; //adding 1 to count
    var output = 'The link was pressed ' + counter + ' times.'; // the text we will show on the page
    element.innerHTML = output; // this is an action to print out
}