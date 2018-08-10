var searchTermInput = "Donald Trump";
var numRecordsInput = 10;
var startYearInput = 20010101;
var endYearInput = 20030101;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var api_key = "1c66e50280474e41baf74ce534e3c915";

$(document).ready(function(){

    $("#search").on("click", function(){
        searchTermInput = $("#search-term").val();
        console.log($("#search-term").val());
    
        numRecordsInput = $("#num-records").val();
        console.log($("#num-records").val());
    
        startYearInput = $("#year-start").val();
        console.log($("#year-start").val());
        
        endYearInput = $("#year-end").val();
        console.log($("#year-end").val());

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
        }).then(function(r) {
          
          console.log(r);
          var array = r.response.docs;
          console.log(array);
          console.log(array.length);

            for(var i = 0; i < array.length; i++){
            
                var index = i + 1;
                var title = r.response.docs[i].headline.print_headline;
                var author = r.response.docs[i].byline.original;
                var link;

                var card = $("<div>").attr("class", "card");
                var cardIndex = $("<span>").attr("class", "badge badge-primary");
                cardIndex.text(index);

                var cardTitle = $("<h4>").attr("class", "card-title");
                cardTitle.attr("id", "article-title");
                cardTitle.text(title);

                var authors = $("<h5>").attr("class", "card-subtitle");
                authors.attr("id", "authors");
                authors.text(author);

                $(card).append(cardIndex, cardTitle, authors);
                $("#result").append(card);



                console.log(index, title, author);

            }

    
        });
      });

      $("#clear").on("click", function(){

        $("#search-term").val("");
        $("#num-records").val("");
        $("#year-start").val("");
        $("#year-end").val("");
        $("#results").val("");

      });




});

