var items = new Array();
var buttonAdd = document.querySelector("#addItem");
var buttonRefresh = document.querySelector("#refreshItems");

buttonAdd.onclick = function() {
    var name = document.querySelector("#itemname");
    var _itemName = name.value;;
    var expiration = document.querySelector("#expiredate");
    var _itemExpiration = expiration.value;
    // var stringDate = moment(_itemExpiration, 'Y-M-D').format('dddd MMMM D Y')
    // alert(stringDate);
    var today = new Date(Date.now());
    var expire = new Date(_itemExpiration);
    var _today = new Date(Date.now()).toLocaleDateString();
    var _daysLeft = Date.daysBetween(today, expire);
    var formatted = (expire.getMonth()+1) + '/' + (expire.getDate()+1) + '/' + expire.getFullYear();
    var item = {name:_itemName, expiredate:formatted, creationdate:_today, daysleft:_daysLeft};
    items.push(item);
    var nameAdded = document.createElement('td');
    var dateAdded = document.createElement('td');
    var expirationAdded= document.createElement('td');
    var daysLeft = document.createElement('td');
    var tableRow = document.createElement('tr');
    nameAdded.textContent = _itemName;
    dateAdded.textContent = _today;
    expirationAdded.textContent = formatted;
    daysLeft.textContent = _daysLeft;

    var listBody = document.querySelector('#listBody');

    tableRow.appendChild(nameAdded);
    tableRow.appendChild(dateAdded);
    tableRow.appendChild(expirationAdded);
    tableRow.appendChild(daysLeft);
    listBody.appendChild(tableRow);

    expirationTracker()

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
    var isExpireSoon = false
    var itemExpireSoon = ""
    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[3].textContent <= 4) {
            table.rows[i].style.backgroundColor = "#ffed70"
            isExpireSoon = true
            itemExpireSoon = table.rows[i].cells[0].textContent
        }
        if (table.rows[i].cells[3].textContent <= 1) {
            table.rows[i].style.backgroundColor = "#ee6a50"
        }
    }

    if (isExpireSoon) {
        var expireNotice = document.createElement('p');
        var foodbanklink = document.createElement('a')
        var foodbanktext = document.createTextNode("Free Store Food Bank")
        var container = document.querySelector('.container');
        expireNotice.textContent = itemExpireSoon + " is going to expire soon. Please consider donating to your local food drive: ";
        foodbanklink.appendChild(foodbanktext)
        foodbanklink.href = "https://freestorefoodbank.org"
        expireNotice.appendChild(foodbanklink)
        container.appendChild(expireNotice);

    }


}

buttonRefresh.onclick = function() {
  var table = document.querySelector("#itemList");
  var rowCount = table.rows.length;
  while(--rowCount)
    table.deleteRow(rowCount);
  // The following actually sorts!!
  items.sort(function(a,b){
    var alc = a.daysleft, blc = b.daysleft;
    return alc > blc ? 1 : alc < blc ? -1 : 0;
  })
  for (var i = 0; i < items.length; i++) {
    var nameAdded = document.createElement('td');
    var dateAdded = document.createElement('td');
    var expirationAdded= document.createElement('td');
    var daysLeft = document.createElement('td');
    var tableRow = document.createElement('tr');
    nameAdded.textContent = items[i].name;
    dateAdded.textContent = items[i].creationdate;
    expirationAdded.textContent = items[i].expiredate;
    daysLeft.textContent = items[i].daysleft;

    tableRow.appendChild(nameAdded);
    tableRow.appendChild(dateAdded);
    tableRow.appendChild(expirationAdded);
    tableRow.appendChild(daysLeft);
    listBody.appendChild(tableRow);
  }
  expirationTracker();

}
