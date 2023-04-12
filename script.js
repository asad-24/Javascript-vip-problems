// JS Assignment # 2 (Handwritten with GitHub repos url) 

// 1-Write a logic to print the Fibonacci serious
function fibonacci(){
    let length =prompt(`Enter a character as a length of series`)//it is necessary to stop the series
let s1=1;
let s2=1;
console.log(s1);
console.log(s2);
let sum =s1 +s2;
for(let i=0;i<=length-2;i++){
 console.log(sum);
 s1=s2;
 s2=sum;
 sum=s1+s2;
}
}
//another method
//if you find specfic fibnoacci number by using indexes
function febByIndex(){
function fib(index){
    if(index<2)
    return 1;
    return fib(index-1)+fib(index-2);//it return only one number which is located on thoes index

}

let index=prompt(`Enter index and get fibnoaci number on index`);
console.log(fib(index)," is located at ", index ," index")

}
// 2-Write a logic to find the factorial of a given a number 

function factorial(){


    let number=prompt(`Enter a number to find factorial`);
    let fact=1;
    for(let i=1 ;i<=number;i++){
       fact=fact*i;
    }
    console.log(fact)
}
//another method
function facts2(){
    function fact(num){
        if(num<2)
        return 1;
        return (num*fact(num-1))
    }
    let num=prompt(`Enter a number to find factorial`);
    
    console.log(fact(num))
    
}



// 3-Remove all the occurrences of the given character. 

function  occurrences (){
let char= prompt(`Enter a character `)

let length=char.length;
let x=[];
let ck=1;
for(let i=0 ;i<length;i++){
  for(let j=i+1;j<length;j++){
    if(char[i]==char[j]){
       x=char.split(char[i]).join("")
     ck++;
    
    }
  }
}
length=length-ck;
for(let i=0 ;i<length;i++){
  console.log(x[i]);
}
}

// 4-How will you reverse an string.

function reverseStr(){
    let str= prompt(`Enter a string`);
for(let i=str.length;i>=0;i--){
    console.log(str[i])
}
}



// 5-How to apply getter and setter method with the help of using object? 
function getAndSet(){
    alert(`show in console`)
let obj={
  firstName:"Asad",
  lastName:"ALi",
  get getFullName(){
    return this.firstName +" "+ this.lastName;
  },
  set setFullName(data){
    this.firstName=data.first;
    this.lastName=data.last;
  }
}

obj.setFullName={first:"chaudhary", last:"asad"};
  console.log(obj.getFullName);


}

// 6-Can you print the first repeating character from the string
 function highlightRepeat(){

 
let nam=prompt("enter a string for find the first repeat ")
let checkPoint='n';
for(let i=0 ;i<=nam.length;i++){
  for(let j=i+1;j<=nam.length;j++){
    if(nam[i]==nam[j]){
      console.log("yes character is repeated",nam[j])
      checkPoint='y'
    
    }
    if(checkPoint=='y')
      break;
    
  }
}
if(checkPoint=='n'){
  console.log("no character repeat")
}


 }
// 7-How would you check if the given number is integer or not? 
function intOrNot(){
 let number =prompt("Enter a number to check integer or not ");
let check='y';

for(let i=0;i<=number.length;i++){
  if(number[i]=='.'){
    check='n';
    break;
  }
}
number=parseFloat(number);
if(check=='y'){
  console.log(number ," yes this is integer")
}
if(check=='n'){
  console.log(number ," No this is not integer")
}

}


// 8-Write an function that would you allow to call a function like this functionName(param1)(param2)
function allowToCall(){
function add(first) {
    if (first.length === second.length) {
      return function(second) { 
        first=Number.parseInt(first);
        second=Number.parseInt(second);
        return first + second;  
      }
    }
  }


let first=prompt(`Enter first value`);

let second=prompt(`Enter second value with same lenght otherwise error`);

console.log(first.length);

  console.log(add(first)(second));
    
}