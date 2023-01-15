// Exercise on Pass By Value and Pass By Reference?

// Pass by value

// let name="Bolendra";
// let name2=name;
// name="software-developer";
// console.log(name2);
// console.log(name);

// Pass By reference

// let details={
//     name:"Bolendra",
//     workProfile:"Software-Developer",
//     age:26
// }
// // console.log(details);

// let details2=details;
// details2.workProfile="Fresher-Software-Developer";

// console.log(details);
// console.log(details2);

//*****************************************************************************************//********************************************************************************************************/************** */


// Exercise on higher order function

// Filter the even number and print only the odd number

// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function filterOdd(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// }
// filterOdd(arr);

//*********************************************************************************//********************************************************************************************************/***********************/


//Example of Function factory

// const createUser = ({ userName, avatar }) => ({
//     id: Math.floor((1 + Math.random()) * 0x10000),
//     userName,
//     avatar,
//     changeUserName(userName) {
//         this.userName = userName;
//         return this;
//     },
//     changeAvatar(url) {
//         // execute some logic to retrieve avatar image
//         const newAvatar = fetchAvatarFromUrl(url)
//         this.avatar = newAvatar
//         return this
//     }
// });

// console.log(createUser({ userName: 'Bender', avatar: 'bender.png' }));

// This code defines a function called createUser that takes an object as its argument.
//The object should have properties userName and avatar. The createUser function returns a new object
//that has the following properties:

// id: a random ID generated using Math.random()
// userName: the userName value passed as an argument to createUser
// avatar: the avatar value passed as an argument to createUser
// changeUserName: a method that allows you to change the userName property of the object
// changeAvatar: a method that allows you to change the avatar property of the object by providing a URL to an avatar image
// The code then logs the result of calling createUser with an object argument to the console.

//***************************************************************//********************************************************************************************************/*****************************************/

//Currying function example

// Use currying function to find the volume of a cube

// function volumeOfCube(a){
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }

// let result=volumeOfCube(2)(2)(2);
// console.log(result);

// Use currying function to find the Area of a Traingle

// function areaOfTriangle(base){
//     return function(height){
//         return 0.5*base*height
//     }
// }
// let result1=areaOfTriangle(2)(10);
// console.log(result1);

//*********************************************//********************************************************************************************************/***********************************************************/

//How to Use the Call Function in JavaScript

// function Car(type, fuelType) {
//     this.type = type;
//     this.fuelType = fuelType
// }

// function setBrand(brand) {
//     Car.call(this, "convertible", "petrol");
//     this.brand = brand;
//     console.log(`car details = `, this);
// }

// function definePrice(price) {
//     Car.call(this, "EasyMovable", "diesel");
//     this.price = price;
//     console.log(`car details= `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

//If you look carefully, you can see that we use the call function to invoke the Car function on two occasions.
//Firstly, in the setBrand and then in the definePrice functions.

//In both of these functions, we invoke the Car function with this object representing to the respective functions themselves.
//For example, inside setBrand, we call the Car function with the this object belonging to its context. The case is similar for definePrice.

//This code defines two functions setBrand and definePrice that appear to create new instances of a Car object with some default properties.
//setBrand sets the type of the car to "convertible" and the fuelType to "petrol" and sets the brand property of the car to the value passed in as
//an argument. definePrice sets the type of the car to "EasyMovable" and the fuelType to "diesel" and sets the price property of the car to the
//value passed in as an argument.

//It then creates two new objects using these functions: newBrand and newCarPrice. newBrand is created using the setBrand function and
//newCarPrice is created using the definePrice function. When these objects are created, the console.log statements in the functions are
//executed and log the properties of the objects to the console.


//**************************************************************************************************//********************************************************************************************************/******/

//How to Use the Apply Function in JavaScript?

// function carType(type,fuelType){
//     this.type=type;
//     this.fuelType=fuelType;
// }

// function setBrand(brand){
//     carType.apply(this,["convertible","petrol"]);
//     this.brand=brand;
//     console.log(`Car details = ` ,this);
// }

// function setPrice(price){
//     carType.apply(this,["Easy-Movable","Diesel"]);
//     this.price=price;
//     console.log(`car Details and price is =` , this);
// }

// const newBrand= new setBrand('Brand1');
// const newSetPrice = new setPrice(15020);


// The code you provided defines two functions, carType and setBrand and setPrice. The carType function is a constructor function
// that is used to create objects that represent different types of cars. It takes two arguments, type and fuelType, which are used to set
//  the type and fuelType properties of the car object.

// The setBrand function is a separate function that uses the apply method to set the type and fuelType properties of the this
// object to "convertible" and "petrol", respectively. It then sets the brand property of the this object to the value of the brand argument.
//  The console.log statement at the end of the function logs the entire this object to the console.

// The setPrice function is similar to the setBrand function, but it uses the apply method to set the type and fuelType properties of the
//this object to "Easy-Movable" and "Diesel", respectively. It then sets the price property of the this object to the value of the price argument. The console.log statement at the end of the function logs the entire this object to the console.

// Finally, the code defines two variables, newBrand and newSetPrice, which are set to the results of calling the setBrand and
// setPrice functions with the respective arguments.

//***************************************************************************************************//********************************************************************************************************/*****/


//Exercise related to ForEach

// let numbers=[1,2,3,4,5,6];

// numbers.forEach(function(numbers){
//     console.log(numbers);
// })


// numbers.forEach(function(numbers,index){
//     console.log(numbers + ' is present at '+ index +' position of an array');
// })

// numbers.forEach(function(numbers,index,array){
//     console.log(numbers + ' is present at '+ index +' position of an array and the final array is ' + array);
// })

/***************************************************************************************************//********************************************************************************************************/

//Exercise on  For...in Loop and Exercise on For...of Loop

// const numbers=[1,2,3,4,5,6];


// Array.prototype.decimalfy = function() {
//     for (i = 0; i < this.length; i++) {
//       this[i] = this[i].toFixed(4);
//     }
//   };

// for(element in numbers){
//     console.log(element);
// }

// for(element of numbers){
//     console.log(element);
// }

//***************************************************************************************************//********************************************************************************************************/


// Destructuring examples

// Destructuring of an Array
// const colors = ["Red", "Black", "Green", "Yellow", "WHite", "Blue", "Grey"];

// let [first, second] = colors;
// [first, second] = [second, first];
// console.log(first);
// console.log(second);

// Destructuring of an Object

// const softwareDeveloper={
//     frontend:"REACT",
//     backend:"Node",
//     dataBase:"MongoDb"
// }

//const {frontend,backend}=softwareDeveloper;

//console.log(softwareDeveloper.frontend,softwareDeveloper.backend);

// const {frontend:courseOne,backend:courseTwo}=softwareDeveloper;
// console.log(courseOne,courseTwo);

//***************************************************************************************************//********************************************************************************************************/

//Default Function Parameter

//Example-->1


// function multi(a,b){
//     console.log(a*b);
// }
// multi();


// Example-->2

//  function multi(a=3,b=5){
//     console.log(a*b);
// }

// multi();
// multi(4,5);

//***************************************************************************************************//********************************************************************************************************/

// Usage of Math function

//Example--> 1


// let b=[12,45,66];
// let a =Math.max(...b,45,55);
// console.log(...b);
// console.log(a);


//Example--> 2

// let a=Math.pow(5,3);
// console.log(a);

//***************************************************************************************************//********************************************************************************************************/


//Below code is related to call back function and call Back Hell

// const getRollNo=()=>{
//     setTimeout(()=>{
//         console.log('Api Getting Roll no after 2 Sec');
//         let roll=[1,2,3,4,5,6,7];
//         console.log(roll);
//         setTimeout((rollNo)=>{
//             const bioData={
//                 name:'Bolendra',
//                 age:26
//             }
//             console.log(`Hello my name is ${bioData.name} and my age is ${bioData.age} and my rollNo is ${rollNo}`);

//             setTimeout(()=>{

//                 bioData.gender='Male';
//                 console.log(`Hello ${bioData.name} age is ${bioData.age}`)

//             },2000,bioData.name)

//         },3000,roll[1]);
        
//     },2000);
// }

// getRollNo();


//***************************************************************************************************//********************************************************************************************************/


