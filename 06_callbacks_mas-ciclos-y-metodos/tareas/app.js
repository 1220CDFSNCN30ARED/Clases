/* APLICACION DE TAREAS */

// let tarea = {
//     titulo : 'Comprar mandarinas',
//     estado : 'pendiente'// pendiente, en proceso, completado
// };

// console.log(tarea);

// let tareas = [
//     {
//         titulo : 'Comprar verduras',
//         estado : 'pendiente'// pendiente, en proceso, completado
//     },
//     {
//         titulo : 'Comprar jamon',
//         estado : 'pendiente'// pendiente, en proceso, completado
//     },
//     {
//         titulo : 'Comprar asado',
//         estado : 'pendiente'// pendiente, en proceso, completado
//     }
// ];
// tareas.push(tarea);

// console.log(tareas[1].titulo);

// let tareasEnJson =JSON.stringify(tareas,null,' ');

// console.log(tareasEnJson);

// function todasLasTareas(tareas) {
//     console.log('Mostrado todas las tareas')
//     for (let i=0; i < tareas.length ; i++){
//         console.log(tareas[i].titulo + ' - ' + tareas[i].estado);
//     }
// };

// function tareasIncompletas(tareas){
//     console.log('Mostrado tareas incompletas')
//      for (let i=0; i < tareas.length ; i++){
//          if(tareas[i].estado != 'completado' ){
//              console.log(tareas[i].titulo + ' - ' + tareas[i].estado);
//          }
//     }
// }


// let tareas =  funcionesTareas.leerJSON();
// console.log(tareas);

// todasLasTareas(tareas);
// console.log();
// tareasIncompletas(tareas);

let funcionesTareas =  require('./funcionesTareas');
let accion = process.argv[2];

switch (accion) {
    case 'listar':
        funcionesTareas.todasLasTareas();
        break;
    case 'incompletas':
        funcionesTareas.tareasIncompletas();
        break;

    case 'crear':
        funcionesTareas.crearTarea(process.argv[3]);
        break;
    case 'filtrar':        
        funcionesTareas.leerPorEstado(process.argv[3]);
        break;
    default:
        console.log('Ingrese un comando, please!');
        break;
}