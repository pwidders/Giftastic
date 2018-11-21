// Requirements: 
//      Create buttons dynamically with jQuery labeled with various cartoons
//      When clicked, each cartoon button pulls 10 images from Giphy API with ratings                     displayed under each image
//      Users can enter a new cartoon in the input bar, which creates a new button for          the requested cartoon 

$(document).ready(function() {
    console.log('are we in here?')
    
    // Global variables

    var api = "http://api.giphy.com/v1/gifs/search?";

    var query = "q="; 

    var apiKey = "&api_key=fn0bW7TVjeOWKEjDscrvGdRIZtxINcqf";

    var topics = ['simpsons', 'family guy', 'archer']

    // console.log('sample url', api + query + apiKey + '&limit=10')
    // Create buttons for existing cartoons when page loads

        // Create an unorganized list to house the buttons on the website
        $("#gifs").append('<ul id="button-list"></ul>');

        // Insert <li> elements for individual buttons
            // Create for loop to make button for every item in array
        for (var i = 0; i < topics.length; i++) { 
            // Append buttons to #button-list
            $("#button-list").append("<button>" + topics[i] + "</button>")
        
        }
        // <button> <input type="button" value="">

    // On click, button pulls 10 images using Giphy API and displays them in a new div with rating

        // Create div for new gifs to appear (placeholder)
        $("#gifs").after("<div id= gifShow>");

        // Click listener
        $("button").click(function (e) {
            
            var clickedCartoon = api + query + e.target.innerText + apiKey + '&limit=10';

            $.ajax({
                url: clickedCartoon,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-appear-here").prepend(gifDiv);
                }
            })

        // Create AJAX request

        // Append images to page. Display rating.



    // Users can enter new cartoons to add buttons to the list
        
        // Create on click listener for the submit button
        // Use e.preventDefault() on submit button to prevent page refresh

        // Append the value from the string to a new <li> element in the unorganized list on main page










