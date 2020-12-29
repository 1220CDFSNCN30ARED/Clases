//Retoma de conceptos

// condicionales (If ternario, Switch)
if(num1 < 20){
   console.log('<20');
} else if (num1 >= 20 && num1 < 30){
   console.log('> 20 y < 30');
} else {
   console.log('>=30');
}

num1 < 20 ? console.log('<20') : num1 >= 20 && num1 < 30 ? console.log('>20 y <30') : console.log('>=30'); //Mostrar como funciona el ternario y como rapidamente se puede volver una mala práctica.

switch(num1){
   case 20:
      console.log('El número es 20');
      break;
   case 21:
   case 22:
      console.log('El número es 20');
}

// Objetos literales

// JSON

// Arrow Function


// Ciclos I 
num2 = 1
while (num2 > 0){
   console.log('num2 vale ahora: ', num2);
   num2 --;
}

