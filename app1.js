const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'

        }
    })
    .command('crear', 'guarda en un archivo la tabla de multiplicar ', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'

        }
    })
    .help()
    .argv;
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0]



switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log)
            .catch(console.log)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(arch => console.log(`archivo creado: ${arch}`))
            .catch(console.log)
        break;

    default:
        console.log('comando no reconocido');
        break;
}

//let base = '7';

// obtener datos de consola


let argv2 = process.argv
    //console.log(argv2);
    /*let parametro = argv2[2];
    let base = parametro.split('=')[1]*/

//console.log(argv);
//console.log('base', argv.base);
//console.log('limite', argv.limite);



/*let parametro = argv2[2];
let base = parametro.split('=')[1]*/



/*crearArchivo(base)
    .then(arch => console.log(`archivo creado: ${arch}`))
    .catch(console.log)*/