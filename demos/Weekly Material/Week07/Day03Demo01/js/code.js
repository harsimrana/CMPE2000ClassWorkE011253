console.log("from JS");

let elem = ""; // storing new node as global variable

let timer ="";  // to track timer

let userScore= 0;

window.onload = function()
{
    console.log("On page load"); 


    // Instead of using getElementById or all other functions
    // you can use only querySelector to identify and target any element
    // id - #  | class-  . | tagname  |  [attributeName=value]   | div > p
    document.querySelector("#cabtn").onclick= CreateNAppendNode;

    // Anonymous function- function without name: suitable candidate for event listener
    document.querySelector("#rembtn").onclick = function ()
    {
        console.log("Inside remove button click listener");

        // Keep a hold on container element
        let container = document.querySelector("#s1");
        // hold on child element
        let child = document.querySelector("#myParagraph");
        // because querySelector will return null if there is no matching element

        if(child !=null) // if present, only then remove it
        {
            // Remove specific child from parent
            container.removeChild(child);
        }

        // Just to answer a question- how can we remove text inside any element
        //document.querySelector("#s1").innerHTML="1"; // innerHTML property will help you
    }

    // Arrow function is another version for event listener
    document.querySelector("#movebtn").onclick = ()=> {
        console.log("Inside Move element listener");

        let cellNumber = Math.floor((Math.random() * 6) + 1);

        console.log(cellNumber);

        document.querySelector("#s"+cellNumber).appendChild(elem);
    }

    //assigning click event
    document.querySelector("#moveEleTimer").onclick= MoveTextOnTimer;

    // assigning click event on stop Timer element
    document.querySelector("#stopTimer").onclick = StopElement;

    
    
}

function StopElement()
{
    console.log("inside Stop Element");

    // Trying to clear timer with the help of global variable
    // clearTimer()- to clear time interval
    clearInterval(timer);
    
}

function MoveTextOnTimer()
{
    console.log("inside Move Text on Timer funciton");
            //        function, timedelay in milliseconds
    timer = setInterval(MoveTextNode, 1000); // Millseconds
    // setInterval function repeatedly execute a specified function or code block
    // at a fixed time intervals


}
function MoveTextNode()
{
    console.log("inside Move Text node");
    // Random number between 0 and 1 where 1 is included
    let cellNumber = Math.floor((Math.random() * 6) + 1);

    console.log(cellNumber);

    document.querySelector("#s"+cellNumber).appendChild(elem);
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
    // exercise 1 : to stop the timer if user is able to click
    //document.querySelector("#myParagraph").onclick = StopElement;
    // exercise 2: to update the score of user and give an alert message
    document.querySelector("#myParagraph").onclick = updateScore;
}

function updateScore()
{
    console.log("insider userScore");
   

    alert(`User Score: ${++userScore}`);

}