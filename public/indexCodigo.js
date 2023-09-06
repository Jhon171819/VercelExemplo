const botaoT = document.getElementById("troca")
botaoT.addEventListener("click", async () => {
    const opcoes = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch("/",opcoes)
    responsemensagem = await response.json()
    document.getElementById("amostra").textContent = `${responsemensagem}`
    
})