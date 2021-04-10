const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Movie = require('../database/models/Movie');
const moment = require('moment');

//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


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
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: async function (req, res) {
        
        let allGenres = await db.Genre.findAll();

        res.render('moviesAdd',{allGenres});

    },
    create: async function (req,res) {
        // res.send(req.body)
        await db.Movie.create({
             title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
        })

        res.redirect('/movies');
    },
    edit: async function(req,res) {
        //buscas la pelu
        let Movie = await db.Movie.findByPk(req.params.id);
        // formateo el release_date para que se seleccione el select
        Movie.release_date = moment(Movie.release_date).format('YYYY-MM-DD')
        // traigo los generos
        let allGenres = await db.Genre.findAll();
    
        res.render('moviesEdit',{allGenres,Movie});
    },
    update: async function (req,res) {

        // validen los campos!!!!!!

        await db.Movie.update(
            {...req.body},
            {
                where: {id: req.params.id}
            }
        );

        res.redirect('/movies');

    },
    delete: async function (req,res) {

        let Movie = await db.Movie.findByPk(req.params.id);
        res.render('moviesDelete',{Movie});
    },

    destroy:async function (req,res) {
        let movie = await db.Movie.findByPk(req.params.id,{include:['actors']});
        await movie.destroy();
       
        // await db.Movie.destroy({
        //     where:{id:req.params.id,force:true}
        // })


        res.redirect('/movies');
    }
}

module.exports = moviesController;