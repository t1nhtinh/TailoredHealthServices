var toWho = "";
var whoDis = "";
var message_p1= "";
var message_p2= "";

setFirstWhos(location);
displayTable();
function displayTable() {
    determineTable(whoDis, toWho);
    var curTable = localStorage.getItem(message_p1+ "/" + message_p2);
    var tableHandle = document.getElementById("live_table");

    if (curTable == null) {
        for (i = 0; i < 2; i++) {
            tableHandle.insertRow(-1).insertCell(0).innerHTML = "new cell";
        }
    }
    else {
        var cur = JSON.parse(curTable);
        for (i = 0; i < cur.length; i++) {
          //  console.log(cur[i]);
            tableHandle.insertRow(-1).insertCell(0).innerHTML = cur[i];
        }
    }
}

function cacheChatTable () {
    var tableHandle = document.getElementById("live_table");
    var tableArr = new Array();
    for (i = 0; i < tableHandle.rows.length; i++) {
        tableArr[tableArr.length] = tableHandle.rows[i].cells[0].innerHTML;
    }
    //for (i = 0; i < tableArr.length; i++) {
    //    console.log(tableArr[i]);
    //}
    determineTable(whoDis, toWho);
    localStorage.setItem(message_p1+"/"+message_p2, JSON.stringify(tableArr));
}

function clearTable() {
    var tableHandle = document.getElementById("live_table");
    while (tableHandle.rows.length > 0) {
        tableHandle.deleteRow(0);
    }
    console.log("deletedTable");
}

function send_message() {
    messageElement = document.getElementById("chat_input");
    message = document.getElementById("chat_input").value;
    add2live(message);
    document.getElementById("chat_input").value = "";
}

function add2live(message) {
    var table = document.getElementById("live_table");

    var newRow = table.insertRow(-1);
    var cell = newRow.insertCell(0);
    cell.innerHTML = whoDis + ": " + message;
    cacheChatTable();
}
function setWho(who) {
    toWho = who;
    console.log(toWho);
    clearTable();
    displayTable();
}
function determineTable(p1, p2) {
    if ((p1 == "client" && p2 == "trainer") || (p1 == "trainer" && p2 == "client")) {
        message_p1= "client";
        message_p2= "trainer";
    }
    else if ((p1 == "client" && p2 == "doctor") || (p1 == "doctor" && p2 == "client")) {
        message_p1= "client";
        message_p2= "doctor";
    }
    else if ((p1 == "trainer" && p2 == "doctor") || (p1 == "doctor" && p2 == "trainer")) {
        message_p1= "trainer";
        message_p2= "doctor";
    }
}
function setFirstWhos(loc) {
    loc = String(loc);
    if (loc.search("client_front_page") > -1) {
        whoDis = "client";
        toWho = "trainer";
    }
    else if (loc.search("trainer_front_page") > -1) {
        whoDis = "trainer";
        toWho = "client";
    }
}
