const corpo = document.body

const input = document.getElementById("inp")
const botao = document.getElementById("botao")


const form = document.querySelector("form")


form.addEventListener("submit", function(event){
    event.preventDefault()
    var teste = input.value
    if (teste != ""){ 
        const div = document.createElement("div")
        div.style.display = "flex"
        div.style.gap = "10px"
        div.style.margin = "5px"
        const li = document.createElement("li")
        const ex = document.createElement("button")
        ex.innerHTML = "Remover"
        li.innerHTML = teste
        div.appendChild(li)
        div.appendChild(ex)
        corpo.appendChild(div)
        ex.addEventListener("click", function(){
            corpo.removeChild(div)
        })
        form.reset(input)
    }
})