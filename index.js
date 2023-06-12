const produtos = [
    {nome: "Pimenta de Cheiro", code: 384},
    {nome: "Pimentão Amarelo", code: 142},
    {nome: "Tangerina murgote", code: 128},
    {nome: "Pepino verde", code: 160},
    {nome: "Pimentão verde", code: 129},
    {nome: "Repolho verde", code: 130},
    {nome: "Tomate paulista", code: 164},
    {nome: "Pera", code: 84},
    {nome: "Pesssego", code: 177},
    {nome: "Pimentão Vermelho", code:143},
    {nome: "Kiwi", code:357},
    {nome: "Repolho Roxo", code:131},
    {nome: "Tomate Cereja", code:656},
    {nome: "Abacate Nacional", code: 190},
    {nome: "Banana Pacovan", code:159},
    {nome: "Batata Comum", code:117},
    {nome: "Batata Bolinha", code: 1456},
    {nome: "Brocolis Ninja", code: 262},
    {nome: "Cenoura", code: 120},
    {nome: "Coco seco", code: 1199},
    {nome: "Jerimum Regional", code: 234},
    {nome: "MAracuja Rogional", code: 167},
    {nome: "Macaxeira", code: 151},
    {nome: "Mamão", code: 224},
    {nome: "Abacaxi", code: 8767},
    {nome: "Alface", code: 6453},
    {nome: "Banana Prata", code: 156},
    {nome: "Berinjela", code: 155},
    {nome: "Cara", code: 162},
    {nome: "Cheiro verde", code: 2956},
    {nome: "Couve Regional", code: 9569},
    {nome: "Laranja", code: 122},
    {nome: "Melancia", code: 561},
    {nome: "Manga Rosa", code: 150},
    {nome: "Mangarataia", code: 528},
    {nome: "Abobrinha Regional", code: 161},
    {nome: "Ameixas Frescas", code: 114},
    {nome: "Batata Doce", code: 118},
    {nome: "Beterraba", code:115},
    {nome: "Cebola Comum", code: 119},
    {nome: "Cebola Roxa", code: 189},
    {nome: "Limão Regional", code: 123},
    {nome: "Maçã Fuji", code: 51},
    {nome: "Maçã Verde", code: 619},
    {nome: "Maçã Red", code: 146},
    {nome: "Melão Amarelo", code: 124},
]

/* Acessando elementos  */
const inputSearch = document.querySelector('#search-input')
const searchButton = document.querySelector('#btn-search')
const resultFinal = document.querySelector("#result-prod") 

/* Fazendo a busca */
searchButton.addEventListener('click', () => {
    let codeProduto = inputSearch.value

    const resultado = produtos.filter(produto => {
        return produto.code == codeProduto
    })

    exibirProduto(resultado)
})

/* Exibindo Resultado Final */
function exibirProduto(prod){
    prod.forEach(element => {
        resultFinal.value = element.nome
    });
}

