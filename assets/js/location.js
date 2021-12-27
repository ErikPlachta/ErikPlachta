/*

    Author(s):: Erik Plachta
*/

const height = $(document).height();


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
});

console.log("//-- Location awareness loaded...")

function getData() {
    $.getJSON('Get/GetData?no=1', function (responseText) {
        //Load some data from the server
    })
};

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
       // getData();
   } 
    //-- not to bottom
    else {
        
        $( "#positionData" ).html(
            "Current Top Position: " + $(window).scrollTop()
            + "<br>"
            + "Height of Browser Window: " + $(window).height()
            + "<br>"
            + "Total Height of Page: " + $(document).height()
        );
        console.log("Position: ",$(window).scrollTop());
        console.log("Height of View Window: ", $(window).height())
    }
//    else{
//        console.log($(document).height());
//    }
});