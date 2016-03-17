// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";
    var output = "";
    var firstParagraph = document.getElementById("firstParagraph");

    var Person = {}; /*same as =  var Person = new Object(); */

    for (var key in Person) {
    
        // check if it is familyNames
        if (key === "familyNames") {
            output += "<br />Family Names: <br />";
             output += "<hr><br />";
             output += "<ul>";
            for (var index = 0; index < Person.familyNames.length; index++) {
                 output += "<li>" + Person.familyNames[index] + "</li>";
            } // for loop
            output += "</ul>";
            // check if sayHello  
        } else {
             output += Person[key]  + "<br />";
        } // end if else if else
    } // for in


    firstParagraph.innerHTML = output;
})(); // end iife


 //   var output = "";
 //   var firstParagraph = document.getElementById("firstParagraph");

 /*   var Person = {
        "age": null,
        "name": "Tara",
        "address": "1 Georgian Drive",
        "city": "Barrie",
        "province": "ON",
        "familyNames": [
            "Harrison",
            "Marissa",
            "Dino",
            "Alexander"
        ],
        "sayHello": function () {
            output += "<br /><hr><br />";
            output += Person.name + " says hello";
        }
    }; /*same as =  var Person = new Object(); */

 /*   for (var key in Person) {
    
        // check if it is familyNames
        if (key === "familyNames") {
            output += "<br />Family Names: <br />";
             output += "<hr><br />";
             output += "<ul>";
            for (var index = 0; index < Person.familyNames.length; index++) {
                 output += "<li>" + Person.familyNames[index] + "</li>";
            } // for loop
            output += "</ul>";
            // check if sayHello  
        } else if (key === "sayHello") {
            Person.sayHello();
        
            // everthing else does this  
        } else {
             output += Person[key]  + "<br />";
        } // end if else if else
    } // for in


    firstParagraph.innerHTML = output;
*/