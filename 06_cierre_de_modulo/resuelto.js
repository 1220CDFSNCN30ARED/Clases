// Ej 1
// Ver archivo autos.js


// Ej 2
/* requerir módulo autos */
// let autos = require('./autos')
// const concesionaria = {
//     /* completar */
//    autos: autos
   
// };

// Ej 3
// let base_de_autos = require('./autos');
// const concesionaria = {
//     /* completar */
//    autos: base_de_autos,
//    buscarAuto: function(patente) {
//      return this.autos.find(auto => auto.patente == patente) || null;
//    }
// };
// console.log(concesionaria.buscarAuto('JJK116'));
// console.log(concesionaria.buscarAuto('JJK336'));


// Ej 4

// let base_de_autos = require('./autos');
// const concesionaria = {
//     autos: base_de_autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente == patente) || null;
//     },
//     venderAuto: function(patente){
//         this.buscarAuto(patente).vendido = true
//     }
// };


// Ej 5
// let base_de_autos = require('./autos');
// const concesionaria = {
//     autos: base_de_autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente == patente) || null;
//     },
//     venderAuto: function(patente){
//         this.buscarAuto(patente).vendido = true
//     },
//     autosParaLaVenta: function(){
//         return this.autos.filter(auto => !auto.vendido);
//     }
// };


// Ej 6
// let base_de_autos = require('./autos');
// const concesionaria = {
//     autos: base_de_autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente == patente) || null;
//     },
//     venderAuto: function(patente){
//         this.buscarAuto(patente).vendido = true
//     },
//     autosParaLaVenta: function(){
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos:function(){
//         let paraVender = this.autosParaLaVenta();
//         return paraVender.filter(auto => auto.km <100);
//     }
// };
// console.log('Autos para la venta')
// console.log(concesionaria.autosParaLaVenta());
// console.log('Autos nuevos');
// console.log(concesionaria.autosNuevos());


// Ej 7
// let base_de_autos = require('./autos');
// const concesionaria = {
//     autos: base_de_autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente == patente) || null;
//     },
//     venderAuto: function(patente){
//         this.buscarAuto(patente).vendido = true
//     },
//     autosParaLaVenta: function(){
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos:function(){
//         let paraVender = this.autosParaLaVenta();
//         return paraVender.filter(auto => auto.km <100);
//     },
//     listaDeVentas(){
//        let autosVendidos =  this.autos.filter(auto=>auto.vendido);
//        return autosVendidos.map(auto=>auto.precio)
//     }
// };
// console.log(concesionaria.listaDeVentas());


// Ej 8
// let base_de_autos = require('./autos');
// const concesionaria = {
//     autos: base_de_autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente == patente) || null;
//     },
//     venderAuto: function(patente){
//         this.buscarAuto(patente).vendido = true
//     },
//     autosParaLaVenta: function(){
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos:function(){
//         let paraVender = this.autosParaLaVenta();
//         return paraVender.filter(auto => auto.km <100);
//     },
//     listaDeVentas(){
//        let autosVendidos =  this.autos.filter(auto=>auto.vendido);
//        return autosVendidos.map(auto=>auto.precio)
//     },
//     totalDeVentas(){
//         return this.listaDeVentas().reduce((ac,venta) => ac + venta,0);
//     }
// };
// console.log(concesionaria.totalDeVentas());

// Ej 9

// let base_de_autos = require('./autos');
// const concesionaria = {
//     autos: base_de_autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente == patente) || null;
//     },
//     venderAuto: function(patente){
//         this.buscarAuto(patente).vendido = true
//     },
//     autosParaLaVenta: function(){
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos:function(){
//         let paraVender = this.autosParaLaVenta();
//         return paraVender.filter(auto => auto.km <100);
//     },
//     listaDeVentas(){
//        let autosVendidos =  this.autos.filter(auto=>auto.vendido);
//        return autosVendidos.map(auto=>auto.precio)
//     },
//     totalDeVentas(){
//         return this.listaDeVentas().reduce((ac,venta) => ac + venta);
//     },
//     puedeComprar(auto,persona){
//       let cuota = auto.precio/auto.cuotas;
//       return persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > cuota;
//     }
// };


// let persona0 = {
// nombre: 'Juan',
// capacidadDePagoEnCuotas: 30000,
// capacidadDePagoTotal: 100000000
// };
// let persona = {
// nombre: 'Juan',
// capacidadDePagoEnCuotas: 100,
// capacidadDePagoTotal: 100000000
// };

// console.log(concesionaria.puedeComprar(concesionaria.autos[0],persona0));
// console.log(concesionaria.puedeComprar(concesionaria.autos[0],persona));


// Ej 10:

let base_de_autos = require('./autos');
const concesionaria = {
    autos: base_de_autos,
    buscarAuto: function(patente) {
        return this.autos.find(auto => auto.patente == patente) || null;
    },
    venderAuto: function(patente){
        this.buscarAuto(patente).vendido = true
    },
    autosParaLaVenta: function(){
        return this.autos.filter(auto => !auto.vendido);
    },
    autosNuevos:function(){
        let paraVender = this.autosParaLaVenta();
        return paraVender.filter(auto => auto.km <100);
    },
    listaDeVentas(){
       let autosVendidos =  this.autos.filter(auto=>auto.vendido);
       return autosVendidos.map(auto=>auto.precio)
    },
    totalDeVentas(){
        return this.listaDeVentas().reduce((ac,venta) => ac + venta);
    },
    puedeComprar(auto,persona){
      let cuota = auto.precio/auto.cuotas;
      return persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > cuota;
    },
    autosQuePuedeComprar(persona){
       return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona))
    }
};

let persona = {
nombre: 'Juan',
capacidadDePagoEnCuotas: 30000,
capacidadDePagoTotal: 100000000
};

console.log(concesionaria.autosQuePuedeComprar(persona));