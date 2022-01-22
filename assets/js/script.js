// Take what user wrote on the textarea and save it in localstorage
$(".saveBtn").on("click", function() {
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

// A loop that checks each time block once every second to see if it is in the past, present or future and changes its color accordingly
