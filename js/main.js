// const circle = {
//     radius: 1,
//     location: {
//         x : 1,
//         y : 1
//     },
//     draw: function (){
//         console.log('doira');
//     }
// }

// function createCircle(radius){
//     return {
//         radius,
//         drow(){
//             console.log('doira');
//         }
//     }
// }

// const circle1 = createCircle(1);
// const circle2 = createCircle(2);
// console.log(circle1);
// console.log(circle2

// function Circle(radius){
//     this.radius = radius
//     this.drow = function(){
//         console.log('doira');
//     }
// }

// const circle = new Circle(1);
// console.log(circle)

// function aboutme(first,last,age){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }
// let you = new aboutme('Javohirbek','Boysoatov',23);
// document.getElementById('demo').innerHTML = 'My name is' + you.firstName;

// function aboutme(name,age){
//     this.firstName = name;
//     this.age = age;
// }
// let about = new aboutme('Javohir',23);
// console.log(about)

// let personF = (name,age) => {
//     return {
//         name,
//         age
//     }
// }
// let about = personF('Javohir',23);
// console.log(about);

// value type = string boolean number 
// Reference type = obect function array

let a = 10;
let b = a;
a = 20;
console.log(a,b);

let x = {value:20};
let y = x;
x.value= 30;
console.log(x,y)
