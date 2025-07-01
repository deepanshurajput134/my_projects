
function run(){
    var code = document.getElementById("code").value;
    var result_box = document.getElementById("result");
    result_box.innerHTML = code;
    var code_box = document.getElementById("code_box");
    code_box.style.display = "none"
    var result_box = document.getElementById("result_box");
    result_box.style.display = "block";
    var btn = document.getElementById("rune_btn");
    btn.style.display = "none"
    var result_btn = document.getElementById("icone");
    result_btn.style.display ="block";
};

function RETURN(){
    var return_box =  document.getElementById("result_box");
    return_box.style.display = "none"
    var return_btn =  document.getElementById("icone");
    return_btn.style.display = "none"

    var code_box =  document.getElementById("code_box");
    code_box.style.display = "block"
    var run_btn =  document.getElementById("rune_btn");
    run_btn.style.display = "block"
}
   