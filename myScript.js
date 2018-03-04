$(document).ready(function () {
    'use strict';

if (typeof console == "undefined") {
    window.console = {
        log: function () {}
    };
}

var items = new Array();
var table = document.getElementById("itemList")

function SaveForm(form) {
    var _name = form.itemname.value;
    var _expiredate = form.expiredate.value;
    var today = new Date(Date.now()).toLocaleString();
    var item = {name:_name, expiredate:_expiredate, creationdate:today};
    items.push(item);
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = _name;
    cell2.innerHTML = _expiredate;
    cell3.innerHTML = today;
}

});
