
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function renderHeaderRow() {
  var storeTable = document.getElementById('store_head');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < hours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }

  totalTableHeader.textContent = 'Total';
  tableRow.appendChild(totalTableHeader);

  storeTable.appendChild(tableRow);
}

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
CookieStore.prototype.getRandomInt = function () {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
};
CookieStore.prototype.totalCookiesHourly = function() {
  this.cookieArray.push(Math.floor(this.avgCookie * this.getRandomInt()));
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

  for (var i = 0; i < hours.length; i++) {
    this.totalCookiesHourly();
    var cookieCount = this.cookieArray[i];
    var avgCookiePerDay = document.createElement('td');
    total += cookieCount;
    avgCookiePerDay.textContent = cookieCount;
    console.log(this.cookieArray);
    tableRow.appendChild(avgCookiePerDay);
  }
  totalColumn.textContent = total;
  tableRow.appendChild(totalColumn);
};
var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport',3, 24, 1.2);
var seattle = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill',20, 38, 2.3);
var alki = new CookieStore ('Alki', 2, 16, 4.6);

renderHeaderRow();
pike.listCookieAverage();
seaTac.listCookieAverage();
seattle.listCookieAverage();
capitolHill.listCookieAverage();
alki.listCookieAverage();
