import React, { Component } from 'react';

import MovieList from './MovieList';

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			moviesList:[]
		}
	}


	getMovies(){
        fetch('/api/movies').then(r=>r.json()).then(respuesta=>{
            this.setState({moviesList:respuesta.data})
        })
    }

    componentDidMount(){
        this.getMovies();
    }


	render() { 
		return ( 

			<React.Fragment>
				<div className="container-fluid">
						 {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</tfoot>
									<tbody>
										{
											this.state.moviesList.map((movie,i) => {
												return <MovieList key={i} {...movie} />
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
				</div>
				    
        	</React.Fragment>
    	)
	}
}
 
export default Movie;
