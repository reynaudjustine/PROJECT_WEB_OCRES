
const shoesmodel = require("../models/shoes.model");
var express = require('express');
var router = express.Router();
const ShoesControl = require("../controlers/shoes.controler");

var _ = require('lodash');
//var axios = require('axios');

const MONGO_USERNAME = '';
const MONGO_PASSWORD = '';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = '';

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

//mongoose.connect(url, {useNewUrlParser: true});

//  let shoes = [{
//     //id: "0",
//      modele: "Air force 1",
//      prix: 200,
//      genre: "mixte" , // en minutes,
//      categorie: "Sneakers",
//      marque: "Nike", // lien image d'affiche,
//      pdv: "France", // en USD$,
//      mdv: 01/05/2020,
//  },

//  {
//      //id: "0",
//      modele: "Ugg",
//      prix: 350,
//      genre: "femme" , // en minutes,
//      categorie: "Bottines",
//      marque: "Ugg", // lien image d'affiche,
//      pdv: "France", // en USD$,
//      mdv: 03/12/2020,
    
//  },

//  {
//      //id: "0",
//      modele: "Continentale 80",
//      prix: 100,
//      genre: "mixte" , // en minutes,
//      categorie: "Sneakers",
//      marque: "Adidas", // lien image d'affiche,
//      pdv: "France", // en USD$,
//      mdv: 03/04/2019,    
//  },

//  {
//      //id: "0",
//      modele: "Tongues",
//      prix: 20,
//      genre: "mixte" , // en minutes,
//      categorie: "Plage",
//      marque: "Nike", // lien image d'affiche,
//      pdv: "Allemagne", // en USD$,
//      mdv: 07/07/2020,
   

// }
//  ];



/*GET movies listing. */
// router.get('/', (req, res) => {
// 	//GEt List of movie and return JSON
// 	shoesmodel.find((err,shoe)=>{
// 		res.status(200).json(shoe);
// 	});
  
// });

router.get("/",ShoesControl.getAllShoes);
router.get("/:id",ShoesControl.getOneShoe)

/*GET one movie.*/
 router.get("/modele/:modele", (req, res) => {
	const modele = req.params.modele;
	console.log(modele);
	shoesmodel.find({modele},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
	}); 
	router.get("/marque/:marque", (req, res) => {
		const marque = req.params.marque;
		console.log(marque);
		shoesmodel.find({marque},(err,shoe)=>
		{
			res.status(200).json(shoe);
		});
		}); 

//router.get("/marque",(req,res))

// router.get("/:id", (req,res)=>{
// 	const id = req.params.id;
// 	console.log(id);
// 	shoesmodel.findById(id,(err,test)=>
// 	{res.status(200).json(test);
// 	});
	
// });



/* PUT new movie */
/*router.put('/', (req, res) => 
{
	//Get the data from request
	const { movie } = req.body;
	//Create new unique id
	const id = _.uniqueId();
	//Insert it in array
	movies.push({ movie, id });
	//return message
	res.json({
		message: Just added ${id},
		//movie: { movie, id }
	});
});*/


// PUT avec librairie axios
router.post('/', async(req, res) => {
	const {name} = req.body;
	
	await axios.get(`http://www.omdbapi.com/?t=${name}&apikey=34831a91`)
		.then((response) => {

			const data = response.data;
			let info = {
				id: movies.length,
				movie: data.Title,
				yearOfRelease: data.Year,
				duration: data.Runtime,
				actors: data.Actors.split(","),
				poster: data.Poster,
				//boxOffice: data.BoxOffice,
				//rottenTomatoesScore: data.imbRating,
				//rottenTomatoesScore: parseInt(data.Ratings[1].Value),
			}

			movies.push(info);
			res.send(movies)
		})
		.catch(function (error){
			res.send("Film introuvable !");
		});
});


		 

/* UPDATE movie. */
router.put('/:id', (req, res) => {
	// Get the :id of the user we want to update from the params of the request
	const { id } = req.params; 

	// Get the new data of the user we want to update from the body of the request
	const { movie } = req.body;

	//Find in DB
	const movieToUpdate = _.find(movies, ["id", id]);
	//Update data with new data (js is by adress)
	movieToUpdate.movie = movie;


	//return message
	res.json({
		message: "Just updated ${id} with ${movie}"
	});
});

/* DELETE movie. */
router.delete('/:id', (req, res) => {
	//get the id of the movie we want to delete from the params of the request
	const { id } = req.params;

	//Remove from "DB"
	_.remove(movies, ["id", id]);

	// Return message
	res.json({
		message: "just removed ${id}"
	});
});

module.exports = router;