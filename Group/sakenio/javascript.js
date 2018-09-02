$(document).ready(function() {

    setTimeout(function() {
        $('#dialog').show();
    }, 5000);

    $("#close").click(function() {
        $('#dialog').hide();
    });

    $(window).click(function(event) {
        if (event.target.id ==  'dialog') {
            $('#dialog').hide();
        }
    });
    $( "#navButton" ).click(function() {
    $( "#mobNav" ).toggle( "slide" );
  }); 

});

function validateForm() {
    let name = $("#firstName").val();
    let surename = $("#lastName").val();
    let text = $("#textarea").val();
    if (name == "" || surename == "" || text == "") {
        $("#error").html("All fields must be filled!");
        return false;
    }
}

function validateModal() {
    var name = $("#your-name").val();
    var email = $("#e-mail").val();
    if (name == "" || email == "" ) {
        $("#message").html("All fields must be filled!");
        return false;
    }
}