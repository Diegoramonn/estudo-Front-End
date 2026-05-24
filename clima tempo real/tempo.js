
const cidadeInput = document.getElementById("cidade-input")

const buscarClima = document.getElementById("buscar-clima")

const cidade = document.getElementById("cidade")

const temperatura = document.getElementById("temperatura")

const descricao = document.getElementById("descricao")

const icone = document.getElementById("icone")

const API_KEY = "344938979a39e87f01c488ddf1b351d4"


async function buscarTempo(){

    const loading = document.getElementById("loading")


    try{

        loading.style.display = "block"
      
        const valorCidade = cidadeInput.value
        

        const resposta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${valorCidade}&appid=${API_KEY}&units=metric&lang=pt_br`

        )


        if(!resposta.ok){
            throw new Error("Erro")
        }

        const dados = await resposta.json()

        cidade.innerText = dados.name

        loading.style.display = "none"


        temperatura.innerText =
        `Temperatura: ${dados.main.temp}°C`

        descricao.innerText =
        dados.weather[0].description

        icone.src =
        `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`

        

    }catch(error){

        cidade.innerText = "Cidade não encontrada"

        temperatura.innerText = ""

        descricao.innerText = ""

        icone.src = ""

        
    }
}

buscarClima.addEventListener("click", buscarTempo)