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
       alert("bottom!");
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