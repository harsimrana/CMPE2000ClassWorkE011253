 console.log("Inside JS");

let student;

window.onload = function ()
{
    console.log("On Page load");

    document.querySelector("#changeName").onclick = ChangeName;

    /*
    JS Object 
        objects have 
            - properties/attributes/data members
            - and functions/members
    Create your own objects
    1. By creating an object literal
    2. Constructor function and using protype object

    */

    // First method by creating an object literal
     student = {
        // properties of object
        studentId : 1,
        studentName: "Simran",
        
        // Function inside an object 
        // FunctionName: function()
        changeValues: function (name)
        {
            // perform validation
            // clean inputs
            this.studentName = name;
        }
    }

    // To access properties or attributes use dot(.) operator
    console.log(student);

    document.querySelector("main").innerHTML += student.studentId +" "+ student.studentName;

    document.querySelector("main").innerHTML += `${student.studentId}  ${student.studentName}`;


    //2. Creating objects using constructor

    var instructor = function (name, id, ImagePath)
    {
        // validations before assigning the value to the property
        this.instructorName = name;
        this.instructorId   = id;
    
        // creating an image object inside Instructor Object
        this.instructorImage = new Image();  // Creating an image object
        this.instructorImage.src= ImagePath; // Assign image path to src property

    }

    // Instructor is an object type and you can create instances of it

    // To add functions into object , use constructor prototype
    instructor.prototype.changeName =  function (name)
    {
        // perform some validation checks on the value coming from client 
        this.instructorName= name;
        // this keyword will refer to current object

    }


    let instructor1 = new instructor("Simran", "1004758", "./images/simran.jpg");
    let instructor2 = new instructor("Shane", "1004759", "./images/shane.jpg");
    let instructor3 = new instructor("Herb", "1004760", "./images/Herb.jpg");

    console.log(instructor1);

    instructor1.changeName("Harsimran");

    console.log("After name change " + instructor1.instructorName);

    instructor1.instructorImage.src= "../../Week07/Day03Demo01/images/NaitLogo.png";// Image Path
    
    let divContainer = document.querySelector("#InstructorInfo");
    console.log(divContainer);


    document.querySelector("#InstructorInfo").innerHTML =`<p>${instructor1.instructorName}</p>`;
    divContainer.appendChild(instructor1.instructorImage)
}

function ChangeName()
{
    console.log("Inside Change Name function");
    student.changeValues("Harsimranjot");

    document.querySelector("main").innerHTML = `${student.studentId}  ${student.studentName}`;
}

