# Modelo de Cajas
En html todos los elementos son cajas

Cada elemento en HTML es una caja, y esas cajas se componen de márgenes (margin), bordes (border), relleno (padding) y finalmente el contenido (content).

## Width y Height
Definen el ancho y el alto de la caja
```css
div {
    width: 130px;
    height: 120px;
}
```

## Padding
Es el espacio de relleno que podemos agregar entre el **contenido** del **elemento** y su **borde**.

```css
div {
    /* Un valor se aplica a los 4 lados de la caja */
    padding:30px; 
}

div {
    /* Con dos valores el 1° se aplica arriba y abajo y el 2° a los lados de la caja */
    padding:12px 20px; 
}


div {
    /* Con tres valores el 1° se aplica arriba,el 2° a los lados y el 3° abajo de la caja */
    padding:12px 20px 18px; 
}

div{
    /*  Con cuatro valores se aplican arriba,derecha, abajo e izquierda*/
    padding: 12px 15px 18px 21px;
}
```

# Border
Se puede definir el estilo el espesor y el color
El estilo de línea puede ser solid, dotted, dashed o double.
```css
 div { border: solid 3px yellow }
```

# Margin
Hace referencia al margen exterior del elemento.
```css
div {
    /* Se aplican las mismas reglas de agrupacion que con padding */
    margin:12px; 
}

```

# Box Sizing
Lo mas comun es asignarle box-sizing:border-box para facilitar el calculo de los tamaños de caja
```css
* { box-sizing: border-box }
```


