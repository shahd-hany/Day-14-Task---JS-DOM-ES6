"use strict";
// desttructing 
//  var personal={
//     fullName:"shahd hany ",
//     age:21,
//     languages:["cpp","java","python"],
//     job:{
//         jobName:"front-end developer",
//         experience:"3 years",
//         salary:3000,
//     }
//  }

//  let {fullName,age,job:{jobName,experience,salary}}=personal;

// let colors=["beige","red","blue","mint green"];
// let [color1,color2, ,color3]=colors;




//this 
// this.alert("helloooo");
// let element=document.getElementById("#main-img");
// element.addEventListener("click",(e)=>{
//     console.log(this);
//     let {target ,clientY,clientX}=e;
//     console.log(clientX);
    
// })




//for of and for in
// let data=[
//     {fullName:"Mariem hany" , age :25 ,job:"office", salary:3000},
//     {fullName:"Ahmed ali" , age :22 ,job:"back-end developer", salary:2500},
//     {fullName:"Malak Ziad" , age :30 ,job:"front-end developer", salary:2000},
//     {fullName:"Adham mahmoud" , age :21 ,job:"front-end developer", salary:1500},

//  ]
// for(let person of data){
//     let{fullName,age,job}=person;
//     console.log("employee name:"+fullName , " age :"+ age , "job :" + job);
//  }
// for (let key in personal){
//   console.log(personal[key]);
  
// }




//spread operator
// const productName="jacket";
// const price=20;

// function getProduct(strings,...param){
//     console.log(`productName ${param[0]} and its price ${param[1]}`);
    
// }
// getProduct `${(productName)} ${(price)}`




//higher function 
//map function
// let salries=data.map((person)=>{
//     return person.salary+1000;
// })
// console.log("salaries of employee in data :" + salries);



// filter
// let frontDevelopers=data.filter((person)=>person.job=="front-end developer")
// console.log("frontend employee in data :"+ frontDevelopers);



//find 
// let backEnd=data.find((person)=>person.job=="back-end developer");
// console.log("backend employee in data :"+ backEnd);



//findINdx
// let indexOfOffice=data.findIndex((person)=> person.job=="office");
// console.log("index of office employee in data :"+indexOfOffice);

