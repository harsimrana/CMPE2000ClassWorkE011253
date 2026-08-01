

/*
    AJAX - Asynchrnous Javascript and XML [Extensible Markup Language]
    - file format for storing, transimitting and reconstructing data
    // JSON - Javascript Object Notation

    $.ajax()
    1. SERVER URL
    2. Type - Method of submission - GET[DeFAULT], POST, PUT, DELETE 
    3. Client Data - Data sent from client side to server
    4. DataType- type of response server: HTML, JSON, XML
    5. Callback functions : Success, Error, Before Making call, When request completes but before calling
    the success function
*/
// Window onload stuff
$(()=>{
    console.log("page onload");
    // For text only
    $("h1>span").text("Simran");
    // for HTML part along with text as well
    //$("h1>span").html("Simran");
    // Applying color
    $("h1>span").css("color", "blue");

    // bind b4 button to event function
    $("#b4").click( ()=>{
        console.log("button b4 has been clicked");
        let urlEDM = "https://data.edmonton.ca/resource/7ds8-hpvz.json";
        
        // on click of b4 button making a call to server

        MakeAjaxCall(urlEDM, "GET", {}, "JSON", successCityData, errorHandler );
    });
});

function successCityData(serverData, serverStatus)
{
    console.log(serverData);
    console.log(serverStatus);
    // If you are object lover, use this one
    console.log(serverData[0].ward);

    // If you are more like an array person use this syntax
    console.log(serverData[0]['ward']);

    let str="";
    for(i = 0; i < serverData.length; ++i )
    {
        console.log(serverData[i].ward);
        str += `Ward Number: ${serverData[i].ward} || Neighbourhood_number : ${serverData[i].neighbourhood_number} <br>`;
    }

    $("#serverResponse").html(str);
}
function errorHandler()
{

}
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