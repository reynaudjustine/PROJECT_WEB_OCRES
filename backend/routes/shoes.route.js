
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



//Route pour gets différentes info utiles au Dashboard
router.get("/",ShoesControl.getAllShoes);
router.get("/:id",ShoesControl.getOneShoe);
router.get("/modele/:modele",ShoesControl.getModele);
router.get("/marque/:marque",ShoesControl.getMarque);
router.get("/pays/:pdv",ShoesControl.getPays);
router.get("/mois/:mdv",ShoesControl.getMois);
router.get("/genre/:genre",ShoesControl.getGenre);
router.get("/categorie/:categorie",ShoesControl.getCategorie);
router.get("/categorie/:categorie/:marque",ShoesControl.getCatMar);
router.get("/pays/:pdv/:mdv", ShoesControl.getPaysMois);

//Delete avec ID
router.delete("/:id",ShoesControl.deleteOneShoe);

//POST grace au form
router.post("/:modele/:prix/:genre/:categorie/:marque/:pdv/:mdv", ShoesControl.PostOneShoe);

//UPDATE
router.put("/:id/:prix", ShoesControl.UpdateOneShoe);


// router.put("/:id/:prix", (req,res)=>{
// 	const id = req.params.id;
// 	const prix = req.params.prix;
// 	console.log(id);
//  	console.log(prix);
// 	shoesmodel.findByIdAndUpdate(id,{prix},(err,shoe)=>
// 	{
// 		res.status(200).json(shoe);
// 	})
// })


//TENTATIVE de POST dans BDD
// router.post("/:modele/:prix/:genre/:categorie/:marque/:pdv/:mdv", (req,res)=>{
// 	const modele = req.params.modele;
// 	const prix = req.params.prix;
// 	const genre = req.params.genre;
// 	const categorie = req.params.categorie;
// 	const marque = req.params.marque;
// 	const pdv = req.params.pdv;
// 	const mdv = req.params.mdv;
// 	console.log(modele);
// 	console.log(prix);
// 	console.log(genre);
// 	console.log(categorie);
// 	console.log(marque);
// 	console.log(pdv);
// 	console.log(mdv);
// 	shoesmodel.create({modele,prix,genre,categorie,marque,pdv,mdv},(err,shoe)=>
// 	{
// 		res.status(200).json(shoe);
// 	});

// })
 
// router.post('/', async(req, res) => {
// 	const {name} = req.body;
	
// 	await axios.get(`http://www.omdbapi.com/?t=${name}&apikey=34831a91`)
// 		.then((response) => {

// 			const data = response.data;
// 			let info = {
// 				id: movies.length,
// 				movie: data.Title,
// 				yearOfRelease: data.Year,
// 				duration: data.Runtime,
// 				actors: data.Actors.split(","),
// 				poster: data.Poster,
// 				//boxOffice: data.BoxOffice,
// 				//rottenTomatoesScore: data.imbRating,
// 				//rottenTomatoesScore: parseInt(data.Ratings[1].Value),
// 			}

// 			movies.push(info);
// 			res.send(movies)
// 		})
// 		.catch(function (error){
// 			res.send("Film introuvable !");
// 		});
// });


module.exports = router;