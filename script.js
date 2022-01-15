const body = document.body
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const ol = document.querySelector("#ol")
const form = document.querySelector(".form")
let lastId = 0
let idDel = 0


function error(){
    const errorMessage = document.querySelector("#error-message")
    if (errorMessage) return

    const p = document.createElement("p")
    p.innerText = ("malumot yoq")
    p.id = "error-message"
    p.style.color = "red"
    p.style = "text-align: center; font-family: 'Roboto', sans-serif; margin-bottom: 10px; font-size: 20px;"
    
    form.appendChild(p)
}

function saqlash(value){
    if(value.trim() === "") return error();
    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = lastId
    checkbox.style = "display: inline; width: 25px;"
    const delBtn = document.createElement("button")
    delBtn.innerText = ("O'chirish")
    delBtn.style = "border: 1px solid #113A7E; padding: 5px; font-size: 20px; background-color: transparent; border-radius: 10px; color: #113A7E; position: absolute; right: 10px;"
    delBtn.id = lastId
    

    checkbox.addEventListener("click", function(event){
        if(event.target.checked){
            li.style = "text-decoration: line-through; color:green; display: flex; align-items: center; gap: 10px; font-size: 25px; margin-bottom: 20px"
        } else{
            li.style = "text-decoration: solid; color: black; display: flex; align-items: center; gap: 10px; font-size: 25px; margin-bottom: 20px"
        }
    })

    delBtn.addEventListener("click", function(){
        ol.removeChild(li)
    })

    li.style = "display: flex; align-items: center; gap: 10px; font-size: 25px; margin-bottom: 20px"
    li.innerText = value
    li.appendChild(checkbox)
    li.appendChild(delBtn)
    li.id = `list-${lastId}`
    ol.appendChild(li)
    input.value = ""
    lastId++
    idDel++
}

input.addEventListener("keypress", function(event){
    const errorMessage = document.querySelector("#error-message")
    if(errorMessage) form.removeChild(errorMessage)

    if(event.key === "Enter")saqlash(event.target.value)
})

btn.addEventListener("click", function(){
    const errorMessage = document.querySelector("#error-message")
    if(errorMessage) form.removeChild(errorMessage)
    saqlash(input.value)
})