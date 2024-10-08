// function func(){

//     console.log("Name should be at least 5 character..");
    
// }


// function submitH(){
//     alert("Form is submitted...")
// }


const submitHandler = (e) =>{

    e.preventDefault();

    var inp = document.getElementById("inp")

    var name = document.getElementById("name")
    // console.log(name.value);

    var output = document.getElementById("output")


    var email = document.getElementById("email")
    var EmailErr = document.getElementById("EmailErr")
    if(email.value.length == "")
    {
        EmailErr.innerHTML = "Email is required.."
        EmailErr.style.color = "red"
    }
    else if(!email.value.includes("@"))
    {
        EmailErr.innerHTML = "Pls include @ in email.."
        EmailErr.style.color = "red"
    }else{
        EmailErr.innerHTML = ""
        
    }



    if(name.value.length == ""){
        output.innerHTML = "Name is required.."
        output.style.color = "red"
    }
    else if(name.value.length < 4)
    {
        // console.log("Name at least 3 characters required..");
        // output.innerHTML = "<font color='red'>*Name at least 4 characters required..</font>"
        output.innerHTML = "*Name at least 4 characters required.."
        output.style.color = "red"
        name.style.outline = "4px solid red"
        name.style.border = "none"
        inp.style.background = "red"
    }
    else{
        name.style.outline = "4px solid green";
        name.style.border = "none"
        inp.style.background = "green"
        output.innerHTML = ""
    }
    
    console.log("Name = ",name.value);
    console.log("Email = ",email.value);

    var user = {
        name : name.value,
        emial : email.value
    }
    
    console.log(user);
    

    // alert("form is submitted..")

    console.log("form is submitted..");
    
}