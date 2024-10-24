const url= 'https://raw.githubusercontent.com/nhelloa/api-2024-helloa/refs/heads/main/esportes_mais_praticados.sjon'

async function vizualizando(){
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)  
    const cursos = Object.keys(dados)
    const cursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados) [0]

    console.log(cursoMaisVotado)
    console.log(quantidadeDeVoto)

}
 
vizualizaInfo()