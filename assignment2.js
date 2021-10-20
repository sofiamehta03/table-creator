var NumberofColumns = 15;
var NumberofRows = 15;

window.addEventListener('load', DesignTable, false);

function DrawCustomTable() {
    NumberofRows = document.getElementById("rows").value;
    NumberofColumns = document.getElementById("columns").value;
    DesignTable();
}


function DesignTable() {

    var tb = "";

    for (var r = 1; r <= NumberofRows; r++) {

        tb = tb + '<tr>';
        for (var c = 1; c <= NumberofColumns; c++) {
            tb = tb + '<td>';
            tb = tb + r + ',' + c;
            tb = tb + '</td>';
        }
        tb = tb + '</tr>\n';
    }

    document.getElementById('tablespace').innerHTML = '<table>\n' + tb + '</table>';   
  

}