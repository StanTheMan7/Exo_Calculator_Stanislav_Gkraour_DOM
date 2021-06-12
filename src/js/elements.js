/* -------------------------------------------------------------------------- */
/*// !                             Exo Calculator                             */
/* -------------------------------------------------------------------------- */


/* // todo --------------------------mes elements html -------------------------- */

let monBody = document.body;
let mySection = document.createElement('section');
monBody.appendChild(mySection)

let divContainer = document.createElement('div');
divContainer.setAttribute("class", 'divContainer');
monBody.appendChild(divContainer);
mySection.appendChild(divContainer);


let divDisplay = document.createElement('div');
divDisplay.setAttribute('id','divDisplay');
divContainer.appendChild(divDisplay);

let divBtn = document.createElement('div');
divBtn.setAttribute('class','divBtns');
divContainer.appendChild(divBtn);




let tab = ["1","2","3","*","4","5","6","+","7","8","9","-","C",".","=","/"]
let i = 0;
tab.forEach(element => {
    element = document.createElement('button')
    element.innerText = tab[i]
    divBtn.appendChild(element)
    element.setAttribute('class', 'mesBoutons')
    i++;

});


let btn1 = document.querySelectorAll('button')[14]
btn1.setAttribute('id', 'equal')



let allButtons = Array.from(document.getElementsByClassName("mesBoutons"));

allButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                divDisplay.innerText ='';
                break;
                case'.': 
                if(e.target.innerText == '.'){
                    divDisplay.innerText = 'error404'
                    alert('point is not available');
                }
                break;
                case '=' :
                    try{
                        divDisplay.innerText =eval(divDisplay.innerText);
                    } catch {
                        divDisplay.innerText ='Error!'
                    }
                    break;
            default: 
            divDisplay.innerText += e.target.innerText;
        }
    })
})
/* ----------------------------- // appendChild ----------------------------- */

// myBody.appendChild(mySection)
// mySection.appendChild(myDivContainer)
// myDivContainer.appendChild(toutLesBoutons)
// myDivContainer.appendChild(myDivDisplay)
// myDivDisplay.appendChild(display1)
// myDivDisplay.appendChild(display2)
// myDivDisplay.appendChild(tempResult)

// let tab = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*","C","="]

// let button ;
// toutLesBoutons.forEach(element =>{
//     element.innerHTML == '1' || '2' || '3'|| '4'|| '5'|| '6'|| "7"|| '8'|| '9'|| '0'){
//         button.classList('class', 'numbers')

// })






/* --------------------------- // to set attribute -------------------------- */
