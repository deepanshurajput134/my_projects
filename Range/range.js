function show(){
    var inputValue = document.getElementById("rangeBox").value;
    var headingText = document.getElementById("showText");
    headingText.style.fontSize = inputValue + "px";
    var z = document.getElementById("rangeshow");
    z.innerHTML = "Now your range is " + inputValue + " px"
}