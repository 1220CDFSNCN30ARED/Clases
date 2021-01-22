# Medidas Relativas
Las medidas relativas son aquellas que tienen en cuenta el contexto donde se encuentran. 


## Porcentajes
Cualquier medida expresada en porcentaje siempre estará relacionada con la medida (en ese mismo eje) del elemento padre que la contiene. 

```css
.elementoContenedor { width: 300px }
.elementoInterior { width: 50% } // Será 150px
```

## Em y Rem

Los **ems** son siempre **relativos al elemento padre**. Tomarán como valor de referencia la propiedad font-size.
```css
p { font-size: 1.5em } 
   /* 16px * 1.5 = 24px */
```

Los **rems** funcionan muy parecido a los ems, con la diferencia de que siempre tomarán de base el **tamaño de font size del elemento <html>**.

```html
<html>  → font-size: 16px
    <body>  → font-size: 2rem → 16px * 2 → 32px
        <div>  → font-size: 3rem → 16px * 3 → 48px
            <p>  → font-size: 1rem → 16px
                <strong>Hola!</strong>  → font-size: 0.5rem → 16px * 0.5 → 8px
            </p>
        </div>
    </body>
</html>
```

## vw y vh
Son medidas releativas al tamaño del viewport

**vw** o viewport width es relativo al ancho total del viewport.
**vh** o viewport height es relativo al alto total del viewport.

```css
div {
    width: 25vw; // 25% del ancho disponible
    height: 50vh; // 50% del alto disponible
}
```