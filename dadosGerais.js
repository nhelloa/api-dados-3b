const url= 'https://raw.githubusercontent.com/nhelloa/api-2024-helloa/refs/heads/main/esportes_mais_praticados.sjon'

async function vizualizando(){
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)  
    const cursos = Object.keys(dados)
    const cursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados) [0]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico_texto')

    paragrafo.innerHTML = 'Nesta pesquisa, buscou-se compreender qual o esporte mais praticado pela população brasileira. 0 ${esporteMaisVotado} foi o esporte mais votado entre todos, com um total de ${quantidaDedeVotos} votos, em uma pesquisa que teve um total de um milhão de participantes.'

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)


    console.log(cursoMaisVotado)
    console.log(quantidadeDeVoto)

}
vizualizaInfo()