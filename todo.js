// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addItem);
  // $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  // console.log("Working");
  // window.alert("Nice job");
  var text = window.prompt("I want to go to");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  //<li>Watch Hockey <a href="#" class="link-delete">(Delete)</a></li>
  var numItems = $("li").length-21;
  $(".total").html(numItems + " items");

  // Challenge: Differentiate between 1 item vs. more items
  if (numItems==1) {
    $(".total").html(numItems + " item");
  }
  else {$(".total").html(numItems + " items");
  }
}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().remove();
}
