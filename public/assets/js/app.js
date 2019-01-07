// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(location.reload());
    });

    $("#submitBurger").on("click", function (event) {
        event.preventDefault();

        var newburger = {
            name: $("#burgerName").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(location.reload());
    });
});