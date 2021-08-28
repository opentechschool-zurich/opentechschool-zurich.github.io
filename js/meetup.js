var max_events = 4;

function ucfirst(word) {
 return word[0].toUpperCase() + word.slice(1);
}

// meetup offers CORS request for authenticated users... so, we use the jsonp hack
tempScript = document.createElement("script");
tempScript.type = "text/javascript";
tempScript.id = "tempscript";
tempScript.src = 'https://api.meetup.com/opentechschool-zurich/events?&sign=true&photo-host=public&page=20&callback=meetupEvents'
document.body.appendChild(tempScript);

function meetupEvents(data) {
	var dom = document.getElementById('meetupEvents');
  var events = data.data.slice(0, 8);
	for (i = 0; i < Math.min(max_events, events.length); i++) {
    dom.appendChild(getEventDom(events[i]));
  }
}

function getEventDom(data) {
	var div = document.createElement('div');
  div.className = 'event';
  var divDate = getDateDom(data.local_date);
  var divDescription = getDescriptionDom(data.local_date, data.local_time, data.name);
  div.addEventListener('click', function() { window.open('https://www.meetup.com/opentechschool-zurich/events/' + data.id, '_self'); });
	div.appendChild(divDate);
	div.appendChild(divDescription);
  return div;
}

function getMonthShort(month) {
  var name = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return name[month];
}

function getDayShort(day) {
  var name = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return name[day];
}

function getDateDom(date) {
  var dateArray = /(\d{4})-(\d{2})-(\d{2})/.exec(date);

  var spanDay = document.createElement('span');
  spanDay.className = 'day';
	var content = document.createTextNode(dateArray[3])
	spanDay.appendChild(content);

  var spanMonth = document.createElement('span');
  spanMonth.className = 'month';
	content = document.createTextNode(getMonthShort(dateArray[2] - 1))
	spanMonth.appendChild(content);

  var divDate = document.createElement('div');
  divDate.className = 'date';
	divDate.appendChild(spanDay);
	divDate.appendChild(spanMonth);

  return divDate;
}

function getDescriptionDom(date, time, title) {
  var divDateTime = document.createElement('div');
  divDateTime.className = 'date_time';
  dateStruct = new Date(date);
	var content = document.createTextNode(ucfirst(getDayShort(dateStruct.getDay())) + ', ' + ucfirst(getMonthShort(dateStruct.getMonth())) + ', ' + dateStruct.getFullYear() + ', ' + time);
  divDateTime.appendChild(content);

  var divTitle = document.createElement('div');
  content = document.createTextNode(title);
  divTitle.appendChild(content);

  var divDescription = document.createElement('div');
  divDescription.className = 'description';
  divDescription.appendChild(divDateTime);
  divDescription.appendChild(divTitle);
  return divDescription;
}
