'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//Example
//function renderHeaderRow() {
  //var storeTable = document.getElementById('store_table');
  //var tableRow = document.createElement('tr');
  //var blankTableHeader = document.createElement('th');
  //var totalTableHeader = document.createElement('th');
  //var hourlyTableHeader;

  //tableRow.appendChild(blankTableHeader);

  //for (var i = 0; i < hours.length; i++) {
    //hourlyTableHeader = document.createElement('th');
    //hourlyTableHeader.textContent = hours[i];
    //tableRow.appendChild(hourlyTableHeader);
  //}

  //totalTableHeader.textContent = 'Total';
  //tableRow.appendChild(totalTableHeader);

  //storeTable.appendChild(tableRow);
//}

function CookieStore (storeName, minCust, maxCust, avgCookie) {
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookieArray = [];
}
CookieStore.prototype.logStoreName = function() {
  console.log(this.name);
};
CookieStore.prototype.toHtml = function() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');
  var hourlyTableData;

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.hours.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = 5;
    tableRow.appendChild(hourlyTableData);
  }

  totalTableData.textContent = 15;
  tableRow.appendChild(totalTableData);

  console.log(tableRow, storeTable);

  storeTable.appendChild(tableRow);
};

CookieStore.prototype.getRandomInt = function () {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
};
CookieStore.prototype.totalCookiesHourly = function() {
  var cookiesPerHour = (this.avgCookie * this.getRandomInt());
  return cookiesPerHour;
};
CookieStore.prototype.listCookieAverage = function() {
  var store_body = document.getElementById('store_body');
  var tableRow = document.createElement('tr');
  var nameTableData = document.createElement('td');
  var totalColumn = document.createElement('td');

  nameTableData.textContent = this.name;
  store_body.appendChild(tableRow);
  tableRow.appendChild(nameTableData);
  var total = 0;

  for(var i = 0; i < hours.length; i++); {

    var avgCookiePerDay = document.createElement('td');
    total += this.cookieArray[i];
    avgCookiePerDay.textContent = this.cookieArray[i];
    tableRow.appendChild(avgCookiePerDay);
  }
  totalColumn.textContent = total;
  tableRow.appendChild(totalColumn);
};
var Pike = new CookieStore('1st and Pike', 23, 65, 6.3);
