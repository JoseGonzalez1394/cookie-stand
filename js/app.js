'use strict';

let dataSection = document.getElementById('sales-data');

// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// function randomCustomer(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

let StoreSeattle = {
  location: "Seattle",
  storeHour: ['6am', '7am', '8am', '9am', '10 am', '11 am', '12 pm', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customerPhr: [],
  avgCookieSale: 6.3,
  hourlyCookieSale: [],
  totalCookiessold: 0,

  get: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      this.customerPhr.push(randomCustomer(23, 65));
    }
  },
  Calculate: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      console.log(this.customerPhr[i]);
      console.log(this.avgCookieSale);
      let perhour = this.customerPhr[i] * this.avgCookieSale
      this.hourlyCookieSale.push((Math.round)(perhour));
      this.totalCookiessold += ((Math.round)(perhour));
    }
  },
  render: function () {

    this.Calculate();

    console.log(this.hourlyCookieSale);
    let mainElem = document.getElementById('sales-data');

    let ulElem = document.createElement('ul');
    ulElem.textContent = ` ${this.location}`;
    mainElem.appendChild(ulElem);


    for (let i = 0; i < this.storeHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHour[i]}: ${this.hourlyCookieSale[i]} cookies `;
      ulElem.appendChild(liElem);
    }
    let ulElement = document.createElement('ul');
    ulElement.textContent = `Total = ${this.totalCookiessold}`;
    mainElem.appendChild(ulElement);
  }
};



// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let StoreTokyo = {
  location: "Tokyo",
  storeHour: ['6am', '7am', '8am', '9am', '10 am', '11 am', '12 pm', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customerPhr: [],
  avgCookieSale: 1.2,
  hourlyCookieSale: [],
  totalCookiessold: 0,

  get: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      this.customerPhr.push(randomCustomer(3, 24));
    }
  },
  Calculate: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      console.log(this.customerPhr[i]);
      console.log(this.avgCookieSale[i]);
      let perhour = this.customerPhr[i] * this.avgCookieSale
      this.hourlyCookieSale.push((Math.round)(perhour));
      this.totalCookiessold += ((Math.round)(perhour));
    }
  },
  render: function () {

    this.Calculate();

    console.log(this.hourlyCookieSale);
    let mainElem = document.getElementById('sales-data');

    let ulElem = document.createElement('ul');
    ulElem.textContent = ` ${this.location}`;
    mainElem.appendChild(ulElem);


    for (let i = 0; i < this.storeHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHour[i]}: ${this.hourlyCookieSale[i]} cookies `;
      ulElem.appendChild(liElem);
    }
    let ulElement = document.createElement('ul');
    ulElement.textContent = `Total = ${this.totalCookiessold}`;
    mainElem.appendChild(ulElement);
  }
};



// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let StoreDubai = {
  location: "Dubai",
  storeHour: ['6am', '7am', '8am', '9am', '10 am', '11 am', '12 pm', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customerPhr: [],
  avgCookieSale: 3.7,
  hourlyCookieSale: [],
  totalCookiessold: 0,

  get: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      this.customerPhr.push(randomCustomer(11, 38));
    }
  },
  Calculate: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      console.log(this.customerPhr[i]);
      console.log(this.avgCookieSale[i]);
      let perhour = this.customerPhr[i] * this.avgCookieSale
      this.hourlyCookieSale.push((Math.round)(perhour));
      this.totalCookiessold += ((Math.round)(perhour));
    }
  },
  render: function () {

    this.Calculate();

    console.log(this.hourlyCookieSale);
    let mainElem = document.getElementById('sales-data');

    let ulElem = document.createElement('ul');
    ulElem.textContent = ` ${this.location}`;
    mainElem.appendChild(ulElem);


    for (let i = 0; i < this.storeHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHour[i]}: ${this.hourlyCookieSale[i]} cookies `;
      ulElem.appendChild(liElem);
    }
    let ulElement = document.createElement('ul');
    ulElement.textContent = `Total = ${this.totalCookiessold}`;
    mainElem.appendChild(ulElement);
  }
};


// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let StoreParis = {
  location: "Paris",
  storeHour: ['6am', '7am', '8am', '9am', '10 am', '11 am', '12 pm', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customerPhr: [],
  avgCookieSale: 2.3,
  hourlyCookieSale: [],
  totalCookiessold: 0,

  get: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      this.customerPhr.push(randomCustomer(20, 38));
    }
  },
  Calculate: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      console.log(this.customerPhr[i]);
      console.log(this.avgCookieSale[i]);
      let perhour = this.customerPhr[i] * this.avgCookieSale
      this.hourlyCookieSale.push((Math.round)(perhour));
      this.totalCookiessold += ((Math.round)(perhour));
    }
  },
  render: function () {

    this.Calculate();

    console.log(this.hourlyCookieSale);
    let mainElem = document.getElementById('sales-data');

    let ulElem = document.createElement('ul');
    ulElem.textContent = ` ${this.location}`;
    mainElem.appendChild(ulElem);


    for (let i = 0; i < this.storeHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHour[i]}: ${this.hourlyCookieSale[i]} cookies `;
      ulElem.appendChild(liElem);
    }
    let ulElement = document.createElement('ul');
    ulElement.textContent = `Total = ${this.totalCookiessold}`;
    mainElem.appendChild(ulElement);
  }
};



// grabbed from MDN docs
function randomCookieSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let StoreLima = {
  location: "Lima",
  storeHour: ['6am', '7am', '8am', '9am', '10 am', '11 am', '12 pm', '1 pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  customerPhr: [],
  avgCookieSale: 4.6,
  hourlyCookieSale: [],
  totalCookiessold: 0,

  get: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      this.customerPhr.push(randomCustomer(2, 16));
    }
  },
  Calculate: function () {
    for (let i = 0; i < this.storeHour.length; i++) {
      console.log(this.customerPhr[i]);
      console.log(this.avgCookieSale[i]);
      let perhour = this.customerPhr[i] * this.avgCookieSale
      this.hourlyCookieSale.push((Math.round)(perhour));
      this.totalCookiessold += ((Math.round)(perhour));
    }
  },
  render: function () {

    this.Calculate();

    console.log(this.hourlyCookieSale);
    let mainElem = document.getElementById('sales-data');

    let ulElem = document.createElement('ul');
    ulElem.textContent = ` ${this.location}`;
    mainElem.appendChild(ulElem);


    for (let i = 0; i < this.storeHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHour[i]}: ${this.hourlyCookieSale[i]} cookies `;
      ulElem.appendChild(liElem);
    }
    let ulElement = document.createElement('ul');
    ulElement.textContent = `Total = ${this.totalCookiessold}`;
    mainElem.appendChild(ulElement);
  }
};
const storeArray = [StoreSeattle, StoreTokyo, StoreDubai, StoreParis, StoreLima];
for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].get();
  storeArray[i].render();
  console.log(storeArray);
}
