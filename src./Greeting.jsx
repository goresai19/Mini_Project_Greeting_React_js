// Importing the react from the react
import React from "react";

//Taking an object currdate of the class Date which stoers the value of the current Date.
let CurrDate = new Date();

/*Taking an variable CurrMinutes which stores the value of the minutes which we obtained by the method getMinutes() called by the CurrDate object of the Date class.*/
let CurrMinutes=CurrDate.getMinutes();


/*Taking an variable CurrHours which stores the value of the Hours which we obtained by the method getHours() called by the CurrDate object of the Date class.*/
let CurrHours= CurrDate.getHours();

//Creating the Greeting card variable for storing the value of the Greeting message.
let GreetingCard="";

//Creting an empty object Cssstyle for the inline stying of the message of the Greeting
const Cssstyle={};

/* Checking the condition of according to the currhours and assigning the appropriate message to the Greetingcard variable. The conditions of the Greeting message are as follows
1) If the time is in between 7AM to the 11 AM 
    then Display the "Good Morning message".
2) If the time is in between 12PM to the 19 PM 
    then Display the "Good Afternoon message".
3) If the above two conditions are failed
    then Display the "Good Night message".


*/
if(CurrHours >=7 && CurrHours <=11){
GreetingCard="Good Morning";
Cssstyle.color ="Green";
}
else if(CurrHours>=12 && CurrHours <=19)
{
  GreetingCard="Good Afternoon";
  Cssstyle.color ="orange";
}
else 
{
  GreetingCard="Good night";
  Cssstyle.color="Black";
}


//Creting the function Greeting which shows the Greeting message.
function Greeting(){
    return(
      <>
     <h2>Hi ,<span style={Cssstyle}>{GreetingCard}</span></h2>
     <h2>Current time is {CurrHours}:{CurrMinutes}</h2>
     
</>
    );
}


//Exporiting the Greeting message.
export default Greeting;
