function getdata(){


    var data = document.getElementById("data");
    // console.log(data.value);
    var response = data.value;

    if(response === "square"){
        var square = document.getElementById("square");
        square.style.height = "200px"
        square.style.width = "200px"
        square.style.border = "5px solid"
    }
    else if(response === "circle"){
        var circle = document.getElementById("circle");
        circle.style.height = "200px"
        circle.style.width = "200px"
        circle.style.borderRadius = "50%"
        circle.style.border = "5px solid"
    }


    console.log(Math.round(5.81));
    console.log();
    
    

}