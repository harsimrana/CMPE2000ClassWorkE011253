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
    1. By creating a object literal
    2. Constructor function and using protype object

    */

    // First method
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

    document.querySelector("main").innerHTML = student.studentId +" "+ student.studentName;

    document.querySelector("main").innerHTML = `${student.studentId}  ${student.studentName}`;

    
}

function ChangeName()
{
    console.log("Inside Change Name function");
    student.changeValues("Harsimranjot");

    document.querySelector("main").innerHTML = `${student.studentId}  ${student.studentName}`;
}

