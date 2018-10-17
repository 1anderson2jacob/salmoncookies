'use strict'

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm', '6pm', '7pm']

var cookieTable = document.getElementById('cookies');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //from mdn docs
}

function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

function makeHeader() {
  var trEl = document.createElement('tr');
  newElement('th', '', trEl);

  for (var i = 0; i < hours.length; i++) {
    newElement('th', `${hours[i]}`, trEl);
  }

  newElement('th', 'Daily Location Total', trEl)
  cookieTable.appendChild(trEl);
}

// function hourlyTotals() { //takes time[i]
//   var totalsArray = [];

//   for (var i = 0; i < hours.length; i++) { //for each hour

//     for (var u = 0; u < Store.all.length; u++) { //for each Store
//       var numCookies = Store.all[u].cookiesEachHour[i];
//       console.log(`Store ${Store.all[u]} has ${numCookies} cookies at ${hours[i]}`)
//       totalsArray[i] += numCookies;
//     }
//   }
//   return totalsArray;
// }
// function totalCookiesMade(){
//   var total = 0;

//   for (var i = 0; i < Store.all.length; i++) {
//     total += Store.all[i].totalDailyCookies;
//   }

//   return total;
// }
// function makeFooter() {
//   var trEl = document.createElement('tr');
//   var totalHourlyCookies = hourlyTotals();
//   var totalCookies = totalCookiesMade();

//   newElement('th', 'Totals', trEl);

//   for (var i = 0; i < hours.length; i++) {
//     newElement('th', totalHourlyCookies[i], trEl);
//   }

//   newElement('th', totalCookies, trEl);

//   cookieTable.appendChild(trEl);
// }

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookies, id) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.customersEachHour = [];
  this.cookiesEachHour = []
  this.id = id;
  this.totalDailyCookies = 0;
  Store.all.push(this); //an array that holds all instances created w/ this constructor
}

Store.all = [];

Store.prototype.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour[i] = randomCustomers;
  }
}

Store.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookies);
    this.cookiesEachHour[i] = hourlyCookies;
    this.totalDailyCookies += hourlyCookies;
  }
}

Store.prototype.renderRow = function() {
  this.calcCookiesEachHour();

  var trEl = document.createElement('tr');

  newElement('td', this.locationName, trEl); //location name

  for (var i = 0; i < hours.length; i++) { //cookies each hour
    newElement('td', this.cookiesEachHour[i], trEl);
  }

  newElement('td', this.totalDailyCookies, trEl); //total cookies

  cookieTable.appendChild(trEl);

}

new Store('First and Pike', 23, 65, 6.3, 'pike');
new Store('SeaTac Airport', 3, 24, 1.2, 'seatac');
new Store('Seattle Center', 11, 38, 2.3, 'seattlecenter');
new Store('Capitol Hill', 20, 28, 2.3, 'capitolhill');
new Store('Alki', 2, 16, 4.6, 'alki');

makeHeader();

for(var i = 0; i < Store.all.length; i++) {
  Store.all[i].renderRow();
  console.log(`Store index ${i} rendered`);
}

//makeFooter();

//      ! sales.html is using appTest.js !

