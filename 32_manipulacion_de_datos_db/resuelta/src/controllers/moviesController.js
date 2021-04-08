const db = require('../database/models');
const sequelize = db.sequelize;
const moment = require('moment');

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, 
    add: function (req, res) {
        res.render('moviesAdd');  
    },
    create: async function (req, res) {
       await db.Movie.create({...req.body});
       res.redirect('/movies');
    },
    edit:  async function(req, res) {
       let Movie = await db.Movie.findByPk(req.params.id);

         let MovieToEdit = {
            id: Movie.id,
            title: Movie.title,
            rating: Movie.rating,
            length: Movie.length,
            awards: Movie.awards,
            release_date: moment(Movie.release_date).format('YYYY-MM-DD')
         };

        res.render('moviesEdit',{Movie:MovieToEdit});
    },
    update: function (req,res) {
        let movieId = req.params.id;
        db.Movie
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    delete: function (req, res) {
        let movieId = req.params.id;
        db.Movie
        .findByPk(movieId)
        .then(Movie => {
            return res.render('moviesDelete', {Movie})})
        .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let movieId = req.params.id;
       db.Movie
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }

}

module.exports = moviesController;