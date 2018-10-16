'use strict';
var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm', '6pm', '7pm']

var pike = {
  locationName : ['First and Pike'],
  minCustPerHour : 23, //min cust each hour
  maxCustPerHour : 65, //max cust each hour
  avgCookies : 6.3, //avg cookies per customer
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0

  // render()
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
//random cookies per customer
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //from mdn docs
}

