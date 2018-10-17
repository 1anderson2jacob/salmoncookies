'use strict'

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm', '6pm', '7pm']

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //from mdn docs
}
function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

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

Store.prototype.render = function() {
  this.calcCookiesEachHour();
  var storesUl = document.getElementById(this.id);
  console.log(storesUl, `<${this.id}>`);
  for(var i = 0; i < hours.length; i++) {
    //create element
    var liEl = document.createElement('li');
    //give content
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //append
    storesUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  storesUl.appendChild(liEl);
}
//locationName, minCustPerHour, maxCustPerHour, avgCookies, id

new Store('First and Pike', 23, 65, 6.3, 'pike');
new Store('SeaTac Airport', 3, 24, 1.2, 'seatac');
new Store('Seattle Center', 11, 38, 2.3, 'seattlecenter');
new Store('Capitol Hill', 20, 28, 2.3, 'capitolhill');
new Store('Alki', 2, 16, 4.6, 'alki');


for(var i = 0; i < Store.all.length; i++) {
  Store.all[i].render();
  console.log(`Store index ${i} rendered`);
}

//      ! sales.html is using appTest.js !

