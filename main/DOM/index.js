
// variable called body finding the body element/node in that tree and store it in a variable called 'body'
let body = document.querySelector('body');

// created 3 seperate variables finding the button with id red,green,blue and storing them
let redButton = document.querySelector('#red');
let greenButton = document.querySelector('#green');
let blueButton = document.querySelector('#blue');
// when the red button is clicked run the code inside this function
redButton.addEventListener('click', function(){
// changing the page background to red
body.style.backgroundColor = 'red';
}); // ends the function

greenButton.addEventListener('click', function(){
body.style.backgroundColor = 'green';
});
blueButton.addEventListener('click', function(){
    body.style.backgroundColor = 'blue';
});
