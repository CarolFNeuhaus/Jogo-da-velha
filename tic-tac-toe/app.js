const gameBoard = document.getElementById('gameBoard')
const infoDisplay = document.querySelector("#info")
let titulo = document.getElementById('titulo')
let telaFinal = document.getElementById('telaFinal')

let go 
let i
///let podeRodar = false

function chooseCircle (){
    go = "X"
    //podeRodar = true
}
function chooseCross (){
    go = "O"
    //podeRodar = true
}

let index = document.getElementById('gameBoard')

index.addEventListener('click' , addGo)
//index.addEventListener('mouseover', tip)

/*function tip(e){
    div = e.target.firstElementChild
        id = div.id


        if(go == "X"){
            i = "cruzTip"
        } else if (go == "O"){
            i = "circuloTip"
        }

        let p = document.getElementById("" + (id + 10))
        p.classList.add(i)
        document.getElementById("" + (id + 10)).innerText = go
        p.onmouseleave = (go==null)
}*/

function addGo(e){ 
   // if (podeRodar){
        //pega id do bloco clicado       
        div = e.target.firstElementChild
        id = div.id

        go = go === "X" ? "O" : "X"
        if(go == "X"){
            i = "cruz"
        } else if (go == "O"){
            i = "circulo"
        }

        let p = document.getElementById("" + (id + 10))
        p.classList.add(i)
        document.getElementById("" + (id + 10)).innerText = go
        e.target.removeEventListener('click', addGo)
    //}
checkScore()

}

function checkScore(){
    const allSquares = document.querySelectorAll('.square')
    const winningCombos = [
    /*horizontal*/ [0,1,2], [3,4,5], [6,7,8],
    /*vertical*/ [0,3,6], [1,4,7], [2,5,8],   
    /*diagonal*/ [0,4,8], [2,4,6]
    ]

//      ? = o ponto de interrogação serve para verificar se existe uma 'firstChild' e se ela contém uma classe chamada 'circle'
//let mudaCor =[]
    winningCombos.forEach(array => {
       let circleWins = array.every(cell => 
            allSquares[cell].firstElementChild.classList.contains('circulo'))

       
       if (circleWins) {   
        infoDisplay.textContent = "O ganhou!"
        index.removeEventListener('click', addGo)
        mensagemFinal()
        //interrompe o loop
        return
       }
    })
 /*   allSquares.forEach(array => {
        mudaCor.push(array.every(cell => 
            allSquares[cell].firstElementChild.classList.contains('circulo')))
    });
    
    console.log(mudaCor)
*/
  /*bah()
    function bah (){

        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
            }
        }

        for (let condition of winningCombos) {
            let [a, b, c] = condition
            console.log(condition)
            
            let sim = condition.forEach(element => element.firstElementChild.classList.contains('circulo'));



            if (sim){
                return [a,b,c]
            }
        }
    }*/


    winningCombos.forEach(array => {
        let crossWins = array.every(cell => allSquares[cell].firstElementChild.classList.contains('cruz'))

        if (crossWins) {
         infoDisplay.textContent = "X ganhou!"
         index.removeEventListener('click', addGo)
         mensagemFinal()
         //interrompe o loop
         return
        }
     })
}

function mensagemFinal(){
    titulo.style.display='none'
    gameBoard.style.display='none'
    telaFinal.style.display='inline'
}







