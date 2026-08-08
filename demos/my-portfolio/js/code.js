$( ()=>{
    console.log("page onload");

    // $("#themeToggleBtn").click(ChangeTheme);
     $("#themeToggleBtn").click( ()=>{
        console.log("on click of Theme change button");

        // Hard coding it  changing it by our own choice
        // like for what elements you want to change
        // $("header").css("background-color","orange");
        // $("footer").css("background-color","orange");


        // More efficent way to handle it from CSS

        
        // toggleClass button will do that for you
        $("body").toggleClass("dark-theme");

        // Handing it using if else statement
        // if($("body").hasClass("dark-theme"))
        // {
        //     $("body").removeClass("dark-theme");
            
        // }
        // else{
        //     $("body").addClass("dark-theme");
        // }

        if($("body").hasClass("dark-theme"))
        {
             $("#themeToggleBtn").text("Switch Light Theme"); 
        }
        else{
              $("#themeToggleBtn").text("Switch Dark Theme"); 
        }


     });

    //  Projects Page
    $("#loadProjects").click(()=>{
        console.log("inside load projects");

        MakeAjaxCall("http://localhost:8080/projects.php", "GET", {}, "JSON", successProjects, errorHandler );
    });

});

function successProjects(serverData, serverStatus)
{
    console.log(serverData);
    for(i=0; i<serverData.projects.length; ++i)
    {
        console.log(serverData.projects[i].title);
        // $("#fetchedProjects").append(serverData.projects[i].title +"<br>");

        // Practice exercise
        // You need to update these projects inside the table
    }
}

function errorHandler(ajaxReq, errorCode, errorMessage)
{
    console.log(errorMessage);
}

// function ChangeTheme()
// {
//     console.log("inside change theme");

// }

// Generic function to handle AJAX calls
function MakeAjaxCall(serverURL, reqMethod, clientData, resDataType, fxnSuccess, fxnError)
{
    console.log("Inside MakeAjaxCall function");    

    let ajaxOptions ={};
    ajaxOptions['url']      =   serverURL;         // Destination Server URL
    ajaxOptions['data']     =   clientData;        // Clienct data to be sent to server
    ajaxOptions['type']     =   reqMethod;         // GET/POST 
    ajaxOptions['dataType'] =   resDataType;       // HTML/JSON - Server response type 
    ajaxOptions['success']  =   fxnSuccess;        // Callback function for successful case
    ajaxOptions['error']    =   fxnError;          // Callback function for error case

    console.log(ajaxOptions);

    //Make Ajax call and pass ajaxoptions object

    $.ajax(ajaxOptions);

}