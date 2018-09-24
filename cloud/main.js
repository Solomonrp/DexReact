// Cloud Code entry point

// FOODS
Parse.Cloud.define("getAllFoods", function (request, response) {
    var query = new Parse.Query("Food");
    query.find({
        success: (foods) => {
            console.log(foods);
            response.success(foods);
        },
        error: (error) => {
            console.log(error);
            response.error(error);  
        }
    });
});

// PEOPLE
Parse.Cloud.define("getAllPeople", function (request, response) {
    var query = new Parse.Query("Person");
    query.find({
        success: (people) => {
            console.log(people);
            response.success(people);
        },
        error: (error) => {
            console.log(error);
            response.error(error);  
        }
    });
});

// PLACES
Parse.Cloud.define("getAllPlaces", function (request, response) {
    var query = new Parse.Query("Place");
    query.find({
        success: (places) => {
            console.log(places);
            response.success(places);
        },
        error: (error) => {
            console.log(error);
            response.error(error);  
        }
    });
});