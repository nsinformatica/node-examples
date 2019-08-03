const fatorial = require('./fatorial')

console.log('n-fatorial')
const argv = require('yargs').demandOption('num').argv


/*console.log(`Executando o script a partir do diretória ${process.cwd()}`)
process.on('exit', ()=>{
	console.log('script está prestes a terminar')
})*/

const num = argv.num
console.log(`o fatorial de ${num} é igual a ${fatorial(num)}`)

