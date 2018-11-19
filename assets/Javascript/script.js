// Requirements: 
//      Create buttons dynamically with jQuery labeled with various cartoons
//      When clicked, each cartoon button pulls 10 images from API with ratings                     displayed under each image
//      Users can enter a new cartoon in the input bar, which creates a new button for          the requested cartoon 

$(document).ready(function() {
    
    
    // Global variables

    var api = "http://api.giphy.com/v1/gifs/search?";

    var apiKey = "&api_key=fn0bW7TVjeOWKEjDscrvGdRIZtxINcqf";

    var query = "&q=rainbow";

    var topics = 

    // Create buttons for existing cartoons when page loads

        // Create an unorganized list to house the buttons on the website
        $("#gifs").add("ul").addClass("starter-list");
        // Create 

        // Insert <li> elements for individual buttons

    // On click, button pulls 10 images using Giphy API and displays rating

        // Create AJAX request



    // Users can enter new cartoons to add buttons to the list
        
        // Create on click listener for the submit button
        // Use e.preventDefault() on submit button to prevent page refresh

        // Append the value from the string to a new <li> element in the unorganized list on main page










})