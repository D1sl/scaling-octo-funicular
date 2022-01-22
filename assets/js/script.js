console.log("Hello");
// Pseudocoding



// Take what user wrote on the textarea and save it in localstorage
$(".saveBtn").on("click", function() {
    console.log("Save was clicked");

    var time = $(this).siblings(".hour").text();
    var blockinfo = $(this).siblings(".blockinfo").val();

    console.log(time + " " + blockinfo);

});

var saveBlock = function() {
    localStorage.setItem(time, blockinfo);
}

// A loop that checks each time block once every second to see if it is in the past, present or future and changes its color accordingly