
function searchTable() {
    var input;
    var filter;
    var tableHandle;
    input = document.getElementById("client_search");
    filter = input.value.toUpperCase();
    tableHandle = document.getElementById("client_list");
    tableData = tableHandle.getElementsByTagName("td");
    for( i = 0; i< tableData.length;i++){
        td = tableData[i].innerHTML;
        if (td) {
            if (td.toUpperCase().indexOf(filter) > -1) {
                tableData[i].style.display = "";
            } else {
                tableData[i].style.display = "none";
            }
        } 
    }
}