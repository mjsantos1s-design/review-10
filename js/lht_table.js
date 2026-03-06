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
var thisDay = new Date("August 30, 2018");
var tableHTML =; //Contains the HTML code of event table

var endDate = new Date();




//6 endDate that contains a Date object constructor and insert a time value that is equal to thisDay variable (use new date() object constructor and insert a time value that is equal to thisDay.getTime() + 14*24*60*60*1000.)

//7 create the for loop that loops through the length of the eventDates array. Use "i" as the cunter var

//8 Within the for loop declare a var named eventDate containing a Date onject with the date stored in the i entry in the eventDates array, declare a var named eventDay that stores the text of the eventDate date using the toDateString() method, and declare a var named eventTime stores the text of the eventDate date using the toDateString() method

//9 after the for loop add text of the HTML code "</table>" to value of the tableHTML var

//10 insert the value of the tableHTML var into the inner HTML of the page element with ID evenList