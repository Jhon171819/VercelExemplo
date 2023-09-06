const botaoT = document.getElementById("post")
const botaoG = document.getElementById("get")
const opcoes2 = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}
function get() {
    const response = await fetch("/api/items", opcoes2)
    responsemensagem = JSON.stringify(await response.json())
    document.getElementById("amostra").innerHTML = `${responsemensagem}`
}
botaoT.addEventListener("click", async () => {
    const opcoes = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: 4, name: "item 7"})
    }
    
    const response = await fetch("/api/items",opcoes)
    get()
    
})
botaoG.addEventListener("click", async () => {
    
    const response = await fetch("/api/items",opcoes)
    responsemensagem = JSON.stringify(await response.json())
    document.getElementById("amostra").innerHTML = `${responsemensagem}`
    
})