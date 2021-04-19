window.addEventListener('load', () => {
    console.log("Js connected");
    const buttons = document.querySelectorAll('.button');
    let equationAreaZone = document.getElementById("equationAreaZone");
    let equalSign = document.getElementById("equalSign");
    let clearButton = document.getElementById("clear");
    let equation = "";


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log(button.value);
            /* if (equationAreaZone.length >= 40)
            {
                return;
            }
            else{
                equationAreaZone.innerHTML += button.value;
                equation += button.value;
            } */
            equationAreaZone.innerHTML += button.value;
            equation += button.value;
        })
    })

    equalSign.addEventListener('click', () => {
        try{
            equationAreaZone.innerHTML = eval(equation);
        }
        catch{
            equationAreaZone.innerHTML = "Error";
        }

    })

    clearButton.addEventListener('click', () =>{
        equationAreaZone.innerHTML = "";
        equation = "";
    })

});