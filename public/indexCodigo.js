const botaoT = document.getElementById("troca")
botaoT.addEventListener("click", async () => {
    const response = await fetch("/troca", => {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "message":"trocar a palavra" })
    });
    response = response.json()
    document.getElementById("amostra").textContent = `${response}`
    
})