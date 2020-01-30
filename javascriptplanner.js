// JS/JQ
$( document ).ready(function() {
    
    $(".saveBtn").on("click", function() {
        // get nearby values
        
        // grab appropriate time and text values relative to the save button that was clicked
        var time = this.id;
        var value = document.getElementById(time + 'Text').value
        console.log(value)

        // save in localStorage
        localStorage.setItem(time, value);
      });
});

// let saveBtns = document.querySelectorAll('.saveBtn')

//saveBtns//


// let textInput = $("#textInput").text()
// console.log(textInput)

//MOMENT//CurrentTime//
var m = moment()
// m.format("LLL")
$("#currentDay").text(m.format('LLL'));
console.log(m)


// // compare/check the time 
// let timeColors = function(){
//     if m >=
// }





// save events 
// load previously saved events


// // use jquery to save the time and event input to variables
// // when save button is clicked
// // fire functino that saves that time and event to localStorge -- localStorage.setItem("events": [])
// // localStorage.events.push({"time": "9", "event": ""})
// // localStorage.events[0].time


// function loadPrevious(){
//     var array = localStorage.events
// }

// var now = moment();
// $("#currentDay").text(now);
