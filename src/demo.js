//CONCAT()
// let a=[1,2,3,4,5]
// let b=[9,8,7]
// let c=a.concat(b);
// console.log(c);


// let a=['TV','BIKE','CAR'];
// let b=['Cycle','Bus'];

// let c=a.concat(b);
// console.log(c);

// let d=b.concat('Truck',a);
// console.log(d);



//  var a=[1,2,3,4];
//  var b=[[6,7],[9,8]];
//  var c=a.concat(b);
//  console.log(c);
//  a[0]=0;
//  console.log(a);
//  b[0].push(6);
//  console.log(b);

//CONSTRUCTOR()
// let array = [1, 2, 3, 4, 5];

// let constructor = array.constructor;

// console.log(constructor)

//Filter()
// let a=[3,33,67,7,4,80,6]
// let even=a.filter(result=> result %2 ==0);
// console.log(even);

// let a=[20,50,64,9,7,3];
// function checkEven(a){
//   if(a%2==0)
//     return true;

//   else
//     return false;

// }
// let result=a.filter(checkEven);
// console.log(result);

// const a=[4,'hak',64,'fm','dvj',6,8]
// function check(a){
//   if(a>10 && !Number.isNaN(a))
//   return a;
// }
// const result=a.filter(check)
// console.log(result);

// Search a string in an Array

// const a=['Ram','hari','gopal','raj'];
// const SearchArr=(arr,query)=>arr.filter(element=>element.toLowerCase().indexOf(query.toLowerCase())!== -1);
// let result=SearchArr(a,'ra');
// console.log(result);

//find()
// const a=[2,7,8,9];
// function even(a){
//   if(a%2==0)
//   {
//     return a;
//   }
// }

// let result=a.find(even);
// console.log(result);

// const a=[41,62,42,9,8,13]
// const result=a.find(element=> element % 2==0);
// console.log(result);

// const a=[{name:"jay", roll:120},
// {name:"ram", roll:56},
// { name: "Alan", age: 20 },];
// const result=a.filter(({roll})=> roll>50 )
// console.log(result);

//findIndex()
// const a=[41,62,42,9,8,13]
// let firstOdd = a.findIndex((a)=>a %2 !== 0);
// console.log(firstOdd);

// const a=[41,62,42,9,8,13]
// let allOdd = a.filter((a)=>a %2 !== 0);
// console.log(allOdd);

//flat()
// var a=[1,2,3,4];
// var b=[[6,7],[9,8]];
// var c=a.concat(b);
// var d=c.flat()
// console.log(d);

//flatMap()
// var a=[1,2,3,4];
// const b=a.flatMap((a)=> a*2);
// console.log(b);

//foreach()
// var a=[2,7,8,9];
// function num(element){
//   console.log(element*element*element);
// }
// a.forEach(num);

//from()
// let array1= Array.from("JavaScript");

// console.log(array1);

//include()
// let languages = ["JavaScript", "Java", "C"];
// let check=languages.includes("Java");
// console.log(check);

//indexOf()
// let languages = ["JavaScript", "Java", "C","JavaScript"];
// let language=languages.indexOf('JavaScript');
// console.log(language);

//join()
// let languages = ["JavaScript", "Java", "C","JavaScript"];
// let check=languages.join('|');
// console.log(check);

//key()
// let languages = ["JavaScript", "Java", "C","JavaScript"];
// let check=languages.keys();
// for(let key of check){
//   console.log(key);
// }

// lastIndexOf()
// let a=[2,5,8,4,7,3,8,];
// let b=a.lastIndexOf(8);
// console.log(b);

//length()
// var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// languages.length=3;
// var num=languages.length;
// console.log(num);
// console.log(languages);

//Map()
// let a=[9,5,7,3,5];
// let b=a.map((a)=>a*a);
// console.log(b);

// of()
// let fruits = Array.of("Apple", "Banana", "Grapes");
// console.log(fruits);

//reduce()
// let a=["My","Name","is","Jayalal"]
// function full(x,y){
//   return x+y;
// }
// let sum=a.reduce(full);
// console.log(sum);

// let a=[2,5,8,4,7,3,8,];
// let sum=a.reduce((x,y)=> x+y);
// console.log(sum);
//sort()
// var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];
// var acc=names.sort((a,b)=>b.length-a.length);
// console.log(acc);

// let x=[1000, 50, 2, 7, 14];
// var acc=x.sort((a,b)=>b-a);
//  console.log(acc);

// let x=[33,85,62,59,40,9];
// let ass=x.sort((a,b)=> b-a);
// console.log(ass);
// let a=["My","Name","is","Jayalal"];
// let b=a.reduce((x,y)=> x+y);
// console.log(b);

//Check a number is Prime or not
// function prime(n){
//   if (n< 2){
//     return `${n} is not a prime number`;
//   }
//   for(let i=2;i<n;i++)
//   {
//     if(n%i===0){
//       return `${n} is not a prime ` ;
//     }
//     }
//     return `${n} is a prime`

// }
// console.log(prime(9));

//Check a year is leap year or not
// function LeapYear(year){
//   if((year%4==0)&&(year%100!=0) || (year%400==0)){
//     // console.log(year + "is a leap year");
//     return `${year} is a leap year`;
//   }
//   else{
//     // console.log(year + "is not a leap year ");
//     return `${year} is not a leap year`;
//   }

// }
// // const year=prompt("enter a number");
// // LeapYear(year);
// console.log(LeapYear(2000));

//Print fibonacci series

// function fibonacci(n){
//   let n1=0,n2=1, sum;

//   for(let i=1; i<=n;i++){
//     console.log(n1);
//     sum=n1+n2;
//     n1=n2;
//     n2=sum;
//     }
// }
// fibonacci(7);

//Factorial of a number
// function fact(n){
//   if(n==0 || n==1){
//     return 1
//   }
//   else{
//     return n*fact(n-1);
//   }

// }
// console.log(fact(5));

// program to find the largest among three numbers

// function Largest(a,b,c){
//   if(a>b &&a>c){
//     return `${a} is greater`;
//   }
//   if(b>c){
//    return `${b} is greater`;
//   }else{
//     return`${c} is greater`;
//   }

// }
// console.log(Largest(7,9,3));

// let a=['sun','mon','tue','wed','thu','fri','sat']
// a.length=4;
// console.log(a);


// function positive(a){
//   for(i=1;i<=a;i++)
//   {
//     if(a%i==0){
//      console.log(i);
//     }
//   }
// }
// positive(12);


