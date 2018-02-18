
/* 

Javascript best practices 
    1. Always declare local varaibles with var keywords
    2. Put all declaration at top of each script
    3. Initialize variables at the beggining
    4. Never declare number, string, or boolean objects; treat as primitive values, not objects
    5. beware of automatic type conversions
    6. == comparison operator always converts(to matching types) before compairson
    7. The === operator forces compairson of values and type 
    8. use paramter defaults 
    10. Use JSLint to check validity
    11. place scripts at bottom of html page 
    12. Decalre varibales outside of the for statement
    13. Compensate for when javascript is disabled; Build website as if you didnt have javascript enabled 
    14. ALways use semicolons

    15. When looping "for in" statement through items in an object, 
        you may retrieve functions as well, so wrap code in an if statement which filter the information 
    16. Use Firebugs Timer feature to optimize code
    17. self executing functions

   
*/


/* 

    JS TODO: 
    1) clicking Learnmore brings to specifc package
    2) add slideshow!!! Check out W3school on this
  
*/

function selectPage(){

   var form = document.getElementById("page_select"); //get the form tag
   var accountType = document.getElementById("account_type").value;
   alert(accountType);

   if(accountType == 0){
        alert("Please select the account type");
   }
   else if (accountType == 1) {
        form.action = "#"; //patient
   }
   else if (accountType == 2) {
        form.action = "#"; //Trainer
   }
   else if (accountType == 3) {
        form.action = "doctorHome.html"; //doctor
   }

}