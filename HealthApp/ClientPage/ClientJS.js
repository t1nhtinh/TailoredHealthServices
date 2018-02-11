function changeP() {
    document.getElementById("macros").innerHTML = "HAHA"
}

function send_message() {
    message = document.getElementById("chat_input").value;
    add2live(message);
    document.getElementById("chat_input").value = "";
}

function add2live(message) {
    var table = document.getElementById("live_table");

    var newRow = table.insertRow(-1);
    var cell = newRow.insertCell(0);
    cell.innerHTML = message;
}