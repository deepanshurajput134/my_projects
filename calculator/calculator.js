function pick(val){
    document.getElementById("inputbox").value += val;
}

function clr(){
    document.getElementById("inputbox").value = "";
}

function solve(){
    let x = document.getElementById("inputbox").value;
    let y = eval(x);
    document.getElementById("inputbox").value = y;

}