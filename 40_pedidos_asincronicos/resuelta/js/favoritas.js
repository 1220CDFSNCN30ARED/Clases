window.onload = () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);
    
    // Aqui debemos agregar nuestro fetch
    
    if(localStorage.calificaciones){
        let arr = localStorage.calificaciones.split(',');
        let favoritas = Array.from(new Set(arr))
        favoritas.forEach((id) => {
            fetch(`http://localhost:3031/api/movies/${id}/`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                let movie = response.data;
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
                    card.appendChild(duracion);
               
            })
            // console.log(arr,favoritas);
            
        })
        
    }

}