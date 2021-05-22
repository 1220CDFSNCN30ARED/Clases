import React, { Component } from 'react';
import Genre  from './Genre';

class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            genresList: [],
            fondoCaja: ''
        }
    }

    getGenres(){
        fetch('/api/genres').then(r=>r.json()).then(respuesta=>{
            this.setState({genresList:respuesta.data})
        })
    }

    componentDidMount(){
        this.getGenres();
    }

    toggleFondo () {
        // if(this.state.fondoCaja === ''){
        //     this.setState({fondoCaja:'bg-secondary'})
        // }else {
        //     this.setState({fondoCaja:''})
        // }
        let fondo = document.querySelector('.colorFondo');
        fondo.classList.toggle("bg-secondary");
     
    }
    render() { 
        return ( 
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.toggleFondo} >Genres in Data Base</h6>
                        </div>
                        <div className={`card-body colorFondo ${this.state.fondoCaja}`}>
                            <div className="row">
                                {
                                    this.state.genresList.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>           
            </React.Fragment>
        );
    }
}
 
export default GenresInDb;







