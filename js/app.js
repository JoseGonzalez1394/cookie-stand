'use strict';

let dataSection = document.getElementById('sales-data');
let mainTableElem = document.getElementById('sales-table');
let mystoreForm = document.getElementById('storeForm');

// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let footerTotal = [];

let storeLocation = [];

let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function Store(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;

  this.customerPhr = [];
  this.totalCookiesSold = 0;
  this.hourlyCookieSale = [];
  this.totalCookiesLocation = [];
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
    this.totalCookiesSold += (Math.round(perhour));
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
  let totalCookieCell = document.createElement('td');
  totalCookieCell.textContent = this.totalCookiesSold;
  row1.appendChild(totalCookieCell);
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

  let th16Elem = document.createElement('th'); {
    th16Elem.textContent = 'Daily Location Total';
    row1.appendChild(th16Elem);
    mainTableElem.appendChild(row1);
  }

}

makeHeader();

new Store("Seattle", 23, 65, 6.3);
new Store("Tokyo", 3, 24, 1.2);
new Store("Dubai", 11, 38, 3.7);
new Store("Paris", 20, 38, 2.3);
new Store("Lima", 2, 16, 4.6);
console.log(storeLocation);

function renderstore() {
  for (let i = 0; i < storeLocation.length; i++) {
    let currentstore = storeLocation[i];
    currentstore.get();
    currentstore.render();
  }
}

renderstore();

// function to render bottom row of table 
function makeFooter() {
  // make row give content append to table
  let tableFooterRowElement = document.createElement('tfoot');
  tableFooterRowElement.textContent = 'Total';
  mainTableElem.appendChild(tableFooterRowElement);
  // loop through hours and location 
  for (let i = 0; i < storeHours.length; i++) {
    console.log("slow loop", i);
    let hourlyTotals = 0;
    for (let j = 0; j < storeLocation.length; j++) {
      console.log("fast loop", j)
      // add this store sales at this hour 
      hourlyTotals += storeLocation[j].hourlyCookieSale[i];
      console.log(hourlyTotals);
    }
    let totalCell = document.createElement('td');
    totalCell.textContent = hourlyTotals;
    tableFooterRowElement.appendChild(totalCell);
  }
  let grandTotal = 0;
  for (let i = 0; i < storeLocation.length; i++) {
    grandTotal += storeLocation[i].totalCookiesSold;
  }
  // render grand total cell
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = `Grand Total: ${grandTotal}`
  tableFooterRowElement.appendChild(grandTotalCell);
}
// render footer function
makeFooter();

function removeFooter(){
  let parent = document.getElementsById("sales-table");
  let child = document.getElementById("tfoot");
  parent.removeChild(child);
}

function handleSubmit(event) {
  event.preventDefault();
  
  let location = event.target.storeLocation.value;
  let minCust = +event.target.storeMinCust.value;
  let maxCust = +event.target.storeMaxCust.value;
  let avgCookieSale = +event.target.storeAvgCookieSale.value;

  let newStore = new Store(location, minCust, maxCust, avgCookieSale);

  newStore.get();
  newStore.calculate();
  newStore.render();
  removeFooter();
  makeFooter();

  // HINT FOR YOUR LAB - remove your footer and recreate it

  // resets input fields after submission
  mystoreForm.reset();
}


// ****** STEP 2: ATTACH EVENT LISTENER: type of event, and our callback function or event handler ******
mystoreForm.addEventListener('submit', handleSubmit);