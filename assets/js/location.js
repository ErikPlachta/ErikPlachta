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

const update_PositionData = function(){
    $( "#positionData" ).html(
        "<span> Current Top Position: " + $(window).scrollTop() +"</span>"
        // + "<br>"
        + "<span> Height of Browser Window: " + $(window).height() +"</span>"
        // + "<br>"
        + "<span> Total Height of Page: " + $(document).height() +"</span>"
    );
}


//-- Listens if resize happens
$(window).resize(function(e){
    // console.log(e);
    update_PositionData();
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    update_PositionData();
    console.log("bottom!");
       // getData();
   } 
    //-- not to bottom
    else {
        
        update_PositionData();
    }
//    else{
//        console.log($(document).height());
//    }
});


//-- Scroll to Top Button
 $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

//-- button element to have up arrow
var top_btn_html= "<button id='toTop' onclick='gotoTop()'>&#8593;</button>";

//-- Add element to body
$('document').ready(function(){
    $("body").append(top_btn_html);
});

//-- Scrolling to top logic
function gotoTop(){
    $("html, body").animate({scrollTop: 0}, 200);
}
/* END --> Scroll to Top Button */