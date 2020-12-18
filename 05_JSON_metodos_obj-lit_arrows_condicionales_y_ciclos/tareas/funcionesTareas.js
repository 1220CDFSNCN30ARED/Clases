const fs = require('fs');

let funcionesTareas = {
    archivo: 'tareas.json',
    leerJSON: function() {
        let stringTareas = fs.readFileSync(this.archivo ,'utf-8');
        return JSON.parse(stringTareas);
    },
    todasLasTareas: function(){
        let tareas = this.leerJSON();

        console.log();    
        console.log('Listado de tareas');
        console.log('----------------');

        for (let i=0; i < tareas.length ; i++){
            console.log(i+1 +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }

    },
    tareasIncompletas: function() {
        let tareas = this.leerJSON();
        console.log();
        console.log('Mostrado tareas incompletas')
        console.log('---------------------------');
        for (let i=0; i < tareas.length ; i++){
            if(tareas[i].estado != 'completado' ){
                console.log(i+1 +'. ' + tareas[i].titulo + ' -> ' + tareas[i].estado);
            }
        }
    },


};

module.exports = funcionesTareas;