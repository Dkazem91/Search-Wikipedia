$(document).ready(function() {


  $('input').delay(500).animate({
    width: "200px",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }, 'slow');

$('input').on('keydown', function(x) {
if (x.which == '13') {
  $(".input").css("margin-top", "0")
  $(".random").fadeIn();
  $(".data").hide();
  $(".data").empty();
  $.getJSON("https://en.wikipedia.org/w/api.php/w/api.php?action=query&format=json&prop=&list=search&meta=&pageids=&srsearch=" + $("input").val() + "&srprop=snippet&srlimit=10&callback=?", function(data) {
    $.each(data.query.search, function(index, value) {
      var url = "http://en.wikipedia.org/wiki/" + value.title.replace(/ /g, "_");
      var entry = $("<a class='results' href=" + url + "><div>" + "<P><strong>" + value.title + "</strong></p>" + "<p>" + value.snippet + "</p></div></a>");
      $(".data").append(entry);

    })

  })
  setTimeout(function() {
    $(".data").fadeIn();
  }, 500);
}
});
  
});
