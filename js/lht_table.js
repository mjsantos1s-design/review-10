"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Michael Santos
   Date:   

   "eventDates" array containing a list of dates and time at which the theater events are scheduled
   "eventDescriptions" array containing the description of those events
   "eventPrices" array containing the admission prices of those events
	
*/

var thisDay = new Date("August 30, 2018 00:00:00");  // Reference date

var tableHTML = "<table id='eventTable'>\n";
tableHTML += "<caption>Upcoming Events (Next 14 Days)</caption>\n";
tableHTML += "<thead>\n";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>\n";
tableHTML += "</thead>\n";
tableHTML += "<tbody>\n";

// Step 6: Create endDate = thisDay + 14 days
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Step 7 & 8: Loop through all events
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay  = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit'
   });

   // Check if event is after today AND within the next 14 days
   if (thisDay < eventDate && eventDate < endDate) {
      tableHTML += "<tr>\n";
      tableHTML += "   <td>" + eventDay + " @ " +  eventTime + "</td>\n";
      tableHTML += "   <td>" + eventDescriptions[i] + "</td>\n";
      tableHTML += "   <td>" + eventPrices[i] + "</td>\n";
      tableHTML += "</tr>\n";
   }
}

// Step 9: Close the table
tableHTML += "</tbody>\n";
tableHTML += "</table>";

// Step 10: Insert into the page
document.getElementById("eventList").innerHTML = tableHTML;

//6 Declare a variable named endDate that contains a Date object that is 14 days after the date stored in the thisDay variable. (use new date() object constructor and insert a time value that is equal to thisDay.getTime() + 14*24*60*60*1000.)

//7 create the for loop that loops through the length of the eventDates array. Use "i" as the cunter var

//8 Within the for loop declare a var named eventDate containing a Date onject with the date stored in the i entry in the eventDates array, declare a var named eventDay that stores the text of the eventDate date using the toDateString() method, and declare a var named eventTime stores the text of the eventDate time using the toLocaleTimeString() method, and insert if statement that has a conditional expression that tests wether thisDay is < eventDate and eventDate < endDate. If so, the the event falls within the two-week window that Lewis has requested and the script should add the following HTML code text to value of the table HTML variable. <tr><td>eventDay @ eventTime</td><td>description</td><td>Price</td>








//9 after the for loop add text of the HTML code "</table>" to value of the tableHTML var

//10 insert the value of the tableHTML var into the inner HTML of the page element with ID evenList