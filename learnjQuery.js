const $revealSpoilerButton = $("<button>reveal Spoiler</button>");
$("p.spoiler").append($revealSpoilerButton);

$(".spoiler span").hide();
$(".spoiler").on("click", "button",
  function(event) {
     $(this).prev().show();
    $(this).hide();
  }
);
