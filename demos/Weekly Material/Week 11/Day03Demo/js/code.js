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

    //  Bind the click event on button with id b2
    $("#b2").click(FormData);

    // bind the click event on button with id b3
    $("#b3").click( ()=>{
        console.log("Inside b3 button event listener");
        $("img").fadeOut(1000); 
        // Asynchronous
        $("img").prop("src", "./images/GoogleLogo.png" ).fadeIn(1000);
    });

    $("#b4").click(()=>{ 
        console.log("Inside b4 Event listener");
        // Afer completion of first operation [fadeOut], it will call callback function 
        
                    // Duration, callback function
        $("img").fadeOut(1000, ()=>{
            console.log("inside callback function");
            $("img").prop("src","./images/GoogleLogo.png").fadeIn(1000, ()=>{
                // Third event
                $("img").fadeTo(1000, 0.5); // 50% blur
                
                $("img").parent().css("border","2px solid blue");

                let element = "<p> Child P element</p>";

                // adding an element into a parent container

                $("#container").append(element);
            });
        });
    });

}

);

function FormData()
{
    console.log("Inside form data function");
    let userName = $("[name=username]").val(); // getting the value of username field
    // with form elements val() function is important

    console.log(userName);
    if(userName.length ==0)
    {
        alert("Username should not be empty");
        $("[name=username]").focus(); // set the focus on any specific element
    }
    else{
        // Submit your form
        // Make sure to select your form instead of your button
        $("[name=myForm]").submit();
    }
    console.log(this);

    // Convert JavaScript objects into jQuery objects
    $(this).css("color","red");

    // JavaScript we querySelectorAll()
    let ElementList = $("input"); 

    console.log(ElementList);

    // foreach in Javascript
    // each () in jQuery()

    ElementList.each( (index, item) =>{
        $(item).css("background-color", "green");
    })
}


