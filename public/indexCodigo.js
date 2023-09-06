const botaoT = document.getElementById("troca")
botaoT.addEventListener("click", async () => {
    const opcoes = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch("/",opcoes)
        .then(responsemensagem = await response.json())
        .then(document.getElementById("amostra").innerHTML = `${responsemensagem}`)
    
})