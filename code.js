function namecheck() {
    var firstname = document.getElementById("firstname").value;
    if(firstname == ""){
        alert("You've submited an empty name, Please enter your name")  
      }else{
          alert(`Welcome to side hustle internship ${firstname}`)
      }

}

let namep = ["Ali", "Saheed", "Ibrahim", "Hameedah"]

namep.unshift("Aminah")

var num = namep.indexOf("Ibrahim")

document.write(Array.isArray(namep));

function loop() {
    let block = document.getElementById("loop")
    let numcode = document.getElementById("num")
    
    var numbercode = "";
    let numloop = "";

    for (let i = 0; i < 10; i++) {
        numbercode += `<div> ${i + 1} </div>`   
    }

    let count = 1;
    while (count < 20) {
        numloop += `<div> ${count} </div>`

        count++
    }          


    // // block.innerHTML = numbercode
    // // numcode.innerHTML = numloop

}
loop();
