// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("button").on("click", function() {
      var id = $(this).attr("id");
      const devoured = $(this).data("devour");
      console.log(devoured);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devour: !devoured}
      }).then(
        function() {
          console.log("you devoured a burger!")
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        buger_name: $("#ca").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  });
  