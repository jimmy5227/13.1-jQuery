$("button").on("click", function () {
  const title = $("form input").eq(0).val();
  const rating = $("form input").eq(1).val();

  $("ul").append(
    "<li><button>Remove</button> Title: <b>" +
      title +
      "</b> Rating: <b>" +
      rating +
      "</b></li>"
  );
});

$("ul").on("click", "li", function () {
  $(this).remove();
});
