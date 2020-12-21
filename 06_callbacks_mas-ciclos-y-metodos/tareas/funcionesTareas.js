const fs = require('fs');

let funcionesTareas = {
    archivo: 'tareas.json',
    leerJSON: function() {
        let stringTareas = fs.readFileSync(this.archivo ,'utf-8');
        return JSON.parse(stringTareas);
    },
    escribirJSON: function (tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
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
    crearTarea(tituloTarea) {
        let tareas = this.leerJSON();
        tareas.push({titulo:tituloTarea,estado:'pendiente'});
        this.escribirJSON(tareas);
    },
    leerPorEstado(estado) {
        let tareas = this.leerJSON();
        console.log();
        console.log('Tareas ' + estado);
        console.log('------------------');
        let tareasFiltradas = tareas.filter(tarea => estado == tarea.estado);
        for ( let [index,tarea] of tareasFiltradas.entries()){
            console.log(index + 1 + '. ' + tarea.titulo + ' -> ' + tarea.estado);
        }
    }


};

module.exports = funcionesTareas;