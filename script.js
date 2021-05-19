let nsorte = [document.getElementById('n1'), document.getElementById('n2'), document.getElementById('n3'), 
    document.getElementById('n4'), document.getElementById('n5'), document.getElementById('n6')]

let nresultado = [document.getElementById('r1'), document.getElementById('r2'), document.getElementById('r3'), 
    document.getElementById('r4'), document.getElementById('r5'), document.getElementById('r6')]

let resultado = document.getElementById('raposta')
divresultado = document.getElementById('nresultado')
botao= document.getElementById('btn')

function reload(){
    window.location.reload()
}
let acertos = 0
function apostar() {
    const sorteados = []
    for (i=0; i<6; i++){
        nsorte[i] = nsorte[i].value
        while (sorteados.length < 6){
                let numRandom = parseInt(Math.random()*61)
            if(sorteados.indexOf(numRandom) == -1){
                sorteados.push(numRandom)
            }
        }  
        nresultado[i].value = sorteados[i]
    }
    const sorte = nsorte.map((value) => {
        return value
    })
    comparar()
    botao.setAttribute("hidden", "hidden")
    resultado.innerHTML = `Você acertou ${acertos} números`
    divresultado.style.visibility = 'visible'
}
function comparar(){
    for (id1=0; id1<6; id1++){        
        for(idx=0; idx<6; idx++){
            if(nsorte[id1] == nresultado[idx].value){
                acertos++ 
            }
        }
    }
}
