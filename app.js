// var word = prompt("enter your word")
// var check = ""
//     for(j=word.length -1 ; j >= 0 ; j--){
//         check += word[j]
       
//     }
// if(word === check){
//     alert("this is palidrome word")
// }
// else{
// alert("this is not a palindrome word")
// }


   //           CHAPTER 1 - ALERTS - ASSIGNMENTS  //
 
 // TASK-1 //
  
  alert("welcome to Porsachi Store ")

  // TASK-2 //

  alert("ERROR! Please enter a valid password")

  // TASK-3 //

  alert("Welcome to JS Land...\n Happy Coding!")

  // TASK-4 //

  alert("Welcome to JS Land...");
  alert("Happy Coding!\nprevnet this page from creating additional pages");

  // TASK-5 //

 // alert("Hello..i can run JS through my web browser's console") <------ this code in console

 // TASK-6 AND TASK-7 DONE IN PROJECT........


               // CHAPTER 2 - VARIABLE FOR STRINGS - ASSIGNMENTS  //

  // TASK-1 //

var username = ""

// TASK-2 //

var myName = "Muhammad Anas"

// TASK-3 //

var message = "Hello World"
alert(message)

// TASK-4 //

var name = prompt("Enter your name ")
var age =prompt("Enetr your age ")
var address = prompt("Enetr your address ")
alert(name)
alert(age)
alert(address)

// TASK-5 //

  alert("pizza\npizz\npiz\npi\np")

// TASK-6 //

var email= "muhammadanas0819@gmail.com"
alert("My email address is "+ email)

// TASK-7 //

var book ="A smarter way to learn JavaScript"
alert("I ma trying to lean from the book " + book)

// TASK-8 //

document.write("YAH!! I can write HTML content through JavaScipt")

//  TASK-9 //

var strings ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(strings)

                            
                                CHAPTER 3 - VARIABLE FOR NUMBERS - ASSIGNMENTS  //

// TASK-1 //

var age = 19;
alert("i am " + age + " years old")

// TASK-2 //

var timesofvisit = 14
alert("You have visited this site for " + timesofvisit + " times"); //

// TASK-3 //

var birthyear = 2001; 
document.write("My birth year is " + birthyear + "<br>" + "Data type of my declared variable is number");

// TASK-4 //

var visitorsName = prompt("Enter your name ");
var productTitle = prompt("Enter the product");
var Quantity = prompt('Enter the quantity you want to buy');
document.write("<br>" + visitorsName + " ordered " +  Quantity + " " +  productTitle + " on XYZ clothing store");

                            
                                // CHAPTER 4 - VARIABLE NAMES: LEGAL OR ILLEGAL - ASSIGNMENTS  //

// TASK-1 //

var fruits = "banana" , clothes = "pants" , color = "red" ;

// TASK-2 //

   // Legal variables //

   var name = " " , age = "" , address = "" , weight = "" , phoneNumber  =  "" ;

   // Illegal varaibles //

//    var .Name = " " , 1age = " " , wight& = "" , phone number = "" , "address" = "" 

// TASK-3 //

document.write("<br>" + "<h1> Rules For Naming JS Varibales </h1>" );

document.write("<br>" + " Variable names can only contaain Numbers , $ and _ . For example: $my_1stVariable. ");

document.write("<br>" + "Variables must begin with a letter , $ or _ . For example: $name , _name , name. ");

document.write("<br>" + "Variable name a re cas sesnsitive.");

document.write("<br>" + "Variable names cannot be JS keywords. " );


                                 // CHAPTER 5 - MATH EXPRESSIONS - ASSIGNMENTS  //

// TASK-1 //

var firstNum = prompt("Enter the first number ");
var secondNum = prompt("Enter the second number "); 
firstNum = Number(firstNum);
secondNum = Number(secondNum);
var result = firstNum + secondNum ;
document.write("<br>" + "Sum of " + firstNum + " and " + secondNum + " is " + result ); 

//  TASK-2 //

var firstNum = prompt("Enter the first number ");
var secondNum = prompt("Enter the second number "); 
firstNum = Number(firstNum);
secondNum = Number(secondNum);
var sign = prompt("Enter the assignment operator you want to carry out ");
if (sign === "-" ) {
    var result = firstNum - secondNum ;
    document.write("<br>" + "Subtraction of " + firstNum + " and " + secondNum + " is " + result ); 

}
else if (sign === "*") {
    var result = firstNum * secondNum ;
    document.write("<br>" + "product of  " + firstNum + " and " + secondNum + " is " + result ); 

}
else if ( sign === "/" ){
    var result = firstNum / secondNum ;
    document.write("<br>" + "division of " + firstNum + " and " + secondNum + " is " + result ); 

}
else{
    var result = firstNum + secondNum ;
    document.write("<br>" + "Sum of " + firstNum + " and " + secondNum + " is " + result ); 

}