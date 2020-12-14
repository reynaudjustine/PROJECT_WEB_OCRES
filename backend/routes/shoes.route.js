
const shoesmodel = require("../models/shoes.model");
var express = require('express');
var router = express.Router();
const ShoesControl = require("../controlers/shoes.controler");





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


module.exports = router;