function comment() {
  var userName = $('#comment').val();
  $("user_comment").text(comment);
}

function handlekey(event) {
    if (event.keyCode == 13) {
        comment ();
    }
}

function setup() {
  $("#submit_button").click(comment);
  $("#comment").on('keypress' , handlekey);
}

$(document).ready(setup)
