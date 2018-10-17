'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm', '6pm', '7pm']

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //from mdn docs
}
//               <-------------Pike--------------->
var pike = {
  locationName : ['First and Pike'],
  minCustPerHour : 23, //min cust each hour
  maxCustPerHour : 65, //max cust each hour
  avgCookies : 6.3, //avg cookies per customer
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0
}

pike.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour[i] = randomCustomers;
  }
}

pike.calcCookiesEachHour = function() {
  pike.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookies);
    this.cookiesEachHour[i] = hourlyCookies;
    this.totalDailyCookies += hourlyCookies;
  }
}
pike.render = function() {
  this.calcCookiesEachHour();
  var pikeUl = document.getElementById('pike');
  console.log(pikeUl, '<pikeUl>');
  for(var i = 0; i < hours.length; i++) {
    console.log('render for loop working');
    //create element
    var liEl = document.createElement('li');
    //give content
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //append
    pikeUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  pikeUl.appendChild(liEl);
}

//               <-------------seatac--------------->
var seatac = {
  locationName : ['SeaTac Airport'],
  minCustPerHour : 3, //min cust each hour
  maxCustPerHour : 24, //max cust each hour
  avgCookies : 1.2, //avg cookies per customer
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0
}

seatac.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour[i] = randomCustomers;
  }
}

seatac.calcCookiesEachHour = function() {
  seatac.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookies);
    this.cookiesEachHour[i] = hourlyCookies;
    this.totalDailyCookies += hourlyCookies;
  }
}
seatac.render = function() {
  this.calcCookiesEachHour();
  var seatacUl = document.getElementById('seatac');
  console.log(seatacUl, '<seatacUl>');
  for(var i = 0; i < hours.length; i++) {
    console.log('render for loop working');
    //create element
    var liEl = document.createElement('li');
    //give content
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //append
    seatacUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  seatacUl.appendChild(liEl);
}

//               <-------------Seattle Center--------------->
var seattlecenter = {
  locationName : ['Seattle Center'],
  minCustPerHour : 11, //min cust each hour
  maxCustPerHour : 38, //max cust each hour
  avgCookies : 3.7, //avg cookies per customer
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0
}

seattlecenter.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour[i] = randomCustomers;
  }
}

seattlecenter.calcCookiesEachHour = function() {
  seattlecenter.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookies);
    this.cookiesEachHour[i] = hourlyCookies;
    this.totalDailyCookies += hourlyCookies;
  }
}
seattlecenter.render = function() {
  this.calcCookiesEachHour();
  var seattlecenterUl = document.getElementById('seattlecenter');
  console.log(seattlecenterUl, '<seattlecenterUl>');
  for(var i = 0; i < hours.length; i++) {
    console.log('render for loop working');
    //create element
    var liEl = document.createElement('li');
    //give content
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //append
    seattlecenterUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  seattlecenterUl.appendChild(liEl);
}

//               <-------------Capitol Hill--------------->
var capitolhill = {
  locationName : ['Capitol Hill'],
  minCustPerHour : 23, //min cust each hour
  maxCustPerHour : 65, //max cust each hour
  avgCookies : 6.3, //avg cookies per customer
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0
}

capitolhill.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour[i] = randomCustomers;
  }
}

capitolhill.calcCookiesEachHour = function() {
  capitolhill.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookies);
    this.cookiesEachHour[i] = hourlyCookies;
    this.totalDailyCookies += hourlyCookies;
  }
}

capitolhill.render = function() {
  this.calcCookiesEachHour();
  var capitolhillUl = document.getElementById('capitolhill');
  console.log(capitolhillUl, '<capitolhillUl>');
  for(var i = 0; i < hours.length; i++) {
    console.log('render for loop working');
    //create element
    var liEl = document.createElement('li');
    //give content
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //append
    capitolhillUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  capitolhillUl.appendChild(liEl);
}

//               <-------------Alki--------------->
var alki = {
  locationName : ['Alki'],
  minCustPerHour : 23, //min cust each hour
  maxCustPerHour : 65, //max cust each hour
  avgCookies : 6.3, //avg cookies per customer
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0
}

alki.calcCustomersEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomers = random(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour[i] = randomCustomers;
  }
}

alki.calcCookiesEachHour = function() {
  alki.calcCustomersEachHour();
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookies);
    this.cookiesEachHour[i] = hourlyCookies;
    this.totalDailyCookies += hourlyCookies;
  }
}
alki.render = function() {
  this.calcCookiesEachHour();
  var alkiUl = document.getElementById('alki');
  console.log(alkiUl, '<alkiUl>');
  for(var i = 0; i < hours.length; i++) {
    console.log('render for loop working');
    //create element
    var liEl = document.createElement('li');
    //give content
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //append
    alkiUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
  alkiUl.appendChild(liEl);
}
pike.render();
seatac.render();
seattlecenter.render();
capitolhill.render();
alki.render();
