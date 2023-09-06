document.addEventListener('DOMContentLoaded', () => {
    const somarB = document.getElementById("somar");
    const multB = document.getElementById("mult");
    const subB = document.getElementById("sub");
    const divB = document.getElementById("div");
    const url = "api"
    const opcoes2 = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    async function get(operacao) {
        const response = await fetch(`api/${operacao}`, opcoes2)
        responsemensagem = JSON.stringify(await response.json())
        document.getElementById("amostra").innerHTML = `${responsemensagem}`
    }

    function pegarValores() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    return { valor1, valor2 };
    }
    somarB.addEventListener('click', async () =>{
        const valores = pegarValores(); // Obtenha os valores dos campos aqui
        const opcoes = {
            method: 'POST',
            
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores) // Use os valores obtidos aqui
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch(url + '/adi', opcoes)
        const data = JSON.stringify(await response.json())
        document.getElementById("amostra").innerText = `${data}`
        get("adi")
        
    });

    multB.addEventListener('click', async () =>{
        const valores = pegarValores();
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores)
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch(url + '/mult', opcoes)
        get("mult")
    });

    subB.addEventListener('click', async () =>{
        const valores = pegarValores();
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores)
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch(url + '/sub', opcoes)
        get("sub")
       
    });

    divB.addEventListener('click', async () =>{
        const valores = pegarValores();
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(valores)
        };

        console.log(valores);
        console.log(opcoes);
        
        const response = await fetch(url + '/divs', opcoes)
        get("divs")
    });
})



function modoClaro() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("corpo").style.color = "black";
}

function modoEscuro() {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("corpo").style.color = "white";
}