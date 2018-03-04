var items = new Array();
var table = document.getElementById("itemList")
var buttonAdd = document.querySelector(".addItem")


buttonAdd.onclick = function() {
    var name = document.querySelector(".itemname")
    var _itemName = name.value;
    var expiration = document.querySelector(".expiration")
    var _itemExpiration = expiration.value;
    var today = new Date(Date.now()).toLocaleString();
    var item = {name:_itemName, expiredate:_itemExpiration, creationdate:today};
    items.push(item);
    var nameAdded = document.createElement('td');
    var expirationAdded= document.createElement('td');
    var dateAdded = document.createElement('td');
    var tableRow = document.createElement('tr')
    nameAdded.textContent = _itemName;
    expirationAdded.textContent = _itemExpiration;
    dateAdded.textContent = today;

    var tableMain = document.querySelector('.tableMain');

    tableRow.appendChild(nameAdded);
    tableRow.appendChild(expirationAdded);
    tableRow.appendChild(dateAdded);
    tableMain.appendChild(tableRow)

}
