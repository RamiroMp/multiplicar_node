const { argv } = require('./config/yargs')
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let colors = require('colors');

let comando = argv._[0]



switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(out => { console.log(out.green) })
            .catch(console.log)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(arch => console.log('archivo creado: '.red + arch))
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