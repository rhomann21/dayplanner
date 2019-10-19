$(document).ready(function() {
var now = moment().format('MMMM Do YYYY; h:mm a');
var dateElement = document.querySelector('#dateTime');

dateElement.innerHTML = now.toString();

//helper functions
   $('.js-save').on('click', function() {
       /* get the key and the value */
       var timeOfDay = $(this).parent().attr('id');
       var textOfDay = $(this).siblings('.description').val();

       // save it local storage
       localStorage.setItem(timeOfDay, valueOfDay);
   });

   /* init */
   /* pull from local storage */
   $('#hour-9 .description').val(localStorage.getItem('hour-9'));
   $('#hour-10 .description').val(localStorage.getItem('hour-10'));
   $('#hour-11 .description').val(localStorage.getItem('hour-11'));
   $('#hour-12 .description').val(localStorage.getItem('hour-12'));


});

//events

//init
 /*check local storage object for matching id*/
    /*set today's date in header*/
    /*color code past/current/future bars*/