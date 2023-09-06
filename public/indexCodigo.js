const botaoT = document.getElementById("troca")
botaoT.addEventListener("click", async () => {
    const opcoes = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "message":"trocar a palavra" })
    }
    const response = await fetch("/",opcoes);
    response = response.json()
    document.getElementById("amostra").textContent = `${response}`
    
})