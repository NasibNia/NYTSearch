var searchTermInput = "Donald Trump";
var numRecordsInput = 10;
var startYearInput = 20010101;
var endYearInput = 20030101;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var api_key = "d4c10215b1944f7cb6bff906847fa760";

$(document).ready(function(){

    $("#search").on("click", function(){
    
        var queryURL = url + "?";
        console.log(queryURL);

        queryURL += $.param({
            'api-key': api_key,
            'q': searchTermInput,
            'page': numRecordsInput,
            'begin_date': startYearInput,
            'end_date': endYearInput
          });

          console.log(queryURL);
    
        $.ajax({
          url: queryURL,  
          method: "GET"
        }).then(function(response) {
          
          console.log(response);
    
        });
      });


});

