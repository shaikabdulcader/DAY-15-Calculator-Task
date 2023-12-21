let outputBox = document.getElementById("output-box");

function display(num){
    outputBox.value += num;
}
function Calculate(){
    try{
        outputBox.value = eval(outputBox.value);
    }
    catch(err){
        alert("Invalid Input")
    }
}
function Clear(){
    outputBox.value = "";
}
function del(){
    outputBox.value = outputBox.value.slice(0,-1);
}