
// variable called body getting the body element/node in that tree
let body = document.querySelector('body');
// telling the document to select the element id red and listen to the click event
document.querySelector('#red').addEventListener('click', function(){
body.style.backgroundColor = 'red';
})