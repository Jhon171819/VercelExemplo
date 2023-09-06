const botaoT = document.getElementById("post")
const botaoG = document.getElementById("get")
botaoT.addEventListener("click", async () => {
    const opcoes = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: 4, name: "item 7"})
    }
    const response = await fetch("/api/items",opcoes)
        .then(responsemensagem = await response.json())
        .then(document.getElementById("amostra").innerHTML = `${responsemensagem}`)
    
})
botaoG.addEventListener("click", async () => {
    const opcoes = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch("/api/items",opcoes)
        .then(responsemensagem = await response.json())
        .then(document.getElementById("amostra").innerHTML = `${responsemensagem}`)
    
})