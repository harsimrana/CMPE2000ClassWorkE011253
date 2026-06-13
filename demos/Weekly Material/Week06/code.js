// .js is extension of JavaScript file

function secondFunction()
{
    console.log("Inside second function");
    document.body.style.backgroundColor="lightgreen";
    alert("Color has been changed");
}

/*********************************
 * Function Name : redirectToNait
 * Purpose       : To redirect the user to NAIT website
 * Inputs        : NO
 * Output        : NO
 *********************************/
function redirectToNait()
{
    console.log("Inside redirect function");
    window.location="https://www.nait.ca";
    // location property - redirect the user to any other URL
    // window keyword is optional because it is default
}

function obtainDimensions()
{
    console.log("Inside obtain Dimensions")
    width = window.innerWidth;
    height= window.innerHeight;

    console.log("Width: " + width +" Height: "+height);
}

function inputAge()
{
         // Prompt message, Default Value
    var age = prompt("Enter your age: ", "0");

    // It will return age value
    // If ok button is clicked, it will return value entered
    // If cancel button is clicked, it will retung null

    // console.log("Values entered: " +  age);
    console.log(`Value entered: ${age} `);

    // Not a number
    // 
    if(!isNaN(age))
    {
        alert("Valid values");
    }
    else
    {
        alert("Please provide a valid number");
    }
}