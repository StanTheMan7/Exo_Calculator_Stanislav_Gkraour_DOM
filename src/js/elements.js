/* -------------------------------------------------------------------------- */
/*// !                             Exo Calculator                             */
/* -------------------------------------------------------------------------- */


/* // todo --------------------------mes elements html -------------------------- */

let myBody = document.querySelector('body');
let mySection =  document.createElement('section');
let myDivContainer = document.createElement('div');
let myDivDisplay = document.createElement('div');
let toutLesBoutons = document.createElement('div');
let myDisplay = document.createElement('div')


myBody.appendChild(mySection)
mySection.appendChild(myDivContainer)
myDivContainer.appendChild(myDivDisplay)


let tab = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*","C","="]


tab.forEach(element => {
    let button = document.createElement('button')
    button.innerHTML = element
    myDivContainer.appendChild(button)
    button.setAttribute("class", 'buttons')
});

/* ----------------------------- // appendChild ----------------------------- */




/* --------------------------- // to set attribute -------------------------- */




console.log(myBody);