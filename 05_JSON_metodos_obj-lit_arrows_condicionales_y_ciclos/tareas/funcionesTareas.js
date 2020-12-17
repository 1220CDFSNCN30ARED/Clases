const fs = require('fs');

let funcionesTareas = {
    archivo: 'tareas.json',
    leerJ : function() {
        let stringTareas = fs.readFileSync(this.archivo ,'utf-8');
        return JSON.parse(stringTareas);
    },
    todasLasTareas: function(){
        let tareas = this.leerJSON();
        console.log('Mostrado todas las tareas')
        for (let i=0; i < tareas.length ; i++){
            console.log(tareas[i].titulo + ' - ' + tareas[i].estado);
        }
    },
    tareasIncompletas: function() {
        let tareas = this.leerJSON();
        console.log('Mostrado tareas incompletas')
        for (let i=0; i < tareas.length ; i++){
            if(tareas[i].estado != 'completado' ){
                console.log(tareas[i].titulo + ' - ' + tareas[i].estado);
            }
        }
    }

};

module.exports = funcionesTareas;