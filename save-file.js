const fs = require ('fs')
const argv = require('yargs')
	.alias('f', 'filename')
	.alias('c', 'content')
	.demandOption('filename')
	.demandOption('content')
	.argv

fs.writeFile(argv.filename[2], argv.content[3], (error)=>{
	if(error) throw error
	console.log(`Arquivo ${argv.filename[2]} foi salvo com sucesso.`)
})

