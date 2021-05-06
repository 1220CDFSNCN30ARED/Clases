window.onload = () => {
    let url = 'http://localhost:3031/api/movies/'
    let query = new URLSearchParams(location.search);
    
    if(query.has('peliculaId')){
        /* EDITAR PELICULA */
        let idPelicula = query.get('peliculaId');
        // console.log(idPelicula)
        document.querySelector("#crearPelicula").style.display = "none"
        /* TRAIGO LA PELICULA A EDITAR */
        fetch(url + idPelicula)
            .then(r=>r.json())
            .then(movie => {
                // console.log(movie.data)
                document.getElementById('title').value = movie.data.title
                document.getElementById('rating').value = parseFloat(movie.data.rating)
                document.getElementById('awards').value = parseInt(movie.data.awards)
                document.getElementById('release_date').value = moment(movie.data.release_date).format('YYYY-MM-DD')
                document.getElementById('length').value = parseInt(movie.data.length)
                document.getElementById('genre_id').value = parseInt(movie.data.genre_id)
            })
        
        document.getElementById("editarPelicula").addEventListener("click", function(e){
            e.preventDefault()
            let formData = {
                title: document.getElementById("title").value, 
                rating: document.getElementById("rating").value,
                awards: document.getElementById("awards").value,
                release_date: document.getElementById("release_date").value,
                length: document.getElementById("length").value,
                genre_id: document.getElementById('genre_id').value
            }
            // console.log(formData)
            fetch(`${url}update/${idPelicula}`,{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            }).then(r=>r.json()).then(respuesta=>{
                console.log(respuesta)
                alert('Peli guardada!')
            })

        })

        document.getElementById("borrarPelicula").addEventListener("click", function(e){
            e.preventDefault()
            if(confirm('Esta seguro que quiere borrar esta pelicula?')){

                fetch(`${url}delete/${idPelicula}`,{
                    method:"DELETE"
                }).then(r=>r.json()).then(respuesta=>{
                    console.log(respuesta)
                    alert('Peli borrada!')
                })
            }
        })

    } else {
        /* CREAR PELICULA */
        document.querySelector("#editarPelicula").style.display = "none"
        document.querySelector("#borrarPelicula").style.display = "none"

        
        document.getElementById("crearPelicula").addEventListener("click", function(e){
            e.preventDefault();

             let formData = {
                title: document.getElementById("title").value, 
                rating: document.getElementById("rating").value,
                awards: document.getElementById("awards").value,
                release_date: document.getElementById("release_date").value,
                length: document.getElementById("length").value,
                genre_id: 5
            }
            // console.log(formData)
            fetch(`${url}create`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            }).then(r=>r.json()).then(respuesta=>{
                console.log(respuesta)
                alert('Peli creada!')
            })
        })
    };


   


    


}