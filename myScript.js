$(document).ready(function () {
    'use strict';

if (typeof console == "undefined") {
    window.console = {
        log: function () {}
    };
}

var items = [];

function SaveForm(form) {
    var _name = form.itemname.value;
    var _expiredate = form.expiredate.value;
    var today = new Date(Date.now()).toLocaleString();
    var item = {name:_name, expiredate:form.expiredate.value, creationdate:today};
    items.push(item);
    console.log(items);
}

});
