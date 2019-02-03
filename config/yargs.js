const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'

    }

}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'guarda en un archivo la tabla de multiplicar ', opt)
    .help()
    .argv;


module.exports = {
    argv
}