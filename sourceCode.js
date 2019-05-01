// How to use Loops in Javascript: 'for', 'forEach' and 'for ... of'
// Let's create an Array with some colors
// Watch original video (spanish): https://youtu.be/Z30h97A1eJU

let colors = ['Grey', 'White', 'Pink', 'Yellow', 'Cyan', 'Tomato']

// ~~~~~~~~~~~ //
//  for loop   //
// ~~~~~~~~~~~ //
for (let i = 0; i < colors.length; i++) {
  console.log (colors[i]);
}

// ~~~~~~~~~~~~~~ //
//  forEach loop  //
// ~~~~~~~~~~~~~~ //
colors.forEach(function(mycolor) {
  console.log(mycolor);
});

// ~~~~~~~~~~~~~~ //
//   for of loop  //
// ~~~~~~~~~~~~~~ //
for (let color of colors) {
  console.log(color);
}

