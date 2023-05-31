function addNum(){
    let x = parseInt( document.getElementById("num1").value);
    let y = parseInt( document.getElementById("num2").value);
    let z = x + y;
    console.log(z);
    document.getElementById("result").innerHTML +=  z;
}
