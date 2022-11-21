let itens = document.querySelector('input#itens')
let res = document.querySelector('ul#res')


function incert () {
    if (String(itens.value).length != 0) {
        itens.focus()
         
        let lista = document.createElement('li')
        res.appendChild(lista)
        res.innerHTML += `${String(itens.value)}`
    } else {
        alert('Digite uma tarefa!')
    }
}

function deletar () {
    res.innerHTML = ''
   
}