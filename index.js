function addNewRow() {
  var table = document.getElementById("employee-table");
  var rowCount = table.rows.length;
  var cellCount = table.rows[0].cells.length;
  var row = table.insertRow(rowCount);
  for (var i = 0; i < cellCount; i++) {
    var cell = row.insertCell(i);
    if (i < cellCount - 1) {
      cell.innerHTML = '<input type="text" class="form-control" />';
    } else {
      cell.innerHTML =
        '<input class="btn btn-danger" ' +
        ' type="button" value="delete" onclick="deleteRow(this)" />';
    }
  }
}
/* This method will delete a row */
function deleteRow(ele) {
  var table = document.getElementById("employee-table");
  var rowCount = table.rows.length;
  if (rowCount <= 1) {
    alert("There is no row available to delete!");
    return;
  }
  if (ele) {
    //delete specific row
    ele.parentNode.parentNode.remove();
  } else {
    //delete last row
    table.deleteRow(rowCount - 1);
  }
}
