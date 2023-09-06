const botaoT = document.getElementById("troca")
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