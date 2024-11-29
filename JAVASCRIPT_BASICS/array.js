const array1 = [0, 1, 2, 3, 4, 5, 6];

// array1.push(1);
// array1.pop();
// console.log(array1);
// array1.unshift(10);
// array1.shift();
// array1.shift();
// array1.includes(10);
// console.log(array1);

// array1.includes(15);

// array1.includes(5);

// array1.slice(0, 2); //Gives us the first two elements of the array. [0, 1] 
// The slice() method is used to extract a shallow copy of a portion of an array into a new array, without modifying the original array. It does not alter the original array.

array1.splice(0,0,"Akshay","Mahale");
console.log(array1);

 //Gives us the first two elements of the array. [0, 1]
//The splice() method is used to modify the contents of an array by removing or adding elements at specific positions. Unlike slice(), it mutates the original array.



newAr=array1.join()   //Gives a string of all elements in the array 
// console.log(newAr);

