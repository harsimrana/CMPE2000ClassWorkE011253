/*
    jQuery- Free Open Source JavaScript library - Functions

    A lot of selectors, methods, 
    Cross browser compatibility

    A compressed library so it loads quickly

    2. ways to include jQuery library
    1. Download library and include it inside your project folder
    2. Link it directly to online CDN Content Delivery Network



*/

// window.onload=()=>{
//     console.log("On page load");
// }

// jQuery Version
$( ()=>{
    console.log("On Page load from jQuery");

    //Javascript version
    //document.querySelector("#b1").onclick = FunctionName;

    // Bind a click event on b1 button
    $("#b1").click( ()=>{
        console.log("inside b1 ");

        //  $("p").hide(1000);          //  millisencond 1 second  
         
        //  $("p").show(1000);
        
        //  $("p").toggle(1000);        // Display or hide the selected element

        // $("p").slideUp(1000);        // hide
        // $("p").slideDown(1000);      // show
        // $("p").slideToggle(1000);    // works like toggle

        // $("p").fadeOut(1000);           // hide
        // $("p").fadeIn(1000)             //show
        // $("p").fadeToggle(1000);

        // JavaScript version
        // document.querySelector("p").innerHTML ="Simran";

        // $("p").html("Simran");  //setter function if you pass argument

        let previousValue = $("p").html();  // getter function : it will return the value of the element
        
        console.log(previousValue);
        console.log(previousValue.length);
        if(previousValue.length > 5)
        {
            $("p").html("Hellow new text "); //setting function with argument
        
        }
        else
        {
            alert("Length is less than equal to 5");
        }
    })
}

);


