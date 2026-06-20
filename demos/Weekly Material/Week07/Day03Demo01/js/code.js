console.log("from JS");

window.onload = function()
{
    console.log("On page load"); 


    // Instead of using getElementById or all other functions
    // you can use only querySelector to identify and target any element
    // id - #  | class-  . | tagname  |  [attributeName=value]   | div > p
    document.querySelector("#cabtn").onclick= CreateNAppendNode;

}

function CreateNAppendNode()
{
    console.log("Inside Create and append node function");

    elem = document.createElement("p");  // p elment is created

    elem.setAttribute("id", "myParagraph"); // setting id for p element


    // append  the text node the p
    let newTextNode = document.createTextNode("This is text piece"); // creating a text node

    elem.appendChild(newTextNode); // appending the text to the p

    // CSS from js
                        // property, value
    //elem.style.setProperty("color", "blue"); // setting text color

    // Another way of adding css
    //elem.style = "color:blue"; // make sure to follow css pattern 
    
    // Another way 
    //elem.setAttribute("style", "color:blue");

    //another way 
    elem.style.color ="blue";
    elem.style.backgroundColor = "lightgreen";
    elem.style.fontSize = "20px";


    // It is possible to add classes which are already defined in CSS
    elem.setAttribute("class", "newClass");

    let section1 =  document.querySelector("#s1");

    
    section1.append(elem);

}