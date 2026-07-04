window.onload = () =>{

    console.log("on page load"); 
    
    document.querySelector("form[name=LoginForm]").onsubmit= Validate;

    document.querySelector("#rdoSelected").onclick= CategorySelected;

    // assigning onclick event for each radio button
    let radioButtonList = document.querySelectorAll("input[name=category]");
    console.log(radioButtonList);

    //Regular way of doing it
    // for(i=0; i< radioButtonList.length; ++i)
    // {
    //     radioButtonList[i].onclick = RadioSelected;
    // }

    // Alternative shortcut way using foreach
                           //item, index 
    // radioButtonList.forEach( (item, index)=>{
    //     item.onclick= RadioSelected;
    // });

    // More compact version: Write it directly on cheat sheet

    radioButtonList.forEach((item, index)=>{
        item.onclick = function (){
            console.log(this.value);
        }
    });
}

function RadioSelected()
{
    console.log("inside radio selected");
    console.log(this.value);
}

function CategorySelected()
{
    console.log("inside category selected");
    let category = document.querySelector("input[name=category]:checked");

    console.log(category.value);
    
    //alternative way

    let categories = document.querySelectorAll("input[name=category]");

    console.log(categories);

    for(i=0; i<categories.length; ++i)
    {
        if(categories[i].checked)
        {
            console.log("Selected category " + categories[i].value);
        }

    }

    // check a specific radio button
    categories[1].checked = true;

    // Unselected radio buttons

    let unselectedRadioButtons = document.querySelectorAll("input[name=category]:not(:checked)");
    console.log(unselectedRadioButtons);
}

function Validate(){
    console.log("inside validate function");

    // some validation 
    // if all validations are good, we allow submission otherwise no
    let username = document.querySelector("input[name=username]").value;
    let password = document.querySelector("input[name=password]").value;
    
    console.log(username);

    if(username=="" || username.length!=6)
    {
        alert("username should not be empty or it should have 6 characters only");
        return false; // Avoid form submission by returning fals
    }

    if(password=="")
    {
        alert("password should not be empty ");
        
        return false; // Avoid form submission by returning fals
    }
    else if(password.length!=8)
    {
        alert("password should have 8 characters only");
        return false;
    }

    alert("All Good ready to submit form");
    return true;
}