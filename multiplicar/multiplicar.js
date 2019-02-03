const fs = require('fs');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (isNaN(base)) {
            reject(`la base: ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${base*i} \n`;
        }
        resolve(data)


    })



}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (isNaN(base)) {
            reject(`la base: ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) { reject(err); } else {
                resolve(`tabla-${base}`)
            }

        });

    })
}

module.exports = {
    listarTabla,
    crearArchivo,
}