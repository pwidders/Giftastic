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

    var topics = ['Simpsons', 'Family Guy', 'Archer', 'Metalocalypse', 'South Park', 'Futurama', 'Doug', 'Rugrats', 'Looney Tunes', 'Rick and Morty']

    // Create buttons for existing cartoons when page loads
        
            // Create for loop to make button for every item in array
            for (var i = 0; i < topics.length; i++) { 
            // Append buttons to #button-list
            $("#buttons-go-here").append("<button class= 'cartoonButtons'>" + topics[i] + "</button>");
            $(".cartoonButtons").css({
                "background-color": "#c5a996",
                "border": "3px solid #fff",
                "color": "#000",
                "font-family": "Comic sans ms",
                "padding": "10px",
                "margin": "10px",
            })
        
        }

    // On click, button pulls 10 images using Giphy API and displays them in a new div with rating
       
        // Click listener
        $(".cartoonButtons").click(function queryAPI (e) {
        e.preventDefault();
            
        var clickedCartoon = api + query + e.target.innerText + apiKey + '&limit=10';

        //Ajax request
        $.ajax({
            url: clickedCartoon,
            method: "GET"
        })
        // Once response received...
        .done(function(response) {
            var results = response.data;
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                 var rating = results[i].rating;
                console.log(rating);
                var p = $("<p>").text(" Rating: " + rating);
                var cartoonImage = $("<img>");
                $(cartoonImage).attr("src", results[i].images.fixed_height.url);
                $("#gifs-go-here").prepend(p);
                $(p).after(cartoonImage);     
            }
        })
    })
        // Users can enter new cartoons to add buttons to the list
        // Append a submit button underneath the form on main page for the submit button
        $(".form-group").append("<button id= 'submit' type= 'button'>Submit"); 
        // Click listener
        $(document).on('click', '#submit', function(){
            var userInput= $("#cartoon-new-input").val();
            // Create new button from user input
            console.log(userInput);
        }); 
})









