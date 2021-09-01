// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt(`Please enter the number`));
if(num%2==0)
{
  alert(`Number is even`);

}
else{
  alert(`number is odd`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
// let num1 = Number(prompt(`Please enter the number`));
// let num2 = Number(prompt(`Please enter the number`));

if(num1>num2)
{
  alert(` ${num1} is greater than ${num2}`);

}
else{
  alert(` ${num2} is greater than ${num1}`);
}

// 3. Convert the above code using`?` terniary operator
// let num1 = Number(prompt(`Please enter the number`));
// let num2 = Number(prompt(`Please enter the number`));

// num1>num2 ?  alert(` ${num1} is greater than ${num2}`):  alert(` ${num2} is greater than ${num1}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName= prompt(`Please enter the house name`);
if(houseName=="stark")
{
  alert(`Winter is coming`);
}
else if(houseName=="lannister")
{
  alert(`A lannister always pays his debt`);
}
else{
  alert(`All men must die`);
}

// 5. Convert the above code using`?` terniary operator
let houseName= prompt(`Please enter the house name`);
houseName=="stark" ?  alert(`Winter is coming`):houseName=="lannister" ?  alert(`A lannister always pays his debt`):alert(`All men must die`);


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let numofMonth = Number(prompt(`please enter the number of the month`));
switch(numofMonth)
{
  case 1:
    alert(`january`);
    break;
  case 2:
    alert(`Febuary`);
    break;
  case 3:
    alert(`March`);
    break;
  case 4:
    alert(`April`);
    break;
  case 5:
    alert(`May`);
    break;
  case 6:
    alert(`june`);
    break; 
  case 7:
    alert(`july`);
    break;
  case 8:
    alert(`August`);
    break;
  case 9:
    alert(`September`);
    break;
  case 10:
    alert(`October`);
    break;
  case 11:
    alert(`November`);
    break;
  case 12:
    alert(`December`);
    break;
   default:
      alert(`None`);
      break;  
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt(`Please enter the salary`));
if(salary<=20000)
{
  let handAmount= (salary-(salary*10)/100);
  alert(`In hand salary is: ${handAmount}`);
}
else if(salary<=40000)
{
  let handAmount= (salary-(salary*10)/100);
  alert(`In hand salary is: ${handAmount}`);
}
else{
  let handAmount= (salary-(salary*10)/100);
  alert(`In hand salary is: ${handAmount}`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
//if..else
let marks=Number(prompt(`Please enter the marks obtained`));
if(marks>100)
{
  alert(`"Marks can't be greater than 100"`);
}
else if(marks>80 && marks<=100)
{
  alert(`"Grade A"`);
}
else if(marks>50 && marks<=80)
{
  alert(`"Grade B"`);
}
else if(marks>30 && marks<=50)
{
  alert(`"Grade C"`);
}
else{
  alert(`"Grade D"`);
}

//USinng switch case///
let marks=Number(prompt(`Please enter the marks obtained`));
switch(true)
{
  case marks>100:
    alert(`"Marks can't be greater than 100"`);
    break;
  case marks>80 && marks<=100:
    alert(`"Grade A"`);
      break;
  case marks>50 && marks<=80:
    alert(`"Grade B"`);
    break;
  case marks>30 && marks<=50:
        alert(`"Grade C"`);
          break;  
  default:
    alert(`Grade D`);
    break;          
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let wetherCondition=prompt(`What is then weatehr like outside`);
if(wetherCondition=="sunny")
{
  alert(`Wear a T-shirt`);
}
else if(wetherCondition=="rainy")
{
  alert(`Don't forget to take your raincoat`);
}
else if(wetherCondition=="hot")
{
  alert(`Get a hanky`);
}
else if(wetherCondition=="freezing")
{
  alert(`Get your sweeter on`);
}
else{
  alert(`Not a valid input`);
}
