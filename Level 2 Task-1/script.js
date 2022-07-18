function clearScreen() {
    document.getElementById("result").value="";
    }
function delChar() {
    var a = document.getElementById("result").value;
    a = a.slice(0,-1);
    document.getElementById("result").value = a;
}
    function display(value) {
    document.getElementById("result").value += value;
    }
    function calculate(){
    var p = document.getElementById("result").value;
    var q= eval(p);
    document.getElementById("result").value = q;
    }