window.addEventListener('load', () => {
    console.log("Js connected");
    const buttons = document.querySelectorAll('.button');
    let equationAreaZone = document.getElementById("equationAreaZone");
    let equalSign = document.getElementById("equalSign");
    let clearButton = document.getElementById("clear");
    let clearSymbolButton = document.getElementById("clearSymbol");
    let equation = "";


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (equation.length >= 60)
            {
                return;
            }
            else{
                equationAreaZone.innerHTML += button.value;
                equation += button.value;
            } 
        })
    })

    equalSign.addEventListener('click', () => {
        try{
            equationAreaZone.innerHTML = eval(equation);
            equation = eval(equation);
        }
        catch{
            equationAreaZone.innerHTML = "Error";
        }

    })

    clearButton.addEventListener('click', () =>{
        equationAreaZone.innerHTML = "";
        equation = "";
    })

    clearSymbolButton.addEventListener('click', () =>{
        equation = Array.from(equation);
        equation.pop();
        equationAreaZone.innerHTML = equation.join("");
    })
});