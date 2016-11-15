'use strict'


var cookieStorePike = {
  min: 23,
  max: 65,
  average: 6.3,
  name: '1st and Pike',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'],
  myArray: [],
  cookieAveragePike: function() {
    var cookiePerHour = (this.average * this.getRandomInt());
    console.log('The amount of cookies purchased each hour on average is: ' + cookiePerHour);
    for(var i = 0; i < this.storeHours.length; i++) {
      this.myArray[i] = (this.average + this.getRandomInt());
    }

  },
  getRandomInt: function (min, max) {
    min: Math.ceil(min);
    max: Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

  },
  listCookieAverage: function () {
    var contentArea = document.getElementById('content_area');
		var ul = document.createElement('ul');
		var li;

    for(var i = 0, i < this.cookiePerHour.length, i++);
    li.textContent = this.cookiePerHour[i];
    ul.appendChild(li);
  }

  contentArea.appendChild(ul);

  }
