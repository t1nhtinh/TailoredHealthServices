/* Name: Tinh Dang
 * Filename: DoctorPage.js
 * Description: javascipt to program behavior of doctor's page
 */

 /*

 JS TODO:
            1) Clicking on patient shows:
            https://www.w3schools.com/howto/howto_css_cards.asp
                a) patient picture
                b) patient stats <-- record of each time patient came into get a checkup
                    i) add an update button here/does not overwrite!!! every update should have a date
                c) allergys
                d) comments/Notes Sections -> should send notification to client/provider
                    https://www.w3schools.com/howto/howto_js_todolist.asp
                e) Readiness
                d) documents/physical test 
                f) add skill bar?? progress bar?? 
                g) patients appointment button
                    i) allows docotors to create appointment, after submit updates doctor calender                

            2) Add in calender 
                a) daily, weekly, monthly, yearly
                b) appointments 
                         
            3) Request Appointment 
            4) Search function filter by:
                a) name
                b) specialization 
            5) Upcoming will have the next appointment for patients only 
            6) filtering https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
 */                


 var messages = []; //array to hold record of each string in chat
 var lastUserMessage = ''; 
 var inputValue, dateValue, defaultText, tr, td, li, textNode, tableRows;
 var firstRow;
 var dateArray, day, month, year;

 var patients = []; 
 var trainers = []; 


var pic, img, user, profileImg, profileHeader, profileInfo;

var patients, trainers, doctors, persons;



var stats_tableRows, stats_tableData, notesTable; 




/* 
    1) create local storage and store key/value (id/type + num)
 
*/
function Person(first, last, type, age, ht, wt, num) {
    this.first = first; 
    this.last = last; 
    this.age = age; 
    this.ht = ht; 
    this.wt = wt; 
    this.type = type;
    this.num = num;

    var img; 

    var id = function createID(){
        return this.type + this.num; 
    }

}

var users = 
    [
        {   
            first : "Justin", last : "Timberlake",  
            type: "Patient", age: "37",
            ht : "6'1", wt: "168", 
            num: "1", id: "patient1",
            img: "../images/jt4.jpg", 
            notes: 
            [
                {
                   date: "02/14/18", 
                   comment: "This guy needs a blood transfusion due to a vampire attack. "
                },
                {      
                   date: "02/20/18", 
                   comment: "His 20/20 album is the best"
                }
            ]

        }, 
        {
            "first" : "Jackie", "last" : "Chan",  
            "type": "Trainer", "age": "55", "ht" : "5'5",
            "wt": "150", "num": "1", "id": "trainer1", 
            "img": "../images/jackie-chan.jpg", 
            "notes": 
            [
                {
                    "date": "02/25/18", 
                    "comment": "The greatest actor of all time"
                 },
                 {
                    "date": "02/04/18", 
                    "comment": "Smile"
                 }
             ]
        }, 

        {
            "first" : "Michael", "last" : "Phelps",  
            "type": "Trainer", "age": "30", "ht" : "5'8",
            "wt": "145", "num": "2", "id": "trainer2",
            "img": "../images/swim.jpg ",
            "notes":
            [
                 {   
                    "date": "02/14/18", 
                    "comment": "Olympic Gold medalist"
                 },
                 {
                    "date": "02/14/18", 
                    "comment": "A great swimmer"
                 }
            ]
        }
    ];






//Get number of patients and assign and id 
//loads profile picture 
function loadInfo(id){

    user = document.getElementById(id); 

    profileInfo = document.getElementById("profile_info"); //div holds all user info 
    profileHeader = document.getElementById("profile_header"); //h2 header of user profile
    profileImg = document.getElementById("profile_pic");

    stats_tableData = document.getElementById("summary"); //get the summary table


    for(var key in users){ //iterate through array of users
        
        if(users.hasOwnProperty(key)){ //check if there are any keys

            if(users[key].id == id){

                profileHeader.innerHTML = users[key].type + " Summary"; //set profile type
              
                profileImg.src = users[key].img; //set profile image
                profileImg.setAttribute("style", "width:100%; height: 100%;");


                //create table to store user stats
                stats_tableRows = "<tr><th>Name:</th><td>" + users[key].first + " " 
                             + users[key].last + "</td></tr><tr><th>Age:</th><td>" 
                             + users[key].age + "</td></tr><tr><th>Height:</th><td>" 
                             + users[key].ht + "</td></tr><tr><th>Weight:</th><td>" 
                             + users[key].wt + "</td></tr>";
                stats_tableData.innerHTML = stats_tableRows; //set the stats in table 


                loadNotes(key, users[key].notes); //load doctor's notes

                profileInfo.setAttribute("style", "display: block;"); //display info

            }
        }

    }

}

//Load the users notes 
function loadNotes(user, notes){

    var tableHeader = ""; 
    var notes_tableRows = ""; 

    //get the table of notes/comments
    notesTable = document.getElementById("notesTable");
      
    tableHeader = "<tr><th>Date</th><th>Comments</th></tr>"; //set table header

    for(var noteKey in notes){ //iterate though all the notes 

         if(notes.hasOwnProperty(noteKey)){ //check if there are any notes

            notes_tableRows += "<tr><td>" + notes[noteKey].date + "</td><td>" 
                                +  notes[noteKey].comment + "</td></tr>";

        }
    } 

    notesTable.innerHTML = tableHeader + notes_tableRows; //update table with user notes
    notesTable.className =  user; //set the class to user key  
        
}


function addComment(){
    var userKey; 
    var json_data; 

    tr = document.createElement("tr"); //create table row element

    dateValue = document.getElementById("commentDate").value; //get date value
    inputValue = document.getElementById("comment").value; //get input value
    tr.setAttribute("style", "word-break: break-word;"); //break word if its too long


    if(dateValue){ //reformat date
        dateArray = dateValue.split("-");
        month = dateArray[1];
        day = dateArray[2];
        year = dateArray[0][2] + dateArray[0][3] ;

        dateValue = month + "/" + day + "/" + year; 
    }

    if(inputValue === ''){
        return;
    }
    else{

        td = "<td>" + dateValue + "</td> <td>" + inputValue + "</td>";
        tr.innerHTML = td;
        firstRow = document.getElementById("notesTable").rows[1]; 
        firstRow.parentNode.insertBefore(tr, firstRow); //Insert comment before the first row

    }

    document.getElementById("comment").value = ""; //clear text input

    //create json data
    json_data = { date: dateValue, comment: inputValue}; 

    //get the user's key by checking class name 
    notesTable = document.getElementById("notesTable");
    userKey = notesTable.className; 

    //update there JSON data
    users[userKey].notes.unshift(json_data);

}




function submitMessage(){

    li = document.createElement("li"); //create list item element
    inputValue = document.getElementById("message").value; //get input value
    textNode = document.createTextNode(inputValue); 
    li.appendChild(textNode);

    if(inputValue === ''){
        return;
    }
    else{
        document.getElementById("messageList").appendChild(li); //add comment to list  
    }

    document.getElementById("message").value = ""; //clear text input

}


function filterSelection(type) {
  var x, i, array;
  x = document.getElementsByClassName("polaroid");
 
  for (i = 0; i < x.length; i++) {
    array = x[i].className.split(" "); //store class names in array delimited by a space

    if(array[1] === type || type == "all"){
        x[i].setAttribute("style", "display:inline-block");
     }
     else{
        x[i].setAttribute("style", "display:none");
     }
  }

}


function initStorage(){

    var p1 = new Person("Justin", "Timberlake", "Patient", "37", "6'1", "168", 1 );
    var p2 = new Person("Jackie", "Chan", "Trainer", "40", "5'6", "120", 1 );
    var p3 = new Person("J", "T", "Patient", "50", "5'1", "120", 2 );
    var p4 = new Person("Michael", "Phelps", "Trainer", "20", "5'5", "150", 2 );
    var p5 = new Person("Isaac", "Chu", "Therapist", "30", "5'1", "185", 1 );

    person[p1,p2,p3,p4,p5];

    // Check browser support
    if (typeof(Storage) !== "undefined") {

        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

}