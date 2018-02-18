
var toStore = new Array();
var toLoadTexts = new Array();
loadTrainingData();
function loadTrainingData() {
    var tableHandle = document.getElementById("main_calendar");
    var before = "";
    if (localStorage.getItem("training_calendar") != null) {
        toStore = JSON.parse(localStorage.getItem("training_calendar"));
        //console.log(toStore);
        for (i = 0; i < toStore.length; i++) {
            var newTr = document.createElement("tr");
            var newCell = newTr.insertCell(0);
            newCell.setAttribute("class", "input_values");
            var current = toStore[i];
            current = current.split("/%/");
            newCell.innerHTML = current[0];
            before = document.getElementById(current[1]);
            before.parentNode.insertBefore(newTr, before);
        }
    }
    addListeners();
}

function addListeners() {
    console.log(toStore);
    var trainer_inputs = document.getElementsByClassName("input_values");
    console.log(trainer_inputs);
    for (i = 0; i < trainer_inputs.length; i++) {
        trainer_inputs[i].addEventListener("click", function () {
            var rowIndex = this.parentNode.rowIndex;
            var table = document.getElementById("main_calendar");
            var row = table.rows[rowIndex];
            var index = 0;
            for (i = 0; i < toStore.length; i++) {
                if (toStore[i].split("/%/")[0] == row.cells[0].innerHTML) {
                    index = i;
                }
            }
            toStore.splice(index, 1);
            table.deleteRow(rowIndex);
            localStorage.setItem("training_calendar", JSON.stringify(toStore));
        });
    }
}

function createTrainingNode(day,text_in) {
    var before = document.getElementById(day);
    var newTr = document.createElement("tr");
    var newCell = newTr.insertCell(0);
    newCell.addEventListener("click", function () {
        var rowIndex = this.parentNode.rowIndex;
        var table = document.getElementById("main_calendar");
        var row = table.rows[rowIndex];
        var index= toStore.indexOf(row.cells[0].innerHTML + "/%/" + day);
        toStore.splice(index, 1);
        table.deleteRow(rowIndex);
        localStorage.setItem("training_calendar", JSON.stringify(toStore));
    });
    toStore.push(document.getElementById(text_in).value + "/%/"+ day);
    //console.log(toStore);
    newCell.innerHTML = document.getElementById(text_in).value;
    localStorage.setItem("training_calendar", JSON.stringify(toStore));
    before.parentNode.insertBefore(newTr,before);
    document.getElementById(text_in).value = "";
}
