// interface User{
//     name:string;
//     lastname:string;
//     age:number;
//}

// function check(a:User){
//     console.log(a.lastname);
// }

// const ans=check({
//     name:"gagan",
//     lastname:"arora",
//     age:7
// });

// console.log(ans);

// console.log("hello");
// console.log("gagan");

// class Employee implements User{
//       name:string;
//       lastname:string
//       age:number;
//       constructor(a:string,b:string,c:number){
//         this.name=a;
//         this.lastname=b;
//         this.age=c;
//       }
//       greet(a:string){
//         console.log("Hello"+"     "+a);
//       }
// }

// const a=new Employee("gagan","arora",4);
 
// console.log(a.age);

// console.log(a.greet("idk"));




// class Shape{

   
//     area(){
//         console.log("area function");
//     }
// }

// class Area extends Shape{
//     a:number;
//     b:number;
//     circle(){
//         console.log("circle");
//     }
//     rectangle(){
//         console.log("rectangle");
//     }

//     constructor(a:number,b:number){
//         super();
//         this.a=a;
//         this.b=b;
//         console.log(a+b);
//     }
// }


// const obj=new Area(2,10);
// console.log(obj.rectangle());
// console.log(obj.area());

//Union(|)=>Means "either" if a:String|number that means its either number or its either string and with objects
// the common parts will definitely come and other properties will be either from any object.



//intersection(&)=>properties of both the objects should be followed;
// type Users={
//     a:string;
//     b:string;
// }

// type Users2={
//     a:string;
//     b:string;
//     c:string;
//     d:number;
// }



// type final=Users|Users2;
// type final2=Users&Users2;


// const a:final2={
//     a:"gagan",
//     b:"gagan",
//     c:"gagan",
//     d:6

// }

// console.log(a);

// We can use "?" in interface or tyoes to  make that property as optional ,knowm as partial
//Typescript advance harkirat is really great to watch TimeStamp-45min
//In that video Map,readonly,pick,record,exclude,type inference zod