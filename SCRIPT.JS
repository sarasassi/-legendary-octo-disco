// get all the increment buttons
var incButtons = document.querySelectorAll("increment")
console.log(incButtons);
for (var i = 0; i < incButtons length; i++ ) {
    console.log(incButtons [i]);
    incButtons [i]. addEventListener('click', function(event)) {
        setQuantityFor (event.target);

    }
}
// get all the decrement buttons 
var incButtons = document.querySelectorAll("decrement")
// console.log(incButtons);
for (var i = 0; i < incButtons length; i++ ) {
// console.log(incButtons [i]);
    decButtons [i]. addEventListener('click', function(event)) {
// console.log (event.target); 
 setQuantityFor (event.target);
} ;


// increment 
function setQuantityFor(btn) {
//console.dir(btn.className);
if (btn.className.inclues('increment') ===true)  {
//  console.log(btn.previousElementSibling);
var span = btn.previousElementSibling;
console.log(span.InnerText);
span.innerText++;
}
// decrement
if (btn.className.inclues('decrement') === true) {
    var span = btn.next ElementSibling;
    if (span.innerText > 1) {
    span.InnerText--; 
    }
  }
}
// Get All remove icons 
var removeIcons = document.querySelectorAll ('remove');
for (var i= 0; i < removeIcons.length; i++) {
removeIcons [i].addEventListener('click', function (event) {
    //console.dir(event.target.parentElement.parentElement.parentElement);
    // console.dir(event.target.closest('single-item'));
    event.target.closest('.single-item').remove();
    calculateTotalPrice ;
});

// Get All like icons
var likeIcons = document.querySelectorAll ('.like');
for (var i= 0; i < likeIcons.length; i++) {
likeIcons [i].addEventListener ('click', function (event) {
    console.log(event.target.classlist);
    event.target.classlist.toggle ('text-primary')
    console.dir(event.target);
});
fucntion calculateTotalPrice() {
  
    // Get all card items
    var cartitems = document.querySelectorAll('signle-item')
    // Initialize the total price
    var totalPrice = 0;
    for (var i = 0; i < cartitems.length; i++) { 
        console.log(Items);
        var unitPrice = Items[i] querySelector('.price h3 span').innerText;
        console.log(unitPrice);
        var quantity = Items[i].querySelector('price . quantity span').innerText;
        console.log(quantity);
        totalPrice += unitPrice * quantity

        // Get the total
        var total = document.getElementById('total');
        total.innerText = totalPrice;


    }


