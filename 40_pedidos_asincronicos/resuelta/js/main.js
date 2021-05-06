
window.onload = () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);

    if(localStorage.getItem('calificaciones') !== null) {
        const link = document.getElementById("favoritas");
        link.innerHTML = '<a href="favoritas.html">Favoritas</a>';
    }

    // Aqui debemos agregar nuestro fetch
    let url = "http://localhost:3031/api/movies";
    fetch(url)
        .then(response => response.json())
        .then(peliculas => {
            let data = peliculas.data;
            data.forEach((movie) => {
                const card = document.createElement("div");
                card.setAttribute("class", "card");
                
                const h1 = document.createElement("h1");
                h1.textContent = movie.title;
                
                const p = document.createElement("p");
                p.textContent = `Rating: ${movie.rating}`;
                
                const duracion = document.createElement("p");
                duracion.textContent = `Duración: ${movie.length}`;
                
                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
                if (movie.genre !== null) {
                    const genero = document.createElement("p");
                    genero.textContent = `Genero: ${movie.genre.name}`;
                    card.appendChild(genero);
                }
                const favoritas = document.createElement("p");
                favoritas.innerHTML = `<div class="ec-stars-wrapper">&#9733;</div>`;
                favoritas.addEventListener("click",function(e){
                    e.preventDefault()
                     if(localStorage.calificaciones){
                        let arr = localStorage.calificaciones.split(',');
                        arr.push(movie.id)
                        localStorage.calificaciones = arr;
                    } else {
                        localStorage.setItem('calificaciones',movie.id)
                    }
                })
                card.appendChild(duracion);
                card.appendChild(favoritas);
            });
        });

};
