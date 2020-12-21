// Callbacks foreach map filter reduce push pop shift unshift

let urls = [
    "www.google.com",
    "www.yahoo.com",
    "www.youtube.com",
    "www.instragram.com"
]; 

function dateVuelta(urls){
    return urls.map(url => url.split('').reverse().join(''));
};

console.log(dateVuelta(urls));


// ["http://www.google.com","http://www.yahoo.com","http://www.youtube.com"]

// function agregarHttp(urls){
    
//     // for(let i=0; i<urls.length;i++){
//     //     resultado.push("http://" + urls[i]);
//     // }

//     // let resultado = [];

//     // urls.forEach(function(url){
//     //     resultado.push('http://' + url );
//     // });
//     // return urls.forEach(url => resultado.push('http://' + url ));

//     // for (url of urls){
//     //     resultado.push('http://' + url );
//     // }
//     // return resultado;

//     return urls.map(url=> 'http://' + url + '/');

// }

// function agregarHttps(urls){
//     return urls.map(url=> 'https://' + url + '/');
// }

// function contarCaracteres(urls){
//     return urls.map(url=> url.length);
// }





// let urlsArregladas = agregarHttp(urls);
// let urlsArregladasConHttps = agregarHttps(urls);
// let caracteresDeUrls = contarCaracteres(urls);



// console.log(urls);
// console.log();
// console.log(urlsArregladas);
// console.log();
// console.log(urlsArregladasConHttps);
// console.log();
// console.log(caracteresDeUrls);



function agregarHttp(url){
    return 'http://' + url + '/';
}

function agregarHttps(url){
    return 'https://' + url + '/';
}

function contarCaracteres(url){
    return  url.length;
}

function procesar(urls,func){
    return urls.map(url => func(url))
}

console.log(procesar(urls,agregarHttp));
console.log(procesar(urls,agregarHttps));
console.log(procesar(urls,contarCaracteres));

function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}

function calculadora(num1, num2, operacion){
    return operacion(num1,num2);
};

console.log(calculadora(2,3,sumar));
console.log(calculadora(12,4,restar));


// Metodos de array
    // forEach
    // For Of

    //For In

// Rest
