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