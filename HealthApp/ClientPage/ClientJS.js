function changeP() {
    if(typeof(Storage) != "undefined") {
        cacheTable("week_goal_table");
        document.getElementById("macros").innerHTML = localStorage.getItem("hello");
        var tableArr = JSON.parse(localStorage.getItem("week_goal_table"));
        for (i = 0; i < tableArr.length; i++) {
            console.log(tableArr[i]);
        }

        }
    else {
    }
}

function cacheTable (table_id) {
    var tableHandle = document.getElementById(table_id);
    var tableArr = new Array();
    for (i = 0; i < tableHandle.rows.length; i++) {
        tableArr[tableArr.length] = tableHandle.rows[i].cells[0].innerHTML;
    }
    for (i = 0; i < tableArr.length; i++) {
        console.log(tableArr[i]);
    }
    localStorage.setItem(table_id, JSON.stringify(tableArr));
}

