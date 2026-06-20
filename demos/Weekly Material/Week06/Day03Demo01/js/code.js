// Js file for Week 06 Day 03: Demo 01

let arrNames= ["Simran", "Rex", "Habib", "Carl", "Joey", "Lucky", "Joseph", "Elodie", "Rosine", "Boss"]
console.log("first message from js file");

/*
   Bind events to event listeners 
1. Identity the element from js
    js functions
    document.getElementById(id)
    document.getElementByTagName(tagname)
    document.getElementByClassName(className)
    document.getElementByName(name)

2. Bind the element to its event listener - Functions

*/
window.onload = function()
{
    console.log("On page load");
    //bind the element with id changetext to event onlick

   // console.log( document.getElementById("changetext") ); 

   document.getElementById("changetext").onclick = textChange;  // Don't include () here

   document.getElementById("addParaDynamically").onclick = addParaDynamically;

   document.getElementById("addTable").onclick = addTableDynamically;
}

function addTableDynamically()
{
    console.log('inside add table dynamically ');
    let tablestr = "<table>";
        // Header row
        tablestr += "<tr>";
            tablestr += "<th> S.No</th>";
            tablestr += "<th> Student Name</th>";
            tablestr += "<th> Email </th>";
        tablestr += "</tr>";
        
        for(i= 0; i< 10; ++i)
        {
            //  data row
            tablestr += "<tr>";
                //tablestr += "<td>" + i + "</td>";
                // Alternative of adding values inside a string
                tablestr += `<td>  ${i+1} </td>`;
                tablestr += `<td> ${arrNames[i]} </td>`;
                tablestr += `<td> ${arrNames[i]}@nait.ca </td>`;
            tablestr += "</tr>";
        }

    tablestr += "</table>";  // tablestr = tablestr + "</table>";

    console.log(tablestr);

    document.getElementById("tabledata").innerHTML = tablestr;
}

function addParaDynamically()
{
    console.log("Inside add para Dynamically function");

    let newPara = "<p> This is my dynamic paragraph </p> ";

    // storing the reference to div container with id dynamicPart in a variable
    let divElement = document.getElementById("dynamicPart");

    // Adding para directly inside div container with id dynamicPart
    divElement.innerHTML = newPara;

}

function textChange()
{
    console.log("inside text change ");

    //updatedStr = "Updated text for para";

    //now let's take the value from user
                    //  prompt text                , Default value
    updatedStr = prompt("Enter new text Paragraph" , "text");

    if(updatedStr!=null && updatedStr.length > 0)
    {
        document.getElementById("para1").innerHTML = updatedStr;
    }
    else
    {
        alert("Not a valid action. Please provide right text and press ok"); 
    }

}