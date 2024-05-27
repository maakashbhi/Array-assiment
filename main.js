//                                             Assignment Of Array
//                   Question 1:
// Create an array named fruits thats contains the following string elements: "apple","grapes","mango","Orange".
var fruit = ["apple", "grapes", "mango", "Orange"];
// Question 2:
// Declare an array named numbers that can contain only number elements and initialize it with the values 15,20,25 and 30
var numbers = [15, 20, 25, 30];
// Question 3:
// Acess the third element of the fruit Array in and assign it to a variable named thirdFruit.
fruit[2]; // Acessing the third Element define as mango
var thirdFruit = fruit[2]; // Assign it to a variable named thirdFruit
console.log(thirdFruit); // Output: mango
// Question 4:
// Change the second element of the numbers array to 25
numbers[1] = 25; // you can do this or another way in which we use splice method
console.log(numbers);
// Question 5: 
// Add the element "mango" to the end of the fruits array using the method.
fruit.push("mango"); // by applying this .push() method we can add an element to the end of an array.
console.log(fruit);
// Question 6:
// Remove the last element from the fruits array using the method and assign to a variable named lastFruit.
var lastFruit = fruit.pop(); // With the use of .pop() method we remove the last element from an array, also we assign in variable named lastFruit
console.log(fruit);
console.log("Last Fruit:".concat(lastFruit));
// Question 7:
// Remove the first element from the fruits array using the method and assign it to variavle named firstFruit.
var firstFruit = fruit.shift(); // With the use of .shift() method we remove the first element from an array, also we assign in variable named firstFruit
console.log(fruit);
console.log("First Fruit:", firstFruit);
// Question 8:
// Add the element "kiwi to the beginning of the fruit arrays using the method"
fruit.unshift("Bananan"); // using .unshift method() we add element to the beginning
console.log(fruit);
// Question 9:
// Remove 2 element from the fruit array strarting from index 1 using the method 
console.log("Before remove element:", fruit);
fruit.splice(1, 2); // with the use of .splice() method we can remove the element. which start anywhere in array and also remove the slective element 
console.log("After remove element:", fruit);
// Question 10:
// Insert the elemets "pineapple" and "peer" at index 2 of the fruit array using the method.
console.log("Before Adding element:", fruit);
fruit.splice(2, 0, 'pineapple', 'Watermelon'); // with the use of .splice method you can add element as well
console.log("After adding element:", fruit);
// Question 11:
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
console.log("Fruit array:", fruit);
var citrusFruits = fruit.slice(0, 2); //.slice method copy the array
console.log("citrusFriut:", citrusFruits);
// Question 12:
// Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
console.log("Fruit array:", fruit);
var lastTwoFruits = fruit.slice(-2);
console.log("LastTwoFruits", lastTwoFruits);
