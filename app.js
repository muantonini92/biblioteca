//pegar o input da usuária
// se sim, mostrar cat e perguntar qual cat deseja
// se não, finalizar o algoritmo

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    const categoriasOrdenadas = livros.map (livro => `${livro.id}. ${livro.categoria}`)
    console.log(categoriasOrdenadas)

    const entradaCategoria = readline.question('Qual a categoria escolhida?')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} else {
    console.log('OK. Tenha um bom dia!')
}

