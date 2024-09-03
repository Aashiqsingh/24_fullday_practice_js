const changeTxt = ()=>{

    var output = document.getElementById("output")
    // console.log(output.innerHTML);

    output.innerHTML = "Hello world...";
    output.style.backgroundColor = "red";
    output.style.color = "white";
    
}

const changeSize = ()=>{
    var image = document.getElementById("image");
    image.style.width = "300px"
    image.style.height = "300px"
}

const changeHref = ()=>{
   var btn = document.getElementById("btn");
   btn.innerHTML = "amazon"
   btn.setAttribute("href","https://www.amazon.com")
   btn.style.backgroundColor = "red"
}