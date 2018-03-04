var items = new Array();
var buttonAdd = document.querySelector("#addItem")


buttonAdd.onclick = function() {
    var name = document.querySelector("#itemname")
    var _itemName = name.value;
    var expiration = document.querySelector("#expiredate")
    var _itemExpiration = expiration.value;
    // var stringDate = moment(_itemExpiration, 'Y-M-D').format('dddd MMMM D Y')
    // alert(stringDate);
    var today = new Date(Date.now())
    var expire = new Date(_itemExpiration);
    var _today = new Date(Date.now()).toLocaleString();
    _daysLeft = Date.daysBetween(today, expire);
    var item = {name:_itemName, expiredate:_itemExpiration, creationdate:_today, daysleft:_daysLeft};
    items.push(item);
    var nameAdded = document.createElement('td');
    var dateAdded = document.createElement('td');
    var expirationAdded= document.createElement('td');
    var daysLeft = document.createElement('td');
    var tableRow = document.createElement('tr')
    nameAdded.textContent = _itemName;
    dateAdded.textContent = _today;
    expirationAdded.textContent = _itemExpiration;
    daysLeft.textContent = _daysLeft;

    var listBody = document.querySelector('#listBody');

    tableRow.appendChild(nameAdded);
    tableRow.appendChild(dateAdded);
    tableRow.appendChild(expirationAdded);
    tableRow.appendChild(daysLeft);
    listBody.appendChild(tableRow);

}

Date.daysBetween = function (date1, date2) {
    var one_day = 1000*60*60*24;
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return Math.round((difference_ms/one_day) + 1);
    listBody.appendChild(tableRow)
}

function expirationTracker() {
    var table = document.querySelector("#itemList")
    console.log(table.rows[1].cells[1].textContent)
    for (var i = 0, row; row = table.row[i]; i++) {
        console.log(row.cell[1])
    }
}
