// let newNumber="100abc"


// let conNumberIs=Number(newNumber)

// console.log(conNumberIs);
// console.log( typeof conNumberIs);

//Type of Nan is Number


// let str="2000"

// let str2=String(str)

// console.log(str2);
// console.log(typeof str2);


//Type of Null is obj

// let newVal=null

// console.log(newVal);
// console.log(typeof newVal);


// let newVal=true
// let newVal=false

// let newVal1=Boolean(newVal)
// let newVal1=Number(newVal)

// console.log(newVal1);
// console.log(typeof newVal1);

// console.log(typeof("22"+22));
// console.log(typeof(22+10+"22"));
// console.log(22+10+"22");



// console.log(typeof null);
// console.log(typeof Object);
// console.log(typeof undefined);


// let str=null
// let str=Object
// let str=undefined
// let str=Boolean
// let str=NaN
// let str2=Number(str)
console.log(typeof str);


// let str3=Number(undefined)
// console.log(typeof str3);


// Explanation:
// The loose equality (==) operator in JavaScript performs type coercion. This means it attempts to convert the operands to a common type before making the comparison. Specifically, when comparing null and undefined using ==, JavaScript has a special rule that considers them equal:

// null == undefined is true because of a specific behavior in JavaScript where null and undefined are treated as equivalent when using the loose equality operator.
// However, when using the strict equality operator (===), which does not perform type coercion, null === undefined will return false because they are distinct types (null is an object and undefined is a primitive).

// Summary:
// Loose equality (==): null and undefined are considered equal.
// Strict equality (===): null and undefined are not considered equal because they are different types.
// Thus, the result of console.log(null == undefined); is true due to the loose equality comparison.

// console.log(null == undefined);

// console.log(null === undefined);
                




