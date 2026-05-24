const githubInput = document.getElementById("github-input")

const buscarGithub= document.getElementById("buscar-github")

const avatar = document.getElementById("avatar")

const bio = document.getElementById("bio")

const seguidores = document.getElementById("seguidores")

const repos = document.getElementById("repos")

async function buscarPerfil(){

    try{
        const usuario = githubInput.value 

    const resposta = await fetch(
        `https://api.github.com/users/${usuario}` 
    )

     if(!resposta.ok){
        throw new error("usuario não encontrado")
    }

     const dados = await resposta.json()

      avatar.src = dados.avatar_url

      nome.innerText = dados.nome

      bio.innerText = dados.bio

       seguidores.innerText = 
       `seguidores: ${dados.followers}`

        repos.innerText = 
        `Rpositorios: ${dados.public_repos}`

    }catch{
     nome.innerText = "Usuario não encontrado"

     bio.innerText = ""

     seguidores.innerText = ""

     repos.innerText = ""

     avatar.src = ""
    }
    
}


buscarGithub.addEventListener("click", buscarPerfil)