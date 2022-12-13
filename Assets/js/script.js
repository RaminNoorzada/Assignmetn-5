// Displing Current day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    // Save Btn click listener
    $(".saveBtn").on("click", function () {

        //Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //Saves text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {

        //Get current number of hours
        var timeNow = moment().hour();

        //Loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //To check the time and add the classes for background indicatiors
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //Get items from local storage if any

    $("#8 .description").val(localStorage.getItem("hour8"));
    $("#9 .description").val(localStorage.getItem("hour9"));
    $("#10 .description").val(localStorage.getItem("hour10"));
    $("#11 .description").val(localStorage.getItem("hour11"));
    $("#12 .description").val(localStorage.getItem("hour12"));
    $("#13 .description").val(localStorage.getItem("hour13"));
    $("#14 .description").val(localStorage.getItem("hour14"));
    $("#15 .description").val(localStorage.getItem("hour15"));
    $("#16 .description").val(localStorage.getItem("hour16"));
    $("#17 .description").val(localStorage.getItem("hour17"));

    timeTracker();

})
