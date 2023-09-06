const botaoT = document.getElementById("troca")
botaoT.addEventListener("click", async () => {
    const opcoes = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    }
    const response = await fetch("/",opcoes)
    responsemensagem = await response.json()
    document.getElementById("amostra").textContent = `${responsemensagem}`
    
})