'use strict';

let dataSection = document.getElementById('sales-data');
let mainTableElem = document.getElementById('sales-table');

// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeLocation = [];

let storeHours = ['6am', '7am', '8am', '9am', '10 am', '11 am', '12 pm', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;

  this.customerPhr = [];
  this.totalCookiessold = 0;
  this.hourlyCookieSale = [];

  storeLocation.push(this);
}

Store.prototype.get = function () {
  for (let i = 0; i < storeHours.length; i++) {
    this.customerPhr.push(randomCustomer(this.minCust, this.maxCust));
  }
}

Store.prototype.calculate = function () {
  for (let i = 0; i < storeHours.length; i++) {
    console.log(this.customerPhr[i]);
    console.log(this.avgCookieSale);
    let perhour = this.customerPhr[i] * this.avgCookieSale;
    this.hourlyCookieSale.push(Math.round(perhour));
    this.totalCookiessold += (Math.round(perhour));
  }
}

Store.prototype.render = function () {

  this.calculate();

  let row1 = document.createElement('tr');
  mainTableElem.appendChild(row1);

  let cityCell = document.createElement('td');
  cityCell.textContent = this.location;
  row1.appendChild(cityCell);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hourlyCookieSale[i];
    row1.appendChild(td);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalCookiessold;
  row1.appendChild(totalCell);
}

function makeHeader() {
  let row1 = document.createElement('tr');
  let th15Elem = document.createElement('th');
  th15Elem.textContent = "Locations";
  row1.appendChild(th15Elem);
  for (let i = 0; i < storeHours.length; i++) {
    let th1Elem = document.createElement('th');
    th1Elem.textContent = storeHours[i];
    row1.appendChild(th1Elem);
  }

  let th16Elem = document.createElement('th');
  th16Elem.textContent = 'Daily Location Total';
  row1.appendChild(th16Elem);
  mainTableElem.appendChild(row1);
}

makeHeader();

new Store("Seattle", 23, 65, 6.3);
new Store("Tokyo", 3, 24, 1.2);
new Store("Dubai", 11, 38, 3.7);
new Store("Paris", 20, 38, 2.3);
new Store("Lima", 2, 16, 4.6);

function renderstore() {
  for (let i = 0; i < storeLocation.length; i++) {
    let currentstore = storeLocation[i];
    currentstore.get();
    currentstore.render();
  }
}

renderstore();