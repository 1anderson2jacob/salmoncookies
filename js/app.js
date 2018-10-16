'use strict';

var pike = {
  name : ['1st and Pike'],
  minCust : 23, //min cust each hour
  maxCust : 65, //max cust each hour
  avgCookies : 6.3 //avg cookies per customer
  

  // [] cookies
  // 	method to calculate and populate
  // [] customers // use to calculate cookies[]
  // 	method to calculate/populate
  // daily total per location
  // render()

}

//random cookies per customer
pike.randCustMath = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

pike.customers = function() {
  var numCust = [];
  //pike.randCustMath
  for (var i = 0; i < 15; i++) {
    numCust.push(pike.randCustMath(pike.minCust, pike.maxCust));
  }

  return numCust;
}

pike.cookies = function(customers()) {
  var numCookies = [];
  for (var i = 0; i < 15; i++) {
    
  }
}
