// Update date at the top of the page
$(".date").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

// Take what user wrote on the textarea and save it in localstorage
$(".saveBtn").on("click", function () {
    // Gets the ID and text content of the row that houses the clicked save button
    var time = $(this).parent().attr("id");
    var blockinfo = $(this).siblings(".blockinfo").val();
    // Saves info into localStorage under corresponding keys
    localStorage.setItem(time, blockinfo);
});

// Load blocks to the page
$("#9 .blockinfo").val(localStorage.getItem("9"));
$("#10 .blockinfo").val(localStorage.getItem("10"));
$("#11 .blockinfo").val(localStorage.getItem("11"));
$("#12 .blockinfo").val(localStorage.getItem("12"));
$("#13 .blockinfo").val(localStorage.getItem("13"));
$("#14 .blockinfo").val(localStorage.getItem("14"));
$("#15 .blockinfo").val(localStorage.getItem("15"));
$("#16 .blockinfo").val(localStorage.getItem("16"));
$("#17 .blockinfo").val(localStorage.getItem("17"));

// Check each time block to see if it is in the past, present or future and changes its color accordingly
function checkTime() {
    // Get the current hour and assign it into a variable
    var currentHour = moment().hours();
    // Get the hour of each row and compare it to current time
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future", "present");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past", "future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past", "present");
        };
    });
};

// Call the function to check the time
checkTime();